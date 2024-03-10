import { ApolloServer } from 'apollo-server'
import 'reflect-metadata'
import { buildSchema } from 'type-graphql'
import { DataSource } from 'typeorm'
import { Comment } from './entities/Comment'
import { Post } from './entities/Post'
import { Subreddit } from './entities/Subreddit'
import { Vote } from './entities/Vote'
import { PostResolver } from './graphql/Resolver'
export let conn: DataSource
async function startServer() {
  conn = new DataSource({
    type: 'postgres',
    url: 'postgres://postgres.tpmashrepkfstgbvpnno:typeorm@8233@aws-0-ap-south-1.pooler.supabase.com:5432/postgres',
    synchronize: true,
    logging: false,
    entities: [Post, Subreddit, Vote, Comment],
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
    resolvers: [PostResolver]
  })
  const server = new ApolloServer({ schema })
  const { url } = await server.listen({ port: 4000, path: '/graphql' })

  console.log(`Server ready at ${url}`)
}

startServer()
