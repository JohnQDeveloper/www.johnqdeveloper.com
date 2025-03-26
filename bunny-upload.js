import uploadToBunny from 'upload-to-bunny';

import fs from 'node:fs';

const api_key = fs.readFileSync('./bunny-api-key.txt', 'utf8');

console.log(api_key);

await uploadToBunny('./public', '', {
  storageZoneName: 'jqdeveloper-com',
  cleanDestination: true,
  accessKey: api_key,
  maxConcurrentUploads: 10,
  region: ''
});
