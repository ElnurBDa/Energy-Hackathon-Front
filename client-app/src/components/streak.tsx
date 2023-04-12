import { useState } from 'react'
import './style.css'

export default function Streak(props:any) {
    const [days, setDays] = useState(props.value);  
    const week = [...Array(days).fill(1), ...Array(30-days).fill(0)];  
    return (<>
    <div style={{left:'0px',flex:'3', marginRight:'20px'}} className='card'>
        <section style={{display:'flex', alignItems:'center', justifyContent:'center'}}>
        <h2 style={{flex:'2'}}>Streak: {days}</h2>
        <div style={{flex:'3', maxWidth:'330px'}}>
            {week.map((day,index) => (
                    <>{day?<div key={index} className='circle green'>{index+1}</div>:<div className='circle blue'>{index+1}</div>}</>
            ))}
        </div>
        <div style={{flex:'1'}}></div>
        </section>
    </div>
    </>)
}