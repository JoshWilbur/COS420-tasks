import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): React.JSX.Element {
    const [num_attempts, set_num_attempts] = useState<number>(4);
    const [in_progress, set_in_progress] = useState<boolean>(false);

    // TODO: use helper functions to make this cleaner
    return (
        <span>
            <Button
                onClick={() => {
                    set_in_progress(true);
                    set_num_attempts(num_attempts - 1);
                }}
                disabled={in_progress || num_attempts === 0}
            >
                Start Quiz
            </Button>
            <span>{in_progress ? "Quiz in progress" : "Quiz not started"}</span>
            <Button
                onClick={() => {
                    set_in_progress(false);
                }}
                disabled={!in_progress}
            >
                Stop Quiz
            </Button>
            <span>Attempts left: {num_attempts}</span>
            <Button
                onClick={() => {
                    set_num_attempts(num_attempts + 1);
                }}
                disabled={in_progress}
            >
                Mulligan
            </Button>
        </span>
    );
}
