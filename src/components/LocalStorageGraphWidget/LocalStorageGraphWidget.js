import React from 'react'
import './LocalStorageGraphWidget.css'


const LocalStorageGraphWidget = () => {

    let localStorageSpaceUsed = 1500;

    // let incrementClass_20_40 = { background: "#ffffff" };
    // let incrementClass_40_60 = { background: "#ffffff" };
    // let incrementClass_60_80 = { background: "#ffffff" };
    // let incrementClass_80_100 = { background: "#ffffff" };

    // if (localStorageSpaceUsed > 1024) {
    //     incrementClass_20_40 = { background: "linear-gradient(90deg, rgb(255, 255, 255,1) 25%, rgba(255, 255, 255,0.875) 100%)" }
    //     incrementClass_40_60 = { background: "linear-gradient(90deg, rgba(255, 255, 255, 0.750) 10%, rgba(255, 255, 255, 0.625) 100%)" }
    //     incrementClass_60_80 = { background: "linear-gradient(90deg,rgba(255, 255, 255,0.500) 45%, rgba(255, 255, 255,0.375) 100%)" }
    //     incrementClass_80_100 = { background: "linear-gradient(90deg,rgba(255, 255, 255,0.250) 65%, rgba(255, 255, 255,0.125) 100%)" }
    // }

    // if (localStorageSpaceUsed > 2048) {
    //     incrementClass_40_60 = { background: "linear-gradient(90deg, rgb(255, 255, 255,1) 25%, rgba(255, 255, 255,0.875) 100%)" }
    //     incrementClass_60_80 = { background: "linear-gradient(90deg, rgba(255, 255, 255, 0.750) 10%, rgba(255, 255, 255, 0.625) 100%)" }
    //     incrementClass_80_100 = { background: "linear-gradient(90deg,rgba(255, 255, 255,0.500) 45%, rgba(255, 255, 255,0.375) 100%)" }
    // }

    // if (localStorageSpaceUsed > 3072) {
    //     incrementClass_60_80 = { background: "linear-gradient(90deg, rgb(255, 255, 255,1) 25%, rgba(255, 255, 255,0.875) 100%)" }
    //     incrementClass_80_100 = { background: "linear-gradient(90deg, rgba(255, 255, 255, 0.750) 10%, rgba(255, 255, 255, 0.625) 100%)" }

    // }

    // if (localStorageSpaceUsed > 4096) {
    //     incrementClass_80_100 = { background: "linear-gradient(90deg, rgb(255, 255, 255,1) 25%, rgba(255, 255, 255,0.875) 100%)" }
    // }

    return (
        <div id="localStorageGraph">
            <p id="localStorageGraph-title">LOCAL STORAGE USAGE</p>
            <div id="localStorageBar">
                <div id="lsg_20_40" style={(localStorageSpaceUsed > 1024) ? { backgroundColor: '#ffffff' } : null}></div>
                <div id="lsg_40_60" style={(localStorageSpaceUsed > 2048) ? { backgroundColor: '#ffffff' } : null}></div>
                <div id="lsg_60_80" style={(localStorageSpaceUsed > 3072) ? { backgroundColor: '#ffffff' } : null}></div >
                <div id="lsg_80_100" style={(localStorageSpaceUsed > 4096) ? { backgroundColor: '#ffffff' } : null}  ></div >
            </div>
        </div >

    )
}

export default LocalStorageGraphWidget;