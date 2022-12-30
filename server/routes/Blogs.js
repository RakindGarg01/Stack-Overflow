import Express from "express";
import { PostBlog , getAllBlogs , deleteBlog, voteBlog} from '../controllers/Blogs.js'
const router = Express.Router()
router.post('/Post' , PostBlog)
router.get('/Get' , getAllBlogs)
router.delete('/delete/:id' , deleteBlog);
router.patch('/vote/:id' , voteBlog)

export default router;