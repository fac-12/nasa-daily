/*eslint-disable*/
var dateform = document.getElementById('dateform');



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
  var date = event.target[0].value;
  var url = '/date';
  var xhr = new XMLHttpRequest();
  var obj;

  xhr.onreadystatechange = function() {
    if(xhr.readyState === 4){
      if (xhr.status === 200) {
        success()
      }
      else {
        error()
      }
    }
  }

})
