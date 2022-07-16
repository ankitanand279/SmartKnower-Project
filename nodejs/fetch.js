const {Client}=require("pg");
const client=new Client({
    host:'localhost',
    port:5432,
    user:'postgres',
    password:'Ankit@12',
    database:'online_vidya'
})
client.connect();
  client.query('SELECT * FROM students',(err,result)=>{
      if(!err){
          console.log(result.rows);
      }
      client.end();
  })