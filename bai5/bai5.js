function daugachngang() {
    let text = document.getElementById('input').value;
    let arr = text.split(' ');
    document.getElementById('result').innerText = arr.join('-');
}