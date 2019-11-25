//const { buildSchema } = require('graphql');
//export const graphqlHTTP = require('express-graphql');
import GQL from 'graphql';
const {
    graphql,
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLString,
    GraphQLList,
    buildSchema
} = GQL;

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

export const root = {
    pokesound: () => {
        return "squiiiiirrrrtle"
    },
    waterpokemons: () => {
        return waterPokemonArray
    },
    squirtle: () => {
        return waterPokemonArray[0]
    },
    polywag: () => {
        return waterPokemonArray[1]
    }
}

// const waterType =  new GraphQLObjectType({
//     name: "waterType",
//     fields: () => ({
//         id: { type: GraphQLString},
//         description: { type: GraphQLString },
//         name: { type: GraphQLString }
//     })
// })

// let schema = new GraphQLSchema({
//    query: new GraphQLObjectType({
//        name: "RootQueryType",
//        fields: {
//            pokesound: {
//                type: GraphQLString,
//                resolve() {
//                    return "squiiiiirrrrtle"
//                }
//            },
//             squirtle: {
//                type: waterType,
//                resolve() {
//                    return waterPokemonArray[0];
//                }
//            },
//            waterpokemons: {
//                type: new GraphQLList(waterType),
//                resolve() {
//                    return waterPokemonArray
//                }
//            }
//        }
//    }) 
// })

const schema = buildSchema(`
    type WaterType {
        description: String,
        id: Int,
        name: String,
    }
    type Query {
        pokesound: String,
        waterpokemon: [WaterType],
        squirtle: WaterType,
        polywag: WaterType
    }
`)



//export { graphql };
export default schema;
