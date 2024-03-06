import { getMonthName } from "./index.js";
describe ('проверка функции getMonthName',
() =>
    {
    const errorMessage = 'Ошибка задания входных данных',
    normalOutput3 = {'monthName':'март', 'seasonName':'весна'},
    normalOutput8 = {'monthName':'август', 'seasonName':'лето'};

     it('ввод номера месяца больше 13 (corner - success)', () =>
     {
        expect(getMonthName(13)).toBe(errorMessage);
     }),

     it('ввод номера месяца меньше 1 (corner - success)', () =>
     {
        expect(getMonthName(0)).toBe(errorMessage);
     }),

     it ('номер месяца 3 (success)', () =>
     {
        expect(getMonthName(3)).toStrictEqual(normalOutput3);
     }),

     it ('номер месяца 2 (fail)', () =>
     {
        expect(getMonthName(2)).toStrictEqual(normalOutput3);
     }),

     
     it ('номер месяца 8.5 (corner - success)', () =>
     {
        expect(getMonthName(8.5)).toStrictEqual(normalOutput8);
     }),

     it ('номер месяца -.89 (corner - fail)', () =>
     {
        expect(getMonthName(-.89)).toStrictEqual(normalOutput8);
     })
    })
