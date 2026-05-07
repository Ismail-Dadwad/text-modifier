import {useState} from 'react'
export default function TextArea(props){


    const [text, setText] = useState('')

    const upperChange = (e) => {
        setText(e.target.value) ;
        console.log('changed')
    }
    const upperHandle = () => {
        setText(text.toUpperCase()) 
        console.log('clicked')
    }
    const lowerHandle = () => {
        setText(text.toLowerCase()) 
        console.log('clicked')
    }
    const capitalHandle = () => {
        const newText = text
        .split(' ') // Split text into an array of words
        .map(word => 
        word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
        )
        .join(' '); // Join them back into a single string
        setText(newText) 
        console.log('clicked')
    }
    const whiteSpaceHandle = () => {
        setText(text.replace(/\s+/g, ' ').trim()) 
        console.log('clicked')
    }
    // const copyTextHandle = () => {
    //     setText(navigator.clipboard.writeText(text)) 
    //     console.log('clicked')
        
    // }
    const copyTextHandle = async () => {
        await navigator.clipboard.writeText(text);
    };

    const charCount = text.length;
    const wordCount = text.trim().split(/\s+/).filter(Boolean).length;



    return(
        <div className="container my-5">
            <h1>{props.headLine}</h1>
            <div className="">
                <textarea value={text} className="form-control" onChange={upperChange} placeholder="Leave a comment here" id="floatingTextarea" rows="8"></textarea>
            </div>
            <div className="d-flex gap-2">
                <button className="btn btn-primary mt-2" onClick={upperHandle}>Uppercase</button>
                <button className="btn btn-primary mt-2" onClick={lowerHandle}>Lowercase</button>
                <button className="btn btn-primary mt-2" onClick={capitalHandle}>First Word Capital</button>
                <button className="btn btn-primary mt-2" onClick={whiteSpaceHandle}>Remove Whitespace</button>
                <button className="btn btn-primary mt-2" onClick={copyTextHandle}>Copy All Text</button>
            </div>
            <div className='mt-3'>
                <p className="mb-1">Total Words <b>{wordCount}</b></p>
                <p>Total Characters <b>{charCount}</b></p>
            </div>
        </div>
    );
}