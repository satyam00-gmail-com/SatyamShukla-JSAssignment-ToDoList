        var toDoListStr=" ";
            function addNote()
            {
            currItem=document.getElementById("listItem").value.toString();            
            toDoListStr=toDoListStr.concat(currItem);
            document.getElementById("demo").innerHTML= toDoListStr; 
            console.log(toDoListStr+"Added") ;
            }
            function enableEditNote()
            {
             document.getElementById("demo").contentEditable=true;
             toDoListStr=document.getElementById("demo").innerHTML.toString();
             console.log(toDoListStr+"Edited") ;
            }
            function saveNote()
            {
             toDoListStr=document.getElementById("demo").innerHTML.toString();
             document.getElementById("demo").contentEditable=false;  
             console.log(toDoListStr+"saved") ;
            }

            function deleteNote()
            {
             document.getElementById("demo").innerHTML="";
             toDoListStr="";
             console.log(toDoListStr+"Deleted") ;   
            }
