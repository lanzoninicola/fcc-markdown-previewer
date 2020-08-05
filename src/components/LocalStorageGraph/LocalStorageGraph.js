import React from 'react'
import './LocalStorageGraph.css'


const LocalStorageGraph = ({ localStorageSpaceUsed }) => {

    let localStorageSpaceUsed = 3700;

    return (
        <div id="localStorageGraph">
            <div id="lsg_20_40" className={localStorageSpaceUsed > 0 && "increment_20_40"}></div>
            <div id="lsg_40_60" className={localStorageSpaceUsed > 2048 && "increment_40_60"}></div>
            <div id="lsg_60_80" className={localStorageSpaceUsed > 3072 && "increment_60_80"}></div >
            <div id="lsg_80_100" className={localStorageSpaceUsed > 4096 && "increment_80_100"} ></div >
        </div >

    )
}

export default LocalStorageGraph;