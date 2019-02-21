
//Create event Listener of the Get Text File 


function loadText(){
    // Create XHR object
    var xhr = new XMLHttpRequest();
    // OPEN - type, url/fileName, async
    //console.log(xhr);
    xhr.open('GET', 'sample.txt', true);

     //Note this is the new way to load txt using the onload method 
    xhr.onload = function(){
        
        //HTTP statuses
        //200: OK
        //403: Forbiden
        //404: Not Found
        
        if(this.status == 200){
            console.log(this.responseText);
        }
        
    } 
        //of you ganna use onload you must do also onerror function
    xhr.onerror = function(){
        console.log('Request Error');
    }

    /*
                //this is the old way to load txt file
    xhr.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            console.log(this.responseText);

        }

        // readyState values
        //0: request not initialized
        //1: server connection established
        //2: request recieved
        //3: processing request
        //4: request finished and respnse is ready
    }   */
    //Send Request
    xhr.send();
}

