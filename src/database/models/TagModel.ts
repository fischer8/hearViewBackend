import { Model, INTEGER, STRING } from 'sequelize';
import db from '.'
import UserModel from './UserModel';

class TagModel extends Model {
  declare id: number;
  declare data: string;
}

TagModel.init({
  tagId: {
    type: INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: false,
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  },
  userId: {
    type: INTEGER,
    allowNull: false,
  },
  data: {
    type: STRING,
    allowNull: true,
  },
}, {
  sequelize: db,
  modelName: 'tags',
  timestamps: false,
  underscored: true,
});

TagModel.belongsTo(UserModel, { foreignKey: 'userId', as: 'user' });

export default TagModel;

