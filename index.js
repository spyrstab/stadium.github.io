src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"

//table2
var array2=[["Α.Ο Ξαθνης","ΑΝΑΤΟΛΙΚΗ ΜΑΚΕΔΟΝΙΑ&ΘΡΑΚΗ","ΞΑΝΘΗΣ","102959","Δημοτικο","1970","9500","2,3"],
["Σταδιο Κασσανδιας","ΚΕΝΤΡΙΚΗ ΜΑΚΕΔΟΝΙΑ","ΧΑΛΚΙΔΙΚΗΣ","96849","Δημοτικο","2001","2040","1"],
["Ανθη Καραγιαννη","ΑΝΑΤΟΛΙΚΗ ΜΑΚΕΔΟΝΙΑ&ΘΡΑΚΗ","ΚΑΒΑΛΑ","141499","Δημοτικο","1970","10550","2,3"],
["Αγίου Παύλου","ΚΕΝΤΡΙΚΗ ΜΑΚΕΔΟΝΙΑ","ΘΕΣΣΑΛΟΝΙΚΗ","1084001","Δημοτικο","1950","200","1"],
["Αννα Βερούλη ","ΑΝΑΤΟΛΙΚΗ ΜΑΚΕΔΟΝΙΑ&ΘΡΑΚΗ","ΚΑΒΑΛΑ","141499","Δημοτικο","1928","1000","1"],
["Απόλλων Καλαμαριας","ΚΕΝΤΡΙΚΗ ΜΑΚΕΔΟΝΙΑ","ΘΕΣΣΑΛΟΝΙΚΗ","1084001","Ιδιοτηκό","1973","6500","2,3"],
["Καυτατζογλιο","ΚΕΝΤΡΙΚΗ ΜΑΚΕΔΟΝΙΑ","ΘΕΣΣΑΛΟΝΙΚΗ","1084001","Δημοτικό","1956","27700","2,3"],
["Κλεάνθης Βικελίδης","ΚΕΝΤΡΙΚΗ ΜΑΚΕΔΟΝΙΑ","ΘΕΣΣΑΛΟΝΙΚΗ","1084001","Ιδιοτηκό","1915","22800","2,3"],
["Περασματος","ΔΥΤΙΚΗ ΜΑΚΕΔΟΝΙΑ","ΦΛΩΡΙΝΑ","54109","Δημοτικο","1930","200","1"],
["Τουμπας","ΚΕΝΤΡΙΚΗ ΜΑΚΕΔΟΝΙΑ","ΘΕΣΣΑΛΟΝΙΚΗ","1084001","Δημοτικο","1959","29703","2,3"],
["Σταδιο Κοζανη","ΔΥΤΙΚΗ ΜΑΚΕΔΟΝΙΑ","ΚΟΖΑΝΗ","153939","Δημοτικο","1955","4000","2,3"]],

        table2 = document.getElementById("gram");
        for(var i = 0; i < array2.length; i++)
       {
           var newRow = table2.insertRow (table2.length);
           for(var j = 0; j < array2[i].length; j++)
           {
               var cell = newRow.insertCell (j)
               cell.innerHTML = array2[i][j]
           }
       }

       table2 = document.getElementById("gram");
       //if(localStorage.tableData==undefined){localStorage.tableData=table2.innerHTML};
       //table2.innerHTML = localStorage.tableData;     
 function addrowtable() {
  var len = array2.length
  var tableg = document.getElementById("gram");
  var row = table2.insertRow(len+1);
var cell1 = row.insertCell(0);
var cell2 = row.insertCell(1);
var cell3 = row.insertCell(2);
var cell4 = row.insertCell(3);
var cell5 = row.insertCell(4);
var cell6 = row.insertCell(5);
var cell7 = row.insertCell(6);
var cell8 = row.insertCell(7);
cell1.innerHTML = document.querySelector('#newCellOneText').value;
cell2.innerHTML = document.querySelector('#newCellTwoText').value;
cell3.innerHTML = document.querySelector('#newCellThreeText').value;
cell4.innerHTML = document.querySelector('#newCellFourText').value;
cell5.innerHTML = document.querySelector('#newCellFiveText').value;
cell6.innerHTML = document.querySelector('#newCellSixeText').value;
cell7.innerHTML = document.querySelector('#newCellSevenText').value;
cell8.innerHTML = document.querySelector('#newCellEightText').value;

localStorage.tableData=table.innerHTML; 
}
$(function(){
    $('#btn_submit').click(function(){
       $('#btn_reset').click();  
       document.getElementById("newCellOneText").value=""
       document.getElementById("newCellTwoText").value=""
       document.getElementById("newCellThreeText").value=""
       document.getElementById("newCellFourText").value=""
       document.getElementById("newCellFiveText").value=""
       document.getElementById("newCellSixeText").value=""
       document.getElementById("newCellSevenText").value=""
       document.getElementById("newCellEightText").value=""
    
      });
});



function sortTable(n) {
  var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
  table = document.getElementById("gram");
  switching = true;

  dir = "asc"; 

  while (switching) {
    
    switching = false;
    rows = table.rows;
   
    for (i = 1; i < (rows.length - 1); i++) {
     
      shouldSwitch = false;
    
      x = rows[i].getElementsByTagName("TD")[n];
      y = rows[i + 1].getElementsByTagName("TD")[n];
    
      if (dir == "asc") {
        if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
     
          shouldSwitch= true;
          break;
        }
      } else if (dir == "desc") {
        if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
         
          shouldSwitch = true;
          break;
        }
      }
    }
    if (shouldSwitch) {
     
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
      
      switchcount ++;      
    } else {
 
      if (switchcount == 0 && dir == "asc") {
        dir = "desc";
        switching = true;
      }
    }
  }
}


