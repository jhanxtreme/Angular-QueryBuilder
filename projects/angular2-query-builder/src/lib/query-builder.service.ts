import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QueryBuilderService {

  private _source = new Subject();
  public currentMessage = this._source.asObservable();

  constructor() { }

  changeMessage(message: any) {
    this._source.next(message);
  }

}
