const div1 = document.querySelector('.evaluate-inactive')
        const btn2= document.getElementById('btn2')
        const learnBtn = document.querySelector('#learnBtn')
        const input1 = (document.querySelector('.Angle1'))
        const input2 = (document.querySelector('.Angle2'))
        const input3 = (document.querySelector('.Angle3'))
        const userInputShow1 = document.querySelector('.inputShow1')
        const userInputShow2 = document.querySelector('.inputShow2')
        const userInputShow3 = document.querySelector('.inputShow3')
        const output1 = document.querySelector('.angleOutput1')
        const output2 = document.querySelector('.angleOutput2')
        const output3 = document.querySelector('.angleOutput3')
        const evaluateBtn1 = document.querySelector('.evaluate-btn1')
        const evaluateBtn2 = document.querySelector('.evaluate-btn2')
        const evaluateBtn3 = document.querySelector('.evaluate-btn3')
        const toggleAreaPerimeterBtn = document.querySelector('.showSection')
        const hero = document.querySelector('.hero')
        const heroText = hero.querySelector('h1')
        const checkBtn = document.querySelector('.check')
        const triangleOp = document.getElementById('triangleCheck')
        const sidesInput = document.querySelectorAll('input[type=number]')
        btnPerimeter = document.querySelector('.perimeterBtn')
        perimeterOutput = document.querySelector('.perimeterOutput')
        areaInput = document.querySelectorAll('.areas input[type=number]')
        btnArea = document.querySelector('.areas button')
        const div2 = document.querySelector('.inactiveareasAndPerimeters')
        areaOutput = document.querySelector('.areaOutput')

        function showLearntab(){
            document.querySelector('.learn').toggleAttribute('hidden')
        }
        function showPerimeter(){
           var side1 =((parseInt(document.querySelector('.side1').value)))
           var side2 =((parseInt(document.querySelector('.side2').value)))
           var side3 =((parseInt(document.querySelector('.side3').value)))
           
           var sum = side1 + side2 + side3
           if(side1==side2 && side2==side3){
            perimeterOutput.innerHTML=  'The perimeter of the Equilateral triangle is: ' + sum + " units."
           }
           else if(side1==side2 || side2==side3){
            perimeterOutput.innerHTML= 'The perimeter of the Isoscales triangle is: ' + sum + " units"
           }
           else {
            perimeterOutput.innerHTML= 'The perimeter of the scalene triangle is: ' + sum + " units"
           }
          

          
        }

        function shadow(e){
            console.log(e)
        }
     function show(e){
        
         div1.classList.toggle('evaluate-inactive')
         
     }
     function takeInput(){
         
        
         userInputShow1.innerHTML = input1.value + " degrees"
         
         
        
         userInputShow2.innerHTML =  input2.value + " degrees"
         userInputShow3.innerHTML = input3.value + " degrees"
         

     }

     function showAngleName(e){
         
         

            if(input1.value > 0 && input1.value < 90){
                output1.innerHTML = input1.value + " degrees is a acute angle."
            }
            else if(input1.value == 90 ){output1.innerHTML = input1.value + "  degrees is Right  angle."}

            else
            output1.innerHTML = input1.value + " degrees is an obtuse angle"

            
         }
         
    function showAngleName2(e){
         
         

         if(input2.value > 0 && input2.value < 90){
             output2.innerHTML = input2.value + " degrees is a acute angle."
         }
         else if(input2.value == 90 ){output2.innerHTML = input2.value + " degrees is Right  angle."}

         else
         output2.innerHTML = input2.value + " degrees is an obtuse angle"

         
      }  
     
      function showAngleName3(e){
         
         

         if(input3.value > 0 && input3.value < 90){
             output3.innerHTML = input3.value + " is a acute angle."
         }
         else if(input3.value == 90 ){output3.innerHTML = input3.value + " degrees is Right  angle."}

         else
         output3.innerHTML = input3.value + " degrees is an obtuse angle"

         
      }   
      function toggleTab(){
          div2.classList.toggle('inactiveareasAndPerimeters')
      }
       
      function checkTriangle(){
        console.log(input1.value)
         console.log(input2.value)
         console.log(input3.value)
          
          if ( parseInt(input1.value)  + parseInt(input2.value) + parseInt(input3.value)  == 180){
              if( parseInt(input1.value) == parseInt(input2.value) && parseInt(input2.value) == parseInt(input3.value)){
                  console.log('equilateral')
                  triangleOp.innerHTML = " Hooray! It is an Equilateral Triangle"
              }
              else if( parseInt(input1.value) == parseInt(input2.value) || parseInt(input2.value) == parseInt(input3.value)){
                  console.log('Isoscales')
                  triangleOp.innerHTML = " Hooray! It is an Isoscales Triangle"
              }

              else {
                  triangleOp.innerHTML = "Hooray , It is a Scalene Triangle"
              }
              
          }
           else if ( parseInt(input1.value)  + parseInt(input2.value) + parseInt(input3.value) < 180){
               triangleOp.innerHTML = "Not a Triangle. The sum of angles is less than 180"
           }
          else {
              triangleOp.innerHTML = "OOPs! This does not form a triangle. The sum of all angles exceeded 180"
          }
      }
     
      function showArea(){
          var base = ((parseInt(document.querySelector('.base').value)))
          var height = ((parseInt(document.querySelector('.height').value)))
          
          var area =  (base * height)/2
          areaOutput.innerHTML = 'The area is : ' + area

      }

      learnBtn.addEventListener('click' , showLearntab)
      btn2.addEventListener('click' , show)
        input1.addEventListener('keyup' , takeInput)
        input2.addEventListener('keyup' , takeInput)
        input3.addEventListener('keyup' , takeInput)
        hero.addEventListener('click' , shadow)
        evaluateBtn1.addEventListener('click' , showAngleName)
        evaluateBtn2.addEventListener('click' , showAngleName2)
        evaluateBtn3.addEventListener('click' , showAngleName3)

        //sidesInput.forEach(sidesInput => sidesInput.addEventListener('onchange' , userSideInput))

     checkBtn.addEventListener('click' , checkTriangle)
     toggleAreaPerimeterBtn.addEventListener('click' , toggleTab)
      btnPerimeter.addEventListener('click' , showPerimeter)  
      btnArea.addEventListener('click' , showArea) 
        // uing foreach , bcz it wa selected with doc.querySelectorAll , and to acces each space, we need to loop thru them
        // evaluateBtns.forEach(evaluateBtns => evaluateBtns.addEventListener('click' , showAngleName))

        