var columnhide = document.getElementById("colhide");
columnhide.addEventListener("change", generateData2);
function generateData2(event) {
if (columnhide.value == '1') {
  hideCol0();
}else if(columnhide.value == '2'){
  hideCol1();
}else if(columnhide.value == '3'){
  hideCol2();
}else if(columnhide.value == '4'){
  hideCol3();
}else if(columnhide.value == '5'){
  hideCol4();
  
}else if(columnhide.value == '6'){
  hideCol5();
}
else if(columnhide.value == '7'){
  hideCol6();
}
else if(columnhide.value == '8'){
  hideCol7();
}else if(columnhide.value == '9'){
  hideCol8();
}

  else if(columnhide.value == '10'){
  restore();}
  
}

  function hideCol0() {
    var col = 0;

    var tbl = document.getElementById("gram");
    if (tbl != null) {
        for (var i = 0; i < tbl.rows.length; i++) {
            for (var j = 0; j < tbl.rows[i].cells.length; j++) {
                tbl.rows[i].cells[j].style.display = "";
                if (j == col)
                    tbl.rows[i].cells[j].style.display = "none";
            }
        }
    }
}
function hideCol1() {
  var col = 1;
  var tbl = document.getElementById("gram");
  if (tbl != null) {
      for (var i = 0; i < tbl.rows.length; i++) {
          for (var j = 0; j < tbl.rows[i].cells.length; j++) {
              tbl.rows[i].cells[j].style.display = "";
              if (j == col)
                  tbl.rows[i].cells[j].style.display = "none";
          }
      }
  }
}
function hideCol2() {
var col = 2;

var tbl = document.getElementById("gram");
if (tbl != null) {
    for (var i = 0; i < tbl.rows.length; i++) {
        for (var j = 0; j < tbl.rows[i].cells.length; j++) {
            tbl.rows[i].cells[j].style.display = "";
            if (j == col)
                tbl.rows[i].cells[j].style.display = "none";
        }
    }
}
}
function hideCol3() {
var col = 3;

var tbl = document.getElementById("gram");
if (tbl != null) {
  for (var i = 0; i < tbl.rows.length; i++) {
      for (var j = 0; j < tbl.rows[i].cells.length; j++) {
          tbl.rows[i].cells[j].style.display = "";
          if (j == col)
              tbl.rows[i].cells[j].style.display = "none";
      }
  }
}
}
function hideCol4() {
var col = 4;

var tbl = document.getElementById("gram");
if (tbl != null) {
  for (var i = 0; i < tbl.rows.length; i++) {
      for (var j = 0; j < tbl.rows[i].cells.length; j++) {
          tbl.rows[i].cells[j].style.display = "";
          if (j == col)
              tbl.rows[i].cells[j].style.display = "none";
      }
  }
 }
}
function hideCol5() {
var col = 5;

var tbl = document.getElementById("gram");
if (tbl != null) {
  for (var i = 0; i < tbl.rows.length; i++) {
      for (var j = 0; j < tbl.rows[i].cells.length; j++) {
          tbl.rows[i].cells[j].style.display = "";
          if (j == col)
              tbl.rows[i].cells[j].style.display = "none";
      }
  }
 }
}
function hideCol6() {
var col = 6;

var tbl = document.getElementById("gram");
if (tbl != null) {
  for (var i = 0; i < tbl.rows.length; i++) {
      for (var j = 0; j < tbl.rows[i].cells.length; j++) {
          tbl.rows[i].cells[j].style.display = "";
          if (j == col)
              tbl.rows[i].cells[j].style.display = "none";
      }
  }
 }
}
function hideCol7() {
var col = 7;

var tbl = document.getElementById("gram");
if (tbl != null) {
  for (var i = 0; i < tbl.rows.length; i++) {
      for (var j = 0; j < tbl.rows[i].cells.length; j++) {
          tbl.rows[i].cells[j].style.display = "";
          if (j == col)
              tbl.rows[i].cells[j].style.display = "none";
      }
  }
 }
}
function hideCol8() {
var col = 8;

var tbl = document.getElementById("gram");
if (tbl != null) {
  for (var i = 0; i < tbl.rows.length; i++) {
      for (var j = 0; j < tbl.rows[i].cells.length; j++) {
          tbl.rows[i].cells[j].style.display = "";
          if (j == col)
              tbl.rows[i].cells[j].style.display = "none";
      }
  }
 }
}


function restore(){
var tbl = document.getElementById("gram");
if (tbl != null) {
  for (var i = 0; i < tbl.rows.length; i++) {
      for (var j = 0; j < tbl.rows[i].cells.length; j++) {
          tbl.rows[i].cells[j].style.display = "";
}
  }
}
}
function hideOrShow() {
	

  var x = document.getElementById("gram");
  
  if (x.style.display === "none") {
    x.style.display = "block";
 
  } else {
  
    x.style.display = "none";
  }
}



function myFunction() {
  var firstmane=document.getElementById("txt").value;
  localStorage.setItem("textvalue",firstname);
  return false;
  } 
  //serviceworker
if("serviceWorker" in navigator)
{
    navigator.serviceWorker.register("sw.js").then(register=>
    {
    console.log("SW Registerd!");
    console.log(registration);

}).catch(error => {
    console.log("SW Registerd Faild!");
    console.log(error);
});
}


