var btnPrevYear;
var btnNextYear;

var btnPrevMonth;
var btnNextMonth;
var dropDownListYear;
var dropDownListMonth;
var g_curr_year;
var g_DropDownList_BaseYear;

var g_DayTable;
init();
btnPrevYear.onclick = function() {
	btnPrevYear_onclick();
	updateDays();
}

btnNextYear.onclick = function() {
	btnNextYear_onclick();
	updateDays();
}

btnPrevMonth.onclick = function()
{
	if ( dropDownListMonth.selectedIndex > 0)
		dropDownListMonth.selectedIndex--;
	updateDays();
}

btnNextMonth.onclick = function(){
	if (dropDownListMonth.selectedIndex < 11)
		dropDownListMonth.selectedIndex++;
	updateDays();
}
dropDownListYear.onchange = function() {
	dropDownListYear_Select_Change();
	updateDays();
}

dropDownListMonth.onchange = function(){
	updateDays();
}
function dropDownListYear_Select_Change() {
	g_DropDownList_BaseYear = get_year_num(dropDownListYear.value);
	console.log("base_year:" + g_DropDownList_BaseYear.toString() + "\n");
	update_dropDownListYear();
}

function btnPrevYear_onclick() {

	g_DropDownList_BaseYear = get_year_num(dropDownListYear.value);
	g_DropDownList_BaseYear -= 1;
	updateDays();
	update_dropDownListYear();
}

function btnNextYear_onclick() {
	g_DropDownList_BaseYear = get_year_num(dropDownListYear.value);
	//g_DropDownList_BaseYear = (parseInt(g_DropDownList_BaseYear) + 1).toString();
	g_DropDownList_BaseYear += 1;
	update_dropDownListYear();
	updateDays();

}

function get_year_num(text_year)
{
	var end_pos =  text_year.indexOf("年");
	return parseInt(text_year.substr(0,end_pos));
}

function get_month_num(text_month)
{
	var end_pos =  text_month.indexOf("月");
	return parseInt(text_month.substr(0,end_pos));
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

function updateDays()
{
	var curr_select_year = get_year_num(dropDownListYear.value);
	var curr_select_month = get_month_num(dropDownListMonth.value)-1;
	var curr_select_day = 1;
	var last_day_of_month = 1; 
	var last_day_of_pre_month = 1;
	var the_day_of_the_week = 0;

	var curr_date = new Date(curr_select_year,curr_select_month,curr_select_day);
	
	the_day_of_the_week = curr_date.getDay();
	last_day_of_month = lastDayOfMonth(curr_select_year,curr_select_month);
	last_day_of_pre_month = lastDayOfMonth(curr_select_year,curr_select_month-1);
	
	update_table_cell(the_day_of_the_week,last_day_of_month,last_day_of_pre_month);
	console.log("last_day_of_month:"+last_day_of_month.toString());
}

function lastDayOfMonth(year,month)
{
	var date = new Date(year,month+1,0);
	return date.getDate();
}

function onTableCellClick(cell){
	console.log(cell.innerHTML);
}

function registerTableCellClick() {
	var row_idx = 1;
	var cell_idx = 0;

	var row ;
	var cell;	
	for ( row_idx = 1; row_idx < 7; row_idx++)
	{
		row = g_DayTable.rows[row_idx];
		for (cell_idx = 0 ; cell_idx < 7 ; cell_idx++)
		{
				cell = row.cells[cell_idx];
				cell.onclick = function(){
					onTableCellClick(this);
				}
		}
	}
}

function update_table_cell(begin_cell_idx,last_day_of_cur_month,last_day_of_pre_month)
{
	var day_idx = 1;
	var row_idx = 1;
	var cell_idx = begin_cell_idx;
	var out_of_curr_month = 0;
	var row ;
	var cell;
	console.log("week:"+begin_cell_idx.toString());
	for ( row_idx = 1; row_idx < 7; row_idx++)
	{
		row = g_DayTable.rows[row_idx];
		if ( 1 == row_idx )
		{
			// display end parts the prev month
			for ( cell_idx = 0 ; cell_idx < begin_cell_idx ; cell_idx++)
			{
				out_of_curr_month = 1;
				cell = row.cells[cell_idx];
				cell.innerHTML = (last_day_of_pre_month 
					- begin_cell_idx +1+ cell_idx).toString();
				if (out_of_curr_month) {
					cell.style.background = "MediumTurquoise";
					cell.style.color = "black";
				} else {
					cell.style.color = "red";
					cell.style.background = "white";
				}
			}
			cell_idx = begin_cell_idx;
			out_of_curr_month = 0;
		}
		else
			cell_idx = 0;

		while ( cell_idx < 7)
		{
			cell = row.cells[cell_idx];
			cell.innerHTML = (day_idx).toString();
			if ( out_of_curr_month)
			{
				cell.style.background = "LightGreen";
				cell.style.color = "black";
			}	
			else
			{
				cell.style.color = "red";
				cell.style.background ="white";
			}	
			cell_idx++;
			day_idx++;
			// display next month first parts
			if ( day_idx > last_day_of_cur_month)
			{	
				day_idx = 1;
				out_of_curr_month = 1;
			}



		}
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

	g_DayTable = document.getElementById("ID_Day_Table");
	g_DropDownList_BaseYear = date.getFullYear();
	update_dropDownListYear();
	init_months();
	dropDownListMonth.selectedIndex = date.getMonth();
	updateDays();
	registerTableCellClick();
}