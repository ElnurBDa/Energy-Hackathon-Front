import { randomFill } from "crypto";

// Generate Sales Data
function createData(time: string, amount?: number) {
    return { time, amount };
}

function randomInteger(min:number, max:number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


function createDay() {
    return [
        createData('00:00', randomInteger(10,20)),
        createData('03:00', randomInteger(20,40)),
        createData('06:00', randomInteger(30,50)),
        createData('09:00', randomInteger(60,80)),
        createData('12:00', randomInteger(90,110)),
        createData('15:00', randomInteger(130,150)),
        createData('18:00', randomInteger(130,150)),
        createData('21:00', randomInteger(20,60)),
        createData('24:00', randomInteger(0,10)),
    ]
}
  
export const data = [
    createDay(),createDay(),createDay(),createDay(),createDay(),
    createDay(),createDay(),createDay(),createDay(),createDay(),
    createDay(),createDay(),createDay(),createDay(),createDay(),
    createDay(),createDay(),createDay(),createDay(),createDay(),
    createDay(),createDay(),createDay(),createDay(),createDay(),
    createDay(),createDay(),createDay(),createDay(),createDay(),
    createDay(),createDay(),createDay(),createDay(),createDay(),
];