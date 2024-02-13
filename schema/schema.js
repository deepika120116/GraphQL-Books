const graphql=require('graphql');

const {GraphQLObjectType,GraphQLID,GraphQLString}=graphql;

const BookType=new GraphQLObjectType({
    name:"Book",
    fields:()=>({
        id:{type:GraphQLID},
        name:{type:GraphQLString},
        genre:{type:GraphQLString}
    })
});