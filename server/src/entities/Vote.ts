import { Field, ID, ObjectType } from 'type-graphql'
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn
} from 'typeorm'
import { Post } from './Post'

@ObjectType()
@Entity({ name: 'Votes' })
export class Vote extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => ID)
  id: string

  @Column()
  @Field(() => String)
  postId?: string

  @Column()
  @Field(() => Boolean)
  upVote?: boolean

  @Column()
  @Field(() => String)
  userName?: string

  @Field()
  @CreateDateColumn({
    type: 'timestamp with time zone'
  })
  createdAt: Date

  @Field(() => Post)
  @ManyToOne(() => Post, post => post.votes)
  post: Post
}
