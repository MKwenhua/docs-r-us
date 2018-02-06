const Promise = require('bluebird');
const fs = Promise.promisifyAll(require('fs'));
const multiparty = require('multiparty');
const AWS = require('aws-sdk');
const {
  S3_BUCKET_NAME,
  AWS_ACCESS_KEY_ID,
  AWS_SECRET_ACCESS_KEY
} = process.env;

AWS.config = {
  region: 'us-east-1',
  aws_access_key_id: AWS_ACCESS_KEY_ID,
  aws_secret_access_key: AWS_SECRET_ACCESS_KEY
}

const ParseJson = data => {
   try {
     return JSON.parse(data);
   } catch(e) {
      return {};
   }
}

const updateRecords = (current, updated) => JSON.stringify(
  Object.assign({}, ParseJson(current), updated)
)


module.exports = (db, io) => {

  const uploadToS3 = (req, res) => {

    var form = new multiparty.Form();
    const s3bucket = new AWS.S3();
    const recordsIndex = {};
    form.on('part',(file) => {
      let bucket = `${S3_BUCKET_NAME}/patients/${req.params.id}`;
      recordsIndex[file.name] = {
        name: file.name,
        src: `${bucket}/${file.name}`,
        type: file.type,
        modified: file.lastModified
      };
      const params = {
        Key: file.name,
        ContentType: file.type,
        Bucket: bucket,
        Body: file,
        ACL: 'public-read'
      };
      s3bucket.upload(params, (err, data) => {
        if (err) {
          console.log('Error uploading data: ', err);
        } else {
         db.Patient.findById(req.params.id).then(patient => {
           let records = updateRecords(patient.records, recordsIndex);
           patient.updateAttributes({
              records
            }).then(ok => {
              res.json(records);
            })
         })
        }
      });

    });

    form.parse(req);
  }

  return {
    uploadToS3
  }
}
