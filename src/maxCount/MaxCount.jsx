import React, { useEffect, useRef, useState } from "react";

const MaxCount = () => {
    const[counter,setCounter] = useState(0);
    const[seconds,setSeconds] = useState(10);
    const [visible, setVisible] = useState(true);
    let IntervalId = useRef(null);
    useEffect(() => {
       IntervalId.current = setInterval(() => {
            setSeconds((sec) =>{
                let prevsec = sec - 1;
                if(prevsec == 0){
                    setVisible(false);
                }
                return prevsec;
            });
        }, 1000);

        return () => clearInterval(IntervalId.current);
    },[])

    useEffect(() => {
        if(seconds == 0){
            clearInterval(IntervalId.current);
        }
    },[seconds])
    const handleIncrement = () => {
        setCounter((count) => count + 1);
    }

  return (
    <div style={{ height: '100vh' ,display: 'flex',justifyContent: 'center', alignItems: 'center'}}>
      <div style={{flexDirection: 'column', gap: 20}}>
      <span style={{fontSize: 15, fontWeight: 500}}>No of Clicks until timer expries</span>
      <div style={{height: 150, width: 200,backgroundColor: 'orange',display: 'flex',flexDirection: 'column', justifyContent:'center', alignItems: 'center'}}>
        <span>{counter}</span>
        <span>Time left: {seconds} seconds</span>
        {visible ? <button onClick={handleIncrement}>+</button> : null}
      </div>
      </div>
    </div>
  );
};

export default MaxCount;
