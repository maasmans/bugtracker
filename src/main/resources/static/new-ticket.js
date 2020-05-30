
// USED TO CREATE THE LIST OF PROJECTS TO CHOOSE FROM
function retrieveProjects() {
    var xhr = new XMLHttpRequest();
    var jsonData;
    xhr.onreadystatechange = function() {
        if (this.readyState == 4) {
        console.log(this.responseText);
        var jsonData = JSON.parse(this.responseText);
        var projects = "";
        for(var i = 0; i < jsonData.length ; i++){
          if(jsonData[i].projectName == null){ projects += "<option value = '"+ jsonData[i].id + "'>"+ "Unnamed" + "</option>";}
          else{projects += "<option value ='"+ jsonData[i].id + "'>"+ jsonData[i].projectName + "</option>";};
          
        }
        console.log(projects);
        document.getElementById("project-insert").innerHTML = projects;

        }
    }
    xhr.open("GET", "http://localhost:8082/api/project/", true);
    xhr.send();
    console.log(jsonData)
    return jsonData;
  }

retrieveProjects()
// --------------------------------------------------------------------
// USED TO SEND THE INFORMATION TO THE BACK-END IN JSON FORMAT
// CALLED WHEN SUBMIT IS PRESSED
// addTicketWithProject() currently used
function addTicket(){
  var theObject = {};
  theObject.title = document.getElementById("title").value;
  theObject.description = document.getElementById("description").value;

  // CODE TO LINK PROJECT

  // CODE TO LINK TYPE

  var jsonObject = JSON.stringify(theObject);
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function(){
    console.log(this.responseText);
  }
  xhr.open("POST",("http://localhost:8082/api/ticket/"), true);
  xhr.setRequestHeader("Content-type", "application/json");
  xhr.send(jsonObject);
}

function addTicketWithProject(){
  console.log("addTicketWithProject called")
  var theObject = {};
  theObject.title = document.getElementById("title").value;
  theObject.description = document.getElementById("description").value;

  let statusIndex = document.getElementById("status").value;
  theObject.status = document.getElementById("status").options[statusIndex].text;

  let priorityIndex = document.getElementById("priority").value;
  theObject.priority = document.getElementById("priority").options[priorityIndex].text;

  let typeIndex = document.getElementById("type").value;
  theObject.type = document.getElementById("type").options[typeIndex].text;
  var jsonObject = JSON.stringify(theObject);
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function(){
    console.log(this.responseText);
  }
  xhr.open("POST",("http://localhost:8082/api/ticket/" + document.getElementById("project-insert").value), true);
  xhr.setRequestHeader("Content-type", "application/json");
  xhr.send(jsonObject);
}

//--------------------------------------------------------------------

