import 'reflect-metadata'
import { Field, ID, ObjectType } from 'type-graphql'
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@ObjectType()
@Entity()
export class Person extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  @Field(() => String)
  name?: string

  @Column()
  @Field(() => Number)
  age?: number
}
