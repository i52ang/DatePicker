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

btnPrevMonth.onclick = function()
{
	if ( dropDownListMonth.selectedIndex > 0)
		dropDownListMonth.selectedIndex--;
	console.log("month_idx:"+dropDownListMonth.selectedIndex.toString());
}

btnNextMonth.onclick = function(){
	if (dropDownListMonth.selectedIndex < 11)
		dropDownListMonth.selectedIndex++;
	console.log("month_idx:"+dropDownListMonth.selectedIndex.toString());

}
dropDownListYear.onchange = function() {
	dropDownListYear_Select_Change();
}

function dropDownListYear_Select_Change() {
	g_DropDownList_BaseYear = get_year_num(dropDownListYear.value);
	console.log("base_year:" + g_DropDownList_BaseYear.toString() + "\n");
	update_dropDownListYear();
}

function btnPrevYear_onclick() {

	g_DropDownList_BaseYear = get_year_num(dropDownListYear.value);
	g_DropDownList_BaseYear -= 1;
	update_dropDownListYear();
}

function btnNextYear_onclick() {
	g_DropDownList_BaseYear = get_year_num(dropDownListYear.value);
	//g_DropDownList_BaseYear = (parseInt(g_DropDownList_BaseYear) + 1).toString();
	g_DropDownList_BaseYear += 1;
	update_dropDownListYear();

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
		option.text = (g_DropDownList_BaseYear - 5 + i).toString()+"年";
		dropDownListYear.add(option, i);
	}

	dropDownListYear.value = g_DropDownList_BaseYear.toString()+"年";
}

function padNum(source_num,len)
{
	var source_string = source_num.toString();
	while ( source_string.length < len)
	{
		source_string = "0"+source_string;
	}
	return source_string;
}

function init_months()
{
	var option;
	var i = 1;
	for ( i = 1 ; i <= 12;i++)
	{
		option = document.createElement("option");
		option.text = padNum(i,2) + "月";
		dropDownListMonth.add(option,i-1);
	}
}

function init() {
	var date = new Date();
	btnPrevYear = document.getElementById("ID_Prev_Year");
	btnNextYear = document.getElementById("ID_Next_Year");

	btnPrevMonth = document.getElementById("ID_Prev_Month");
	btnNextMonth = document.getElementById("ID_Next_Month");

	dropDownListYear = document.getElementById("ID_Year_Opt");
	dropDownListMonth = document.getElementById("ID_Month_Opt");

	g_DropDownList_BaseYear = date.getFullYear();
	update_dropDownListYear();
	init_months();
}