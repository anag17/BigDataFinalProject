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
    //document.getElementById('search_results').innerHTML = collegeData;

}

function loadCollegeData(collegeInfo) {
  //collegeData = collegeInfo;
  var results = document.getElementById('map');
  results.innerHTML = '';
  document.getElementById('search_results').innerHTML = collegeInfo;
}

// function loadJSON(callback) {
//
//     var xobj = new XMLHttpRequest();
//     xobj.overrideMimeType("application/json");
//     xobj.open('GET', '../data.json', true); // Replace 'my_data' with the path to your file
//     xobj.onreadystatechange = function () {
//           if (xobj.readyState == 4 && xobj.status == "200") {
//             // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
//             callback(xobj.responseText);
//           }
//     };
//     xobj.send(null);
//  }

function getRegion(item) {
    var results = document.getElementById('map');
    results.innerHTML = '';
    document.getElementById('search_results').innerHTML = "Region: " + item;

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
