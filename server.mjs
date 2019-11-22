import express from 'express';
const app = express();
const port = 3001;
import schema, { graphql } from './schema.mjs';
import cors from 'cors';

app.use(cors());

app.get("/test", (req, res) => {
    console.log("get test was pinged")
    let query = `{
        pokesound,
        squirtle {
            name
        },
        waterpokemons {                     
            name,
            description
        }
    }`;
    graphql(schema, query).then(result => {
        console.log(result)
        res.send(result);
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

