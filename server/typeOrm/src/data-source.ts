import 'reflect-metadata'
import { DataSource } from 'typeorm'
import { Person } from './entity/Person'
export const AppDataSource = new DataSource({
  type: 'postgres',
  url: 'postgres://postgres.tpmashrepkfstgbvpnno:typeorm@8233@aws-0-ap-south-1.pooler.supabase.com:5432/postgres',
  synchronize: true,
  logging: false,
  entities: [Person],
  migrations: [],
  subscribers: []
})
