function solution(phone_number) {
    var answer = phone_number.slice(phone_number.length-4, phone_number);
    return  "*".repeat(phone_number.length-4,) + answer;
}

function solution(phone_number) {
    var answer = phone_number.slice(-4);
    return  "*".repeat(phone_number.length-4,) + answer;
}
