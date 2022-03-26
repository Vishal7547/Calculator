let output = document.getElementById('screen');
let button = document.getElementsByClassName('btn');
//console.log('vii')
for(let item of button){
    item.addEventListener('click',(e)=>{
       let getOutput = e.target.innerHTML;

       try {
        switch(getOutput){
            case 'X':
                getOutput = '*';
                output.value += getOutput;
                break;
 
               case 'C':
                output.value="";
                    break;
                case '=':
                    output.value = eval(output.value);
                   break;
                    
                   default:
                  
                  output.value += getOutput;
 
      }
      }
      
      catch(err) {
       output.value = err.message
     
      }
      
    })
}

