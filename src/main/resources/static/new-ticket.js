function retrieveProjects() {
    var xhr = new XMLHttpRequest();
    var jsonData;
    xhr.onreadystatechange = function() {
        if (this.readyState == 4) {
        console.log(this.responseText);
        var jsonData = JSON.parse(this.responseText);
        var projecten = "";
        for(var i = 0; i < jsonData.length ; i++){
          if(jsonData[i].projectName == null){ projecten += "<option>"+ "Unnamed" + "</option>";}
          else{projecten += "<option> ProjectName: "+ jsonData[i].projectName + "(" + jsonData[i].id +  ")</option>";};
          
        }
        console.log(projecten);
        document.getElementById("project-insert").innerHTML = projecten;

        }
    }
    xhr.open("GET", "http://localhost:8082/api/project/", true);
    xhr.send();
    console.log(jsonData)
    return jsonData;
  }

retrieveProjects()

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
  xhr.open("POST",("http://localhost:8082/api/ticket/" + id), true);
  xhr.setRequestHeader("Content-type", "application/json");
  xhr.send(jsonObject);
}

function addTicketWithProject(){
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
  xhr.open("POST","http://localhost:8082/api/ticket/", true);
  xhr.setRequestHeader("Content-type", "application/json");
  xhr.send(jsonObject);
}
