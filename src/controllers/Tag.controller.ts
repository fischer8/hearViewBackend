import { Response, Request } from 'express';
import TagService from '../services/Tag.service';

class TagController {
  public static async insert(req: Request, res: Response) {
    const { data, id } = req.body;
    const message = await TagService.insert(data, id);
    return res.status(200).json(message);
  }
  public static async delete(req: Request, res: Response) {
    const message = await TagService.delete(req.body);
    return res.status(200).json(message);
  }
  public static async getAll(req: Request, res: Response) {
    const message = await TagService.getAll();
    return res.status(200).json(message);
  }

  public static async getVersion(req: Request, res: Response) {
    const message = await TagService.getVersion();
    return res.status(200).json(message);
  }

}

export default TagController;

