import { Answer } from "./interfaces/answer";
import { Question, QuestionType } from "./interfaces/question";
import { makeBlankQuestion, duplicateQuestion } from "./objects";

/**
 * Consumes an array of questions and returns a new array with only the questions
 * that are `published`.
 */
export function getPublishedQuestions(questions: Question[]): Question[] {
    return questions.filter((q) => q.published);
}

/**
 * Consumes an array of questions and returns a new array of only the questions that are
 * considered "non-empty". An empty question has an empty string for its `body` and
 * `expected`, and an empty array for its `options`.
 */
export function getNonEmptyQuestions(questions: Question[]): Question[] {
    return questions.filter(
        (q) => q.body != "" || q.expected != "" || q.options.length > 0,
    );
}

/***
 * Consumes an array of questions and returns the question with the given `id`. If the
 * question is not found, return `null` instead.
 */
export function findQuestion(
    questions: Question[],
    id: number,
): Question | null {
    // find the question with the specified id
    const question = questions.find((q) => q.id == id);
    if (question != null) {
        return question;
    } else {
        return null;
    }
}
/**
 * Consumes an array of questions and returns a new array that does not contain the question
 * with the given `id`.
 */
export function removeQuestion(questions: Question[], id: number): Question[] {
    const question: Question[] = questions.filter((q) => !(q.id == id));
    return question;
}

/***
 * Consumes an array of questions and returns a new array containing just the names of the
 * questions, as an array.
 */
export function getNames(questions: Question[]): string[] {
    const question: string[] = questions.map((q) => q.name);
    return question;
}

/***
 * Consumes an array of questions and returns the sum total of all their points added together.
 */
export function sumPoints(questions: Question[]): number {
    const sum: number = questions.reduce(
        (total: number, q: Question) => total + q.points,
        0,
    );
    return sum;
}

/***
 * Consumes an array of questions and returns the sum total of the PUBLISHED questions.
 */
export function sumPublishedPoints(questions: Question[]): number {
    const sum: number = questions.reduce((total: number, q: Question) => {
        if (q.published) {
            return total + q.points; // add only if published
        }
        return total;
    }, 0);
    return sum;
}

/***
 * Consumes an array of questions, and produces a Comma-Separated Value (CSV) string representation.
 * A CSV is a type of file frequently used to share tabular data; we will use a single string
 * to represent the entire file. The first line of the file is the headers "id", "name", "options",
 * "points", and "published". The following line contains the value for each question, separated by
 * commas. For the `options` field, use the NUMBER of options.
 *
 * Here is an example of what this will look like (do not include the border).
 *`
id,name,options,points,published
1,Addition,0,1,true
2,Letters,0,1,false
5,Colors,3,1,true
9,Shapes,3,2,false
` *
 * Check the unit tests for more examples!
 */
export function toCSV(questions: Question[]): string {
    const headers = ["id", "name", "options", "points", "published"].join(",");
    // Map question attributes to a formatted string
    const lines = questions.map((q) => {
        const id = q.id;
        const name = q.name;
        const options = q.options.length;
        const points = q.points;
        const published = q.published;
        return `${id},${name},${options},${points},${published}`;
    });
    const csv_string: string = `${headers}\n${lines.join("\n")}`; // add newline to end of each line
    return csv_string;
}

/**
 * Consumes an array of Questions and produces a corresponding array of
 * Answers. Each Question gets its own Answer, copying over the `id` as the `questionId`,
 * making the `text` an empty string, and using false for both `submitted` and `correct`.
 */
export function makeAnswers(questions: Question[]): Answer[] {
    const modified_question: Answer[] = questions.map((q) => ({
        questionId: q.id,
        text: "",
        submitted: false,
        correct: false,
    }));
    return modified_question;
}

/***
 * Consumes an array of Questions and produces a new array of questions, where
 * each question is now published, regardless of its previous published status.
 */
export function publishAll(questions: Question[]): Question[] {
    const allPublished: Question[] = questions.map((q) => {
        return {
            ...q,
            published: true, // set published to true
        };
    });

    return allPublished;
}

