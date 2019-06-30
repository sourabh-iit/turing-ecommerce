import { of } from 'rxjs';

export class ProductServiceStub {

  private mockProducts = [];
  private mockDepartments = [{
    id: 1,
    name: 'D1',
    description: 'D1 description',
    categories: [{
      id: 1,
      name: 'C1',
      description: 'C1 description'
    },{
      id: 3,
      name: 'C3',
      description: 'C3 description'
    },{
      id: 2,
      name: 'C2',
      description: 'C2 description'
    }]
  },{
    id: 2,
    name: 'D2',
    description: 'D2 description',
    categories: [{
      id: 4,
      name: 'C4',
      description: 'C4 description'
    },{
      id: 5,
      name: 'C5',
      description: 'C5 description'
    }]
  }];
  private cart = [];

  constructor(){
    this.createMockProducts(10);
    this.createMockCart(3);
  }

  private createMockCart(total){
    for(let i=0;i<total;i++){
      const product = this.chooseRandom(this.mockProducts);
      this.cart.push({
        product: product,
        quantity: 1,
        id: i+1,
        buy_now: 1,
        added_on: '',
        attributes: {
          Size: this.chooseRandom(product.attributes.Size),
          Color: this.chooseRandom(product.attributes.Color)
        }
      })
    }
  }

  private createMockProducts(total: number){
    const departments = ['D1', 'D2'];
    const categories = ['C1', 'C2', 'C3'];
    const colors = ['green', 'red', 'yellow'];
    const size = ['S','L','M'];
    const images = ['arc-d-triomphe', 'chartres-cathedral', 'coat-of-arms', 'gallic-cock'];
    for(let i=0;i<total;i++){
      const price = parseFloat((Math.random()*5+10).toFixed(2));
      const discounted_price = price - Math.round(Math.random()*5);
      const image = this.chooseRandom(images);
      let product = {
        description: `PD${i+1}`,
        discounted_price: `${i%3==0?discounted_price:0.00}`,
        display: 0,
        id: i+1,
        image: `${image}.gif`,
        image_2: `${image}-2.gif`,
        name: `name_${i+1}`,
        price: `${price}`,
        thumbnail: `${image}-thumbnail.gif`,
        attributes: {
          Color: [],
          Size: []
        },
        department: this.chooseRandom(departments),
        category: this.chooseRandom(categories)
      };
      for(let j=0;j<3;j++){
        product.attributes.Color.push({
          value: colors[j],
          id: j+1
        });
        product.attributes.Size.push({
          value: size[j],
          id: j+1
        });
      }
      this.mockProducts.push(product);
    }
  }

  private chooseRandom(list: any[]) {
    return list[Math.floor(Math.random()*list.length)];
  }

  public loadProducts(page, search: {value: string, all_words: boolean}, department: string = '', category: string = '') {
    return of({
      count: this.mockProducts.length,
      next: 'null',
      previous: null,
      results: this.mockProducts,
      total_pages: Math.ceil(this.mockProducts.length/10)+2,
      wordsAccepted: [''],
      wordsIgnored: []
    });
  }

  public loadDepartments(){
    return this.mockDepartments;
  }

  public loadCategories(department: string){
    return of(this.mockDepartments.find((d:any)=>d.name==department).categories);
  }

  public loadCart(){
    return this.cart;
  }

  public addToCart(item) {
    item['attributes']=JSON.parse(item['attributes']);
    item = {quantity: 1, ...item};
    this.cart.push(item);
    return of(item);
  }

  public loadShippings(){
    return of([{
      id: 1,
      shipping_cost: "20.00",
      shipping_region: {
        id: 2,
        shipping_region: 'US / Canada'
      },
      shipping_type: 'Next Day Delivery ($20)'
    },{
      id: 2,
      shipping_cost: "10.00",
      shipping_region: {
        id: 2,
        shipping_region: 'US / Canada'
      },
      shipping_type: '3-4 Days'
    },{
      id: 3,
      shipping_cost: "5.00",
      shipping_region: {
        id: 2,
        shipping_region: 'US / Canada'
      },
      shipping_type: '7 Days'
    },{
      id: 4,
      shipping_cost: "25.00",
      shipping_region: {
        id: 3,
        shipping_region: 'Europe'
      },
      shipping_type: 'By air'
    },{
      id: 5,
      shipping_cost: "10.00",
      shipping_region: {
        id: 3,
        shipping_region: 'Europe'
      },
      shipping_type: 'By sea (28 days)'
    },{
      id: 6,
      shipping_cost: "35.00",
      shipping_region: {
        id: 4,
        shipping_region: 'Rest of World'
      },
      shipping_type: 'By air (10 days)'
    },{
      id: 7,
      shipping_cost: "35.00",
      shipping_region: {
        id: 4,
        shipping_region: 'Rest of World'
      },
      shipping_type: 'By sea (30 days)'
    }]);
  }

  public createOrder(data: {token: string, order: Order}){
    return of({
      created_on: "2019-06-27T09:58:35.787224Z",
      customer: 1,
      id: 22,
      reference: "ch_1EpuNFLi0RNZFxD9bbjf9Jm5",
      shipped_on: null,
      shipping: 1,
      status: 3,
      tax: null,
      total_amount: "34.99"
    })
  }
}