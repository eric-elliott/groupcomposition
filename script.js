// const port = process.env.PORT || 8000;

// server.listen(port, () => {
//     console.log("App is running on port " + port);
// });

function initializeStaff() {
    console.log("test");
}

var i = 0;
var column = 0;
var rate = 200;
function playStaff () {           
    setTimeout(function () {  
        var boxes = document.getElementsByClassName("check");
        if(i != 0) {
            old_col = column - 1;
            var prev_col_name = 'col' + old_col.toString();
            document.getElementById(prev_col_name).style = "background-color: black;";
        }
        if(column < 28) {
            var col_name = 'col' + column.toString();
            document.getElementById(col_name).style = "background-color: violet;";
            var cnote = new Audio("./notes/c-note.wav");
            var dnote = new Audio("./notes/d-note.wav");
            var enote = new Audio("./notes/e-note.wav");
            var fnote = new Audio("./notes/f-note.wav");
            var gnote = new Audio("./notes/g-note.wav");
            var anote = new Audio("./notes/a-note.wav");
            var bnote = new Audio("./notes/b-note.wav");
            if(boxes[i].checked) {
                cnote.play();
            } 
            if(boxes[i + 1].checked) {
                dnote.play();
            } 
            if(boxes[i + 2].checked) {
                enote.play();
            } 
            if(boxes[i + 3].checked) {
                fnote.play();
            } 
            if(boxes[i + 4].checked) {
                gnote.play();
            } 
            if(boxes[i + 5].checked) {
                anote.play();
            } 
            if(boxes[i + 6].checked) {
                bnote.play();
            } 
        } 
        else {
            old_col = column - 1;
            var prev_col_name = 'col' + old_col.toString();
            document.getElementById(prev_col_name).style = "background-color: black;";
        }
       i+=7;      
       column++;              
       if (column < 29) {            
          playStaff();            
       }  
       else {
           i = 0;
           column = 0;
       }                  
    }, rate)
 }