
      let calculation = localStorage.getItem('calculation')|| '';  
      displayCalculation();
      
      function doCalculation (value){
        calculation += value;
        displayCalculation();
        localStorage.setItem('calculation', calculation);
      }

      function displayCalculation(){
       document.querySelector('.js-result')
           .innerHTML = calculation;
      }