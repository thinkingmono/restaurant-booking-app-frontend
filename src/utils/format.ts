import moment from "moment";

export const formatDateToDB = (book_date: string, book_hour: string) => {
  //09-NOV-24 04.00.00.000000000 PM
  const dateHour = moment(`${book_date} ${book_hour}`, 'YYYY-MM-DD hh:mm:ss a').format('DD-MMM-YY hh.mm.ss A').toUpperCase();
  // console.log({ dateHour });
  return dateHour;
}

export const formatDateHourToFront = (dateHour: string) => {
  const date = moment(`${dateHour}`, 'DD-MMM-YY hh.mm.ss A').format('YYYY-MM-DD');
  const hour = moment(`${dateHour}`, 'DD-MMM-YY hh.mm.ss A').format('hh:mm:ss a');
  return { date, hour }
}
