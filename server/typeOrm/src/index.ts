import { AppDataSource } from './data-source'

AppDataSource.initialize()
  .then(async () => {
    console.log('Connected to Supabase database')
  })
  .catch(error => console.log('Failed to connect to Supabase database', error))
