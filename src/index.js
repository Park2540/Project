import express from 'express'

import server from './server'

const app = express()
const Port=8080;
server.applyMiddleware({ app });

app.listen({ port: Port }, () =>
  console.log(`🚀 Server ready at http://localhost:8080${server.graphqlPath}`)
)