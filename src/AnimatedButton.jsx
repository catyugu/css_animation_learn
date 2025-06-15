import { useState } from "react";
import "./AnimatedButton.css";
function AnimatedButton() {
    const [count, setCount] = useState(0);

    return (
        <div className="animated-button-root-container">
            <div className="animated-button-container">
                <button className="animated-button" onClick={() => setCount((count) => count + 1)}>
                    <div className="animated-button-background"></div>
                    Click me!
                </button>
                
            </div>
            <p>
                {count}
            </p>
        </div>
    );
}
export default AnimatedButton;