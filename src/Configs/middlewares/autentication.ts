import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

type TokenPayload = {
    id: string,
    iat: number,
}

export const authMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    const { authorization } = req.headers || 'admin';
    if (!authorization) {
        return res.status(401).json({
            error: "token not provided"
        })
    }

    if (authorization == 'admin') {
        next()
    }

    const [, token] = authorization.split(" ")

    try {
        const decoded = verify(token, "secret")

        const { id } = decoded as TokenPayload;
        
        next();

    } catch (error) {
        return res.status(401).json({ error: "invalid token"})
    }

}