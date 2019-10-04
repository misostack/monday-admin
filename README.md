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
```

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

### 1.Folder Structure

- [Asset Config](https://angular.io/guide/workspace-config#asset-config)
- [Global styles](https://github.com/angular/angular-cli/wiki/stories-global-styles)
- [Bulma CSS Framework](https://bulma.io/documentation/customize/with-node-sass/)

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