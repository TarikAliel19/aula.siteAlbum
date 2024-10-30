import { genero, novidades } from "../controllers/pageController"

type menuOptions = '' | 'all' | 'genero' | 'novidades'

export const createMenuObject = (activeMenu:menuOptions) =>{
    let returnObject={
        all:false,
        genero:false,
        novidades:false
    }
    if(activeMenu !== ''){
        returnObject[activeMenu] = true
    } 
    return returnObject
}