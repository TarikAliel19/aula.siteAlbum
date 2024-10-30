import { Router } from "express"
import * as PageController from '../controllers/pageController'
import * as SearchController from '../controllers/searchController'
const router = Router()


router.get('/',PageController.home) 
router.get('/genero',PageController.genero) 
router.get('/novidades',PageController.novidades) 
router.get('/search',SearchController.search) 
    



export default router