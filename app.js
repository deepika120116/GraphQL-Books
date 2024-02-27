const express=require('express');
const {graphqlHTTP}=require('express-graphql');
const mongoose=require('mongoose');
const schema=require('./schema/schema');
const book=require('../server/models/book');
const author=require('../server/models/author');

const app=express();

mongoose.connect("mongodb://localhost:27017/graphql");
mongoose.connection.once("open",()=>{
    console.log("Connected to Database");
});
app.use("/graphql",graphqlHTTP({
schema,
graphiql:true
}));

app.listen(4000,(res)=>{
    console.log("Listening to server on Port 4000");
});