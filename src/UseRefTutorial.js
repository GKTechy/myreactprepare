import react, {useRef}from "react";

 const UseRefTutorial =()=>{

    const inputRef= useRef(null);

    const onclick =()=>{
        console.log("onclick-->"+inputRef.current.value)
        inputRef.current.focus();
    }
    return(
        <div>
                <h2>Use Ref </h2>
                <input type="text" ref={inputRef}/>
                <button onClick={onclick}>Click Me!</button>
        </div>
    )
}

 export default UseRefTutorial;