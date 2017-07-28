	var finalstr = ""
	var update = function(str,oper){
		switch(oper){
			case 'num':
				finalstr += str;
				break;

			case 'op':
				if(str == '='){
					//Parse the final String and perform calculation
					//Main work comes here
				}
				else{
					finalstr += str;
				}
				


			case 'sp':
				if(str == 'AC') finalstr = ''

				if(str == 'CE') finalstr = ''


		}
			
		

		document.getElementById('disp-str').innerHTML = finalstr;

	} 

	
