import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function CycleHoliday(): React.JSX.Element {
    const holidays: { [key: string]: string } = {
        halloween: "🕷️",
        thanksgiving: "🦃",
        christmas: "🎄",
        easter: "🐰",
        groundhog_day: "🎩",
    };

    const alphabetic_order = Object.keys(holidays).sort();
    const chronological_order = [
        "groundhog_day",
        "easter",
        "halloween",
        "thanksgiving",
        "christmas",
    ];

    const [current_holiday, set_current_holiday] = useState<string>(
        alphabetic_order[0],
    );

    const next_holiday_alphabetically = () => {
        const current_index = alphabetic_order.indexOf(current_holiday);
        const next_index = (current_index + 1) % alphabetic_order.length;
        set_current_holiday(alphabetic_order[next_index]);
    };

    const next_holiday_by_year = () => {
        const current_index = chronological_order.indexOf(current_holiday);
        const next_index = (current_index + 1) % chronological_order.length;
        set_current_holiday(chronological_order[next_index]);
    };

    return (
        <span>
            <h2>
                Holiday: {current_holiday.replace(/_/g, " ")}{" "}
                {holidays[current_holiday]}
            </h2>
            <span>
                <Button onClick={next_holiday_alphabetically}>
                    Advance by Alphabet
                </Button>
                <Button onClick={next_holiday_by_year}>Advance by Year</Button>
            </span>
        </span>
    );
}
