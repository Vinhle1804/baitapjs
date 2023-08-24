
    function chanle() {
      const number = +(document.getElementById("input").value);

      if (isNaN(number)) {
        document.getElementById("result").textContent = "Nhập lại pls";
      } else if (number < 0) {
        document.getElementById("result").textContent = "Đây là số âm";
      } else if (number > 0) {
        document.getElementById("result").textContent = "Đây là số dương";
      } else {
        document.getElementById("result").textContent = "Đây là số 0";
      }
    }

