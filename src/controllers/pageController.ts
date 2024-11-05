import { Request, Response } from 'express'
import { createMenuObject } from '../helpers/createMenuObjects'
import { Music } from '../models/musica' //importando a model

export const home = (req:Request, res:Response) =>{
    let list = Music.getAll()
    res.render('pages/pages',{
      menu:createMenuObject('all'),
        banner:{
            title:'Todos os albuns',
            background:'pexels-vishnurnair-1105666.jpg'
        },
        list
    })
}

export const genero = (req:Request, res:Response) =>{
    let list = Music.getFromType("genero")
    res.render('pages/pages',{
        menu:createMenuObject('genero'),
        banner:{
            title:'Gêneros',
            background:'bandas.jpg'
        },
        list
    })
}
export const novidades = (req:Request, res:Response) =>{
    let list = Music.getFromType("novidades")
    res.render('pages/pages',{
        menu:createMenuObject('novidades'),
        banner:{
            title:'Novidades',
            background:'shows.jpg',
            title2: 'para acessar agora!'
        }, 
        list
    })
}
