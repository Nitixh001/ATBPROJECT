const multer = require("multer");
const path = require("path");
const storage = multer.diskStorage({
    destination: function (req,file,cb){
        cb(null,"uploads/");
    },
    filename: function (req,file,cb){
    const uniqueName = Date.now()+path.extname(file.originalname);
    cb(null, uniqueName);
    },
    });
    const fileFilter = (req, file, cb)=>{
        const allowedTypes = /jpeg|jpg|png|gif/;
       const ext = path.extname(file.originalname).toLowerCase();
       if(allowedTypes.test(ext)){
        cb(null,true);
       }else{
        cb(new Error("Only Image Types is Allowed"));
       }
    };
    module.exports = multer({storage, fileFilter});