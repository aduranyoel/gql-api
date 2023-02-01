import { CreateUserFriendInput } from './create-user-friend.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateUserFriendInput extends PartialType(CreateUserFriendInput) {
  @Field(() => Int)
  id: number;
}
