import express from 'express';
const app = express();
const port = 3001;
import schema, {  root } from './schema.mjs';
import cors from 'cors';

import graphqlHTTP from 'express-graphql';
app.use(cors());
//console.log(graphqlHTTP)
// app.get("/test", (req, res) => {
//     console.log("get test was pinged")
//     let query = `{
//         pokesound,
//         squirtle {
//             name
//         },
//         waterpokemons {                     
//             name,
//             description
//         }
//     }`;
//     graphql(schema, query).then(result => {
//         console.log(result)
//         res.send(result);
//     });
// });

app.use(
    '/graphql',
    graphqlHTTP({
        schema: schema,
        rootValue: root,
        graphiql: true
    })
)


app.listen(port, () => console.log(`listening on port ${port}`))


