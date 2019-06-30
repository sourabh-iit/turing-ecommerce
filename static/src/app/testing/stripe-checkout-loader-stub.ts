

class StripeCheckoutHandlerStub {
  constructor(){}

  public open(data: {amount: number,email: string, currency: string, name: string}){
    return new Promise(function(resolve, reject){
      if(data.email==''){
        reject('Email is required');
      } else{
        resolve({
          id: 'skjdhgsuf_sifgh'
        });
      }
    })
  }
}

export class StripeCheckoutLoaderStub {

  constructor(){}

  public createHandler(key: string){
    return new Promise(function(resolve, reject){
      if(key==''){
        reject();
      } else {
        resolve(new StripeCheckoutHandlerStub());
      }
    })
  }
}