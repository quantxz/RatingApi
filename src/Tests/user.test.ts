import request from "supertest"
import app from "../app"

describe('Testes da API', () => {

  test('Deve criar um novo usuário', async () => {
    const newUser = {
      name: 'NewUsersss',
      email: 'NewUsersss@example.com',
      nickname: "NewNickTestsss",
      born: '24/24/1997',
      password: 'NewPassword'
    };

    const response = await request(app).post('/users').send(newUser);
    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty('message', 'Usuário criado com sucesso');
    expect(response.body).toHaveProperty('user');
    expect(response.body.user).toHaveProperty('id');
    expect(response.body.user.name).toBe(newUser.name);
    expect(response.body.user.email).toBe(newUser.email);
    expect(response.body.user.nickname).toBe(newUser.nickname);
    expect(response.body.user.born).toBe(newUser.born);
    expect(response.body.user.password).toBe(newUser.password);
  });

  test('Deve retornar a lista de usuários', async () => {
    const response = await request(app).get('/users');
    expect(response.status).toBe(200);
    expect(response.body).toBeInstanceOf(Array); 
    expect(response.body.length).toBeGreaterThan(0); 

    response.body.forEach((user: any) => {
      expect(user).toHaveProperty('name');
      expect(user).toHaveProperty('nickname');
      expect(user).toHaveProperty('id');
      expect(user).toHaveProperty('born');
      expect(user).toHaveProperty('email');
    });

  });

});
