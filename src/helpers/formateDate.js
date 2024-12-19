
export default function formateDate(date) {
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate();

  day < 10 ? day = `0${day}` : '';

  const formattedDate = `${day}.${month}.${year}`;

  return formattedDate;
}
