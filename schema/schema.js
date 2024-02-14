const graphql=require('graphql');

const {GraphQLObjectType,GraphQLID,GraphQLString,GraphQLSchema}=graphql;

const BookType=new GraphQLObjectType({
    name:"Book",
    fields:()=>({
        id:{type:GraphQLID},
        name:{type:GraphQLString},
        genre:{type:GraphQLString}
    })
});

const RootQuery=new GraphQLObjectType({
    name:"RootQueryType",
    fields:{
        book:{
            type:BookType,
            args:{id:{type:GraphQLID}},
            resolve(parent,args){
                //Code to connect to DB, parent is used for Relation connection
            }
        }
    }
});

module.exports=new GraphQLSchema({
    query:RootQuery
})
