function findDates (item) {

    let result = [];
    const regexp =/(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/g;
    let rgResult = item.match(regexp); 

    let months = (m) => {
        let months = ["January", "February", "March", "April", "May",  "June",  "July",  "August", "September", "November", "December"];
        let date = new Date(0, --m, 0);
         m === date.getMonth();
        return months[m]
      }


       while (rgResult){
        if (+rgResult[2] && +rgResult[2] > 1 && +rgResult[2] < 12) {
                result.push ({
                   day: +rgResult [3],
                   months: +rgResult[2],
                   monthName: months(+rgResult[2]),
                   year: +rgResult[1]
                 })
            }
        rgResult = regexp.exec(item);
      }

return result;

};


console.log (findDates("Якась строка без дат")); 

const str = "The dates between 1976-03-12, and 1983-10-14, the code was 2004-67-12 and possible invalid date 8765-11-34";
console.log (findDates(str));



