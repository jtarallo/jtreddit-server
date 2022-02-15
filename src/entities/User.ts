import { Field, ObjectType } from "type-graphql";
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

@ObjectType()
@Entity()
export class User extends BaseEntity {
  @Field(() => Date)
  @CreateDateColumn()
  createdAt: Date;

  @Field()
  @Column({ unique: true })
  email!: string;

  @Field()
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column({ type: "text" })
  password!: string;

  @Field(() => Date)
  @UpdateDateColumn()
  updatedAt: Date;

  @Field()
  @Column({ unique: true })
  username!: string;
}
