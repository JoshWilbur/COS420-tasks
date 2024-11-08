import React, { useState } from "react";

export function CheckAnswer({
    expectedAnswer, // Need this name due to test file
}: {
    expectedAnswer: string;
}): React.JSX.Element {
    // State to store the user's answer
    const [user_answer, set_user_answer] = useState("");

    // Const to check answer
    const is_correct = user_answer === expectedAnswer;

    return (
        <div>
            <h3>Check Answer</h3>
            <input
                type="text"
                value={user_answer}
                onChange={(e) => set_user_answer(e.target.value)}
                placeholder="Enter your answer"
                aria-label="answer-input"
            />
            <p>{is_correct ? "✔️" : "❌"}</p>
        </div>
    );
}
