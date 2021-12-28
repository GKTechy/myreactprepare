import React, { useEffect,useLayoutEffect, useRef ,useState} from 'react'

const UseLayoutEffectTutorial =()=>{
    
    const inputRef=useRef(null);
    const [value, setValue] = useState(0);

    useEffect( ()=>{
        console.log("useEffect calling-->"+inputRef.current.value);
        inputRef.current.value="Madhi"
    },[])

    useLayoutEffect( ()=>{
        console.log("useEffect calling-->"+inputRef.current.value);
    })

    useLayoutEffect(() => {
        if (value === 0) {
          setValue(10 + Math.random() * 200);
        }
      }, [value]);

      
    return(
        <div>
            <input value="Karthi" ref={inputRef}/>
            <div onClick={() => setValue(0)}>
      value: {value}
    </div>
       </div>
    )
}

export default UseLayoutEffectTutorial
