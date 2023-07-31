import request from "supertest"
import app from "../app"
import { response } from "express"

describe("testes de atualizações da API", () => {
    test("Deve atualizar o total de estrelas do post", async () => {
        const id: number = 1
        const requests = await request(app).post(`/posts/stars/${id}`)
        expect(requests.status).toBe(200)
        expect(requests.body).toHaveProperty("message")
        
    })

    test("Deve atualizar o total de seguidores do usuario", async () => {
        const nickname: string = "NewNickTestss"
        const requests = await request(app).post(`/users/followers/${nickname}`)
        expect(requests.status).toBe(200)
        expect(requests.body).toHaveProperty("message")

    })
})