import React, {useState} from 'react'

export default function TextForm(props) {
    const clickuphandler= ()=>{
        let newtext=text.toUpperCase();
        setText(newtext)
        props.showAlert("conword to uppercase enable","success")
    }
    const clicklohandler= ()=>{
        let newtext=text.toLowerCase();
        setText(newtext)
        props.showAlert("conword to lowercase enable","success")

    }
    const clickclearhandler= ()=>{
        let newtext="";
        setText(newtext)
        props.showAlert("Clear text","success")

    }
    const clickextrahandler= ()=>{
        let nawtext=text.split(/[ ]+/);
        setText(nawtext.join(' '));
        props.showAlert("Extra speace remove ","success")

    }

    const clickcopyhandler= ()=>{
        let text=document.getElementById("exampleFormControlTextarea1")
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("text copy to sussesfull ","success")

    }

    const handleronchange = (event)=>{
       setText(event.target.value)
    }

    const [text, setText] = useState("");
    return (
        <>
            <div className="container " style={{color: props.mode==='light'?'black':'white'}}>
              <h1 >{props.heading }</h1>
              <div className="mb-3">  
              <textarea className="form-control" value={text} onChange={handleronchange} style={{backgroundColor: props.mode==='dark'?'gray':'white',color:props.mode==='light'?'black':'white',cursor:'pointer' }} id="exampleFormControlTextarea1" rows="8"></textarea>
              <button disabled={text.length===0} style={{color: props.mode==='light'?'black':'white'}} className='btn btn-info my-1  mx-1 my-1' onClick={clickuphandler}>Click On Uppercase</button>
              <button disabled={text.length===0} style={{color: props.mode==='light'?'black':'white'}} className='btn btn-info my-1 mx-1 my-1' onClick={clicklohandler}>Click On Lowercase</button>
              <button disabled={text.length===0} style={{color: props.mode==='light'?'black':'white'}} className='btn btn-info my-1 mx-1 my-1' onClick={clickclearhandler}>Clear Text</button>
              <button disabled={text.length===0} style={{color: props.mode==='light'?'black':'white'}}className='btn btn-info my-1 mx-1 my-1' onClick={clickextrahandler}>ExtaClear space</button>
              <button disabled={text.length===0} style={{color: props.mode==='light'?'black':'white'}}className='btn btn-info my-1 mx-1 my-1' onClick={clickcopyhandler}>Copy to Text</button>
            </div>
            </div>
            <div className="container"  style={{color: props.mode==='light'?'black':'white'}}>
                <h2>Your Text summery</h2>
                <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} world and {text.length} chracter</p>
                <p>{0.008*text.split(" ").filter((element)=>{return element.length!==0}).length } menites read</p>
                <h3>previw</h3>
                <p>{text.length>0?text:"Enter The Text Preview To Here"}</p>
            </div>

            </>
        
    )
}
