import { Optional } from "sequelize";

export interface ITagData {
  id?: number;
  userId: number;
  tagId: number;
  data?: string;
}

export type ITag = Optional<ITagData, 'id'>;


