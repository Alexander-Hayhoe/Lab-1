module.exports = {
  
  sayHello: function(text){
    console.log('Hello!' + text);
  },
  
  sum: function(num1, num2){
    return num1 + num2;
  },
  
  greater: function(num1, num2){
    if(num1 > num2){
      return num1;
      }
      return num2;
    },
  isEven: function(num){
      if(num % 2 === 0){
        return true;
      }
      return false;
    }
};