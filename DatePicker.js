var btnPrevYear;
var btnNextYear;

var btnPrevMonth;
var btnNextMonth;
var dropDownListYear;
var dropDownListMonth;

init();
btnPrevYear.onclick =function(){
	btnPrevYear_onclick();
}

function btnPrevYear_onclick()
{
	console.log("curr_year:"+dropDownListYear.value+"\n");

}

function init()
{
 	btnPrevYear = document.getElementById("ID_Prev_Year");
 	btnNextYear = document.getElementById("ID_Next_Year");
 	
 	btnPrevMonth = document.getElementById("ID_Prev_Month");
 	btnNextMonth = document.getElementById("ID_Next_Year");

 	dropDownListYear = document.getElementById("ID_Year_Opt");
 	dropDownListMonth = document.getElementById("ID_Month_Opt");
}
