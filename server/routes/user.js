import  Express  from "express";
import { login, signup } from "../controllers/auth.js";
import { getAllUsers , updateProfile , followUser} from "../controllers/users.js";
import auth from '../middlewares/auth.js'
const router = Express.Router();

router.post('/signup' , signup);
router.post('/login' , login);
router.get('/getAllUsers' , getAllUsers);
router.patch('/update/:id' , auth , updateProfile)
router.patch('/blog' , followUser)
export default router;
