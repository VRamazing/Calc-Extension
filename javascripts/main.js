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

					
 					var nums = finalstr.split(/[+\-x/]/);
 					var operands = [];
 					var dummy = finalstr;
 					while(/[+\-x/]/.test(dummy)){
 						
 						operands.push(/[+\-x/]/.exec(dummy)[0]);
 						dummy = dummy.substr(dummy.indexOf(operands[operands.length-1]) + 1,dummy.length-1);
 					}

 					console.log(operands);

 					
 					//97 / 3 * 5 + 6 / 9 + 10 - 10
					//convert into 2 list 
					//1.Integers and Floats
					//2. Operands


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

	
