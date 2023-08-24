function inHoaChuDau() {
  let text = document.getElementById('input').value;
  let arr = text.split(' ');
  let upperCase = arr.map(word => word.charAt(0).toUpperCase() + word.slice(1));
  document.getElementById('result').innerText = upperCase.join(' ');
}