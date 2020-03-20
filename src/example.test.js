import Example from './example';

describe('#add', () => {
    it('adds two numbers', async () => {
        const example = new Example();
        expect(example.add(1,2)).toBe(3);
    })
})