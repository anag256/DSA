let longest="";
function checkIfPalindrome(str) {
  let flag = 0,
    i = 0,
    j = str.length - 1;
  while (i < j) {
    if (str[i] !== str[j]) {
      flag = 1;
      break;
    }
    i++;
    j--;
  }
  if(flag===0){
    if (str.length > longest.length)
    {
        longest=str;
    }
  }
  return flag === 0 ? true : false;
}

function countPalidromes(str) {
  let left = 0,
    right = 0,
    count = 0,
    ar = [],

    isPalidrome = false;
  while (left < str.length) {
    if (right < str.length) {
      isPalidrome = checkIfPalindrome(str.substring(left, right + 1));
      if (isPalidrome) {
        count++;
        ar.push(str.substring(left, right + 1));
      }
    }
    if (right < str.length) {
      right++;
    } else {
      left++;
      right = left;
    }
  }
  return [count,ar];
}

console.log(countPalidromes("aabbba"));
console.log(longest);