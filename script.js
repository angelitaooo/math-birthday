var months = [
	'January',
	'February',
	'March',
	'April',
	'May',
	'June',
	'July',
	'August',
	'September',
	'October',
	'November',
	'December'
];
var years = [];
var days = [];
var selectMonth = $('#select-month');
var selectYear = $('#select-year');
var selectDay = $('#select-day');

function createOptionElement(value, select) {
	var option = $(`<option value="${value}">${value}</option>`);
	select.append(option);
}

function fillSelect(select, items){
	items.forEach(function(item){
		createOptionElement(item, select);
	});
}

function getMathBday(day, month, year){
	var birthday = moment(`${day} ${month} ${year}`);
	var today = moment();
	var diff = today.diff(birthday, 'days');
	var exponential = `${diff}`.length;
	var nextBday = birthday.add(Math.pow(10, exponential), 'days');
	var mathBday = `Your next MathBday is on ${nextBday.format('DD-MMMM-YYYY')}. It will be your ${exponential} math bday!!!`;
	return mathBday;
}

for(var i = 1900; i <= 2016; i++){
	years.push(i);
}

for(var i = 1; i <= 31; i++){
	days.push(i);
}

fillSelect(selectMonth, months);
fillSelect(selectYear, years);
fillSelect(selectDay, days);

//listen for changes
$('.date-picker').change(function(){
	var bornYear = $('#select-year').val();
	var bornMonth = $('#select-month').val();
	var bornDay = $('#select-day').val();

	if (bornYear!== "" && bornMonth !== "" && bornDay !== "") {
		var mathBday = getMathBday(bornDay, bornMonth, bornYear);
		$('#math-bday').text(mathBday);
	}
});
