import { Injectable } from '@angular/core';

@Injectable()
export class TwainService {

  constructor() { }

  public getQuote() {
    return Promise.resolve('hello');
  }

}
