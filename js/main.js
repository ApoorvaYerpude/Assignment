function validateform(form){  
    var name=document.myform.name.value;  
    
      
    
    if(form.name.value == "Apoorva" )
    {
      window.open('index.html')/*opens the target page while Id & password matches*/
    }
   else
   {
     alert("This username dosen't exist")/*displays error message*/
    }}