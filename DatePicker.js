var btnPrevYear;
var btnNextYear;

var btnPrevMonth;
var btnNextMonth;
var dropDownListYear;
var dropDownListMonth;
var g_curr_year;
var g_DropDownList_BaseYear;

init();
btnPrevYear.onclick = function() {
	btnPrevYear_onclick();
}

btnNextYear.onclick = function() {
	btnNextYear_onclick();
}

dropDownListYear.onchange = function() {
	dropDownListYear_Select_Change();
}

function dropDownListYear_Select_Change() {
	g_DropDownList_BaseYear = dropDownListYear.value;
	console.log("base_year:" + g_DropDownList_BaseYear.toString() + "\n");
	update_dropDownListYear();
}

function btnPrevYear_onclick() {
	dropDownListYear.value -= 1;
	g_DropDownList_BaseYear = dropDownListYear.value;
	update_dropDownListYear();
}

function btnNextYear_onclick() {

	console.log(2016);
}

function get_year_num(text_year)
{
	var end_pos =  text_year.indexOf("年");
	return parseInt(text_year.substr(0,end_pos));
}

function update_dropDownListYear() {
	console.log("len:" + dropDownListYear.options.length);
	var i = 0;
	var option;
	while (dropDownListYear.options.length) {
		dropDownListYear.options.remove(0);
	}

	for (i = 0; i < 10; i++) {
		option = document.createElement("option");
		option.text = (g_DropDownList_BaseYear - 5 + i).toString();
		dropDownListYear.add(option, i);
	}

	dropDownListYear.value = g_DropDownList_BaseYear;
}

function init() {
	var date = new Date();
	btnPrevYear = document.getElementById("ID_Prev_Year");
	btnNextYear = document.getElementById("ID_Next_Year");

	btnPrevMonth = document.getElementById("ID_Prev_Month");
	btnNextMonth = document.getElementById("ID_Next_Year");

	dropDownListYear = document.getElementById("ID_Year_Opt");
	dropDownListMonth = document.getElementById("ID_Month_Opt");

	g_DropDownList_BaseYear = date.getFullYear();
	update_dropDownListYear();
}