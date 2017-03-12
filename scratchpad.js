//////////////////////////////////////////////////////////////////////////////////////////////

//LOADING BOOTSTRAP LINKS/SCRIPTS////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////////////////////////////

    var meta = document.createElement('meta');

    meta.name = 'viewport';

    meta.content = 'width=device-width, initial-scale=1';

    document.head.appendChild(meta);



    //Bootstrap stylesheet

    var link = document.createElement('link');

    link.rel = 'stylesheet';

    link.href = 'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css';

    document.head.appendChild(link);


    
//My stylesheet

    var myLink = document.createElement('link');

    myLink.rel = 'stylesheet';

    myLink.href = 'recursive.css';

    myLink.type='text/css';

    document.head.appendChild(myLink);


    
var scriptJquery = document.createElement('scriptJquery');

    scriptJquery.src = 'https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js';

    document.head.appendChild(scriptJquery);


    var scriptBS = document.createElement('scriptBS');

    scriptBS.src = 'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js';

    document.head.appendChild(scriptBS);


//////////////////////////////////////////////////////////////////////////////////////////////


//Setting document title
document.title = "Recursive JS";























/////////////////////////////////////////////////////////////////////////////////////////////

//FOOTER////////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////////////////

    var footer = document.createElement("footer");

    footer.className = 'container-fluid text-center';

    
var header = document.createElement("h4");
    
var node = document.createTextNode("Helpful Links");


    header.appendChild(node);

var paragraph1 = document.createElement("p");

    var linkSpace1 = document.createTextNode(" | ");

    var linkSpace2 = document.createTextNode(" | ");



    var fibLink = document.createElement("a");
    
var fibText = document.createTextNode("Fibonacci");

    fibLink.target = '_blank';

    fibLink.href='https://oeis.org/A000045';

    fibLink.appendChild(fibText);

    paragraph1.appendChild(fibLink);

    paragraph1.appendChild(linkSpace1);



    var pellLink = document.createElement("a");

    var pellText = document.createTextNode("Pell");

    pellLink.target = '_blank';

    pellLink.href='https://oeis.org/A000129';

    pellLink.appendChild(pellText);

    paragraph1.appendChild(pellLink);

    paragraph1.appendChild(linkSpace2);



    var tribLink = document.createElement("a");

    var tribText = document.createTextNode("Tribonacci");

    tribLink.target = '_blank';

    tribLink.href='https://oeis.org/A000073';

    tribLink.appendChild(tribText);

    paragraph1.appendChild(tribLink);



    var paragraph2 = document.createElement("p");

    var paraNode = document.createTextNode("2017 - Mary Dettenmaier - CS2610 - Assignment #6 - Recursive JS");

    paragraph2.appendChild(paraNode);



    footer.appendChild(header);

    footer.appendChild(paragraph1);

    footer.appendChild(paragraph2);

    document.body.appendChild(footer);



////////////////////////////////////////////////////////////////////////////////////////////




var fibonacci = function(n) {

    if(n <= 11) {

        return 1;

    } else {

        return this.fibonacci(n - 1) + this.fibonacci(n - 2);

    }

};