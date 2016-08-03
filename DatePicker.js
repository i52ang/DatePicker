var btnPrevYear;
var btnNextYear;

var btnPrevMonth;
var btnNextMonth;
var dropDownListYear;
var dropDownListMonth;
var g_curr_year;
var g_DropDownList_BaseYear;

init();
btnPrevYear.onclick =function(){
	btnPrevYear_onclick();
}

function btnPrevYear_onclick()
{
	console.log("curr_year:"+g_DropDownList_BaseYear.toString()+"\n");
}

function update_dropDownListYear()
{

	dropDownListYear.

}

function init()
{
	var date = new Date();
 	btnPrevYear = document.getElementById("ID_Prev_Year");
 	btnNextYear = document.getElementById("ID_Next_Year");
 	
 	btnPrevMonth = document.getElementById("ID_Prev_Month");
 	btnNextMonth = document.getElementById("ID_Next_Year");

 	dropDownListYear = document.getElementById("ID_Year_Opt");
 	dropDownListMonth = document.getElementById("ID_Month_Opt");

 	g_DropDownList_BaseYear = date.getFullYear();
}
