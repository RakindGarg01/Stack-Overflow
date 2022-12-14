import express from 'express'

import { AskQuestion } from '../controllers/Questions.js' 
import { getAllQuestions } from '../controllers/Questions.js' 
import { deleteQuestion , voteQuestion } from '../controllers/Questions.js' 
// , getAllQuestions, , 
import auth from '../middlewares/auth.js'

const router = express.Router()

router.post('/Ask',auth, AskQuestion)
router.get('/get', getAllQuestions)
router.delete('/delete/:id',auth, deleteQuestion );
router.patch('/vote/:id',auth, voteQuestion);

export default router