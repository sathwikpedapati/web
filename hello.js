const express=require("express");
const app=express();
const mongoose=require("mongoose");
main()
.then(()=>{
    console.log("connected successfully");
})
.catch((err)=>{
    console.log(err);
});
async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/hello');
 };
 app.listen(8080,()=>{
   console.log("connected successfully");
 });