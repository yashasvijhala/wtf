import { Field, ID, ObjectType } from 'type-graphql'
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm'
import { Person } from './Person'

@ObjectType()
@Entity()
export class Book {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => ID)
  id: string

  @Column()
  @Field(() => String)
  title?: string

  @Column()
  @Field(() => String)
  personId?: string

  @Field(() => [Person], { nullable: true })
  @OneToMany(() => Person, person => person.bookId)
  person: Person[]
}
