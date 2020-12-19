import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>LeetCode Problem</h1>
<div>
58. Length of Last Word
</div>
`;
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  let answer = "";
  ///creating new string
  let spacer = s.split("").reverse().join("").trim();
  // confirm change
  console.log(spacer);
  //if the string is just a space
  if (spacer === " ") {
    console.log("0");
    return 0;
  }
  //if the string has ANY spaces
  if (spacer.indexOf(" ") !== -1) {
    answer = spacer.indexOf(" ");
  } else {
    answer = spacer.length;
    return answer;
  }
  // console.log(spacer.length);
  console.log(answer);
  return answer;
};

lengthOfLastWord("Hello World is the thing");
