function solution(s) {
  var answer = 0;
  for (var i = 0; i < s.length; i++) {
    if (isValid(s)) answer++;
    s = s.slice(1) + s[0];
  }
  return answer;
}

function isValid(s) {
  var stack = [];
  for (var char of s) {
    if (char === "(" || char === "[" || char === "{") {
      stack.push(char);
    } else {
      if (stack.length === 0) return false;
      var top = stack.pop();
      if (
        (char === ")" && top !== "(") ||
        (char === "]" && top !== "[") ||
        (char === "}" && top !== "{")
      ) return false;
    }
  }
  return stack.length === 0;
}
