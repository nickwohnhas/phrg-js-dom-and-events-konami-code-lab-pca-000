const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
let body = document.body


let index = 0

function init() {
   body.addEventListener('keydown', function (e) {
    const key = parseInt(e.detail || e.which);

  if (key === code[index]) {
    index++;

    if (index === code.length) {
      window.alert("Hurray!");
    }
  }
  else {
    index = 0;
  }
  })
}
