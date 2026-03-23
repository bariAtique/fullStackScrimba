### _ Inspired by _[Watch WsCubeTech](https://youtu.be/vfaRzV3P92o?si=QvL4mT8gOqYH45Zu)

### **Important Query** [Click](https://docs.google.com/document/d/1rGD1TrrbR6zMhTcVp-18m_VSggr3hkr7Bgda5tcrpsE/edit?usp=sharing)

## How to Connect MongoDB (localhost)to Project?

## How to Connect Atlas (online) to Project?

## How to Connect mySql to node project? [READ](https://chatgpt.com/share/69c00b5b-5058-8000-94a4-f0ced0329e47)

### Purpose of Database

1. CRUD Operation through Node JS Logic
2. Connection Stablinshing Flow. [Detail](https://docs.google.com/document/d/1bLNILjCIEWgjeTe8KCZ05u4XP4Zkj-7ykEXaEs7CSm4/edit?usp=sharing)

#### Database Connection to Local

```
const {MongoClient} = require('mongodb');
const dbConnectionURL = 'mongodb://127.0.0.1:27017';
const client = new MongoClient(dbConnectionURL);

let  dbConnection=async ()=>{
  await client.connect();
  let db = client.db("testMongoDB_database");
  return db;
}
module.exports = {dbConnection};
```

#### Insert Data into DB

```
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
  let insertRes = await studentCollection.insertOne(obj);
  let resObj = {
    status: 1,
    msg: "Data Inserted",
    insertRes
  }
```

#### Show Dtata in Client:

```
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
```
