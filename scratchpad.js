var fibonacci = function(n) {

    if(n == 0) {

        return 0;

    }
 
    else if(n == 1 || n == 2) {

        return 1;

    }

    else {

        return this.fibonacci(n - 1) + this.fibonacci(n - 2);

    }

};



var pell = function(n) {

 if(n == 0) {

        return 0;

    }
 
    else if(n == 1) {

        return 1;

    }

  else {

   return 2 *(this.pell(n-1) + this.pell(n-2));

 }

};



var tribbonacci = function(n) {

 if(n == 0) {

        return 0;

    }
 
  else if (n < 3 && n!=0) {

   return 1;

 }

 else {

   return this.tribbonacci(n-1) + this.tribbonacci(n-2) + this.tribbonacci(n-3);

  }

};




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

//HEADER////////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////////////////


var header = document.createElement('header');

header.className = 'container-fluid text-center';

var headerH2 = document.createElement('h2');

var nodeH2 = document.createTextNode('JavaScript Recursive Sequences');

headerH2.appendChild(nodeH2);

header.appendChild(headerH2);

document.body.appendChild(header);



////////////////////////////////////////////////////////////////////////////////////////////



var panelBody = document.createElement('div');

panelBody.className = 'panel-body';



var fluidContainer = document.createElement('div');

fluidContainer.className = 'container-fluid';



var row = document.createElement('div');

row.className = 'row';




var fibDiv = document.createElement("div");

fibDiv.className = "col-sm-12 text-center";

fibDiv.innerHTML += '<img src="spiralsBlack.jpg" alt="Fib Image" align="middle" height="200px" width = "200px">';

fibDiv.innerHTML += '<h4> Fibonacci</h4>';

var i;

fibDiv.innerHTML += '<p>';
for (i = 0; i <= 11; ++i) {
 
   
if (i < 11) {

       fibDiv.innerHTML += fibonacci(i) +'&nbsp;-->&nbsp;';
 
   }

    else

   {

      fibDiv.innerHTML +=  fibonacci(i) +'</p>';
 
   }
}




var pellDiv = document.createElement("div");

pellDiv.className = "col-sm-12 text-center";

pellDiv.innerHTML += '<h4> Pell</h4>';

var j;

for (j = 0; j <= 11; ++j) {
 
   
   if (j < 11) {

       pellDiv.innerHTML += pell(j) +'&nbsp;-->&nbsp;';

   }

   else

   {

      pellDiv.innerHTML +=  pell(j) +'</p>';
 
   }
}



var tribDiv = document.createElement("div");

tribDiv.className = "col-sm-12 text-center"
;
tribDiv.innerHTML += '<h4> Tribonacci</h4>';
var k;
for (k = 0; k <= 11; ++k) {
   if (k < 11) {

       tribDiv.innerHTML += tribbonacci(k) +'&nbsp;-->&nbsp;';
 
   }

   else

   {

      tribDiv.innerHTML +=  tribbonacci(k) +'</p>';
 
   }
 }


row.appendChild(fibDiv);

row.appendChild(pellDiv);

row.appendChild(tribDiv);

fluidContainer.appendChild(row);

panelBody.appendChild(fluidContainer);

document.body.appendChild(panelBody);























/////////////////////////////////////////////////////////////////////////////////////////////

//FOOTER////////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////////////////

    var footer = document.createElement("footer");

    footer.className = 'container-fluid text-center';

    
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



    footer.appendChild(paragraph1);

    footer.appendChild(paragraph2);

    document.body.appendChild(footer);



////////////////////////////////////////////////////////////////////////////////////////////


