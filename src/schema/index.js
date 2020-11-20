import {gql}from 'apollo-server-express';

//Eack database
const user =[
    {
        id: "1",
        name: "สมชาย",
        username:'somchai',
        password: "123456",
        email: "paklovethai.54@gmail.com"
    },
    {
        id: "2",
        name: "สมหญิง",
        username:'somying',
        password: "123457",
        email: "paklovethai.4@gmail.com"
    },
    {
        id: "3",
        name: "สมหวัง",
        username:'somwang',
        password: "123458",
        email: "paklovethai.@gmail.com"
    }
   
    
];
export const resolvers ={
    Query:{
        user: (parent,args,context,info)=>{
            return user.filter((user)=>user.id.toString()===args.id)[0];
        },
        users: (parent,args,context,info)=>{return user}
    }

}
export const typeDefs = gql `
type User{
    id: ID!
    name: String!
    username:String!
    password: String!
    email: String!
}

type Query{
    user(id:ID!):User
    users:[User]!
    me: String
}
`;
