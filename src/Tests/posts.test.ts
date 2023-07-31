import request from "supertest"
import app from "../app"
import path from "path"

describe("", <T> () => {

    test("adiciona um novo post", async () => {
        const post = {
            File: path.join(__dirname + "/uploads/39a1a4bc-c961-4ba8-b9b0-e476e1e772d0.png")/* imagem não esta indo */,
            content: "hello",
            nickname: "NewNickTests"
        }
        
        const response = await request(app).post("/posts").send(post) 
        expect(response.status).toBe(201)
    })


    test("retorna os posts ja feitos", async () => {
        const result = await request(app).get("/posts") 

        expect(result.status).toBe(200)
        result.body.forEach((user: T) => {
            expect(user).toHaveProperty("id")
        })
    })

})