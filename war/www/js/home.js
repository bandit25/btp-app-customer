 function addRow(tableID) {

        var table = document.getElementById(tableID);

        var rowCount = table.rows.length;
        var row = table.insertRow(rowCount);

        var colCount = table.rows[0].cells.length;

        for(var i=0; i<colCount; i++) {

            var newcell = row.insertCell(i);

            newcell.innerHTML = table.rows[1].cells[i].innerHTML;
            //alert(newcell.childNodes);
            switch(newcell.childNodes[0].type) {
                case "text":

                        newcell.childNodes[0].value = "";
                        newcell.childNodes[0].setAttribute('value', '');
                        break;
                case "checkbox":
                        newcell.className = 'checkboxTd';
                        newcell.childNodes[0].checked = false;
                        break;
            }
        }
    }

    function deleteRow(tableID) {
        try {
        var table = document.getElementById(tableID);
        var rowCount = table.rows.length;

        for(var i=0; i<rowCount; i++) {
            var row = table.rows[i];
            var chkbox = row.cells[0].childNodes[0];
            if(null != chkbox && true == chkbox.checked) {
                if(rowCount <= 2) {
                    alert("Cannot delete all the rows.");
                    break;
                }
                table.deleteRow(i);
                rowCount--;
                i--;
            }
        }
        }catch(e) {
            alert(e);
        }
    }

/*        function gatherData() {

     var table = document.getElementById('dataTable');
     if (table === null)
         return;

     if (table.rows[0].cells.length <= 1)
         return;

     var data = [];
     for (l = 0; l < table.rows[0].cells.length; l++) {
         data.push({
             items: [],
             name: "ColumnNumber" + l
         });
     }

     for (i = 1; i < table.rows.length; i++) {
         var cells = table.rows[i].cells;
         for (c = 0; c < cells.length; c++) {
             var inputElem = cells[c].children[0];
             data[c].items.push({
                 inputType: inputElem.getAttribute('type'),
                 inputValue: inputElem.value
             });
         }
     }
     printData(data);
 }

function printData(data) {
     for (i = 0; i < data.length; i++) {
         for (k = 0; k < data[i].items.length; k++) {
             console.log(data[i].items[k].inputValue);
         }
     }
 }
 document.addEventListener("DOMContentLoaded", gatherData(), false);*/
     var data = [];
    function gatherData() {
         var table = document.getElementById('dataTable');
         for (r = 1; r < table.rows.length; r++) {

             var row = table.rows[r];
             var cells = row.cells;

             for (c = 0; c < cells.length; c++) {
                 var cell = cells[c];
                 var inputElem = cell.children[0];
                 var isInput = inputElem instanceof HTMLInputElement;
                 if (!isInput)
                     return;

                 var value = inputElem.value;

                 var isCheckbox = inputElem.getAttribute('type') == 'checkbox';
                 if (isCheckbox)
                     value = inputElem.checked;

                 var rowData = {};
                 rowData.inputType = inputElem.getAttribute('type');
                 rowData.inputValue = value;
                 data.push(rowData);
             }
         }
     }

     function startExec() {
       var tableHTML = document.getElementById("dataTable").innerHTML;
       window.localStorage["sharedTable"] = tableHTML;
         gatherData();
         for (i = 0; i < data.length; i++) {
             //console.log(data[i].inputType);
             console.log(data[i].inputValue);
         }
     }
function abc(){
 //   console.log('clicked');
	var tableHTML = document.getElementById("dataTable").innerHTML;
	window.localStorage["sharedTable"] = tableHTML;
	document.getElementById("mytable").innerHTML = tableHTML;
}

$(function(){
//  console.log(localStorage.sharedTable);
  if(typeof localStorage.sharedTable !== 'undefined' && localStorage.sharedTable.length){
    document.getElementById("dataTable").innerHTML = localStorage.sharedTable;
  }

});
