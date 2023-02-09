# Mini Youtube

## Concept

The objective of this test is to create a web with a video player that takes Youtube links as inputs, the information of watched videos will be displayed in a section as a history, furthermore there will be another section of videos highlighted by the user.

## Frontend
 
This repository contains two folders regarding the Frontend:

VanillaFrontend: this is the first prototype of the interface, implemented without any framework and using Javascript to provide all the functionality of the website.

AngularFrontend: this folder contains the frontend of the application written in Angular, to run it you must access this folder through the terminal and run the command "ng serve --proxy-config proxy.conf.json". The website is accessible through the url http://localhost:4200.

## Backend

The Backend folder contains the code of the project written in NodeJS, it is an API Rest that stores its information in a MySQL database, to execute this code you must access the folder through the terminal and execute the command "node server.js".

The requirements for the code to work are:
- To have MySQL installed.
- Create a schema called "testdb".

You can access the API in your browser through the url: "http://localhost:8000/api".

You can also test your methods using the Postman collection from the file: "Relief Collection.postman_collection.json".
