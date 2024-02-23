import 'reflect-metadata'
import { Field, ID, ObjectType } from 'type-graphql'
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@ObjectType()
@Entity()
export class Person {
  @Field(() => ID)
  @PrimaryGeneratedColumn('uuid')
  id?: string

  @Column()
  @Field(() => String)
  name?: string

  @Column()
  @Field(() => Number)
  age?: number
}
