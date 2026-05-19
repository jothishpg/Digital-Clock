import React, {useEffect, useState} from "react"
import "./DigitalClock.css"

function DigitalClock(){

    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date());
        }, 1000)

        return () => {
            clearInterval(intervalId);
        }
    }, [])

    function format(){
        let hours = time.getHours();
        const mins = time.getMinutes();
        const sec = time.getSeconds();

        const session = hours > 12 ? "PM" : "AM";

        hours = hours % 12 || 12;

        return (`${pad(hours)}:${pad(mins)}:${pad(sec)} ${session}`)
    }
    function pad(number){
        return (number < 10 ? "0" : "") + number;
    }

    return(
        <div className="clock-container">
            <div className="clock">
                <span>{format()}</span>
            </div>
        </div>
    );
}

export default DigitalClock