import { DataTypes } from 'sequelize';
import db from '../db';

// @ts-ignore
export const User = db.define('users', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  email: {
    type: DataTypes.TEXT,
    allowNull: false,
    unique: true,
    validate: { isEmail: true },
  },
  firstname: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  lastname: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  gender: {
    type: DataTypes.CHAR,
    allowNull: false,
  },
  imageUrl: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
}, {
  updatedAt: false,
});

(async () => {
  await User.sync({alter: true})
})();
