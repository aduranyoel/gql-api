import { Op } from 'sequelize';
import { User } from '../data/models/user';
import { User as UserDomain } from '../domain/user';
import { Pagination } from '../domain/pagination';
import { AddFriend } from '../graphql/resolvers/users.resolver';
import { UserFriend } from '../data/models/userFriends';

const DEFAULT_LIMIT = 10;

export async function getUsersPage(pageInfo?: Pick<Pagination, 'page' | 'limit'>) {
  const { page = 1, limit = DEFAULT_LIMIT } = pageInfo || {};
  const { count, rows } = await User.findAndCountAll({
    offset: (page - 1) * limit,
    limit,
  });

  const totalPages = Math.max(Math.ceil(count / limit), 1);

  return { rows, pagination: new Pagination(page, limit, count, Math.min(page + 1, totalPages), totalPages) };
}

export function getUser(userId: UserDomain['id']) {
  return User.findByPk(userId);
}

export function createUser(user: Partial<UserDomain>) {
  return User.create(user);
}

export function updateUser(user: Partial<UserDomain>) {
  return User.update(user, { where: { id: user.id } });
}

export async function addFriend(addFriend: AddFriend) {
  const { user, friend } = addFriend;

  if (user === friend) {
    throw new Error('Users cannot add themselves as friends');
  }

  await UserFriend.create({ user, friend, userId: user, friendId: friend });
}

export async function findFriends(userId: number) {
  const res = await UserFriend.findAll({
    where: { user: userId }
  });
  return User.findAll({
    where: {
      id: {
        [Op.in]: res.map(m => m.dataValues.friend)
      }
    }
  });
}
