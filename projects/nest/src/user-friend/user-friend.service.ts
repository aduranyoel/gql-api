import { Injectable } from '@nestjs/common';
import { CreateUserFriendInput } from './dto/create-user-friend.input';
import { UpdateUserFriendInput } from './dto/update-user-friend.input';

@Injectable()
export class UserFriendService {
  create(createUserFriendInput: CreateUserFriendInput) {
    return 'This action adds a new userFriend';
  }

  findAll() {
    return `This action returns all userFriend`;
  }

  findOne(id: number) {
    return `This action returns a #${id} userFriend`;
  }

  update(id: number, updateUserFriendInput: UpdateUserFriendInput) {
    return `This action updates a #${id} userFriend`;
  }

  remove(id: number) {
    return `This action removes a #${id} userFriend`;
  }
}
