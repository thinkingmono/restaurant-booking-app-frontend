import customFetch, { checkForUnauthorizedResponse } from "../../utils"
import { formatDateHourToFront } from "../../utils/format";
import { TableType } from "../../utils/types";

export const getAvailabilityThunk = async (filter: { date: string, zone: string, customers_number: number }, thunkAPI: {}) => {
  const { date, zone, customers_number } = filter;
  try {
    const response = await customFetch.get(`/Tables/getAvailability?date=${date}&zone=${zone}&customers_number=${customers_number}`);
    let formatedDateHour = { date: '', hour: '' };
    if (response.status === 200) {
      formatedDateHour = formatDateHourToFront(date);
      const tables = response.data.map((table: TableType) => {
        return {
          table_id: table.table_id,
          book_zone: zone,
          book_date: formatedDateHour.date,
          book_hour: formatedDateHour.hour,
          guests: customers_number,
          status: 'Available'
        }
      });
      return tables;
    }
  } catch (error: any) {
    return checkForUnauthorizedResponse(error, thunkAPI);
  }
}