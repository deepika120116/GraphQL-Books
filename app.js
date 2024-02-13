const express=require('express');
const graphqlHTTP=require('express-graphql');

const app=express();
app.use("/graphql",graphqlHTTP({

}));

app.listen(4000,(res)=>{
    console.log("Listening to server on Port 4000");
});