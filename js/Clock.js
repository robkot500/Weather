import React, {useState, useEffect} from "react";
import ClockTime from "./ClockTime.";
import ClockDate from "./ClockDate";
const Clock = () => {
    const [date, setDate] = useState(new Date());
    useEffect(() => {
        const interval = setInterval(() => {
            setDate( new Date())
        }, 1000);
        return () => {
            clearInterval(interval);
        };
    }, []);
    return (
        <>
            <ClockTime date={date} />
            <ClockDate date={date} />
        </>
    );
};
export default Clock;