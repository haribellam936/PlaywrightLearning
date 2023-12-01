//Example 1 & 2
function lengthOfLastWord(s) {
    const trimmedString = s.trim();
    const words = trimmedString.split(' ');
    const lastWord = words[words.length - 1];
    return lastWord.length;
  }  
  //const input = "Hello World";
  const input = "fly me to the moon";
  const output = lengthOfLastWord(input);
  console.log(output);  

// Example 3
  function isAnagram(string1, string2) {
    
    const str1 = string1.replace(/\s/g, '').toLowerCase();
    const str2 = string2.replace(/\s/g, '').toLowerCase();
  
    if (str1.length !== str2.length) {
      return false;
    }  
    
    const sortedString1 = str1.split('').sort().join('');
    const sortedString2 = str2.split('').sort().join('');
  
    return sortedString1 === sortedString2;
  }

  console.log(isAnagram('listen', 'silent'));  
  console.log(isAnagram('hello', 'world'));    
  
  