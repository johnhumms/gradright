# Project 2: GradRight
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)


## Table of Contents
* [Introduction](#introduction)
* [Functionality](#functionality)
* [Tasks Completed](#tasks-completed)
* [Technologies Used](#technologies-used)
* [Installations](#installations)
* [Demos](#demos)
* [Future Ideas](#future-ideas)
* [Known Bugs](#known-bugs)
* [Sources](#sources)
* [License](#license)


 ## Introduction
<p style="font-size:30px; color:red; background-color:yellow">INTRO</p>

* GitHub Repository: https://github.com/johnhumms/gradright
* Heroku Link: https://gradright.herokuapp.com/


## Functionality
* When the program is initiated, the user is prompted to login. If they don't have a login, they have to create one.
* Once on the home page, the user can choose to see the district data or the student data.
* On the district data, the user is shown a dashboard with a drop down menu.
    * There is an `Add District` button, which allows the user to add a new district.
    * Choosing a district from the menu prompts a district profile to display below the drop-down. 
        * The district profile has an `Edit` button that allows the user to edit any district information.
        * There is also a `Delete` button allowing the user to delete the district, which would also delete any students in that district.
* On the Student section, all the students and some information about them is displayed.
    * New students can be added by clicking on the `Add Student` button.
    * Clicking on a Student's name prompts to the student's profile, which contains more information about them.
        * Students can be edited or deleted on this page.
* When information is changed, added, or deleted, an email is sent to all admins.
* When the user logs out, the `Logout` navigation bar heading will change to `Login`.
* The names of the creators in the footer links to a new tab with the creator's GitHub profile
* If the user wants preput information to test the app, they can run:
```
mysql -h HOSTNAME -u USER DATABASE < ./db/schema.sql
npm run seed
npm start
```


## Tasks Completed
* Dowloaded necessary NPM packages. View [Installations](#installations) below for exact packages.
* Created a connection between the database and server using MySql and Express.
* Created a database class to construct a connection to the server.
    * created functions which return the desired query information from the server
* Created Models and Seed data
    * Referenced District in Students so that, on `delete` of a District, the Student(s) of that district are deleted too.
* Created and tested api routes to `PUT`, `POST`, and `DELETE`.
* Created a `homeroute` to `GET` all desired information to render onto the appropriate Handlebars page
* Created Handlebar HTML for all desired pages:
    * Homepage, Login/Logout, District Dashboard, Individiual Districts, Student Dashboard, individual students, adding/editing students/districts.
* Added CSS styling and appropriate links
* Created drop-down menu to display all District options
* Linked Handlebars forms and functions with any necessary Public Javascript files
    * JS files call upon `homeroutes.js` in the routes folder to `GET` and display the desired data
    * JS files also can refer to the `api` routes, which allows data to be `updated`, `stored`, `created`, or `deleted` from the database. This is then reflected on the user-interface.
<p style="font-size:30px; color:red; background-color:yellow">Kevin: Add what you did with NodeMailer</p>


<p style="font-size:30px; color:red; background-color:yellow">KIND OF WORDY, SO COULD PUT AN IMAGE HERE</p>



## Installations
* Download NPM and packages:
  * Inquirer (npm install inquirer)
  * Node (npm install node)
  * Dotenv (npm install dotenv)
  * Express (npm install express)
  * MySql (npm install mysql)
<p style="font-size:30px; color:red; background-color:yellow">Any other packages/installations</p>


## Technologies Used


## Demos
* App Demo:
   
* District Dashboard:

* Add Demo:



## Future Ideas



## Known Bugs
* When editing a student, their current grade level is not automatically set. `9th` grade is set instead because it is the first option.


## Sources
* NPM Packages: https://www.npmjs.com/
* MySql Workbench: https://www.mysql.com/products/workbench/
* MySql Server: https://dev.mysql.com/downloads/mysql/
* Heroku: https://devcenter.heroku.com/articles/heroku-cli
<p style="font-size:30px; color:red; background-color:yellow">Any other sources?</p>


## License
Licensed under the [MIT License](LICENSE).

<p align="center">© 2021 Jou Xiong, John Hummel, Kevin Jun Trilogy, Northwestern Coding Bootcamp</p>