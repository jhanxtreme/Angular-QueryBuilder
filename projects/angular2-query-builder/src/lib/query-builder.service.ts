import { Injectable } from '@angular/core';
import { GroupFieldsConfig } from './query-builder/query-builder.interfaces';

@Injectable({
  providedIn: 'root'
})
export class QueryBuilderService {

  private _groupedFields: Array<GroupFieldsConfig> = [];

  constructor() { }

  getGroupedFields(): Array<GroupFieldsConfig> {
    return this._groupedFields;
  }

  setGroupedFields(items: Array<GroupFieldsConfig> = []): void {
    if (!items) return;
    this._groupedFields = JSON.parse(JSON.stringify(items));
  }

}
