import { Module } from '@nestjs/common';
import { UserFriendService } from './user-friend.service';
import { UserFriendResolver } from './user-friend.resolver';
import {SequelizeModule} from "@nestjs/sequelize";
import {UserFriend} from "./entities/user-friend.entity";

@Module({
  providers: [UserFriendResolver, UserFriendService],
  imports: [SequelizeModule.forFeature([UserFriend])],
})
export class UserFriendModule {}
