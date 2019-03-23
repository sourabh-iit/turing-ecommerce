from rest_framework.response import Response
from rest_framework.pagination import PageNumberPagination

from collections import OrderedDict

import math


class ProductPagination(PageNumberPagination):
    """ DRWF custom pagination implementation for APIView class
    """
    page_size = 10
    page_size_query_param = 'page_size'
    max_page_size = 100

    def get_paginated_response(self, data, wordsAccepted, wordsIgnored):
        return Response(OrderedDict([
            ('count', self.page.paginator.count),
            ('next', self.get_next_link()),
            ('previous', self.get_previous_link()),
            ('results', data),
            ('total_pages', math.ceil(self.page.paginator.count/self.page_size)),
            ('wordsAccepted', wordsAccepted),
            ('wordsIgnored', wordsIgnored)
        ]))


def FakePaginationData(data, wordsAccepted, wordsIgnored):
    """ This will return the same Dict for api's if pagination disabled
    """
    return Response(OrderedDict([
        ('count', 0),
        ('next', None),
        ('previous', None),
        ('results', data),
        ('wordsAccepted', wordsAccepted),
        ('wordsIgnored', wordsIgnored)
    ]))


class PaginationBase():
    """ Pagination base class to be Inhrited by the API handler class
        to implement the Pagination
    """
    pagination_class = ProductPagination

    @property
    def paginator(self):
        """
        The paginator instance associated with the view, or `None`.
        """
        if not hasattr(self, '_paginator'):
            if self.pagination_class is None:
                self._paginator = None
            else:
                self._paginator = self.pagination_class()
        return self._paginator

    def paginate_queryset(self, queryset):
        """
        Return a single page of results, or `None` if pagination is disabled.
        """
        if self.paginator is None:
            return None
        return self.paginator.paginate_queryset(queryset, self.request, view=self)

    def get_paginated_response(self, data, wordsAccepted, wordsIgnored):
        """
        Return a paginated style `Response` object for the given output data.
        """
        assert self.paginator is not None
        return self.paginator.get_paginated_response(data, wordsAccepted, wordsIgnored)
