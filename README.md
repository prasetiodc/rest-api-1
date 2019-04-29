# rest-api

## Project setup
```
npm install
```
## Compiles

```javascript
npm run dev
```

## Routes Todos
ROUTE | HTTP | Header(s) | Body | Respon | Description |
------|------|------|------|------|------------|
`/api/todos`| `GET` | none | none | Success: [ {object} ], <br />Error: Internal server error | Get all the todos |
`/api/todos/:id`|`GET`| `token: String` | none | Success: {object}, <br />Error: Internal server error | Get a single todo (Owner only) |
`/api/todos`|`POST`| `token: String` | `title: String` (Required), <br/>`description: String`(Required), | Success: {object}, <br />Error: Internal server error | Create a todo (Authenticated users only) |
`/api/todos/:id`|`DELETE`| `token: String` | none | Success: [ {object} ], <br />Error: Internal server error | Delete a todo (Owner only) |  
`/api/todos/:id`|`PUT`| `token: String` | `title: String` (Required), <br/>`description: String`(Required), | Success: {object} , <br />Error: Internal server error | Update a todo with new info (Owner only)|
`/api/todos/:id`|`PATCH`| `token: String` | `title: String` (Required), <br/>`description: String`(Required), | Success: {object} , <br />Error: Internal server error | Update a todo with new info (Owner only)|

## Routes Users
|Routes|HTTP Method| Header(s) | Body |Response|Description| 
------|------|------|------|------|------------|
`/api/users/signup`|`POST`| none | `email: String`(Required), <br/>`password: String`(Required) | Success: {object}, <br />Error: Internal server error| Sign up with new user info | 
`/api/users/signin`|`POST`| none | `email: String`(Required), <br/>`password: String`(Required) | Success: {object}, <br />Error: Internal server error| Sign in and get an access token |  


Link Deploy 
https://sheltered-reaches-77935.herokuapp.com/