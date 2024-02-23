import { ApolloServer } from 'apollo-server'
import 'reflect-metadata'
import { buildSchema } from 'type-graphql'
import { DataSource } from 'typeorm'
import { Book } from './entities/Book'
import { Person } from './entities/Person'
import { UserResolver } from './graphql/userResolver'
export let conn: DataSource
async function startServer() {
  conn = new DataSource({
    type: 'postgres',
    url: 'postgres://postgres.tpmashrepkfstgbvpnno:typeorm@8233@aws-0-ap-south-1.pooler.supabase.com:5432/postgres',
    synchronize: true,
    logging: false,
    entities: [Person, Book],
    migrations: [],
    subscribers: []
  })
  await conn
    .initialize()
    .then(() => {
      console.log('Connected to database')
    })
    .catch(error => console.log('Failed to connect to database', error))
  const schema = await buildSchema({
    resolvers: [UserResolver]
  })
  const server = new ApolloServer({ schema })
  const { url } = await server.listen({ port: 4000, path: '/graphql' })

  console.log(`Server ready at ${url}`)
}

startServer()
