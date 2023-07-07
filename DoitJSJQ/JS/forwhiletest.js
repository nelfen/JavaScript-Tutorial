var i = 1;

while(i<=9) {
  document.write("5X" + i + "=" + 5*i + "<br>");
  i++;
}

var num = 1;
var t = "<table border=1>";
for(var j=1; j<=5; j++) {

  t+="<tr>";

  for(var k=1; k<=5; k++) {
    t+="<td>" + num + "</td>";
    num++;
  }

  t+="</tr>";
}

t+="</table>";
console.log(t);
document.write(t);