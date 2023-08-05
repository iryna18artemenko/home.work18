function findDates (item) {

    let result = [];
    const regexp =/(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/g;
    let rgResult = item.match(regexp); 

    let months = (m) => {
        let months = ["January", "February", "March", "April", "May",  "June",  "July",  "August" ];
        let date = new Date(0, --m, 0);
         m === date.getMonth();
        return months[m]
      }


       while (rgResult){
        if (+rgResult[2]) {
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



console.log (findDates("Якась строка без дат")); // []

const str = "The dates between 1976-03-12, and 1983-10-14, the code was 2004-67-12 and possible invalid date 8765-11-34";
console.log (findDates(str));


// /* має повернути

// [

// 	{  day: 12,  month: 3,  monthName: ‘March’,  year: 1976  }, 

// 	{ day: 14,  month: 10, monthName: ‘October’, year: 1983 }, 

// 	{ day: 34, month: 11, monthName: ‘November’, year: 8765 }

// ]

// */



