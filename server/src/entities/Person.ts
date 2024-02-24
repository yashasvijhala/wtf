import { Field, ID, ObjectType } from 'type-graphql'
import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn
} from 'typeorm'
import { Book } from './Book'

@ObjectType()
@Entity()
export class Person extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn('uuid')
  id?: string

  @Column()
  @Field(() => String)
  name?: string

  @Column()
  @Field(() => Number)
  age?: number

  @Column()
  @Field({
    nullable: true
  })
  bookId?: string

  @Field(() => Book, { nullable: true })
  @ManyToOne(() => Book, book => book.persons)
  book?: Book
}
