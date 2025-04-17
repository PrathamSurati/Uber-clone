# User Registration API Documentation

## Endpoint

`POST /users/register`

---

## Description

This endpoint allows a new user to register by providing their first name, last name, email, and password. On successful registration, it returns a JWT authentication token and the created user object.

---

## Request Body

Send a JSON object with the following structure:

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

### Field Requirements

| Field                | Type   | Required | Validation                                      |
|----------------------|--------|----------|-------------------------------------------------|
| fullname.firstname   | String | Yes      | Minimum 3 characters                            |
| fullname.lastname    | String | No       | Minimum 3 characters (if provided)              |
| email                | String | Yes      | Must be a valid email address                   |
| password             | String | Yes      | Minimum 6 characters                            |

---

## Responses

### Success

- **Status Code:** `201 Created`
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

- **Status Code:** `400 Bad Request`
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

### Example Request

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

---

## Notes

- The `token` returned should be used for authenticated requests.
- All fields must be sent in the request body as JSON.