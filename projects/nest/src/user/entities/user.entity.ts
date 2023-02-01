import {Field, ObjectType} from '@nestjs/graphql';

import {DataTypes} from 'sequelize';
import {Column, HasMany, Model, Table} from "sequelize-typescript";
import {IsDefined, IsEmail, IsOptional} from "class-validator";
import {UserFriend} from "../../user-friend/entities/user-friend.entity";

@Table({ timestamps: true })
@ObjectType()
export class User extends Model {
  @IsDefined()
  @Column
  @Field(() => String, { description: 'Users First name' })
  firstName: string;

  @IsDefined()
  @Column
  @Field(() => String, { description: 'Users Last name' })
  lastName: string;

  @IsDefined()
  @IsEmail()
  @Column
  @Field(() => String, { description: 'Users email' })
  email: string;

  @IsDefined()
  @Column({ type: DataTypes.CHAR, allowNull: false })
  @Field(() => String, { description: 'Users gender' })
  gender: string;

  @IsOptional()
  @Column({ allowNull: true })
  @Field(() => String, { description: 'Users logo url' })
  imageUrl: string;

  @HasMany(() => UserFriend)
  @Field(() => Array, { description: 'Users friends' })
  friends: UserFriend[];
}
