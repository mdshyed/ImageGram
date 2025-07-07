import multer from "multer";
import multerS3 from "multer-s3";
import { s3 } from "./awsConfig.js";
import { AWS_BUCKET_NAME} from "./serverConfig.js";


 export const s3uploader = multer({
    storage: multerS3({
        s3: s3,
        bucket: AWS_BUCKET_NAME,
        key: function(req, file, cb){
            console.log(file)
            const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1E9);
            cb(null, file.fieldname + "-" + uniqueSuffix + "." + file.mimetype.split("/")[1]);
        }
      
    })
});