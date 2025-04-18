# User API Documentation

---

## Register User

### URL

```
POST /users/register
```

### Description

Registers a new user and returns an authentication token with user details.

### Request Body

```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "yourpassword"
}
```

### Required Fields

- `fullname.firstname` (string, required, min 3 chars)
- `fullname.lastname` (string, optional, min 3 chars if provided)
- `email` (string, required, must be valid email)
- `password` (string, required, min 6 chars)

### Success Response

- **Status:** 201 Created
- **Body:**
    ```json
    {
      "token": "jwt_token_here",
      "user": {
        "_id": "user_id_here",
        "fullname": {
          "firstname": "John",
          "lastname": "Doe"
        },
        "email": "john.doe@example.com",
        "socketId": null
      }
    }
    ```

### Validation Error

- **Status:** 400 Bad Request
- **Body:**
    ```json
    {
      "errors": [
        {
          "msg": "Error message here",
          "param": "field_name",
          "location": "body"
        }
      ]
    }
    ```

---

## Login User

### URL

```
POST /users/login
```

### Description

Authenticates a user with email and password. Returns a JWT token and user details if credentials are valid.

### Request Body

```json
{
  "email": "john.doe@example.com",
  "password": "yourpassword"
}
```

### Required Fields

- `email` (string, required, must be valid email)
- `password` (string, required, min 6 chars)

### Success Response

- **Status:** 200 OK
- **Body:**
    ```json
    {
      "token": "jwt_token_here",
      "user": {
        "_id": "user_id_here",
        "fullname": {
          "firstname": "John",
          "lastname": "Doe"
        },
        "email": "john.doe@example.com",
        "socketId": null
      }
    }
    ```

### Error Responses

- **Status:** 400 Bad Request (Validation error)
    ```json
    {
      "errors": [
        {
          "msg": "Error message here",
          "param": "field_name",
          "location": "body"
        }
      ]
    }
    ```
- **Status:** 401 Unauthorized (Invalid credentials)
    ```json
    {
      "message": "Invalid email or password"
    }
    ```

---

## Get User Profile

### URL

```
GET /users/profile
```

### Description

Returns the authenticated user's profile information.  
**Requires Authorization:** Bearer token in the `Authorization` header or `token` cookie.

### Headers

- `Authorization: Bearer <jwt_token_here>`

### Success Response

- **Status:** 200 OK
- **Body:**
    ```json
    {
      "_id": "user_id_here",
      "fullname": {
        "firstname": "John",
        "lastname": "Doe"
      },
      "email": "john.doe@example.com",
      "socketId": null
    }
    ```

### Error Response

- **Status:** 401 Unauthorized
    ```json
    {
      "message": "Unauthorized"
    }
    ```

---

## Logout User

### URL

```
GET /users/logout
```

### Description

Logs out the authenticated user by blacklisting the current JWT token and clearing the cookie.  
**Requires Authorization:** Bearer token in the `Authorization` header or `token` cookie.

### Headers

- `Authorization: Bearer <jwt_token_here>`

### Success Response

- **Status:** 200 OK
- **Body:**
    ```json
    {
      "message": "Logged out successfully"
    }
    ```

### Error Response

- **Status:** 401 Unauthorized
    ```json
    {
      "message": "Unauthorized"
    }
    ```

---

## Example cURL

**Register:**
```bash
curl -X POST http://localhost:PORT/users/register \
  -H "Content-Type: application/json" \
  -d '{
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com",
    "password": "yourpassword"
  }'
```

**Login:**
```bash
curl -X POST http://localhost:PORT/users/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "john.doe@example.com",
    "password": "yourpassword"
  }'
```

**Get Profile:**
```bash
curl -X GET http://localhost:PORT/users/profile \
  -H "Authorization: Bearer <jwt_token_here>"
```

**Logout:**
```bash
curl -X GET http://localhost:PORT/users/logout \
  -H "Authorization: Bearer <jwt_token_here>"
```

---

## Notes

- Use the returned `token` for authenticated requests.
- All fields must be sent as JSON in the request body.
- Protected endpoints require a valid JWT token.