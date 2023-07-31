import { Request, Response } from "express";
import { createPost } from "../model/Posts";
import { updatePostStars } from "../model/updates/PostStars";
import { knex } from "../../Configs/knexEXport";

class PostControllers {

    public async showAll(req: Request, res: Response) {
        const result = await knex("posts").select("*")
        
        return res.status(200).json(result)
    
    }

    public async createPost(req: Request, res: Response) {
        try {
            const nickname = req.body.nickname
            const content = req.body.content
            const file = req.file
            const reply: boolean | string = req.body.reply

            if (reply == true || reply == 'true' || reply == 'f') {
                const RepleydUser = req.body.replyNickname
                
                const data: any = {
                    nickname,
                    content,
                    file,
                    RepleydUser,
                    reply
                }
                
                const result = await createPost(data)
                
                return res.status(201).json({ 
                    message: "Post criado com sucesso",
                    result: result
                });

            } else {
                const data: any = {
                    nickname,
                    content,
                    file,
                    RepleydUser: null
                }
                
                const result = await createPost(data)
                
                return res.status(201).json({ 
                    message: "Post criado com sucesso",
                    result: result
                });
            }


        } catch(error) {
            console.log(error)
            return res.status(500).json({
                message: "o seguinte erro ocorreu: " + error 
            })
        }
    }
    
    public async updatePostStars(req: Request, res: Response) {
        try {
            const id = req.params

            const data: any = id

            const result = await updatePostStars(data)
    
            return res.status(200).json({ message: "estrelas atualizadas", data: result });

        } catch(error) {
            console.log(error)
            return res.status(500).json({
                message: "o seguinte erro ocorreu: " + error 
            })
        }
    }


}

export default new PostControllers