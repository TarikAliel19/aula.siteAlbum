import { Request, Response } from 'express'
import { Music } from '../models/musica'
import { createMenuObject } from '../helpers/createMenuObjects'

export const search = (req: Request, res: Response)=>{
    let query: string = req.query.q as string
    let list = Music.getFromName(query)
    res.render('pages/pages',{
        menu:createMenuObject(''),
        list
    })
}