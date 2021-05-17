# Project 2: GradRight🎓
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)


## Table of Contents
* [Introduction](#introduction)
* [Functionality](#functionality)
* [Tasks Completed](#tasks-completed)
* [Installations](#installations)
* [Technologies Used](#technologies-used)
* [Demos](#demos)
* [Future Ideas](#future-ideas)
* [Known Bugs](#known-bugs)
* [Sources](#sources)
* [License](#license)


 ## Introduction
Admin users can keep track of their students' graduation requirements regardless of the amount of different requirements there are. GradRight compares students with their respective districts to indicate which graduation requirements are met. Districts and Students can be added, edited, and deleted.
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
* <p style="font-size:30px; color:red; background-color:yellow">Using Nodemailer, when a student is updated, deleted or a new student is deleted an email is sent with the name of the student.</p>
![GradRight_Email](https://user-images.githubusercontent.com/73242250/118423289-4c7dff80-b68a-11eb-8317-546d92fb3463.png)


## Installations
* Download NPM and packages:
  * Node (npm install node)
  * Dotenv (npm install dotenv)
  * Express (npm install express)
  * MySql2 (npm install mysql2)
  * NodeMailer (npm install nodemailer)
  * Cloudinary (npm install cloudinary)


## Technologies Used
* Bootstrap
* Heroku
    * JawsDB
* MySQL
* Express
* Handlebars
* Nodemailer
* Cloudinary (Help from <a href="https://github.com/javiistacks">javiistacks</a>)


## Demos
* App Demo:
![GradRight](https://user-images.githubusercontent.com/73242250/118421760-52261600-b687-11eb-946a-ca680fa588ad.gif)
   
* District Dashboard:
![GradRight_DistrictDash](https://user-images.githubusercontent.com/73242250/118422072-18a1da80-b688-11eb-9e95-5b868ed30cd0.png)

* Add Demo:
![GradRightdDistrictDemo](https://user-images.githubusercontent.com/73242250/118423439-9ff04d80-b68a-11eb-8395-e98f1742f534.gif)

* Student Dashboard:
![GradRight_StudentDash](https://user-images.githubusercontent.com/73242250/118422340-a1b91180-b688-11eb-895e-b78d837b648b.png)

* Add Demo:
![GradRightdStudentDemo](https://user-images.githubusercontent.com/73242250/118423454-a2eb3e00-b68a-11eb-8356-dfcd8e81a9fe.gif)


## Future Ideas
* Get image uploads to work flawlessly
* Adding a search bar to search for a specific district/ student
* Different User views:
    * Students can update their profile demographics but not their grades
    * Teachers can update student grades and request to delete students
    * Current Admin view can do all
        * Admins can also designate roles to users, which will keep users with their specific permissions
            * Admins can invite Teachers and other admins, teachers can invite students
    * There is no role option on the User Model, so this will need to be added
* Filter/sort option


## Known Bugs
* When editing a student, their current grade level is not automatically set. `9th` grade is set instead because it is the first option.
* Image Upload works, but there are lots of errors
    * repeatedly console logs errors before function is initiated
    * does not indicate that an image was uploaded, even though it is
    * only works on the same handlebars file rather than on the separate JS file


## Sources
* NPM Packages: https://www.npmjs.com/
* MySql Workbench: https://www.mysql.com/products/workbench/
* MySql Server: https://dev.mysql.com/downloads/mysql/
* Heroku: https://devcenter.heroku.com/articles/heroku-cli
* Cloudinary: https://cloudinary.com/


## License
Licensed under the [MIT License](LICENSE).

<p align="center">© 2021 Jou Xiong, John Hummel, Kevin Jun Trilogy, Northwestern Coding Bootcamp</p>
