function reverse(str) {
   return str.split('').reverse().join('');
}

function isPalindrome(str) {
   return reverse(str) === str;
}
//---------------------------------------------
function isPalindrome(str) {

   let reversed = '';

   for (let i = 0; i < str.length; i++) {
       reversed = str[i] + reversed;
   }

   return reversed === str;
}
//----------------------------------------------
function reverse(str) {
   let reversed = '';

   for (let i = 0; i < str.length; i++) {
       reversed = str[i] + reversed;
   }
   return reversed;
}

function isPalindrome(str) {
   return reverse(str) === str;
}