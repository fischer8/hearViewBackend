import { Model, INTEGER, STRING } from 'sequelize';
import db from '.'
import UserModel from './UserModel';

class TagModel extends Model {
  declare id: number;
  declare tagId: number;
  declare userId: number;
  declare data: string;
}

TagModel.init({
  id: {
    type: INTEGER,
    primaryKey: true,
    autoIncrement: true,
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  },
  tagId: {
    type: INTEGER,
    allowNull: false,
    unique: true,
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
    field: 'tag_id'
  },
  userId: {
    type: INTEGER,
    allowNull: false,
    field: 'user_id'
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

TagModel.belongsTo(UserModel, { foreignKey: 'user_id', as: 'user' });

export default TagModel;

