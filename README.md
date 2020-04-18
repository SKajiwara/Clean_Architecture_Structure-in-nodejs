## About this repository
This is an example structure of Clean Architecture for a RESTful api / backend code using Node.js, Express and MongoDB. [Code reference](https://github.com/dev-mastery/comments-api)

### Flow
1. index.js runs the server and opens all endpoints
2. Once one of the endpoints receives a HTTP request call makeCallback passing a specific controller.
3. Controllers call a suitable use case depending on which controller it is.
4. Use case applies all the application level rules and call entity rule.
5. Entity rules will be applied and use case returns a data or result.
6. Controller makes a response according to the results or data produced by the use case.
7. Controller sends back the response to the users.
 
### To run
- Install packages
```
$ npm i
```
- Run
```
$ npm start
```
## sample POST request http://localhost:6543/api/request_name?key_name=testValue
return value is
```{
    "message": "successful"
}```
