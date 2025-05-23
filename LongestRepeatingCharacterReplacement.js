function LongestRepeatingCharacterReplacement(str, k) {
  let left = 0,
    right = 0,
    len = 0,
    maxLength = 0,
    maxFreq = 0,
    hashObj = {},isRightIncremented=true;

  while (right < str.length) {
    if(isRightIncremented){
    if (hashObj[str[right]]) {
        hashObj[str[right]]++;
    } else {
      hashObj[str[right]] = 1;
    }
}

    maxFreq = Math.max(hashObj[str[right]], maxFreq);
    len = right - left + 1;
    if (len - maxFreq <= k) {
      maxLength = Math.max(maxLength, len);
      right++;
      isRightIncremented=true;
    } else {
        if(hashObj[str[left]]) {
            hashObj[str[left]]--;
        }
      left++;
      isRightIncremented=false;
    }
  }
  return maxLength;
}


console.log(LongestRepeatingCharacterReplacement("AAABBCCD",2))