import multer from "multer"
import crypto from "crypto"
import path from "path"

const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, "uploads/")
    },
    filename: function(req, file, cb){
        cb(null, crypto.randomUUID() + path.extname(file.originalname))
    }
})

const upload = multer({ storage })

export default upload