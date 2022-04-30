const Spiderman = require('./../app/spiderman')

describe("Unit Tests for Spiderman class", () => {
    test('1) Create an spiderman object', () => {
        const TobeyMaguire = new Spiderman("SpiderMan", 17, "Tobey Maguire", 3, "Sony")
        expect(TobeyMaguire.heroname).toBe("SpiderMan")
        expect(TobeyMaguire.age).toBe(17)
        expect(TobeyMaguire.actor).toBe("Tobey Maguire")
        expect(TobeyMaguire.movies).toBe(3)
        expect(TobeyMaguire.studio).toBe("Sony")
    });
    test('2) Use the method getInfo()', () => {
        const TobeyMaguire = new Spiderman("Peter Parker", 17, "Tobey Maguire", 3, "Sony")
        expect(TobeyMaguire.getInfo()).toBe("Hey, I'm Tobey Maguire from Sony studio")
    });
})