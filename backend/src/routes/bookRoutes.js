import express from "express"
import { createBook, deleteBook, getAllBooks, getBookByID, updateBook } from "../controllers/bookController.js"

const router=express.Router()

router.get("/",getAllBooks)
router.get("/:id",getBookByID)
router.post("/",createBook)
router.put("/:id",updateBook)
router.delete("/:id",deleteBook)
export default router