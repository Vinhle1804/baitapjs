function chanLe() {
  let num1 = document.getElementById("input1").value;
  let num2 = document.getElementById("input2").value;

  let arr1 = [],
    arr2 = [];

  if (num1 == num2) {
    document.getElementById("result").innerText =
      "Không có số nào nằm giữa 2 số đã nhập";
  }

  num1++;
  for (let i = num1; i < num2; i++) {
    if (i % 2 == 0) {
      arr1.push(i);
    }

    if (i % 2 != 0) {
      arr2.push(i);
    }
    document.getElementById("result").innerText =
      "Tất cả các số chẳn: " + arr1 + "\n" + "Tất cả các số lẻ: " + arr2;
  }
}
