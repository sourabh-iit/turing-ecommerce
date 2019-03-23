import random
import string

def create_random_string(N):
  char_choice = string.ascii_letters + string.digits
  return ''.join(random.SystemRandom().choice(char_choice) for _ in range(N))