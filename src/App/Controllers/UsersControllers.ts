import { Request, Response } from "express";
import { createUser } from "../model/Users";
import { updateUserStars } from "../model/updates/UsersFollowers";
import { knex } from "../../Configs/knexEXport";
import { sign } from "jsonwebtoken";

class UserControllers {

    public async showAll(req: Request, res: Response) {
        const result = await knex("users").select("*")
        return res.status(200).json(result)
    
    }

    public async createUser<T>(req: Request, res: Response) {
        try {
            const { ...data } = req.body

            const result = await createUser(data)
            
            const id = await knex("users").select("id").where("nickname", 
            data.nickname)

            const token = sign({id: id}, process.env.SECRET as string,)
            
            const resResul: T[] = [
                id,
                data.email, 
                data.password
            ]  

            return res.status(201).json({
                message: "Usuário criado com sucesso",
                user:  resResul,
                token: token
            })
            
            

        } catch(error) {
            console.log(error)
        }
    }

    public async updateUserFollowers(req: Request, res: Response) {
        try {
            const nickname: any = req.params

            const result = await updateUserStars(nickname)
    
            return res.status(200).json({
                message: "seguidores atualizados " + result
            })

        } catch(error) {
            console.log(error)
        }
    }
}

export default new UserControllers