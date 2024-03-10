import { Arg, Mutation, Query, Resolver } from 'type-graphql'
import { Post } from '../entities/Post'
import { Subreddit } from '../entities/Subreddit'

@Resolver()
export class PostResolver {
  @Mutation(() => Boolean)
  async createPost(
    @Arg('title', () => String) title: string,
    @Arg('subredditTopic', () => String) subredditTopic: string,
    @Arg('body', () => String, { nullable: true }) body?: string,
    @Arg('ImageUrl', () => String, { nullable: true }) ImageUrl?: string,
    @Arg('UserName', () => String, { nullable: true }) UserName?: string
  ): Promise<boolean> {
    let subreddit = await Subreddit.findOne({
      where: {
        topic: subredditTopic
      }
    })
    if (!subreddit) {
      subreddit = await Subreddit.create({
        topic: subredditTopic
      }).save()
    }
    await Post.create({
      title: title,
      image: ImageUrl,
      body: body,
      subredditId: subreddit.id,
      userName: UserName
    }).save()
    return true
  }
  // @Mutation(() => Boolean)
  // async createBook(
  //   @Arg('title', () => String) title: string
  // ): Promise<boolean> {
  //   const book = await Book.create({ title }).save()
  //   return true
  // }
  // @Mutation(() => Boolean)
  // async linkPersonToBook(
  //   @Arg('bookId', () => String) bookId: string,
  //   @Arg('personId', () => String) personId: string
  // ): Promise<boolean> {
  //   await Person.update(
  //     {
  //       id: personId
  //     },
  //     {
  //       bookId
  //     }
  //   )
  //   return true
  // }
  // @Query(() => Person)
  // async getPersonById(@Arg('hey', () => String) id: string): Promise<Person> {
  //   return await Person.findOneOrFail({
  //     where: {
  //       id: id
  //     }
  //   })
  // }
  @Query(() => [Post])
  async getPosts(): Promise<Post[]> {
    return await Post.find({
      relations: {
        subreddit: true,
        comments: true,
        votes: true
      }
    })
  }

  @Query(() => [Subreddit])
  async getSubredditsByTopic(
    @Arg('topic', () => String) topic: string
  ): Promise<Subreddit> {
    const subreddit = await Subreddit.findOneOrFail({
      where: {
        topic: topic
      }
    })
    return subreddit
  }
  // @Query(() => [Book])
  // async getBooks(): Promise<Book[]> {
  //   return await Book.find({
  //     relations: {
  //       persons: true
  //     }
  //   })
  // }
}
