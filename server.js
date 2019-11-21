import { buildSchema } from 'graphql';
import * as graphqlHTTP from 'express-graphql' ;

const schema = buildSchema(`
    type Pokemon {
        id: Int
        name: String
    }
`)


const root = {
    getPokemon: () => {
        return {
            id: 1,
            name: "Charizard"
        }
    }
}

app.use(
    '/graphql',
    graphqlHTTP({
        schema: schema,
        rootValue: root,
        graphiql: true
    })
)

