import { Router } from "express"
const router = Router()


router.get('/',(req,res) =>{
    res.send("frase aleatória - rota home")
})


export default router