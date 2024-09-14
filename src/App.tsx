import React from "react";
import { Button } from "react-bootstrap";
import "./App.css";
import vienna_image from "./IMG_1651.jpeg";

function App(): React.JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UM COS420 with React Hooks and TypeScript
            </header>
            <h1>New header text</h1>
            <Button
                onClick={() => {
                    console.log("Hello World!");
                }}
            >
                Log Hello World
            </Button>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload. Hello World from Joshua Wilbur
            </p>
            <ol>
                <li>Item 1</li>
                <div
                    style={{
                        width: "100px",
                        height: "100px",
                        backgroundColor: "red",
                        margin: "10px auto",
                    }}
                ></div>
                <li>Item 2</li>
                <div
                    style={{
                        width: "100px",
                        height: "100px",
                        backgroundColor: "red",
                        margin: "10px auto",
                    }}
                ></div>
                <li>Item 3</li>
                <div
                    style={{
                        width: "100px",
                        height: "100px",
                        backgroundColor: "red",
                        margin: "10px auto",
                    }}
                ></div>
            </ol>
            <img src={vienna_image} alt="A picture from my time in Vienna" />
        </div>
    );
}

export default App;
