import { Field, ID, ObjectType } from 'type-graphql'
import {
  BaseEntity,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn
} from 'typeorm'
import { Person } from './Person'

@ObjectType()
@Entity()
export class Book extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => ID)
  id: string

  @Column()
  @Field(() => String)
  title?: string

  @Field(() => [Person], { nullable: true })
  @OneToMany(() => Person, person => person.book)
  persons?: Person[]
}
