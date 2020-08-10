import React from 'react'
import './Dashboard.css'


const Dashboard = ({ text }) => {

    return (
        <div className="dashboard dashboar-anchor">
            <p className="dashboard-text"><strong>{text.length}</strong> characters</p>
            <p className="dashboard-text"><strong>{(text.length) ? text.trim().split(/\s+/).length : 0} </strong> words</p>
        </div>
    )
}

export default Dashboard;