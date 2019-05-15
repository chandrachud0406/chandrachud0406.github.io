var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/index.jpeg') {
        myImage.setAttribute ('src', 'images/download.jpeg');
    } else {
        myImage.setAttribute ('src', 'images/index.jpeg');
    }

}
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
    var myName = prompt('Please enter your name');
    localStorage.setItem('name', myName);
    myHeading.textContent = myName + 's totem';
}

if(!localStorage.getItem('name')) {
    setUserName();
} else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = storedName + 's totem';
}

myButton.onclick = function() {
    setUserName();
}