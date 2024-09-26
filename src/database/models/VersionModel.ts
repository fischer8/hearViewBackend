import { Model, INTEGER } from 'sequelize';
import db from '.'

class VersionModel extends Model {
  declare id: number;
  declare version: number;
}

VersionModel.init({
  id: {
    type: INTEGER,
    primaryKey: true,
    autoIncrement: true,
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  },
  version: {
    type: INTEGER,
    allowNull: false,
    defaultValue: 1,
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  }
}, {
  sequelize: db,
  modelName: 'version',
  timestamps: false,
  underscored: true,
});


export default VersionModel;

