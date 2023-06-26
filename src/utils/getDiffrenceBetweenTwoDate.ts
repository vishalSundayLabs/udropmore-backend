export const getDateDifferenceInSeconds = (date1, date2)=>{
    const diff = Math.abs(date2 - date1);
    const seconds = Math.floor(diff / 1000);
    return seconds;
  }