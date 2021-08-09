# Vue Vuex Typescript Shopping Cart

## Project setup
### Server api
```
cd server-api
npm install
npm run start
```

### Vue frontend
```
cd vue
npm install -g @vue/cli
npm install
```
### Compiles and hot-reloads for development
```
npm run serve
```
Once development server is running go to: http://localhost:8080
### Compiles and minifies for production
```
npm run build
```

### Run unit tests
```
npm run test:unit
```

## Project setup with Docker
```
docker-compose up
```
Once container is running go to http://localhost:8080

### Run unit tests
```
docker exec -it vue /bin/sh
cd /app
npm run test:unit
```
