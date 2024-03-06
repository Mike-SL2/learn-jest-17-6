export const getMonthName = (monthNumber) => {
    const inputDataMistake = 'Ошибка задания входных данных';
    const inputDataMistakeIndex = 0;
    const seasonName = [
        { 'season': 'зима', 'months': [1, 2, 12] },
        { 'season': 'весна', 'months': [3, 4, 5] },
        { 'season': 'лето', 'months': [6, 7, 8] },
        { 'season': 'осень', 'months': [9, 10, 11] },
    ];
    const monthName = [
        inputDataMistake,
        'январь',
        'февраль',
        'март',
        'апрель',
        'май',
        'июнь',
        'июль',
        'август',
        'сентябрь',
        'октябрь',
        'ноябрь',
        'декабрь'
    ];
    monthNumber = Math.floor(monthNumber);
    let resultMonthName = monthName[inputDataMistakeIndex];
    let resultSeasonName = inputDataMistake;
    if ((monthNumber > inputDataMistakeIndex) && (monthNumber < monthName.length)) {
        resultMonthName = monthName[monthNumber];
        seasonName.forEach((seasonNameObject) => {
            for (let i in seasonNameObject) {
                if (i === 'months') {
                    seasonNameObject[i].forEach((monthNumberToCompare) => {
                        if (monthNumberToCompare === monthNumber) {
                            resultSeasonName = seasonNameObject['season'];
                        }
                    })
                }
            }
        });
        return { 'monthName': resultMonthName, 'seasonName': resultSeasonName };
    } else return inputDataMistake;
}		    