import React from 'react'
import './Dashboard.css'


const Dashboard = ({ text }) => {
    return (
        <div id="dashboard">
            <p>{`Number of characters: ${text.length}`}</p>
        </div>
    )
}

export default Dashboard;