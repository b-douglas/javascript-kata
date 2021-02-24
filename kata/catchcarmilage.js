export default class CatchCarMilage {


  isInteresting(number, awesomePhrases) {
    // Go to town!

    const no = 0
    const almost = 1
    const yes = 2

    let interesting = no

    if(number <= 99 || number >= 1000000000) 
    {
      return no
    } 

    
    
    (interesting = checkForAwesomePhrases(number, awesomePhrases)) >= 1 ? (return (interesting)) : false
  
    (interesting = checkForPalindrome(number)) >= 1 ? return interesting : false
  
      (interesting = checkForIncementing(number)) >= 1 ? return interesting : false
    
      (interesting = checkForDecrementing(number)) >= 1 ? return interesting : false
    
        (interesting = checkForSameNum(number)) >= 1 ? return interesting : false
    
          (interesting = checkForZeros(number)) >= 1 ? return interesting : false
  
  }

}