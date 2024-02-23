import { Arg, Mutation, Query, Resolver } from 'type-graphql'
import { Person } from '../entities/Person'
import { conn } from '../index'
@Resolver()
export class UserResolver {
  @Query(() => [String])
  async people(): Promise<string[]> {
    const q = await conn.query('SELECT * FROM person')
    return q.map((i: any) => JSON.stringify(i))
  }

  @Mutation(() => Boolean)
  async createPerson(
    @Arg('name', () => String) name: string,
    @Arg('age', () => Number) age: number
  ): Promise<boolean> {
    await Person.create({ name, age }).save()
    return true
  }

  @Query(() => Person)
  async getPersonById(@Arg('hey', () => String) id: string): Promise<Person> {
    return await Person.findOneOrFail({
      where: {
        id: id
      }
    })
  }
}
