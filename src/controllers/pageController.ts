import { Request, Response } from 'express'
import { createMenuObject } from '../helpers/createMenuObjects'

export const home = (req:Request, res:Response) =>{
    
    res.render('pages/pages',{
      menu:createMenuObject('all'),
        banner:{
            title:'Todos os albuns',
            background:'pexels-vishnurnair-1105666.jpg'
        }
    })
}

export const genero = (req:Request, res:Response) =>{
    res.render('pages/pages',{
        menu:createMenuObject('genero'),
        banner:{
            title:'Gêneros',
            background:'bandas.jpg'
        }
    })
}
export const novidades = (req:Request, res:Response) =>{
    res.render('pages/pages',{
        menu:createMenuObject('novidades'),
        banner:{
            title:'Novidades',
            background:'shows.jpg',
            title2: 'para acessar agora!'
        }
    })
}
