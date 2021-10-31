export const toDateString = (dateString: string, style: Intl.DateTimeFormatOptions['month'] = 'long') => {
    try {
        const date = new Date(dateString);
        return new Intl.DateTimeFormat('ru-RU', {
            year: 'numeric',
            month: style
        }).format(date);
    } catch (error) {
        console.error('Invalid arguments');
        return dateString;
    }
}

export const toTimeBetween = (startDate: string | Date, endDate?: string | Date) => {
    try {
        const startTime = new Date(startDate).getTime();
        const endTime = endDate
            ? new Date(endDate).getTime()
            : new Date().getTime();
        const oneMonthTime = 1000 * 60 * 60 * 24 * 31;
        const timeBetween = endTime - startTime + oneMonthTime;
        const dateBetween = new Date(timeBetween);
        const months = dateBetween.getMonth();
        const years = dateBetween.getFullYear() - 1970;

        const intl = (new Intl.RelativeTimeFormat('ru', {
            style: 'long'
        }));

        const monthString = months
            ? intl.format(months, 'months').replace('через ', '')
            : '';
        const yearsString = years
            ? intl.format(years, 'years').replace('через ', '')
            : '';

        return [yearsString, monthString].join(' ');
    } catch (error) {
        console.error('Invalid arguments');
        return '';
    }
}
