# OCD-B (Open Code DataBase)

A platform for writing and sharing reviews of coding resources. Available online at ...  

## Installation instructions

- Clone this repo and `cd` into it
- Run `npm install` to install all dependencies
- Run npm start to start the server
- Navigate to http://localhost:4000/ in your browser
- To run the tests, run npm test

## General objectives

- Build a Hapi app
- Implement a Postgres database
- Implement login and authentication
- Make use of JOIN queries
- Make use of HTML templates
- Use test driven development
- Host the project on Heroku

## User stories

- I can log in
- I can see a list of recent reviews
- I can see a list of reviewed resources
- I can create, edit and view my own reviews
- I can see a list of reviews of a particular resource
- I can click on a listed review to read it

## Front-end design

![](images/frontend-design.jpg)

## Database structure

Table 1: Users

| :key: user_id | username | password | experience |
| :--- | :--- | :--- | :--- |
|   |   |   |   |

Table 2: Resources

| :key: resource_id | title | language | source | average_rating |
| :--- | :--- | :--- | :--- | :-- |
|   |   |   |   |   |

Table 3: Reviews

| :key: review_id | time_stamp | rating | summary | description | :lock: user_id | :lock: resource_id |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
|   |   |   |   |   |   |   |

## Endpoints

`/` and `/login` : main page, login page  
`/register` :  registration page  
`/?username=` : user page  
`/addreview/?username=...&resource=...` : user page to add resource review

## Testing

- Back-end unit tests (Tape)
- Code coverage (Istanbul)
- Stretch goals: Travis, Nightwatch, database tests