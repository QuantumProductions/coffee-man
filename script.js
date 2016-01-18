 function loadJSON(path, callback) {   
    console.log("testing");
    var xobj = new XMLHttpRequest();
        xobj.overrideMimeType("application/json");
    xobj.open('GET', path, true); // Replace 'my_data' with the path to your file
    console.log("path is " + path);
    xobj.onreadystatechange = function () {
        console.log("stated change");
        console.log(xobj.status);
          if (xobj.readyState == 4) {
            console.log("xobj res");
            // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
            callback(JSON.parse(xobj.responseText));
          }
    };
    xobj.send(null);  
 }
 