var url = document.URL.match(/(\w*\.(\w*)|.*(localhost):3000\/.*)/)
if (url != null) {
  url = url.filter(function(val) { return val != null; });
  var environment = url[url.length-1];
  if (environment == 'localhost') {
    environment = 'dev'
  }

  if (environment.match("dev|testing|uat")) {
    var outterDiv = document.createElement("div");
    var innerDiv = document.createElement("div");
    match = environment.match(/\b\w/);
    innerDiv.innerHTML = environment.replace(/(\b\w)/, match.toString().toUpperCase());
    innerDiv.id = 'banner_content';
    outterDiv.appendChild(innerDiv);
    outterDiv.className = 'env_banner_wrapper ' + environment;
    document.getElementsByTagName('body')[0].appendChild(outterDiv);
  }
}