/*
 *  collegez.js
 *  Anton Nagy, Julia Weingart
 *
 *  Javascript for Collegez website.
 */

function getInput(){
    var searchText = document.getElementById('search_bar').value;
    getCollege(searchText);
}

function getCollege(item) {
    //var collegeInfo = JSON.parse('data.json');
    var results = document.getElementById('map');
    results.innerHTML = '';
    document.getElementById('search_results').innerHTML = "College: " + item;

}

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
