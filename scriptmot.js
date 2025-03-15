function GeneratePassword() {
    let xmin = 8;
    let xmax = 15;
    let x = Math.random() * (xmax - xmin + 1) + xmin;

    let min = 33;
    let max = 126;
    let ch = ""
    for (let i = 0; i < x; i++) {
        let y = Math.random() * (max - min + 1) + min;
        ch += String.fromCharCode(y)
    }
    document.getElementById("zone").value = ch;
    console.log(ch)
}

function copy(){
    let password = document.getElementById("zone");
    password.select();
    document.execCommand('copy');
    alert('Password copied to clipboard!!')
}