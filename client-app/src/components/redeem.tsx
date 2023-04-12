import './style.css'
import { FaBook, FaPhone, FaDollarSign } from 'react-icons/fa'


const presents = [
    {
        title: "15% endirim",
        logo: FaDollarSign,
        price: 15
    },
    {
        title: "10% endirim",
        logo: FaDollarSign,
        price: 5
    },
    {
        title: "5% endirim",
        logo: FaDollarSign,
        price: 1
    },
]



export default function Redeem() {

    
    return (<>
    <div style={{flex:'1', minHeight:'200px'}} className='card'>
        <h1 style={{textAlign:'center', marginBottom:'50px'}}>Redeem</h1>
        <section style={{display:'flex'}}>
        {presents.map((present, index) => (
            <div key={index} style={{
                textAlign:'center',
                flex:'1',
                border:'2px solid blue', 
                maxWidth:'150px', 
                margin:'auto', 
                padding:'10px',
                borderRadius:'20%'}}>
                <h3>{present.title}</h3>
                <present.logo style={{fontSize:'60px', color:'blue'}}/>
                <p>Qiymet: {present.price}</p>
            </div>
        ))}
        </section>
    </div>
    </>)
}