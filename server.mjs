import express from 'express';
const app = express();
const port = 3001;
import schema, { graphql } from './schema.mjs';

app.get("/test", (req, res) => {
    console.log("get was pinged")
    let query = `{
        pokesound,
        pokemon {
            name
        },
        pokemons {
            name,
            description
        }
    }`;
    graphql(schema, query).then(result => {
        res.json(result);
    });
});

app.listen(port, () => console.log(`listening on port ${port}`))

// app.use(
//     '/graphql',
//     graphqlHTTP({
//         schema: schema,
//         rootValue: root,
//         graphiql: true
//     })
// )

