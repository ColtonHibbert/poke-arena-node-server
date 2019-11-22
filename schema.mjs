//const { buildSchema } = require('graphql');
//export const graphqlHTTP = require('express-graphql');
import {
    graphql,
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLString,
    GraphQLList
} from 'graphql';

const waterPokemonArray = [
    {
        id: "1",
        description: "small turtle pokemon",
        name: "Squirtle"
    },
    {
        id: "2",
        description: "tadpole pokemon",
        name: "Polywag"
    }
];

const waterType =  new GraphQLObjectType({
    name: "Water Pokemon",
    fields: () => ({
        id: { type: GraphQLString},
        description: { type: GraphQLString },
        name: { type: GraphQLString }
    })
})

let schema = new GraphQLSchema({
   query: new GraphQLObjectType({
       name: "RootQueryType",
       fields: {
           pokesound: {
               type: GraphQLString,
               resolve() {
                   return "squiiiiirrrrtle"
               }
           },
            waterpokemon: {
               type: waterType,
               resolve() {
                   return waterPokemonArray[0];
               }
           },
           waterpokemons: {
               type: new GraphQLList(waterType),
               resolve() {
                   return waterPokemonArray
               }
           }
       }
   }) 
})

export { graphql };
export default schema;

// export const schema = buildSchema(`
//     type Pokemon {
//         id: Int
//         name: String
//     }
// `)


// const root = {
//     getPokemon: () => {
//         return {
//             id: 1,
//             name: "Charizard"
//         }
//     }
// }