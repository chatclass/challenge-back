# Back-End Challenge

![alt tag](https://static.wixstatic.com/media/7f8adc_d803ec63e9e443a288209456ce076e0f~mv2.png/v1/fill/w_132,h_26,al_c,q_85,usm_0.66_1.00_0.01/ChatClass_logo.webp)

## Welcome

ChatClass is a New York-based Edtech that helps companies educate employees and customers through Conversational Learning. The platform uses WhatsApp, a technology present in the daily lives of nearly everyone around the globe, to expand access to digital education. We have already impacted more than 500 thousand students.

We are always looking for good programmers who love to improve their work. We give preference to small teams with qualified professionals over large teams with average professionals.

This repository contains a problem used to evaluate candidate skills. It's important to notice that satisfactorily solving the problem is just a part of what will be evaluated. We also consider other programming disciplines like documentation, testing, commit timeline, design and coding best practices.

Hints:

* Carefully read the specification to understand all the problem and artifact requirements before starting, if you don't understand something tell us;
* Check the recommendations and reference material at the end of this specification;
* We appreciate simplicity, so create a good project setup that will help us in your evaluation;
* Please make tests ... we appreciate tests <3... tests make the world better.

## How to participate

1. Make a fork of this repository on Github.
2. Follow the instructions of README.md (this file);
3. Deploy your project on a hosting service (we recommend [Heroku](https://heroku.com));
## Specification

You should implement an application for a library to store book and authors data.

**This application must provide an HTTP REST API to attend the requirements.**

### 1. Receive a CSV with authors and import to database

Given a CSV file with many authors (more than a million), you need to build a command to import the data into the database. The CSV file will have the following format:

```
name
Luciano Ramalho
Osvaldo Santana Neto
David Beazley
Chetan Giridhar
Brian K. Jones
J.K Rowling
```

Each author record in the database must have the following fields:

* id (self-generated)
* name

You need to store the authors' data to complement the book data that will be stored afterward (see item #3).

```
node manage.js import_authors authors.csv
```

### 2. Expose authors' data in an endpoint

This endpoint needs to return a paginated list with the authors' data. Optionally the authors can be searched by name.

### 3. CRUD (Create, Read, Update and Delete) of books

You need to implement these actions in your API:

* Create a book
* Read book's data
* Update book's data
* Delete book's data

Each book record has the fields:

* id (self-generated)
* name
* edition
* publication_year
* authors (more than one author can write a book)

To retrieve a book (in easy mode) we can filter by 4 fields (or a composition of these four):

* name
* publication_year
* edition
* author

But these 4 filters are optional. It must be possible to navigate all the books' data without any filter.

To create a book you need to send this payload (in json format) below:

```
{
 "name": // Name of the book;
 "edition": // Edition number;
 "publication_year": // Publication year of the book;
 "authors": // List of author ids, same ids of previous imported data
}
```

## Project Requirements:

* Provide a working environment with your project (eg. Heroku)
* Application must be written in Node.js.
* Every text or code must be in English
* Write the project documentation containing:
    * Description;
    * Installing (setup) and testing instructions;
    * If you provide a [docker](https://www.docker.com/) solution for setup, ensure it works without docker too.
    * Brief description of the work environment used to run this project (Computer/operating system, text editor/IDE, libraries, etc).
* Provide API documentation (in English);
* Variables, code and strings must be all in English.

## Recommendations

* Write tests! Please make tests ... we appreciate tests <3... tests make the world better;
* Practice the [12 Factor-App](http://12factor.net) concepts;
* Use [SOLID](https://en.wikipedia.org/wiki/SOLID_(object-oriented_design)) design principles;
* Use programming good practices;
* Use [git best practices](https://www.git-tower.com/learn/git/ebook/en/command-line/appendix/best-practices), with clear messages (written in English);
* Be aware when modeling the database;
* Be careful with REST API details. They can bite you!

**Have fun!**