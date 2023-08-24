function check() {
    const chuoi = document.getElementById('input').value;
    
    if (typeof chuoi === 'string') {
      document.getElementById('result').textContent = "true";
    } else {
      document.getElementById('result').textContent = "false";
    }
  }
  