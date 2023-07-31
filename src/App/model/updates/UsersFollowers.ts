import { Request, Response } from "express";
import { UserInterface } from "../../../Configs/interfaces";
import { knex } from "../../../Configs/knexEXport";

export const updateUserStars = async (data: UserInterface) => {
    try {
        const currentFollowers = await knex('users').where({ nickname: data.nickname }).select('followers').first();
  
        if (currentFollowers) {
        const newFollowers = currentFollowers.followers + 1;


        await knex('users').where({ nickname: data.nickname }).update({ followers: newFollowers });
        }

    } catch(error) {
        console.error('Erro ao criar usuário:', error);
    }
    
}