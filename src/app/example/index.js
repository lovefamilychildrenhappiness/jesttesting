import * as path from 'path';
import { runCLI } from 'jest';

export default class Example {
    add(a,b) {
        return a + b;
    }

    async executeTest() {
        let success = false;

        try {
            const resp = await runCLI({}, ['../../spec/integration/example/.']);
            const result = resp.results.testResults.filter( (result) => path.basename(result.testFilePath) === 'example.test.js' )
            success = result.every( test => test.numFailingTests === 0)
            console.log('the resp: ',  success);
        } catch(e) {
            console.log('ERROR: ', e);
        }

        return success;
    }
}