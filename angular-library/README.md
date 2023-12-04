# AngularLibrary

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.0.3.

## Used commands to cration library
```bash
ng new angular-library --no-create-application
ng generate library angular-lib
ng g c components/button
ng g m components/button
ng g application demo
```

## Insertions in angular.json
```json
    "angular-lib": {
      "projectType": "library",
      "schematics": { // <--
        "@schematics/angular:component": {
          "style": "scss"
        }
      },
      "root": "projects/angular-lib",
```

## Used commands up library and demo

Used command line to up library 
```bash
npm run watch
```

In separate terminal used command line to view use
```bash
npm start
```

## Deploy in npmjs

Used command line to up library 
```bash
npm run build:prod
cd /dist/angular-lib
npm login <-- Login to publish in npmjs website, need account!
npm publish --access public
```

## Import in your project

```bash
npm i @rodrigoluz/angular-lib
```

```json
  ...
  "dependencies": {
    "@angular/animations": "~13.0.0",
    "@angular/common": "~13.0.0",
    "@angular/compiler": "~13.0.0",
    "@angular/core": "~13.0.0",
    "@angular/forms": "~13.0.0",
    "@angular/platform-browser": "~13.0.0",
    "@angular/platform-browser-dynamic": "~13.0.0",
    "@angular/router": "~13.0.0",
    "@rodrigoluz/angular-lib": "0.0.1", // <--
    "rxjs": "~7.4.0",
    "tslib": "^2.3.0",
    "zone.js": "~0.11.4"
  },
  ...
```

## Use in your project

Full library
```ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AngularLibModule } from '@rodrigoluz/angular-lib'; // <--

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularLibModule // <--
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

Or specific library component
```ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ButtonModule } from '@rodrigoluz/angular-lib'; // <--

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ButtonModule // <--
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
