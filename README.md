# SchoolApp

AngularJS web application with a REST API built with Node.js and Express 4.x.

[![Build Status](https://travis-ci.org/nickollascoelho/schoolApp.svg?branch=master)](https://travis-ci.org/nickollascoelho/schoolApp)

#### Built with:
* [node.js](http://www.nodejs.org/)
* [express](http://www.expressjs.com/)
* [mongolab](http://www.mongolab.com/)
* [angularjs](https://angularjs.org/)
* [bootstrap](http://getbootstrap.com/)

#### Dependencies:
* [nodejs](http://www.nodejs.org/)

#### Install dependencies (may might need to use `sudo` for various reasons):
* `brew/apt-get install nodejs`
* `npm install`

#### Environment variables:
* `MONGLAB_STACK_MOBLEE_URL` -  Mongolab url (including authentication)
 * example: `mongodb://<dbuser>:<dbpassword>@<dbserver>.mongolab.com:<dbport>/<db>`
* `PORT` - Port exposed (default 8080)
  * example: `3000`

#### Introduction:
The objective of this project:

A school wants to hire your software company to develop a new web-based system which will
help them distribute and visualize group of students in a classroom (they call it a “seat map”).
For the sake of simplicity, all the rooms have their seats distributed in rows and columns.

In a previous meeting, the client mentioned that a student should not seat right behind a taller
colleague, and that they prefer to have students with lower academic performance seating
closer to the teacher's desk. One teacher mentioned that she would love to be able to open this
web app from her tablet or mobile, during class, to check where the students should seat. The
IT guy said that if he could access the seat map as JSON in the web server, he could use this
information in other apps which would be great.

These will be the fields that your system will have access to:
- Student ID (unique identifier for a student);
- Student name (to help the user see the result)
- Student height (in cm);
- Academic performance grade (a decimal number from 0.0 to 10.0, which 10 means the best
performance possible).
