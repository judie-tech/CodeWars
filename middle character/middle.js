function getMiddle(s) {
  let position;
  let length;

  if (s.length % 2 == 1) {
    position = s.length / 2;
    length = 1;
  } else {
    position = s.length / 2 - 1;
    length = 2;
  }

  return s.substring(position, position + length);
  //"substring()" extracts characters between two specified points
  //"position"  is index where the string extraction begins
  //"position+length "is where the string extraction ends
}

console.log(getMiddle("Autumn"));
