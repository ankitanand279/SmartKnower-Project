const client=require('./db');
client.connect();
client.query("INSERT INTO students VALUES(10,'Raju Rastoghi','8024058564','rajurst@gmail.com','Data Science')",(err,result)=>{
   if(!err){
       console.log("Data inserted successfully");
   }
    client.end();
})
