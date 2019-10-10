# MondayAdmin

## I.Enviroments

### 1.Local

```bash
# init
cp src/environments/environment.local.dest.ts src/environments/environment.local.ts
# start
yarn start
yarn build # local build
```

#### Run Test
```bash
# default mode
yarn test --configuration=local
# headless mode
yarn test-headless --configuration=local
```

### 2.Development

```bash
# init
cp src/environments/environment.dev.dest.ts src/environments/environment.dev.ts
# build
yarn build:dev
# URL
https://misostack.github.io/monday-admin
```

- [URL](https://misostack.github.io/monday-admin)
- [Best Practice](https://www.freecodecamp.org/news/best-practices-for-a-clean-and-performant-angular-application-288e7b39eb6f/)
- [Assets and Github Pages](https://medium.com/@lopesgon/translate-angular-4-with-ngx-translate-and-multiple-modules-7d9f0252f139)

### 3.Production

```bash
# init
cp src/environments/environment.prod.dest.ts src/environments/environment.prod.ts
# build
yarn build:prod
```

## II. Dev Tool

### VSCode

```bash
ext install Angular.ng-template
# or
yarn add @angular/language-service -D
# and update tsconfig.json
compilerOptions->
"plugins": [
  {"name": "@angular/language-service"}
]
```

## III.Architecture

### 0.Pieces

- [Angular CLI Stories](https://github.com/angular/angular-cli/wiki/stories)
- [Asset Config](https://angular.io/guide/workspace-config#asset-config)
- [Global styles](https://github.com/angular/angular-cli/wiki/stories-global-styles)
- [Bulma CSS Framework](https://bulma.io/documentation/customize/with-node-sass/)
- [HMR(Hot module Replacement)](https://github.com/angular/angular-cli/wiki/stories-configure-hmr)
- [CSS Preprocessor](https://github.com/angular/angular-cli/wiki/stories-css-preprocessors)
- [Using library](https://angular.io/guide/using-libraries) : Consider
- [Global scripts](https://github.com/angular/angular-cli/wiki/stories-global-scripts)

```bash
ng config schematics.@schematics/angular:component.styleext scss
# note: @schematics/angular is the default schematic for the Angular CLI
```

### 1.Folder Structure

```json
{
  "app":{
    "pages": "static pages module",
    "shared": { // "shared module"
      // Included common modules:
      // CommonModule,
      // FormsModule,
      // ReactiveFormsModule,
      // HttpClientModule,
      // RouterModule,
      // TranslateModule
      "uikits": [
        "buttons", "form elements", "tables", "grid",
        "search", "autocomplete", "calendar"
      ],
      "i18n": [
        // should be constant
        // eg: 
        "en.ts",
        "vn.ts",
        "en": []
        "vn": []
      ]
    },
    "layouts": { // layout modules
      "guess-layout": [],
      "dashboard-layout": []
    },
    "dashboard": [ // all dashboard modules
      "landing",
      "profile",
      "users"
    ],
    "auth": [// auth module
      // common components
      "login", "forget-password", "reset-password"
    ]
  }
}
```

### 2.Component Architecture

```json
"component-a": [
  "component-a.component.html",
  "component-a.component.scss",
  "component-a.component.ts"
]
```

### 3.Application State Management

### 4.Enviroments

## III.Core

### 1.Routing

### 2.Containers & Components

### 3.Guards

### 4.Resolvers

### 5.Helpers

### 6.Services

### 7.HTTP Requests

#### Mocking

The main idea is used http intercept with match url and method and local json files.

- [Sample 001](https://dev.to/sanidz/angular-http-mock-interceptor-for-mocked-backend-1h5g)
- [Sample 002](https://medium.com/better-programming/testing-http-requests-in-angular-with-httpclienttestingmodule-3880ceac74cf)

### 8.Error Tracking

### 9.Third Party Libs

### 10.Translation

#### i18n organization

##### Global i18n

- Will be defined in shared module under i18n folder of each language by constants and seperate by groups

```json
"en": {
  "system":{
    "time": "",
    "validation": ""
  },
  "api":{
    "auth": [
      "login",
      "register",
      ...
    ],
    "users": [
      "validation": [
        "{fieldname}.required",
        "{fieldname}.invalid",
        // and other custom field validation
      ]
    ],
    "errors": [
      "404",
      "403",
      "500"
    ]
  }
}
```

#### ICU syntax
Compiler for ngx-translate that uses messageformat.js to compile translations using ICU syntax for handling pluralization, gender, and more.
Eg: 
```php
'years'          => '{0, plural, =1{# year} other{# years}}',
```

- https://github.com/lephyrus/ngx-translate-messageformat-compiler
- http://userguide.icu-project.org/formatparse/messages

### III.