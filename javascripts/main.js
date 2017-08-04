	var finalstr = ""; //shows the progress of operations
	var inpstr = ""; //what is being inputed
	var update = function(str,oper){
		switch(oper){
			case 'num':
				inpstr = str
			    display(inpstr);
				finalstr += str;
				break;

			case 'op':
				if( finalstr.endsWith('x') || finalstr.endsWith('/') || finalstr.endsWith('+') || finalstr.endsWith('-')){
					finalstr  = finalstr.slice(0,finalstr.length-1)
					
				}
 				if(str == '='){
 					//Parse the final String and perform calculation

					//Extracts and stores numbers in num array
 					var nums = finalstr.split(/[+\-x/]/);
 					var operands = [];
 					var dummy = finalstr;

 					//Extracts and Stores operands in operands array
 					while(/[+\-x/]/.test(dummy)){
 						
 						operands.push(/[+\-x/]/.exec(dummy)[0]);
 						dummy = dummy.substr(dummy.indexOf(operands[operands.length-1]) + 1,dummy.length-1);
 					}
 					var result =  parseFloat(nums[0]);
 					var j = 0;
 					for(var i = 1 ; i < nums.length ; i++){
 						switch(operands[j]){
 							case 'x':
 								result *= parseFloat(nums[i])
 								break;
 							
 							case '/':
 								result /= parseFloat(nums[i])
 								break;
 							
 							case '+':
 								result += parseFloat(nums[i])
 								break;

 							case '-':
 								result -= parseFloat(nums[i])
 								break;
 						}
 						j++;
 					}

 					finalstr = result.toString();
 					inpstr = finalstr
					display(inpstr);
					break;

 					



				}
				finalstr += str;
				inpstr = str
				display(inpstr);
				break;

			case 'sp':
				if(str == 'AC') finalstr = '';display(' ')
				if(str == 'CE' && inpstr !== ''  ){

					finalstr = finalstr.substr(0,finalstr.length - 1);
					inpstr = '';
					display(inpstr);
				} 
				break;

		}
			
		

		document.getElementById('disp-str').innerHTML = finalstr; //shows the progress of operations

	} 

	var display = function(str){
		document.getElementById('output-str').innerHTML = str; //shows whats  being input and output will be displayed here.
	}

	
