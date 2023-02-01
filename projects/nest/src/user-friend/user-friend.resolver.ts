import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { UserFriendService } from './user-friend.service';
import { UserFriend } from './entities/user-friend.entity';
import { CreateUserFriendInput } from './dto/create-user-friend.input';
import { UpdateUserFriendInput } from './dto/update-user-friend.input';

@Resolver(() => UserFriend)
export class UserFriendResolver {
  constructor(private readonly userFriendService: UserFriendService) {}

  @Mutation(() => UserFriend)
  createUserFriend(@Args('createUserFriendInput') createUserFriendInput: CreateUserFriendInput) {
    return this.userFriendService.create(createUserFriendInput);
  }

  @Query(() => [UserFriend], { name: 'userFriend' })
  findAll() {
    return this.userFriendService.findAll();
  }

  @Query(() => UserFriend, { name: 'userFriend' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.userFriendService.findOne(id);
  }

  @Mutation(() => UserFriend)
  updateUserFriend(@Args('updateUserFriendInput') updateUserFriendInput: UpdateUserFriendInput) {
    return this.userFriendService.update(updateUserFriendInput.id, updateUserFriendInput);
  }

  @Mutation(() => UserFriend)
  removeUserFriend(@Args('id', { type: () => Int }) id: number) {
    return this.userFriendService.remove(id);
  }
}
