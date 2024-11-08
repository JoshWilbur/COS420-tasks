import React, { useState } from "react";

export function EditMode(): React.JSX.Element {
    // State for edit mode, name, and student status
    const [is_edit_mode, set_is_edit_mode] = useState(false);
    const [user_name, set_user_name] = useState("Your Name");
    const [is_student, set_is_student] = useState(true);

    return (
        <div>
            <h3>Edit Mode</h3>
            <label className="form-switch">
                <input
                    type="checkbox"
                    role="checkbox"
                    checked={is_edit_mode}
                    onChange={() => set_is_edit_mode(!is_edit_mode)}
                    aria-label="toggle-edit-mode"
                />
                Edit Mode
            </label>
            {is_edit_mode ?
                <form>
                    <label>
                        Name:
                        <input
                            type="text"
                            value={user_name}
                            onChange={(e) => set_user_name(e.target.value)}
                            aria-label="name-input"
                        />
                    </label>

                    <label>
                        Student:
                        <input
                            type="checkbox"
                            checked={is_student}
                            onChange={() => set_is_student(!is_student)}
                            aria-label="student-status"
                        />
                    </label>
                </form>
            :   <p>
                    {user_name} is {is_student ? "a student" : "not a student"}.
                </p>
            }
        </div>
    );
}
