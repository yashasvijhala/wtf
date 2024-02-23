import { Field, ID, ObjectType } from 'type-graphql'
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@ObjectType()
@Entity()
export class Book extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => ID)
  id: string

  @Column()
  @Field(() => String)
  title?: string
}
