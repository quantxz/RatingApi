import { Request, Response, Router } from "express";
import UserControllers from "./App/Controllers/UsersControllers";
import PostControllers from "./App/Controllers/PostControllers";
import upload from "./Configs/imageConfig";
import SwaggerUi from "swagger-ui-express";
import SwagggerDocs from "./Configs/swagger/swagger.json"
import { authMiddleware } from "./Configs/middlewares/autentication";
const routes: Router = Router();

routes.get("/users",authMiddleware, UserControllers.showAll)
routes.post("/users", UserControllers.createUser)
routes.post("/users/followers/:nickname",authMiddleware, UserControllers.updateUserFollowers)

routes.post("/posts", upload.single("File"), authMiddleware, PostControllers.createPost)
routes.get("/posts",authMiddleware, PostControllers.showAll)
routes.post("/posts/stars/:id",authMiddleware, PostControllers.updatePostStars)

routes.use("/docs", SwaggerUi.serve, SwaggerUi.setup(SwagggerDocs))


export default routes; 
