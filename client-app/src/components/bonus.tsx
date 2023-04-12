import { FaFire } from 'react-icons/fa'
import './style.css'

export default function Bonus(props:any) {
    
    return (<>
    <div style={{width:'20%',right:'0px',flex:'1'}} className='card'>
        <section style={{display:'flex', alignItems:'center', justifyContent:'center'}}>
        <h2 style={{flex:'1'}}>Bonus: {props.value}</h2>
        <FaFire style={{flex:'1', fontSize:'60px', color:'orange'}}/>
        </section>
    </div>
    </>)
}