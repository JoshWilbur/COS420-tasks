import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): React.JSX.Element {
    const [Q_type, set_Q_type] = useState<QuestionType>( // Use question type data structure
        "short_answer_question",
    );

    // Toggle between question types
    const toggle_Q_type = () => {
        set_Q_type(
            Q_type === "short_answer_question" ?
                "multiple_choice_question"
            :   "short_answer_question",
        );
    };

    return (
        <span>
            <Button onClick={toggle_Q_type}>Change Type</Button>
            <span>
                {Q_type === "short_answer_question" ?
                    "short answer"
                :   "multiple choice"}
            </span>
        </span>
    );
}
