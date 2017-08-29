'use strict'

const logger = require('../../lib/logger')
const config = require('../../../config')
const s3SignedUrl = require('../../lib/get-signed-s3-download-url')
const s3RS = require('../../lib/getfile')
const find = require('../query/find')

const fs = require('fs');
const archiver = require('archiver');
const uuidv4 = require('uuid/v4');
console.log("Hello Top");

module.exports = (req, res, next) => {
  console.log("Hello");
  find()
    .then(assets => {
      // res.redirect(s3SignedUrl(asset.url))
      debugger;
      const uuid = uuidv4();
      var q = []
      let output = fs.createWriteStream('/tmp/' + uuid + '.zip');
      let archive = archiver('zip', {
        zlib: { level: 9 } // Sets the compression level.
      });
      archive.pipe(output);
      assets.forEach(function (a) {
        console.log(a);
        if (a.type !== 'FILE') return;
        const rs = s3RS(a.url);
        //const ws = fs.createWriteStream('/tmp/' + uuid + '/' + a.url);
        //rs.pipe(ws);
        archive.append(rs, {name: a.url});
      });

      output.on('close', function() {
        console.log(archive.pointer() + ' total bytes');
        console.log('archiver has been finalized and the output file descriptor has closed.');
        res.download('/tmp/' + uuid + '.zip');
      });
    })
    .catch(next)
}
