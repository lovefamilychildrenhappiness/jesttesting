import { runCLI } from 'jest';

runCLI({}, ['.']).then( resp => {
    console.log('And the resp: ', resp);
}).catch(e => console.log(e));
