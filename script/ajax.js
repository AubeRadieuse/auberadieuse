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

function createXMLHttp() {
  //If XMLHttpRequest is available then using it
  if (typeof XMLHttpRequest !== undefined) {
    return new XMLHttpRequest;
  //if window.ActiveXObject is available than the user is using IE...so we have to create the newest version XMLHttp object
  } else if (window.ActiveXObject) {
    var ieXMLHttpVersions = ['MSXML2.XMLHttp.5.0', 'MSXML2.XMLHttp.4.0', 'MSXML2.XMLHttp.3.0', 'MSXML2.XMLHttp', 'Microsoft.XMLHttp'],
        xmlHttp;
    //In this array we are starting from the first element (newest version) and trying to create it. If there is an
    //exception thrown we are handling it (and doing nothing ^^)
    for (var i = 0; i < ieXMLHttpVersions.length; i++) {
      try {
        xmlHttp = new ActiveXObject(ieXMLHttpVersions[i]);
        return xmlHttp;
      } catch (e) {
      }
    }
  }
}
