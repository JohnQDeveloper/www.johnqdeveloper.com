import uploadToBunny from 'upload-to-bunny';

import fs from 'node:fs';

const api_key = fs.readFileSync('./bunny-api-key.txt', 'utf8');

await uploadToBunny('./public', '', {
  storageZoneName: 'jqdeveloper-com',
  cleanDestination: true,
  accessKey: api_key,
  maxConcurrentUploads: 10,
  region: ''
});

const url = 'https://api.bunny.net/pullzone/3531648/purgeCache';
const options = {method: 'POST', headers: {'content-type': 'application/json', 'AccessKey': api_key}};

fetch(url, options)
  .then(res => res.json())
  .then(json => console.log(json))
  .catch(err => console.error(err));

  console.log("Upload completed to www.johnqdeveloper.com and CDN cache should be purged.")
