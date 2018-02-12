
var $tbody = document.querySelector("tbody");
var $dateInput = document.querySelector("#date");
var $cityInput = document.querySelector("#city");
var $stateInput = document.querySelector("#state");
var $countryInput = document.querySelector("#country");
var $shapeInput = document.querySelector("#shape");
var $searchBtn = document.querySelector("#search");


$searchBtn.addEventListener("click", handleSearchButtonClick);


var filteredDate = dataSet;


function renderTable() {
  $tbody.innerHTML = "";
  for (var i = 0; i < filteredDate.length; i++) {
    
    var date = filteredDate[i];
    var fields = Object.keys(date);
    
    var $row = $tbody.insertRow(i);
    for (var j = 0; j < fields.length; j++) {
      
      var field = fields[j];
      var $cell = $row.insertCell(j);
      $cell.innerText = date[field];
    }
  }
}

function handleSearchButtonClick() {
  
  var filterDate = $dateInput.value.toLowerCase();
  var filterCity = $cityInput.value.trim().toLowerCase();
  var filterState = $stateInput.value.trim().toLowerCase();
  var filterCountry = $countryInput.value.trim().toLowerCase();
  var filterShape = $shapeInput.value.trim().toLowerCase();

  
  filteredDate = dataSet.filter(function(date) {
    var ufoDate = date.datetime.substring(0, filterDate.length).toLowerCase();
    var ufoCity = date.city.substring(0, filterCity.length).toLowerCase();
    var ufoState = date.state.substring(0, filterState.length).toLowerCase();
    var ufoCountry = date.country.substring(0, filterCountry.length).toLowerCase();
    var ufoShape = date.shape.substring(0, filterShape.length).toLowerCase();
    if (ufoDate === filterDate && ufoCity === filterCity && ufoState === filterState && ufoCountry === filterCountry && ufoShape === filterShape) {
      return true;
    }
    return false;
  });
  renderTable();
}


renderTable();
