import React, { useState } from "react";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer,
}: {
    options: string[];
    expectedAnswer: string;
}): React.JSX.Element {
    // State for the selected choice, initially set to first option
    const [selected_choice, set_selected_choice] = useState(options[0]);
    const is_correct = selected_choice === expectedAnswer;

    return (
        <div>
            <h3>Multiple Choice Question</h3>
            <select
                value={selected_choice}
                onChange={(e) => set_selected_choice(e.target.value)}
            >
                {options.map((option, index) => (
                    <option key={index} value={option}>
                        {option}
                    </option>
                ))}
            </select>
            <p>
                {is_correct ? "✔️" : "❌"}{" "}
                {is_correct ? "Correct!" : "Incorrect!"}
            </p>
        </div>
    );
}
