import padNumber from '../utils/padNumber'

describe('Given a padNumber function', () => {
    describe('When it is called', () => {
        test('it should return a string', () => {
            expect(typeof padNumber(5)).toBe('string')
        })
        test('It should append 0 to the start of the string if it has less than 4 digits', () => {
            expect(padNumber(5)).toBe('0005')
        })
    })
})