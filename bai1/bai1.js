function reverse() {
    let text = document.getElementById('input').value;
    let result = '';
    //Test
    for (let i = text.length - 1; i >= 0; i--) {
        result += text[i]
    }
    document.getElementById('result').innerHTML = result;

}