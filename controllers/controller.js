// A sample implementation of the methods using sqlite3 db

//import db instance
const connection = require("../db");
//create users tables if not exist

connection.query(
    `CREATE TABLE IF NOT EXISTS users (
        id INT AUTO_INCREMENT PRIMARY KEY,
        fName TEXT,
        username TEXT,
        email TEXT
      )
    `,
    (err) => {
      if (err) {
        console.error(err.message);
        return res.status(500).send("Error creating users table");
      }
    }
  );
//Delete the users table


//GET Requests
//A function to respond with all the users
const renderUsers = async (req, res) => {
  const querystring = "SELECT * FROM users";
  connection.query(querystring, (err, results) => {
    if (err) {
      console.error(err.message);
      return res.status(500).send("Error retrieving users from database");
    }
    //render users.ejs and provide the fetched users as users:results
    res.status(200).render("users", { users: results });
  });
};

//POST Requests
//Function to add users to the users table
const addUser = async (req, res) => {
  //values of the user to be added
  const { fName, username, email } = req.body;

  //check if all fields have values
  if (!email || !username || !fName) {
    return res.render("/add", {
      message: "All the fields are required",
    });
  }

  const querystring = "INSERT INTO users (fName,username,email) VALUES (?,?,?)";

  //check if the user exists
  connection.query("SELECT * FROM users WHERE email = ?", [email], (err, row) => {
    if (err) {
      console.error(err.message);
      return res.status(500).render("/", {
        message: "There was an error checking if the email already exists",
      });
    }
    //if !user
    if (row) {
      console.log("user with that email alredy exists!");
      return res.status(404).render("/", {
        message: "User with that email alredy exists!",
      });
    }
    //new user
    connection.query(querystring,[fName,username,email],(err)=>{
        if(err){
            console.log("Error caught while saving the user",err)
            // res.json({messsage:"An error was caught while creating new user"})
            return res.status(500).redirect('/add')
        }
        // res.json({message:"user added successfully"})
        console.log("success : user added ")
        return res.status(200).redirect('/')
    })
  });
};

const renderUpdate=async(req,res)=>{
  const {id} =req.params
  connection.query("SELECT * FROM users WHERE id = ?", [id], (err, user) => {
     if(err){
      console.log("Error : couldn't fetch the user")
      res.redirect('/')
     }
     res.render('update',{user:user})
  })
}

//PUT Requests
//Function to update user fields
const updateUser = async (req, res) => {
  //get the id of the user to be updated
  const { id } = req.params;
  //new values from the users
  const { fName, email, username } = req.body;

  //Query string to Update the user values
  const querystring =   "UPDATE users set fName= ? ,email = ?, username=? WHERE id=?"


  connection.query(querystring,[fName, email, username, id], (err) => {
    if (err) {
      console.log("Failed: An error was caught", err);
      res.status(500).redirect("/add");
    }
    //else if !err
    console.log("success : User updated")
    res.redirect("/");
  });

};

//DELETE Requests
//Function to delete users from the users table
const deleteUser = async (req, res) => {
  const { id } = req.params;
  const querystring = "DELETE from users WHERE id=?";
  connection.query(querystring, [id], (err) => {
    if (err) {
      console.log("Failure : An error was caught",err)
      // res.json({ message: "User couldn't be deleted" });
      return res.redirect(`/`);
    }
    // res.json({ message: "User deleted successfully" });
    console.log("success : user deleted ")
    return res.status(200).json({message:'user deleted successfully'})
  });
}

module.exports = { updateUser, renderUsers, deleteUser,addUser ,renderUpdate }