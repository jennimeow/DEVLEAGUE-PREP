function addLastName (){

  console.log('addLastName called!');
  
  function generateDocument(){
    //1. document.createElement
    //2. element.appendChild

    var lastNameElem = 
        document.createElement('span');

    var lastNameText = 
        document.createTextNode('Tran');    

    lastNameElem.id = 'myLastName';
    lastNameElem.appendChild(lastNameText);

    var myNameElem = document.getElementById('myName');
    // document.body.appendChild(element);
    //<div id='someId'>TEST</div>
    myNameElem.appendChild(lastNameElem);
    console.log('last name added');

    // var newElement = document.createElement('span');
    // newElement.id = 'someOtherId';
    // document.getElementById('someId').appendChild(newElement);
  }

  generateDocument();

}
// window.onload = addLastName;