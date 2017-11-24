/*eslint-disable*/
var dateform = document.getElementById('dateform');
var todayButton = document.getElementById('todayID');
var title = document.getElementById('responseTitle');
var image = document.getElementById('image');
var infoText = document.getElementById('res-text');
var background = document.getElementById('page');
var datefield = document.getElementById('datefield');

//Setting todays date for the form
function setTodaysDate(){
  var today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth()+1;
  var yyyy = today.getFullYear();

  if(dd<10) dd='0'+dd;
  if(mm<10) mm='0'+mm;

  today = yyyy + '-' + mm + '-' + dd;
  document.getElementById('datefield').setAttribute('max', today);
}
setTodaysDate();


//event listener for the form/datefield
dateform.addEventListener('submit', function(event) {
  event.preventDefault();
  var input = event.target[0].value;
  var url = '/date=' + input;

  apiCall(url, apiResponse);
});

// This function makes an XHR request and response
// It expects a url and a callback function which handles the parsed XHR response obj
function apiCall(url, callback) {
  var xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4) {
      if (xhr.status == 200) {
        var responseObj = JSON.parse(xhr.responseText);
        callback(responseObj);
      } else {
        alert('Oh no something went wrong');
      }
    }
  };
  xhr.open("GET", url, true);
  xhr.send();
}



// On click - set date input field to Today's date
todayButton.addEventListener('click', function(event) {
  var today = datefield.getAttribute('max');
  datefield.value = today;
});



//function that takes apiInfo from front end and renders
function apiResponse(nasaData){
  background.style.backgroundImage = "url('" + nasaData.url + "')";
  title.innerText = nasaData.title;
  infoText.innerText = nasaData.explanation;
};
