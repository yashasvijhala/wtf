import { Arg, Mutation, Query, Resolver } from 'type-graphql'
import { Book } from '../entities/Book'
import { Person } from '../entities/Person'
@Resolver()
export class UserResolver {
  @Mutation(() => Boolean)
  async createPerson(
    @Arg('name', () => String) name: string,
    @Arg('age', () => Number) age: number
  ): Promise<boolean> {
    await Person.create({ name, age }).save()
    return true
  }

  @Mutation(() => Boolean)
  async createBook(
    @Arg('title', () => String) title: string
  ): Promise<boolean> {
    const book = await Book.create({ title }).save()
    return true
  }

  @Mutation(() => Boolean)
  async linkPersonToBook(
    @Arg('bookId', () => String) bookId: string,
    @Arg('personId', () => String) personId: string
  ): Promise<boolean> {
    await Person.update(
      {
        id: personId
      },
      {
        bookId
      }
    )
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

  @Query(() => [Person])
  async getPersons(): Promise<Person[]> {
    return await Person.find({
      relations: {
        book: true
      }
    })
  }
  @Query(() => [Book])
  async getBooks(): Promise<Book[]> {
    return await Book.find({
      relations: {
        persons: true
      }
    })
  }
}
