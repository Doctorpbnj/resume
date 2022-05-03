function editHeading (){
    try {

        document.getElementById("heading").innerHTML = document.getElementById("input").innerHTML;
    }
    catch (err) {
        alert(err);
    }
    
}