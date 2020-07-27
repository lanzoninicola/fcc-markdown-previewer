import React from 'react'
import './Dashboard.css'


const Dashboard = ({ text }) => {

    return (
        <div id="dashboard">
            <p>Number of characters: <strong>{text.length}</strong></p>
        </div>
    )
}

export default Dashboard;