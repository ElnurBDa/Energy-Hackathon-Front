import React, { useEffect, useState } from "react"
import {Line} from 'react-chartjs-2';
import './dashboard.css'
import { Chart, registerables } from 'chart.js';
import { Button } from "react-bootstrap";
import { ManatKiloWattMax, ManatKiloWattMin, chartDatasApril, chartDatasAprilDays, convertDataDay, convertDataMonth, getPrice, getTotal } from "../../data";
import Streak from "../../components/streak";
import Bonus from "../../components/bonus";
import Redeem from "../../components/redeem";
Chart.register(...registerables);

export default function Dashboard() {
    const [n, setN] = useState(1);
    const [chartData, setChartData] = useState(convertDataDay(chartDatasAprilDays[0]))
    const [mode, setMode] = useState(0); // month and day
    const [total, setTotal] = useState(getTotal(chartDatasAprilDays[0].hours));
    
    const handleNChange = (newN:number) => {
        if (newN > 30) setN(30);
        else if (newN <1) setN(1);
        else setN(newN);
    }


    useEffect(() => {
        setChartData(convertDataDay(chartDatasAprilDays[n-1]));  
        setTotal(getTotal(chartDatasAprilDays[n-1].hours))  
    },[n])

    useEffect(() => {
        if (mode) {
            setChartData(convertDataMonth(chartDatasApril));
            setTotal(getTotal(chartDatasApril.days))  
        } else {
            setChartData(convertDataDay(chartDatasAprilDays[n-1]));
            setTotal(getTotal(chartDatasAprilDays[n-1].hours))  
        }    
    },[mode, n])

    return (<>
        <section style={{display:'flex', width:'80%',margin:'auto'}}>
            <Streak value={24}/>
            <Bonus value={15}/>
        </section>
        <section style={{display:'flex', width:'80%',margin:'auto'}}>
        <div className="card" style={{flex:'1'}}>
            <div className="THECHART">
                <div className="chart">
                    <Line
                    data={chartData}
                    options={{
                        responsive:true,
                        plugins:{
                            legend:{position:'top'},
                            title:{
                                display: true,
                                text:"Energy Consumption", 
                            }
                        }
                    }}
                    />
                </div>    
            </div>
            <div className="NOTTHECHART">
                <Button className="btn btn-primary ripple-surface" onClick={() => setMode(+!mode)}>{mode?<>ayliq</>:<>gunluk</>} serfiyyat</Button>
                {mode?<></>:<input className="inp" type="number" value ={n} onChange={(e) => handleNChange(+(e.target.value))}/>}
                <h4 style={{left:'0px'}}>Total Energy:{total.toFixed(2)} kilowatt</h4>
                <h4 style={{left:'0px'}}>Total Price: {(getPrice(total)).toFixed(2)} manat</h4> 
            </div>
        </div>
        </section>
        <section style={{display:'flex', width:'80%',margin:'auto'}}>
            <Redeem/>
        </section>
    </>)
}


//  i need to change ayliq total, cause it is wrong