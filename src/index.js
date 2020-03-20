import * as path from 'path';
import { runCLI } from 'jest';

( async () => {
    try {
        const resp = await runCLI({}, ['.']);
        const result = resp.results.testResults.filter( (result) => path.basename(result.testFilePath) === 'example.test.js' )
        const success = result.every( test => test.numFailingTests === 0)
        console.log('the resp: ',  success);
    } catch(e) {
        console.log('ERROR: ', e);
    }
})()