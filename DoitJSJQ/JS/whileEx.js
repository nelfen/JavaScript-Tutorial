var i = 1;
while(i<=30) {
  if(i % 2 == 0 && i % 6 == 0) {
    document.write(i + "<br>");
  }
  i++;
}

var j = 20;
while(j>=10) {
  if(j % 2 == 0) {
    document.write("<p class='blue'>" + j + "</p>");
  } else {
    document.write("<p class='red'>" + j + "</p>");
  }
  j--;
}