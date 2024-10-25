import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer(): React.JSX.Element {
    const [is_shown, set_shown] = useState<boolean>(false);
    const show_answer = () => {
        // Toggle answer on/off
        set_shown(!is_shown);
    };
    return (
        <span>
            <Button onClick={show_answer}>Reveal Answer</Button>
            {is_shown && <div>42</div>}
        </span>
    );
}
