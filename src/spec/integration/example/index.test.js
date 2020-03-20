import Example from '../../../app/example/index';

describe('#add', () => {
    it('adds two numbers', async () => {
        const example = new Example();
        expect(example.add(1,2)).toBe(3);
    })
})