function dem() {
    const chuoi = document.getElementById("input1").value;
    const kytu = document.getElementById("input2").value;

    let dem = 0;
    for (let i = 0; i < chuoi.length; i++) {
      if (chuoi[i] === kytu) {
        dem++;
      }
    }

    document.getElementById("result").textContent = `Số lần xuất hiện của ký tự "${kytu}" trong chuỗi là: ${dem}`;
  }