import { Field, ID, ObjectType } from 'type-graphql'
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn
} from 'typeorm'
import { Post } from './Post'

@ObjectType()
@Entity({ name: 'Subreddits' })
export class Subreddit extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => ID)
  id: string

  @Column()
  @Field(() => String)
  topic?: string

  @Field()
  @CreateDateColumn({
    type: 'timestamp with time zone'
  })
  createdAt: Date

  @Field(() => [Post], { nullable: true })
  @OneToMany(() => Post, post => post.subreddit)
  posts?: Post[]
}
