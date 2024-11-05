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
    album: string
}

const data: Music[] = [
    {
        type: 'genero',
        image: 'Currents.jpg',
        name: 'Currents',
        album: 'Tame Impala',
        year: 2015,
        desc: 'Alternativo'
        
    },
    {
        type: 'genero',
        image: 'X.jfif',
        name: 'X',
        album: 'Ed Sheeran',
        year: 2014,
        desc:"POP"

    },
    {
        type: 'novidades',
        image: 'Abbey_Road.jpg',
        name: 'Abbey Road',
        album: 'The Beatles',
        year: 1969,
        desc:"Rock/Rock Pop"

    },
    {
        type: 'genero',
        image: 'Graduation.jpg',
        name: 'Graduation',
        album: 'Kanye West',
        year: 2007,
        desc:"Rap"

    },
    {
        type: 'genero',
        image: 'Californication.jpg',
        name: 'Californication',
        album: 'Ret Hot Chili Peppers',
        year: 1999,
        desc: "Alternativo"
    },
    {
        type: 'genero',
        image: '50 cent.jfif',
        name: 'Get Rich or Die Tryin',
        album: '50 cent',
        year: 2003,
        desc: 'Rap'

    },
    {
        type: 'novidades',
        image: 'guns.jfif',
        name: 'Appetite for Destruction',
        album: 'Guns N Roses',
        year: 1987,
        desc: 'Rock'
    },
    {
        type: 'genero',
        image: 'Pearl Jam.jfif',
        name: 'Ten',
        album: 'Pearl Jam',
        year: 1991,
        desc: 'Grunge'

    },


    {
        type: 'genero',
        image: 'Charli Brown.jfif',
        name: 'Tâmo aí na atividade',
        album: 'Charli Brown',
        year: 2004,
        desc: 'Alternativo',

    },
    {
        type: "novidades",
        image: 'Lado B rappa.jfif',
        name: 'Lado B Lado A',
        album: 'O Rappa',
        year: 1999 ,
        desc: 'Rap Rock',
    },
    {
        type: 'genero',
        image: 'Kendrick.jfif',
        name: 'Good Kid, M.A.A.D City',
        album: 'Kendrick Lamar',
        year: 2012,
        desc: "Hip HOP"

    },
    {
        type: 'novidades',
        image: 'matue.jpg',
        name: 'Máquina do Tempo',
        album: 'Matuê',
        year: 2020, 
        desc:'Trap'
    },
    {        
        type: 'novidades',
        image: 'Nirvana.webp',
        name: 'nevermind',
        album: 'Nirvana',
        year: 1991,
        desc:"Grunge"

    },
    {
        type: 'novidades',
        image: 'The smiths.jpg',
        name: 'the queen is dead',
        album: 'The Smiths',
        year: 1986,
        desc: 'Alternativo'

    },
    {
       type: 'novidades',
        image: 'Foo_Fighters.jpg',
        name: 'the colour and the shape',
        album: 'Foo Fighters',
        year: 1997,
        desc: 'Alternativo'
  
    },
    {
       type: 'novidades',
        image: 'Tears.jfif',
        name: 'songs from the big chair',
        album: 'Tears For Fears',
        year: 1985,
        desc: 'Rock'

    },
    {
        type: 'genero',
        image: 'Cazuza.jfif',
        name: 'Ideologia',
        album: 'Cazuza',
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

