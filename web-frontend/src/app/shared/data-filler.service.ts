import { DayDataRow } from "./day-data-row";
import * as moment from 'moment';

export class DataFiller {

  constructor() { }

  static fillForWeek(entries: Array<DayDataRow>, factory: (forDay : Date) => DayDataRow) : Array<DayDataRow> {
    if (typeof entries === 'undefined' || entries.length == 0) {
      return []
    }

    let entriesCount = entries.length
    let paddedRows: Array<DayDataRow> = []

    let firstEntryDate = entries[0].date
    let firstEntryDayOfWeek = firstEntryDate.getUTCDay() + 1

    for (let index = 1; index < firstEntryDayOfWeek; index++) {
      let dayToFill = moment(firstEntryDate).startOf('week').add(index, 'day').toDate()

      paddedRows.push(factory(dayToFill))
    }

    paddedRows = paddedRows.concat(entries)

    let lastEntryDate = entries[entriesCount - 1].date
    let lastEntryDayOfWeek = lastEntryDate.getUTCDay() + 1

    for (let index = lastEntryDayOfWeek; index < 7 ; index++) {
      let dayToFill = moment(lastEntryDate).startOf('week').add(index, 'day').toDate()

      paddedRows.push(factory(dayToFill))
    }

    return paddedRows
  }
}