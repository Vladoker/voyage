$(function() {
  var availableTags = [
  "Молдова",
  "Россия",
  "Украина",
  "Германия",
  "Америка",
  "Китай",
  "Япония",
  "Канада",
  "Moldova",
  "Russia",
  "Ukraine",
  "German",
  "USA",
  "China",
  "Japan",
  "Canada"
  ];
  $( "#distination_autocomplete" ).autocomplete({
    source: availableTags
	});
  $( "#distination_autocomplete_medium" ).autocomplete({
    source: availableTags
	});
	
});

