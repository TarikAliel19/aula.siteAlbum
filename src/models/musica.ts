/* Precisaremos de 3 funções diferentes

1. Pegar todos os itens 
2. filtrar por tipo
3. Filtrar itens pelo nome


*/

import { get } from "http"
type MusicType =  'genero'| 'novidades'

type Music = {
    type: MusicType,
    image: string,
    name: string,
    year: number,
    desc: string
}

const data: Music[] = [
    {
        type: 'genero',
        image: 'Currents .jpg',
        name: 'Currents',
        year: 2015,
        desc: 'Alternativo'
        
    },
    {
        type: 'genero',
        image: ' X.jfif',
        name: ' Ed Sheeran',
        year: 2014,
        desc:"POP"

    },
    {
        type: 'novidades',
        image: ' Abbey_Road.jpg',
        name: ' The Beatles',
        year: 1969,
        desc:"Rock/Rock Pop"

    },
    {
        type: 'genero',
        image: ' Graduation.jpg',
        name: ' Kanye West',
        year: 2007,
        desc:"Rap"

    },
    {
        type: 'genero',
        image: ' Californication.jpg',
        name: ' Ret Hot Chili Peppers',
        year: 1999,
        desc: "Alternativo"
    },
    {
        type: 'genero',
        image: '50 cent.jfif',
        name: ' 50 cent',
        year: 2003,
        desc: 'Rap'

    },
    {
        type: 'novidades',
        image: 'guns.jfif',
        name: ' Guns N Roses',
        year: 1987,
        desc: 'rock'
    },
    {
        type: 'genero',
        image: ' Pearl Jam.jfif',
        name: ' Pearl Jam',
        year: 1991,
        desc: 'grunge'

    },


    {
        type: 'genero',
        image: 'Charli Brown.jfif',
        name: ' Charli Brown',
        year: 2004,
        desc: 'Alternativo',

    },
    {
        type: "novidades",
        image: ' Lado B rappa.jfif',
        name: ' O Rappa',
        year: 1999 ,
        desc: 'Rap Rock',
    },
    {
        type: 'genero',
        image: ' Kendrick.jfif',
        name: ' Kendrick Lamar',
        year: 2012,
        desc: "Hip HOP"

    },
    {
        type: 'novidades',
        image: ' matue.jpg',
        name: 'Matuê',
        year: 2020, 
        desc:'Trap'
    },
    {        
        type: 'novidades',
        image: 'Nirvana.webp',
        name: 'Nirvana',
        year: 1991,
        desc:"grunge"

    },
    {
        type: 'novidades',
        image: ' The smiths.jpg',
        name: 'The Smiths',
        year: 1986,
        desc: 'Alternativo'

    },
    {
       type: 'novidades',
        image: 'Foo_Fighters.jpg',
        name: 'Foo Fighters',
        year: 1997,
        desc: 'Alternativo'
  
    },
    {
       type: 'novidades',
        image: 'Tears.jfif',
        name: 'Tears For Fears',
        year: 1985,
        desc: 'rock'

    },
    {
        type: 'genero',
        image: 'Cazuza.jfif',
        name: 'Cazuza',
        year: 1988,
        desc:'rock'

    },


] 

export const Music = {
    /*Vamos retornar todos os intens para exibir na página principal essa função vao retornar data que é onde estão nossos itens*/
    getAll:()=>{
        return data
    },
    getFromType:(type:MusicType): Music[] =>{
        return data.filter(item =>{
            /*
            Se o item for igual ao type que eu recebi no meu parametro(MusicType)então retorne true para esse item
            */
            if(item.type == type){
                return true
            } else {
                return false
            }
        })
    },
    getFromName:(name:string): Music[] =>{
        return data.filter(item =>{
            if(item.name.toLowerCase().indexOf(name.toLowerCase()) > -1){
                return true
            }else{
                return false
            }
        })
    }
}

