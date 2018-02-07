const db = require('../db');
const Promise = require('bluebird');
const multiparty = Promise.promisifyAll(require('multiparty'), {multiArgs: true});
const AWS = require('aws-sdk');
AWS.config.setPromisesDependency(Promise);

const {S3_BUCKET_NAME, AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY} = process.env;

AWS.config = {
  region: 'us-east-1',
  aws_access_key_id: AWS_ACCESS_KEY_ID,
  aws_secret_access_key: AWS_SECRET_ACCESS_KEY
}

const ParseJson = data => {
  if (data instanceof Object === true) {
    return data;
  }
  try {
    return JSON.parse(data);
  } catch (e) {
    return {};
  }
}

const updateRecords = (current, updated) => JSON.stringify(
  Object.assign({}, ParseJson(current), updated)
)

const UploadToS3 = (req, res) => {
  const form = new multiparty.Form();
  const s3bucket = new AWS.S3();
  const recordsIndex = {};
  const fileTimestamp = new Date().getTime()
  const bucketName = `${S3_BUCKET_NAME}/patients/${req.params.id}`;
  form.on('part', file => {
    if (file.name !== 'files') {
      recordsIndex[file.name] = {
        name: file.name,
        src: `patients/${req.params.id}/${file.name}`,
        type: file.headers['content-type'],
        updatedAt: fileTimestamp
      };
      const params = {
        Key: file.name,
        ContentType: file.headers['content-type'],
        Bucket: bucketName,
        Body: file,
        ACL: 'public-read'
      };
      s3bucket.upload(params, (err, data) => {
        if (err)
          console.log('Error uploading data: ', err);
      });
    } else {
      file.resume();
    }
  });

  form.on('close', () => {
    db.Patient.findById(req.params.id).then(patient => {
      let records = updateRecords(patient.records, recordsIndex);
      patient.updateAttributes({records}).then(ok => res.json(records))
    })
  })
  form.parse(req);
}

module.exports = {
  UploadToS3
}
