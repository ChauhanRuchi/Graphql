
const express = require("express");
const { buildSchema, graphql } = require("graphql");
const { graphqlHTTP } = require("express-graphql");
const model = require("./model");
const User=require("./User")

const { append } = require("vary");
const user = require("./User");
const server = express();
const events = [];
server.use(
  "/graphql",
  graphqlHTTP({
    schema: buildSchema(`
            type Event{
                _id:ID!
                title:String!
                decription:String!
                price:Float!
                date:String!
                creator:User!
            }
            type User{ 
              _id:ID!            
              email:String!
              password:String!
              createdEvents:[Event!]
            }
                input EventInput{
                    title:String!
                    decription:String!
                    price:Float!
                    date:String!
                }
                input UserInput{
                  email:String!
                  password:String!
                }
                 type RootQuery{
                        events:[Event!]!                    
                          }
                type RootMutation{
                     createEvent(eventInput:EventInput):Event
                     createUser(userInput:UserInput):User
                      updateUser(_id:ID!,email:String!):User!
                      deleteUser(_id:ID!):User!
                }
                schema{
                    query: RootQuery
                    mutation:RootMutation
                }
            `),
    rootValue: {
      events: () => {
        return model.find().populate("creator").then(events=>{
              return events.map(event=>{
                return{
                  ...event._doc,
                  _id:event.id,
                  creator:{
                    ...event._doc.creator._doc,
                    _id:event._id.creator.id
                  }
                }
              })
         
        });
      },
      createEvent: (args) => {
        const event = new model({
          title: args.eventInput.title,
          decription: args.eventInput.decription,
          price: args.eventInput.price,
          date:new Date(args.eventInput.date),
          creator:"63353b5bcc219977b7bf7870"
        });
       
        return event.save().then(
          result=>{
            return user.findById("63353b5bcc219977b7bf7870");
          }
        ).then(user=>{
          if(user){
            throw new Error("user exits already")
          }
          user.createEvents.push(event)
        });
      },
      createUser:(args)=>{
        const data=new User({
          email:args.userInput.email,
          password:args.userInput.password
        })
        User.findOne({email:args.userInput.email}).then(user=>{
          if(user){
            throw new Error("user exits already")
          }
          else{
            return data.save();
          }
        })
            
      },
      updateUser:(args)=>{
       return User.findOneAndUpdate({_id:args._id},{email:args.email},{new:true})
      },
      deleteUser:(args)=>{
          return User.findOneAndDelete({_id:args._id})
      }
    },
    graphiql: true,
  })
);
server.listen("3000", (err, res) => {
  if (res) {
    console.log("running graph ql server");
  } else {
    console.log("...", err);
  }
});
