const {Client}=require("pg");
const client=new Client({
    host:'localhost',
    port:5432,
    user:'postgres',
    password:'Ankit@12',
    database:'online_vidya'
})
module.exports=client;