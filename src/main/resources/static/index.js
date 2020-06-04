function retrieveTickets(useDataFunction) {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (this.readyState == 4) {
      var jsObject = JSON.parse(this.responseText);
      console.log(jsObject);
      useDataFunction(jsObject);
    }
  }
  xhr.open("GET", "http://localhost:8082/api/ticket/", true);
  xhr.send();
}

function createTicketTable(jsObject) {
  var htmlTable = '<table class="table table-striped table-sm"> <thead>';
  htmlTable += '<tr>' +
    '<th>Ticket ID</th>' +
    '<th>Title</th>' +
    '<th>Description</th>' +
    '<th>Date created</th>' +
    '<th>Delete</th>'+
    '</tr>' +
    '</thead>' +
    '<tbody>'
  for (var i = 0; i < jsObject.length; i++) {
    htmlTable += "<tr><td>" + jsObject[i].id + "</td> <td>" + jsObject[i].title + "</td><td>" + jsObject[i].description 
    + "</td><td>" + jsObject[i].createdString + "</td><td>"+ 
    '<button onclick = "deleteTicket('+ jsObject[i].id +')"  style= "border: none;"> <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x-circle"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg></button>';
    + "</td></tr>";
  }

  htmlTable += "</tbody></table>";
  document.getElementById("ticket-table").innerHTML = htmlTable;
}

function addProject(){
  var theObject = {};
  theObject.projectName = document.getElementById("projectName").value;
  var jsonObject = JSON.stringify(theObject);
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function(){
    console.log(this.responseText);
  }
  xhr.open("POST",("http://localhost:8082/api/project/"), true);
  xhr.setRequestHeader("Content-type", "application/json");
  xhr.send(jsonObject);
}

function deleteTicket(id){
var xhr = new XMLHttpRequest();
xhr.open("DELETE", ("http://localhost:8082/api/ticket/" + id), true);
xhr.send();
refresh();
}



//-------------------------------
// CODE FOR THE GRAPHS
function createStatusChart() {
  let myChart = new Chart(document.getElementById("first-chart"), {
    type: 'pie',
    data: {
      labels: ["OPEN", "IN-PROGRESS", "ON-HOLD", "FINISHED"],
      datasets: [{
        label: "Tickets",
        backgroundColor: ["#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850"],
        data: [0, 0, 0, 0]
      }]
    },
    options: {
      responsive: true,

      title: {
        display: true,
        text: 'Status tickets'
      }
    }
  });
  return myChart
}
function setStatusChart(jsObject) {
  let amountOpen = 0;
  let amountProgress = 0;
  let amountHold = 0;
  let amountFinished = 0;

  jsObject.forEach((obj, index) => {
    if (obj.status === "IN-PROGRESS") {
      amountProgress += 1;
    }
    if (obj.status === "OPEN") {
      amountOpen += 1;
    }
    if (obj.status === "ON-HOLD") {
      amountOpen += 1;
    }
    if (obj.status === "FINISHED") {
      amountOpen += 1;
    }
  });
  myStatusChart.data.datasets[0].data[0] = amountOpen;  // OPEN DATA AMOUNT
  myStatusChart.data.datasets[0].data[1] = amountProgress;  // IN-PROGRESS
  myStatusChart.data.datasets[0].data[2] = amountHold;
  myStatusChart.data.datasets[0].data[3] = amountFinished;
  myStatusChart.update();
};

function createPriorityChart() {
  let myChart = new Chart(document.getElementById("second-chart"), {
    type: 'pie',
    data: {
      labels: ["LOW", "MEDIUM", "HIGH", "NONE"],
      datasets: [{
        label: "Tickets",
        backgroundColor: ["#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850"],
        data: [0, 0, 0, 0]
      }]
    },
    options: {
      responsive: true,

      title: {
        display: true,
        text: 'Priority tickets'
      }
    }
  });
  return myChart
}
function setPriorityChart(jsObject) {
  let amountLow= 0;
  let amountMedium = 0;
  let amountHigh = 0;
  let amountNone = 0;

  jsObject.forEach((obj, index) => {
    if (obj.priority === "LOW") {
      amountLow += 1;
    }
    if (obj.priority === "MEDIUM") {
      amountMedium += 1;
    }
    if (obj.priority === "HIGH") {
      amountHigh += 1;
    }
    if (obj.priority === "NONE") {
      amountNone += 1;
    }
  });
  myPriorityChart.data.datasets[0].data[0] = amountLow;  // OPEN DATA AMOUNT
  myPriorityChart.data.datasets[0].data[1] = amountMedium;  // IN-PROGRESS
  myPriorityChart.data.datasets[0].data[2] = amountHigh;
  myPriorityChart.data.datasets[0].data[3] = amountNone;
  myPriorityChart.update();
};







let myStatusChart = createStatusChart();
let myPriorityChart = createPriorityChart();

function refresh(){
retrieveTickets(setStatusChart);
retrieveTickets(setPriorityChart);
retrieveTickets(createTicketTable)
}

refresh();