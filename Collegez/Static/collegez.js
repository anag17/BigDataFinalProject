/*
 *  collegez.js
 *  Anton Nagy, Julia Weingart
 *
 *  Javascript for Collegez website.
 */

var collegeData;

function getInput(){
    var searchText = document.getElementById('search_bar').value;
    getCollege(searchText);
}

function getCollege(item) {
    var results = document.getElementById('map');
    results.innerHTML = '';
    var textBody = ''

    if (item == 'list') {
      for (key in collegeData) {
        textBody += key + '<br>';
      }
    }
    else {
      textBody += 'College: ' + item + '<br>';
      textBody += 'Region: ' + collegeData[item]['Region'] + '<br>';
      textBody += 'Type of School: ' + collegeData[item]['College Type'] + '<br>';
      if (collegeData[item]['College Type 2'] != "") {
        textBody += 'Secondary Type of School: ' + collegeData[item]['College Type 2'] + '<br>';
      }
      textBody += 'Tuition: $' + collegeData[item]['Tuition'] + '<br>';
      textBody += 'Salary: $' + collegeData[item]['Salary'];
    }
    document.getElementById('search_results').innerHTML = textBody;

}

function loadCollegeData(collegeInfo) {
  collegeData = collegeInfo;
}

function getRegion(item) {
    var results = document.getElementById('map');
    results.innerHTML = '';
    var collegeList = '';
    for (key in collegeData) {
      if (collegeData[key]['Region'] == item) {
        //collegeList += key + '<br>';
        collegeList += '<button onclick=\"getCollege(\'' + key + '\')\"> '+ key + '</button>' + '<br>';
      }
    }
    document.getElementById('search_results').innerHTML = "Colleges: " + collegeList;

}

 /*
  *  When the user clicks help button, an alert shows up explaining what they can search for
  */
function helpAlert() {
    alert(`Search for a degree by name or a college by name or type of school.
        Types of schools: Ivy League, State, Liberal Arts, Engineering, Party`)
}

/*
 *  The user can press enter in addition to clicking the search bar
 */
function onKeyPress(keyEvent) {
    if(keyEvent.keyCode == 13) {
        getInput();
    }
}
