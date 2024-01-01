# MbPsicologia API Documentation

## How to use this application

Is necessary to have installed Node.js version 14.15.4 or higher

```bash
git clone https://github.com/Jonorusc/code-challenges.git
cd code-challenges/MbPsicologia
cd backend
```

## Install dependencies

```bash
yarn install
```

OR

```bash
npm install
```

## Environment variables

Create a .env file in the root of the project and add the following variables:

```bash
PORT=8080 # Port where the API will run
DATABASE_URL="mongodb+srv://username:password@cluster.****.mongodb.net/database"
```

## Run the application

```bash
yarn db:generate # Generate the prisma client
yarn db:push # Push the schema to the database
```

```bash
yarn start
```

# Resultados API

This API provides CRUD (Create, Read, Delete) operations for 'Resultados' records in a database.

## Endpoints

### POST /resultados

```bash
 method: POST
 route: /mb/api/v1/resultados
```

Creates a new 'Resultado' record.

Request body should contain the data for the new 'Resultado' as JSON.

### GET /resultados

```bash
 method: GET
 route: /mb/api/v1/resultados
```

Retrieves all 'Resultados' records from the database.

Supports optional pagination through 'page' and 'pageSize' query parameters. If these parameters are not provided, all records are returned.

### DELETE /resultados/:id

```bash
 method: DELETE
 route: /mb/api/v1/resultados/:id
```

Deletes a 'Resultado' record from the database.

The ID of the 'Resultado' to delete should be provided as a parameter in the URL.

### PUT /resultados/:id

```bash
 method: PUT
 route: /mb/api/v1/resultados/:id
```

Updates a 'Resultado' record in the database.

The ID of the 'Resultado' to update should be provided as a parameter in the URL. The new data for the 'Resultado' should be provided in the request body as JSON.

## Responses

For all endpoints, the API returns a JSON object. The exact contents of this object will depend on the operation and whether it was successful.

In case of an error, the API will return a JSON object with an 'error' key and a string value describing the error.

### Why did i choose to use (ORM) Prisma?

I chose to use Prisma ORM because it is a very powerful tool that allows you to work with different databases in a very simple way, it is also very easy to use and the project needed to be easy to use and maintain.