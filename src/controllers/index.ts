
import { Request, Response } from 'express'

export const getGame = (req: Request, res: Response) => {
    res.render("game")
}

