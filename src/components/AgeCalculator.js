import React, { useState } from 'react'
import './Demo1.css'
function AgeCalculator() {
    let [date, SetDate] = useState('')
    let [currentage, setCurrentage] = useState(0)
    let change = () => {
        let birth = new Date(date)
        let age = new Date();
        let birthdate = age.getFullYear() - birth.getFullYear()
        let m = age.getMonth() - birth.getMonth();
        if (m < 0 || (m === 0 && age.getDate() < date.getDate())) {
            birthdate--;
        }
        setCurrentage(birthdate)
    }
    return (
        <div className='contianer' style={{ width: 500, marginLeft: '30%', marginTop: 50 }}>
            <h1 style={{ marginTop: 10 }}>Age Calculator</h1>
            <label style={{ marginTop: 10 }} htmlFor='date'>enter your date of birth:</label> <br />
            <input style={{ marginTop: 10, width: 300 }} name='date' id='date' type='date' value={date} onChange={(e) => SetDate(e.target.value)} /><br />
            <button style={{ marginTop: 10, backgroundColor: 'green', borderRadius: 10 }} onClick={change}>calculate age</button><br />
            <label style={{ marginTop: 10 }}>age:</label>
            <input style={{ marginTop: 10, width: 260, marginBottom: 10 }} name='age' value={currentage} />
        </div>
    )
}

export default AgeCalculator