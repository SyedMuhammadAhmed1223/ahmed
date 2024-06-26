// Import express, modelFile and database
import express from "express";


const app = express();
const port = 3001;

// Use Middleware express.static and express.urlencoded
app.use(express.static("public/"))

// Run the server (Listen Function)
 app.listen(port,()=>{
  console.log(`server is running ${poer}`);
 })
// View todo 
app.get("/", async (req, res) => {
  //Fetch tasks from database`
  res.render("task.ejs");

  });

// Handle Add task Request
app.post("/add-task", async (req, res) => {
     
  });

// Delete Request to delete task by ID
app.delete("/tasks/:id", async (req, res) => {
   
  });
  