/***
 * Consumes an array of Questions and produces whether or not all the questions
 * are the same type. They can be any type, as long as they are all the SAME type.
 */
export function sameType(questions: Question[]): boolean {
    // Compare every type to the first questions type
    const check: boolean = questions.every((q) => q.type == questions[0].type);
    return check;
}

/***
 * Consumes an array of Questions and produces a new array of the same Questions,
 * except that a blank question has been added onto the end. Reuse the `makeBlankQuestion`
 * you defined in the `objects.ts` file.
 */
export function addNewQuestion(
    questions: Question[],
    id: number,
    name: string,
    type: QuestionType,
): Question[] {
    const blankQuestion: Question = makeBlankQuestion(id, name, type);
    return [...questions, blankQuestion];
}

/***
 * Consumes an array of Questions and produces a new array of Questions, where all
 * the Questions are the same EXCEPT for the one with the given `targetId`. That
 * Question should be the same EXCEPT that its name should now be `newName`.
 */
export function renameQuestionById(
    questions: Question[],
    targetId: number,
    newName: string,
): Question[] {
    return questions.map((q) => {
        if (q.id == targetId) {
            return {
                ...q,
                name: newName, // only update the name
            };
        }
        return q;
    });
}

/***
 * Consumes an array of Questions and produces a new array of Questions, where all
 * the Questions are the same EXCEPT for the one with the given `targetId`. That
 * Question should be the same EXCEPT that its `type` should now be the `newQuestionType`
 * AND if the `newQuestionType` is no longer "multiple_choice_question" than the `options`
 * must be set to an empty list.
 */
export function changeQuestionTypeById(
    questions: Question[],
    targetId: number,
    newQuestionType: QuestionType,
): Question[] {
    const new_questions: Question[] = questions.map((q) => {
        if (q.id == targetId) {
            const updated_question = {
                ...q,
                type: newQuestionType, // update the type
            };

            if (newQuestionType != "multiple_choice_question") {
                updated_question.options = [];
            }
            return updated_question; // return the question
        }
        return q;
    });
    return new_questions;
}

/**
 * Consumes an array of Questions and produces a new array of Questions, where all
 * the Questions are the same EXCEPT for the one with the given `targetId`. That
 * Question should be the same EXCEPT that its `option` array should have a new element.
 * If the `targetOptionIndex` is -1, the `newOption` should be added to the end of the list.
 * Otherwise, it should *replace* the existing element at the `targetOptionIndex`.
 *
 * Remember, if a function starts getting too complicated, think about how a helper function
 * can make it simpler! Break down complicated tasks into little pieces.
 */
// Helper function to update options list
function updateOptions(
    options: string[],
    targetOptionIndex: number,
    newOption: string,
): string[] {
    if (targetOptionIndex === -1) {
        return [...options, newOption]; // add the new option to end of array
    } else if (targetOptionIndex >= 0 && targetOptionIndex < options.length) {
        const updated_options = [...options]; // replace current option
        updated_options[targetOptionIndex] = newOption;
        return updated_options;
    }
    return options;
}

export function editOption(
    questions: Question[],
    targetId: number,
    targetOptionIndex: number,
    newOption: string,
): Question[] {
    return questions.map((q) => {
        if (q.id === targetId) {
            const updated_option: string[] = updateOptions(
                // use helper function defined above
                q.options,
                targetOptionIndex,
                newOption,
            );
            return { ...q, options: updated_option };
        }
        return q;
    });
}

/***
 * Consumes an array of questions, and produces a new array based on the original array.
 * The only difference is that the question with id `targetId` should now be duplicated, with
 * the duplicate inserted directly after the original question. Use the `duplicateQuestion`
 * function you defined previously; the `newId` is the parameter to use for the duplicate's ID.
 */
export function duplicateQuestionInArray(
    questions: Question[],
    targetId: number,
    newId: number,
): Question[] {
    const output_q: Question[] = []; // array for results
    for (const q of questions) {
        output_q.push(q); // push the question to result

        if (q.id === targetId) {
            const dup_question = duplicateQuestion(newId, q); // defined in objects.ts
            output_q.push(dup_question); // push the duplicate one to result
        }
    }
    return output_q;
}
