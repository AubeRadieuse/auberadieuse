function ajax (page){
var xhr = new XMLHttpRequest();
xhr.open('GET', 'page/'+page+'.html');
xhr.send(null);
xhr.onreadystatechange = function () {
  var DONE = 4; // readyState 4 means the request is done.
  var OK = 200; // status 200 is a successful return.
  if (xhr.readyState === DONE) {
    if (xhr.status === OK){
      var r = xhr.responseText;
      document.getElementById('content').innerHTML = r;
    } else {
      console.log('Error: ' + xhr.status); // An error occurred during the request.
    }
  }
}
};
