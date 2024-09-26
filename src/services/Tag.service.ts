import TagsModel from '../database/models/TagModel'
import UserModel from '../database/models/UserModel';
import { ITag } from '../interfaces/ITag';


class TagService {
  public static async insertTags(data: ITag[]) {
    const versionRetrn = await UserModel.increment({ version: 1}, { where: { id: data[0].userId }})
    console.log('version ----------- ', versionRetrn);
      await TagsModel.bulkCreate(data, {
        updateOnDuplicate: ['data'],
        validate: true // valida os dados antes de inserir
      });
      return { message: 'Informações salvas' };
  }
}

export default TagService; 
