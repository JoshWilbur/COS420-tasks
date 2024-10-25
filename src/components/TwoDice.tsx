import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): React.JSX.Element {
    // Set to different init values
    const [left_die, set_left_die] = useState<number>(2);
    const [right_die, set_right_die] = useState<number>(3);
    const [message, set_message] = useState<string>("");

    const checkGameStatus = (newLeft: number, newRight: number) => {
        if (newLeft === 1 && newRight === 1) {
            set_message("Lose");
        } else if (newLeft === newRight) {
            set_message("Win");
        } else {
            set_message(""); // Clear message if neither
        }
    };

    const roll_die = (isLeft: boolean) => {
        const newValue = d6();
        if (isLeft) {
            set_left_die(newValue);
            checkGameStatus(newValue, right_die);
        } else {
            set_right_die(newValue);
            checkGameStatus(left_die, newValue);
        }
    };

    return (
        <div>
            <span data-testid="left-die">{left_die}</span>
            <span data-testid="right-die">{right_die}</span>
            <div>
                <Button
                    onClick={() => {
                        roll_die(true);
                    }}
                >
                    Roll Left
                </Button>
                <Button
                    onClick={() => {
                        roll_die(false);
                    }}
                >
                    Roll Right
                </Button>
            </div>
            {message && <div>{message}</div>}
        </div>
    );
}
