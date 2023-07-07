# Expressjs ,Ejs and Mysql - Windows OS
A simple startup project configuration using express js as the server, ejs for templating and mysql as the database.  

This was tested on a windows 10 os machine where the module musql2 was used.

## Preliquisites
Requirements  
👉: node version 18.16.x  
👉: npm package manager is used in this case  

## Usage and Installation
1. Clone this github repository
   ```sh
     git clone https://github.com/Newton-Nganga/express-ejs-mysql-win.git
   ```
3. Install the required dependencies
    ```sh
    cd express-ejs-mysql && npm install
    ```
5. Replace the creadentials in db.js with your creadentials
    - You may also need to replace localhost with the ip adress: 127.0.0.1
      
  ```js
  const mysql = require('mysql2')
//your credentials
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'felix',
  database: 'test',
  port:'3306'
});
//try to make a connection
connection.connect((err) => {
  console.log('==== TRYING TO CONNECT TO THE DB ====')
  if(!err) {
    console.log('Connected to MySQL database');
  }
  else {
    console.log("==== COULDN'T CONNECT TO THE DB",err);
  }
});


// export default db;
module.exports = connection;

  ```
## Project Sructure

```sh
.
├── controllers
│   └── controller.js
├── db.js
├── package.json
├── package-lock.json
├── public
│   ├── css
│   ├── images
│   │   └── bird.jpg
│   └── js
├── README.md
├── routers
│   └── routers.js
├── server.js
├── Utils
└── views
    ├── 404.ejs
    ├── add.ejs
    ├── delete.ejs
    ├── partials
    │   ├── form-fields.ejs
    │   ├── form-styling.ejs
    │   └── head.ejs
    ├── update.ejs
    └── users.ejs


```
## Screensnaps
![users](https://github.com/Newton-Nganga/express-ejs-mysql-win/assets/93589514/be30dd21-b425-44b2-9eda-38e48fbc8fd6)
![users-add](https://github.com/Newton-Nganga/express-ejs-mysql-win/assets/93589514/d78cf7da-67c7-4f14-b334-f8de6d9d7aa1)
![users-update](https://github.com/Newton-Nganga/express-ejs-mysql-win/assets/93589514/744c7e11-ef2b-4597-96ce-24d9d456dd7e)


## contributions
This project is entirely for use in starting a development server,Its open to contribution.  
Clone the repo and Boom! 🤯: 💥: 💥: You can now mess up things .




