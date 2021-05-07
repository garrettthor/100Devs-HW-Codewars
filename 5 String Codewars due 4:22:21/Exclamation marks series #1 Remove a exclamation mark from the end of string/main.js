/*
Description:

Remove a exclamation mark from the end of string. For a beginner kata, you can assume that the input data is always a string, no need to verify it.
Examples

remove("Hi!") === "Hi"
remove("Hi!!!") === "Hi!!"
remove("!Hi") === "!Hi"
remove("!Hi!") === "!Hi"
remove("Hi! Hi!") === "Hi! Hi"
remove("Hi") === "Hi"

Note

Please don't post issue about difficulty or duplicate.
*/



function remove(s){
    let splitArray = s.split('')
    if (splitArray[splitArray.length-1] === '!') {
        splitArray.pop()
        return splitArray.join('')
    } else {
        return splitArray.join('')
    }
}

remove('Hi!')