//just a comments

//define a variable and place into it the http package (shared code) from node.js
let myhttp = require("http");

//use dot notation in javascript to access an object and its methods (commands) and properties

let myserver = myhttp.createServer(
  function(myrequest, myresponse) {
    console.log(myrequest.url);

    let mytext;
    if (myrequest.url === "/hey") {
      mytext = "Well hello there...";
    } else {
      mytext = "Welcome All, You Are Now My Friend.";
    }

    mytext = mytext + " - Please help me... I'm Lost!";

    myresponse.writeHead(200, { "Content-Type": "text/plain" });

    myresponse.end(mytext);
  }
);

myserver.listen(8080, "0.0.0.0");

console.log("server has started");
