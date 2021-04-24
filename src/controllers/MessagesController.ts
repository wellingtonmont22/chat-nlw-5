import {Request, Response} from "express";
import { MessegesService } from "../services/MessagesService";

export class MessagesController{
    async create(req: Request, res: Response){
        const { admin_id, text, user_id } = req.body;

        const messagesService = new MessegesService;

        const message = await messagesService.create({
            admin_id,
            text,
            user_id
        });

        return res.json(message);

    }
    async showByUser(req: Request, res: Response){
        const { id } = req.params

        const messagesService = new MessegesService;

        const list = await messagesService.listByUser(id);

        return res.json(list);
    }
}