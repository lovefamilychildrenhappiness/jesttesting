import { runCLI } from 'jest';

runCLI({}, ['example.test.js']).then( data => {
    console.log('And the resp: ', resp);
}).catch(e => console.log(e));
