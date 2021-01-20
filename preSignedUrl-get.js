let AWS = require('aws-sdk');
// config情報の取得
AWS.config.loadFromPath('./config.json');

// s3 sdkの設定
let s3 = new AWS.S3({
    apiVersion: '2006-03-01'
})

bucket = process.argv[2];
key = process.argv[3];
expires = process.argv[4];

let params = {
    Bucket: bucket,
    Key: key,
    Expires: parseInt(expires)
}

console.log(params)

let url = s3.getSignedUrl('getObject', params);
console.log('The URL is', url);