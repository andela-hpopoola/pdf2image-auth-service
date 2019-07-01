# PDF CONVERTER - AUTH SERVICE

PDF CONVERTER allows you to instantly convert PDF documents to text or image format with this free PDF converter.


## Features

Users can perform the following actions with the application
  - Register a new account
  - Log into an existing account

#### API Documentation
**Login**
----
  Returns json data about an authenticated user.

* **URL**

  /login

* **Method:**

  `POST`

* **Data Params**
   **Required:**

   `email=[string]`
   `password=[string]`

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{ email : "demo@testing.com, token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImRlbW9AZW1haWwuY29tIiwiaWF0IjoxNTYxOTM4MDk4fQ.9NsE-p-d8AMiRQ6ChywYRBzI3HWUM5f5MH4NQH8MgkI" }`

* **Error Response:**

  * **Code:** 404 NOT FOUND <br />
    **Content:** `{ error : "User doesn't exist" }`


* **Sample Call:**

  ```javascript
    $.ajax({
      url: "/login",
      dataType: "json",
      type : "POST",
      success : function(r) {
        console.log(r);
      }
    });
  ```



**Register**
----
  Returns json data about a registered user.

* **URL**

  /register

* **Method:**

  `POST`

* **Data Params**
   **Required:**

   `email=[string]`
   `password=[string]`

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{ email : "demo@testing.com, createdAt: 2019-08-08 }`

* **Error Response:**

  * **Code:** 404 NOT FOUND <br />
    **Content:** `{ msg : "Email already exists" }`


* **Sample Call:**

  ```javascript
    $.ajax({
      url: "/register",
      dataType: "json",
      type : "POST",
      success : function(r) {
        console.log(r);
      }
    });
  ```

**Authenticate**
----
  Returns json data to show the authentication status of a user.
  * **URL**

  /authenticate

* **Method:**

  `GET`

* **Header Params**
   **Required:**

   `x-auth=[string]`

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{ valid_user: true }`

* **Error Response:**

  * **Code:** 401 UNAUTHORIZE <br />
    **Content:** `{ msg : "Invalid Token" }`


* **Sample Call:**

  ```javascript
    $.ajax({
      url: "/authenticate",
      dataType: "json",
      type : "GET",
      success : function(r) {
        console.log(r);
      }
    });
  ```

#### Authentication
The api endpoints are protected from authorized access. The unprotected endpoint are the signup and login endpoint. JWT token is used to protect the application against unauthorized access. Some of the endpoints are also protected by roles.

## Technologies
1. NodeJS & Express: NodeJS is a server-side JavaScript runtime engine built on Chrome's V8 JavaScript engine. Express is used as a web development framework. Express is a fast, unopinionated, minimalist web framework for Node.js.
2. Postgresql & Sequelize: Postgresql is the world's most advanced open source Object-Relational Model (ORM) database.Sequelize is a promise-based ORM for Node.js v4 and up. It supports the dialects PostgreSQL, MySQL, SQLite and MSSQL and features solid transaction support, relations, read replication and more.

## Installation and Setup

1. Clone the repository:
```
git@github.com:andela-hpopoola/pdf2image-auth-service.git
```
2. Navigate into the cloned repository folder

3. Install dependencies:
```
$ npm install
```
4.  Create Postgresql database and run migrations `npm run db:migrations`.

5. Create a `.env` file by using the sample env file `.env.sample` in the root directory of the application. Use a different database for your testing and development.

6. Start the application:

```
http://localhost:4000/
```

5. Test the API endpoints with Postman


## Contribution
To contribute to the project, follow the instructions below
 1. **Fork** the repo on GitHub
 2. **Clone** the project to your own machine
 3. **Commit** changes to your own branch
 4. **Push** your work back up to your fork
 5. Submit a **Pull request** so that I can review your changes

NOTE: Be sure to merge the latest from "upstream" before making a pull request!




## Licence
Copyright (c) 2019 Haruna Popoola

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

Copyright (c) 2019 Haruna Popoola
