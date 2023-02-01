import {Field, Int, ObjectType} from '@nestjs/graphql';
import {BelongsTo, Column, ForeignKey, Model, Table} from "sequelize-typescript";
import {User} from "../../user/entities/user.entity";

@ObjectType()
@Table({ timestamps: false })
export class UserFriend extends Model {
  @ForeignKey(() => User)
  @Column
  userId: number;

  @Field(() => User, { description: 'Example field (placeholder)' })
  @BelongsTo(() => User)
  user: User;

  @Field(() => Int, { description: 'Example field (placeholder)' })
  @Column
  friend: number;
}