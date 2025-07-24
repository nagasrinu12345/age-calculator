import React, { useState } from 'react'
import './Demo.css'

function Naga() {
    let initial = 0;
    let [billamount, setBillamount] = useState('');
    let [percentage, setPercentage] = useState('');
    let [total, setTotal] = useState(initial);
    let Change = () => {
        setTotal(billamount * (1 + percentage / 100));
    }
    return (
        <div className='contianer' style={{ display: 'flex', flexDirection: 'column', width: 500, marginLeft: '30%', marginTop: 50, padding: 20 }}>
            <h1>tip calculator</h1>
            <p>enter the total bill amount and tip percentage to calculate</p>
            <label style={{ textAlign: 'justify' }} htmlFor='id'>bill amount:</label>
            <input style={{ marginTop: 10 }} placeholder='enter amount' id='id' value={billamount} onChange={(e) => setBillamount(e.target.value)} />
            <label style={{ textAlign: 'justify' }} htmlFor='percentage'>tip percentage:</label>
            <input style={{ marginTop: 10 }} placeholder='enter tip' id='percentage' value={percentage} onChange={(e) => setPercentage(e.target.value)} />
            <button style={{ backgroundColor: 'green', marginTop: 10, borderRadius: 10 }} onClick={Change}>calculate</button>
            <label style={{ textAlign: 'justify' }} htmlFor='total'>total:</label>
            <input style={{ marginTop: 10, width: 100, borderRadius: 10 }} value={total.toFixed(2)} onChange={(e) => setTotal(e.target.value)} />
        </div>
    )
}

export default Naga