import { Pagination } from '../../domain/pagination';
import { User } from '../../domain/user';
import { addFriend, createUser, findFriends, getUser, getUsersPage, updateUser } from '../../infrastructure/users.service';

interface Input<T> {
  input: T;
}

interface UserInput {
  userId: User['id'];
}

export interface AddFriend {
  user: number;
  friend: number;
}

interface FriendQueryParams {
  dataValues: User;
}

export default {
  Query: {
    users: (_root: any, { input }: Input<Pick<Pagination, 'page' | 'limit'>>) => getUsersPage(input),
    user: (_root: any, { userId }: UserInput) => getUser(userId),
  },
  Mutation: {
    createUser: (_root: any, { input }: Input<Partial<User>>) => createUser(input),
    updateUser: (_root: any, { input }: Input<Partial<User>>) => updateUser(input),
    addFriend: (_root: any, { input }: Input<AddFriend>) => addFriend(input),
  },
  User: {
    friends: ({ dataValues: { id } }: FriendQueryParams) => findFriends(id),
  }
};
