import React from "react"
import './home.css'
import { FaChartLine } from "react-icons/fa";


export default function Home() {
    
    return (<>
    <a href="/dashboard">
        <div className="Homecard">
            <FaChartLine className="Homeicon"/>
            <h3 className="Hometext">Your Energy Consumption</h3>
        </div>
    </a>
    </>)
}