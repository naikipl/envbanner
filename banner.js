var url = document.URL.match(/(\w*\.(\w*)|.*(localhost):3000\/.*)/)
if (url != null) {
  url = url.filter(function(val) { return val != null; });
  var environment = url[url.length-1];
  if (environment == 'localhost') {
    environment = 'dev'
  }

  if (environment.match("dev|testing|uat")) {
    var div = document.createElement("div");
    var imgURL = chrome.extension.getURL(environment+"_banner.png");
    div.innerHTML = "<img src="+imgURL+"\>";
    div.className = 'env_banner_wrapper'
    document.getElementsByTagName('body')[0].appendChild(div);
  }
}