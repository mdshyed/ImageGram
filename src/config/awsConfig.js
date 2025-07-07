import { S3Client } from "@aws-sdk/client-s3";


import { AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY, AWS_REGION} from "./serverConfig.js";

 export const s3 = new S3Client({

    region: AWS_REGION,
    accessKeyId: AWS_ACCESS_KEY_ID,
    secretAccessKey: AWS_SECRET_ACCESS_KEY,
    
});

