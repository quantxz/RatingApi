import { Request, Response } from "express";
import { PostInterface, UserInterface, All } from "../../Configs/interfaces";
import { knex } from "../../Configs/knexEXport";

export const createPost = async (data: All) => {
    try {
        console.log(data);
        const user = await knex("users").select("id").where("nickname", data.nickname).first();
        const { id: userId } = user; //voce mesmo

        const postInsert: any = { // Usamos any para permitir o uso de notação dinâmica
            File: data.file,
            content: data.content,
            userId: userId,
            reply: data.reply,
        };

        if (data.reply == true || data.reply == 'true' || data.reply == 't') {
            const originalUser = await knex("users").select("id").where("nickname", data.RepleydUser).first();
            if (originalUser) {
                postInsert.replyedId = originalUser.id;
            }
        }

        const post = await knex("posts").insert(postInsert);

        return post;

    } catch (error) {
        console.error('Erro ao criar post:', error);
        throw new Error('Erro ao criar post');
    }
}
