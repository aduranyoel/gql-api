import { DataTypes, Sequelize } from 'sequelize';
import db from '../db';

export const UserFriend = db.define('user_friends', {
  user: {
    type: DataTypes.INTEGER,
  },
  friend: {
    type: DataTypes.INTEGER,
  },
}, { updatedAt: false });


(async () => {
  await UserFriend.sync({alter: true})
})();
