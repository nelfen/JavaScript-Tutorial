for(i=1; i<=5; i++) {
  document.write("반복" + i + "<br>");
}

for(i=1; i<=35; i++) {
  if(i % 5 == 0 && i % 7 != 0) {
    document.write("<p class='red'>" + i + "</p>");
  } else if(i % 5 != 0 && i % 7 == 0) {
    document.write("<p class='green'>" + i + "</p>");
  } else if(i % 5 == 0 && i % 7 == 0) {
    document.write("<p class='aqua'>" + i + "</p>");
  }
}

for(i=1; i<=10; i++) {
  if(i == 4) break;
  document.write(i + "<br>");
}
document.write("end<br>");

for(i=1; i<=5; i++) {
  if(i % 2 == 0) continue 
    document.write(i + "<br>");
}
document.write("end<br>")

for(i=1; i<=2; i++) {
  for(j=1; j<=2; j++) {
    document.write(i + "행" + j + "열<br>");
  }
}