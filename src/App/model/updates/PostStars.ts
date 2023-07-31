import { Request, Response } from "express";
import { PostInterface } from "../../../Configs/interfaces";
import { knex } from "../../../Configs/knexEXport";

export const updatePostStars = async (data: PostInterface) => {
    try {
        const currentStars = await knex('posts').where({ id: data.id }).select('stars').first();
  
        if (currentStars) {
        const newStars = currentStars.stars + 1;


        await knex('posts').where({ id: data.id }).update({ stars: newStars });
        }

    } catch(error) {
        console.error('Erro ao criar usuário:', error);
    }
    
}