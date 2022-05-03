import {formatDate} from "./date";
import {DateTime} from 'luxon'

describe('Date', () => {
    let mockValue;
    // Перед каждым
    beforeEach(() => {
        // ДОБАВИТЬ В БД
    })
    // Один раз перед всеми тестами
    beforeAll(() => {
    })
    test('Корректное значение', () => {
        let date = '2010-10-22T21:38:00'
        // expect(square(2)).toBe(4);
        // expect(square(2)).toBeLessThan(5);
        // expect(square(2)).toBeGreaterThan(3);
        // expect(square(2)).not.toBeUndefined();
        const spyDate = jest.spyOn(DateTime, 'fromISO');
        formatDate(date);
        expect(spyDate).toBeCalledTimes(1);
    })

    test('Корректное значение 2', () => {
        let date = '2010-10-22T21:38:00'
        // expect(square(2)).toBe(4);
        // expect(square(2)).toBeLessThan(5);
        // expect(square(2)).toBeGreaterThan(3);
        // expect(square(2)).not.toBeUndefined();
        const spyDate = jest.spyOn(DateTime, 'fromISO');
        formatDate(date);
        expect(spyDate).toBeCalledTimes(1);
    })

    afterEach(() => {
        jest.clearAllMocks();
    })
    afterAll(() => {

    })
})
