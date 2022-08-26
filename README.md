## React Login and Registration example with JWT and HttpOnly cookie

For more detail, please visit:
> [React Login and Registration example with JWT and HttpOnly cookie](https://bezkoder.com/react-login-example-jwt-hooks/)

Fullstack (JWT Authentication & Authorization example):
> [React + Spring Boot](https://bezkoder.com/spring-boot-react-jwt-auth/)


### Project setup

In the project directory, you can run:

```
npm install
# or
yarn install
```
yarn
or

### Compiles and hot-reloads for development

```
npm start
# or
yarn start
```


There are two roles: Admin & User/customer

Admin will perform all CRUD operations like add, delete, update & read.

User will be able to view all the products/coupons and purchase accordingly.

Implemented Role based Authentication. When user logins, he will go to user page & when admin logins, he will go to admin panel page.

For Payment: Integrated RazorPay Gateway

All microservices are registered on Eureka Server (port: 8761)

Implemented Spring Cloud API Gateway for communication between each microservice. (Rest template)

Used Java, Spring Boot, Microservice for Backend click: https://github.com/GAURSAH777/DEALS-COUPONS-FINDER-APP.git
