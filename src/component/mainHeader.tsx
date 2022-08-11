import React, {useState} from "react";

export default function MainHeader() {
    const [text, setClick] = useState("Hello World");
    return <h1 onClick={() => {setClick("Bye World")}}>{text}</h1>
}