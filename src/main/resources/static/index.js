/* globals Chart:false, feather:false */


function retrieveTickets() {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (this.readyState == 4) {
      console.log(this.responseText);
      var jsonData = JSON.parse(this.responseText);
      var htmlTable = '<table class="table table-striped table-sm"> <thead>';
      htmlTable += '<tr>' + 
      '<th>Ticket ID</th>' + 
      '<th>Title</th>' + 
      '<th>Description</th>'+
      '<th>Date created</th>'+
      '</tr>'+ 
      '</thead>'+ 
      '<tbody>'
      for(var i = 0 ; i < jsonData.length; i++){
        htmlTable += "<tr><td>" + jsonData[i].id + "</td> <td>" + jsonData[i].title + "</td><td>" + jsonData[i].description + "</td><td>" +jsonData[i].createdString + "</td></tr>";
      }
     
      htmlTable += "</tbody></table>";
      console.log(htmlTable);
      document.getElementById("ticket-table").innerHTML = htmlTable;
    }
  }
  xhr.open("GET", "http://localhost:8082/api/ticket/", true);
  xhr.send();
}
retrieveTickets();
/* TO BE CHANGED INNERHTML ticket-table
    
 */
/* THE CHART STUFF FROM BOOTSTRAP
(function () {
  'use strict'

  feather.replace()

  // Graphs
  var ctx = document.getElementById('myChart')
  // eslint-disable-next-line no-unused-vars
  var myChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday'
      ],
      datasets: [{
        data: [
          15339,
          21345,
          18483,
          24003,
          23489,
          24092,
          12034
        ],
        lineTension: 0,
        backgroundColor: 'transparent',
        borderColor: '#007bff',
        borderWidth: 4,
        pointBackgroundColor: '#007bff'
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: false
          }
        }]
      },
      legend: {
        display: false
      }
    }
  })
}())
*/