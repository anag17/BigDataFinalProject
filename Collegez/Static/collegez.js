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
    //var url = base_url+item+'/';
    window.location.href = "college/";
    
}

// function onSearchCallback(responseText) {
//     href="http://localhost:8000/college/result/";
// }

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
