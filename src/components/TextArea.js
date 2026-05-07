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
    const whiteSpaceHandle = () => {
        setText(text.replace(/\s+/g, ' ').trim()) 
        console.log('clicked')
    }
    // const copyTextHandle = () => {
    //     setText(navigator.clipboard.writeText(text)) 
    //     console.log('clicked')
        
    // }
    const copyTextHandle = async () => {
        const textarea = document.getElementById("floatingTextarea");
        await navigator.clipboard.writeText(textarea.value);
    };
    // async function copyTextToClipboard(text) {
    //     try {
    //         await navigator.clipboard.writeText(text);
    //         console.log('Text copied to clipboard');
    //     } catch (err) {
    //         console.error('Failed to copy: ', err);
    //     }
    //     }

    return(
        <div className="container my-5">
            <h1>{props.headLine}</h1>
            <div className="">
                <textarea value={text} className="form-control" onChange={upperChange} placeholder="Leave a comment here" id="floatingTextarea" rows="8"></textarea>
            </div>
            <div className="d-flex gap-2">
                <button className="btn btn-primary mt-2" onClick={upperHandle}>Uppercase</button>
                <button className="btn btn-primary mt-2" onClick={lowerHandle}>Lowercase</button>
                <button className="btn btn-primary mt-2" onClick={whiteSpaceHandle}>Remove Whitespace</button>
                <button className="btn btn-primary mt-2" onClick={copyTextHandle}>Copy Text</button>
            </div>
        </div>
    );
}