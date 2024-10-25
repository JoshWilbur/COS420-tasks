/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    const new_arr: number[] = numbers;
    if (new_arr.length > 0) {
        return [new_arr[0], new_arr[new_arr.length - 1]];
    } else {
        return [];
    }
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    const tripled_arr: number[] = numbers.map((num: number): number => num * 3);
    return tripled_arr;
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    const int_arr: number[] = numbers.map((num: string) => {
        const ints = parseInt(num, 10);
        return isNaN(ints) ? 0 : ints; // Use ternary op to check if element is a valid number
    });
    return int_arr;
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    const int_arr: number[] = amounts.map((num: string) => {
        const rem_sign = num.replace("$", "");
        const ints = parseInt(rem_sign, 10);
        return isNaN(ints) ? 0 : ints; // Use ternary op to check if element is a valid number
    });
    return int_arr;
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    const exclaim_arr = messages.map((str: string) => {
        if (str.endsWith("!")) {
            return str.toUpperCase();
        } else if (str.endsWith("?")) {
            return undefined; // Explicitly return undefined for clarity
        } else {
            return str;
        }
    });

    // Use a type guard to filter out undefined values
    return exclaim_arr.filter((str): str is string => str !== undefined);
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    const under_four: number = words.filter(
        (word: string) => word.length < 4,
    ).length;
    return under_four;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    const rgb: string[] = ["red", "green", "blue"];
    if (colors.length == 0) {
        return true;
    }
    return colors.every((color) => rgb.includes(color));
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    const sum: number = addends.reduce(
        (currentTotal: number, num: number) => currentTotal + num,
        0,
    );
    const sum_str: string = addends.join("+") || "0";
    return sum + "=" + sum_str;
}

/**
 * Consumes an array of numbers and produces a new array of the same numbers,
 * with one difference. After the FIRST negative number, insert the sum of all
 * previous numbers in the list. If there are no negative numbers, then append
 * the sum to the list.
 *
 * For instance, the array [1, 9, -5, 7] would become [1, 9, -5, 10, 7]
 * And the array [1, 9, 7] would become [1, 9, 7, 17]
 */
export function injectPositive(values: number[]): number[] {
    const sum: number = values.reduce(
        (currentTotal: number, num: number) => currentTotal + num,
        0,
    );

    // Use the reduce function since it acts similar to a loop
    const new_val_arr: number[] = values.reduce(
        (acc: number[], num: number, i: number) => {
            acc.push(num);

            // Check if this is the first negative number
            if (num < 0 && !acc.includes(sum)) {
                acc.push(acc.slice(0, i).reduce((sum, n) => sum + n, 0));
            }
            return acc;
        },
        [],
    );

    // If no negatives, add sum to list
    if (!values.some((num) => num < 0)) {
        new_val_arr.push(sum);
    }
    return new_val_arr;
}
