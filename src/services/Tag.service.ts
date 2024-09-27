import TagModel from '../database/models/TagModel'
import UserModel from '../database/models/UserModel';
import VersionModel from '../database/models/VersionModel';
import ErrorStatus from '../utils/errorStatus';
import { ITag } from '../interfaces/ITag';


class TagService {
  public static async insert(data: ITag[], id:number) {
    const version = await VersionModel.increment({ version: 1}, { where: {id: 1}})
    const versionRetrn = await UserModel.increment({ version: 1}, { where: { id: id }})
    console.log('version ----------- ', version);
    console.log('versionsadjksafh ----------- ', versionRetrn);
    console.log("datatatata   ", data)
      await TagModel.bulkCreate(data, {
        updateOnDuplicate: ['data'],
        validate: true // valida os dados antes de inserir
      });
      console.log("salvou em bulk ", data)
      return { message: 'Informações salvas' };
  }

  public static async getAll(){
    const data = TagModel.findAll({order: [['tagId', 'ASC']]});
    return data;
  }
  
  public static async getVersion(){
    const version = await VersionModel.findByPk(1,{ attributes: ['version']})
    console.log('version get version', version)
    return version;
  }

  public static async delete(id: number){
    const deleted = await TagModel.destroy({where: { tagId: id}})
    if(!deleted){
      throw new ErrorStatus(404, 'Tag not found'); 
    }
    return id;
  }
}

export default TagService; 
