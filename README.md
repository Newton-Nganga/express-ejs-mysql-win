first create the project folder and initialize the project
i.e > mkdir <dirname> && npm init -y
install express,ejs,nodemon,mysql,body-parser modules
i.e > npm i express ejs@latest nodemon@latest mysql@latest body-parser@latest
create a server file
i.e > touch server.js

create and initialize server in express.js

create db.js and initialize/create a mysql db connection

create the public folder with css,js and images folder

create a folder called views that will hold all the views and inside it partials folder

create routers.js file to place all the methods to be performed


project structure
------------------

|public
  ---|css          //all ur css stylesheets
  ---|images       //all ur image resources
  ---|js           //all ur js scripts
|node_modules      //npm node modules
|views             //holds the html files to render
  ---|partials       //contains ejs partials
db.js              //to establish mysql db connection
server.js          //to start the express js server (nodemon server.js)
package-lock.json  
package.json       //installed modules with scripts
README.md

*****************************************************************
                opt to use this routers,controllers 
*****************************************************************
|routers
  ---router.js
|controllers
  ---homepage.js
  ---about.js
  ---users
  ---contact us
*****************************************************************
               or opt to use this single routers
*****************************************************************
routers.js         //all the http methods to get,post,put,patch and delete rows 





