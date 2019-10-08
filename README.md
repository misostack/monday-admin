# MondayAdmin

## I.Enviroments

### 1.Local

```bash
# init
cp src/environments/environment.local.dest.ts src/environments/environment.local.ts
# start
yarn start
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
yarn buildDev
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
yarn buildProd
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

### 2.Component Architecture

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

### 8.Error Tracking

### 9.Third Party Libs

### III.