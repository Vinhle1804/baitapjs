function camon() {
    const canh = parseInt(document.getElementById("input").value);

    let tg = '';

    for (let i = 1; i <= canh; i++) {
      for (let j = 1; j <= i; j++) {
        tg += "* ";
      }
      tg += "<br>"; 
    }

    document.getElementById("result").innerHTML = tg;
  }