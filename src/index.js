import jest from 'jest';

const options = {
    projects: './example.test.js',
    silent: true,
};

jest.runCLI(options, options.projects)
    .then((success) => {
        console.log(success);
    })
    .catch((failure) => {
        console.error(failure);
    });