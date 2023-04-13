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
        createData('00:00', randomInteger(100,200)),
        createData('03:00', randomInteger(200,400)),
        createData('06:00', randomInteger(300,500)),
        createData('09:00', randomInteger(600,800)),
        createData('12:00', randomInteger(900,1100)),
        createData('15:00', randomInteger(1300,1500)),
        createData('18:00', randomInteger(1300,1500)),
        createData('21:00', randomInteger(200,600)),
        createData('24:00', randomInteger(0,100)),
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