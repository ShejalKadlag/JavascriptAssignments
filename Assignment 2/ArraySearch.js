const strings = ["hello world", "welcome", "hello again", "java",];
const searchTerm = "hello";

const results = searchStrings(strings, searchTerm);
console.log(results); 

//use includes to check string contains or not
function searchStrings(strings, searchTerm) {
    return strings.filter(string => string.toLowerCase().includes(searchTerm.toLowerCase()));
  }


