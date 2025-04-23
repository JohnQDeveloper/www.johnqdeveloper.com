import uploadToBunny from 'upload-to-bunny';

import fs from 'node:fs';

const upload_key = fs.readFileSync('./bunny-api-key.txt', 'utf8');
const api_key = fs.readFileSync('./bunny-rest-api-key.txt', 'utf8');

await uploadToBunny('./public', '', {
  storageZoneName: 'jqdeveloper-com',
  cleanDestination: true,
  accessKey: upload_key,
  maxConcurrentUploads: 10,
  region: ''
});

const url = 'https://api.bunny.net/pullzone/3531648/purgeCache';
const options = {method: 'POST', headers: {'content-type': 'application/json', 'AccessKey': api_key}};

fetch(url, options)
  .then(function(response) {
    console.log(response.status); // Will show you the status
    if (response.status == '204') {
        console.log("Cache was purged per API spec (HTTP 204)");
        return;
    }

    res => res.json()
  })
  .then(json => console.log(json))
  .catch(err => console.error(err));

  console.log("Upload completed to www.johnqdeveloper.com and CDN cache should be purged.")
