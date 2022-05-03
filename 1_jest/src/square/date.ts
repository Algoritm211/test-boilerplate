import {DateTime} from 'luxon'

//"2010-10-22T21:38:00"

export const formatDate = (date: string) => {
    const newDate = DateTime.fromISO(date)
    const humanReadable = newDate.toLocaleString(DateTime.DATETIME_MED);
    return humanReadable;
}
