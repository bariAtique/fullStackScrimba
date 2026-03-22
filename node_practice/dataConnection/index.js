const express = require('express');
const { dbConnection } = require('./dbConnection');
const app = express();
app.use(express.json());

app.get("/student-read", async(req,res)=>{
   let myDB = await dbConnection();
   let studentCollection = myDB.collection('students');
   let data = await   studentCollection.find().toArray();
   let resObj = { 
    status: 1,
    msg: "Student List Data fetched",
    data
   }
   res.send(resObj);
}
  
)

app.post("/student-insert", async(req, res)=>{

  let myDB = await dbConnection();
  let studentCollection = myDB.collection('students');
  // let obj ={
  //   sName: req.body.sName,
  //   sEmail: req.body.sEmail,
  // }

  // object destructuring
  let {sName, sEmail} = req.body;
  let obj = {sName, sEmail};
  // console.log(obj);
  let insertRes = await studentCollection.insertOne(obj);
  let resObj = {
    status: 1,
    msg: "Data Inserted",
    insertRes

  }

  res.send(resObj);
})

app.listen("5000",()=>{
  console.log("server is running on port 5000")
})
