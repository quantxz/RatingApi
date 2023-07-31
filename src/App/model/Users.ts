import { UserInterface } from '../../Configs/interfaces';
import { knex } from '../../Configs/knexEXport';

export const createUser = async (data: UserInterface) => {
      try {
        const randomNumber = Math.floor(Math.random() * (988799 - 100 + 1)) + 100;
        const user = await knex('users').insert({
          id: randomNumber,
          name: data.name,
          nickname: data.nickname,
          email: data.email,
          password: data.password,
          born: data.born,
          followers: data.followers,
          roles: data.roles,
        });
    
        // Consultar novamente o banco de dados para obter os dados completos do usuário criado
        const createdUser = await knex('users').select('*').where('id', randomNumber).first();
    
        return createdUser;
      } catch (error) {
        console.error('Erro ao criar usuário:', error);
        throw new Error('Erro ao criar usuário');
      }
};
    