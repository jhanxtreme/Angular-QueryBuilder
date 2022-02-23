# Angular-QueryBuilder
This is the enhanced version from the original [angular2-query-builder] that supports group options.

# Getting Started

## Install

- Angular 9, use 0.6.0
- Angular 8, use 0.5.1
- Angular 6-7, use 0.4.2
- Angular 4-5, use 0.3.2

`npm install @jhanxtreme/angular2-query-builder`

## Basic Usage

##### `app.module.ts`
```javascript
import { QueryBuilderModule } from "angular2-query-builder";
import { AppComponent } from "./app.component"

@NgModule(imports: [
  ...,
  QueryBuilderModule,
  IonicModule.forRoot(AppComponent) // (Optional) for IonicFramework 2+
])
export class AppModule { }
```

##### `app.component.html`
```html
...
<query-builder [groupFieldsConfig]="groupConfig" [(ngModel)]="query" [config]="config"></query-builder>
...
```
##### `app.component.ts`
```javascript
import { QueryBuilderConfig, GroupFieldsConfig } from 'angular2-query-builder';

export class AppComponent {
  query = {
    condition: 'and',
    rules: [
      {field: 'age', operator: '<=', value: 'Bob'},
      {field: 'gender', operator: '>=', value: 'm'}
    ]
  };
  
  config: QueryBuilderConfig = {
    fields: {
      age: {name: 'Age', type: 'number'},
      gender: {
        name: 'Gender',
        type: 'category',
        options: [
          {name: 'Male', value: 'm'},
          {name: 'Female', value: 'f'}
        ]
      }
    }
  }
  
  groupConfig: Array<GroupFieldsConfig> = [
    {
      label: "Group 1",
      fields: ["Gender", "Name", "Age"]
    },
    {
      label: "Group 2",
      fields: ["Notes", "Educated","Birthday", "School", "Occupation"]
    }
  ]

}
```

# Credits to
[zebzhao]https://github.com/zebzhao
