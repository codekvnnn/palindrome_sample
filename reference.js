function palindrome(myString){

  length = myString.length;

  for(i=0;i<length;1++){
    console.log(myString[i]. myString[length - 1 - i]);
    if (myString[i] !== myString[lenth - 1 - i]){
        return false
    }
  }
  return true
}

console.log(palindrome("racecar"));
