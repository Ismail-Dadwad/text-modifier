import {useState} from 'react'
export default function TextArea(props){

    const [count, setCount] = useState(0);

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

    return(
        <div className="container my-5">
            <h1>{props.headLine}</h1>
            <div className="">
                <textarea value={text} className="form-control" onChange={upperChange} placeholder="Leave a comment here" id="floatingTextarea" rows="8"></textarea>
            </div>
            <p>This is Count {count}</p>
            <div className="d-flex gap-2">
                <button className="btn btn-primary mt-2" onClick={() => setCount(count + 1)}>UpperCase</button>
                <button className="btn btn-primary mt-2" onClick={upperHandle}>Upper Case</button>
                <button className="btn btn-primary mt-2" onClick={lowerHandle}>Lower Case</button>
            </div>
        </div>
    );
}