function sortWord() {
    const input = document.getElementById("input").value;
    const sort = input.split('').sort().join('');
    document.getElementById("result").textContent = sort;
}