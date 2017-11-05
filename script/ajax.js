function getData(page) {
  var xmlHttp = createXMLHttp(success, error);
  xmlHttp.open('get', 'http://localhost/page/'+page+'.html', true);
  xmlHttp.send(null);
  xmlHttp.onreadystatechange = function() {
    if (xmlHttp.readyState === 4) {
      if (xmlHttp.status === 200) {
        d = document.getElementById("content");
        d.innerHTML = success.call(null, xmlHttp.responseText);
      } else {
        error.call(null, xmlHttp.responseText);
      }
    } else {
      //still processing
    }
  };
}
