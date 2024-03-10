import { Field, ID, ObjectType } from 'type-graphql'
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn
} from 'typeorm'
import { Comment } from './Comment'
import { Subreddit } from './Subreddit'
import { Vote } from './Vote'
@ObjectType()
@Entity({ name: 'Posts' })
export class Post extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => ID)
  id: string

  @Column()
  @Field(() => String)
  title?: string

  @Column()
  @Field(() => String)
  body?: string

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  image?: string

  @Column()
  @Field(() => String)
  userName?: string

  @Field()
  @CreateDateColumn({
    type: 'timestamp with time zone'
  })
  createdAt: Date

  @Column()
  @Field({
    nullable: true
  })
  subredditId?: string

  @Field(() => Subreddit, { nullable: true })
  @ManyToOne(() => Subreddit, subreddit => subreddit.posts)
  subreddit?: Subreddit

  @Field(() => [Comment], { nullable: true })
  @OneToMany(() => Comment, comment => comment.post)
  comments?: Comment[]

  @Field(() => [Vote], { nullable: true })
  @OneToMany(() => Vote, vote => vote.post)
  votes?: Vote[]
}
