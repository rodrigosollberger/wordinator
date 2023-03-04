import React, {useState} from 'react';

export function App() {
    // Initialize state here
    const [color, setColor] = useState('')
    const [words, setWords] = useState('')
    return <>
        <section id="controls">
            <div className="step">
                <h1>Wordinator</h1>
            </div>
            <div className="step">
                <h4>Choose your Color</h4>
                <div>
                    {/* attach onClick handlers */}
                    <button className="red" onClick={() => setColor("red")}>red</button>
                    <button className="green" onClick={() => setColor("green")}>green</button>
                    <button className="blue" onClick={() => setColor("blue")}>blue</button>
                    <button className="black" onClick={() => setColor("black")}>black</button>
                </div>
            </div>
            <div className="step">
                <h4>Type your Word</h4>
                {/* attach onChange handler */}
                <input placeholder="Start Typing" aria-label="words" value={words} onChange={(e) => setWords(e.target.value)}/>
                <div>
                    {/* attach onClick handlers */}
                    <button onClick={() => setWords(words.toUpperCase())}>UPPERCASE</button>
                    <button onClick={() => setWords(words.toLowerCase())}>lowercase</button>
                </div>
            </div>
        </section>
        <section className="step">
            <h1>-- <span id="words" role="note" style={{
                /* add styles here */
                color
            }}>{words}</span> --</h1>
        </section>
    </>
}