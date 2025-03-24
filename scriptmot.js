function GeneratePassword() {

    //Set password length range
    let xmin = 8;
    let xmax = 15;

    //Generate a length randomly
    let x = Math.random() * (xmax - xmin + 1) + xmin;


    //Creating the password randomly using printable ASCII characters
    const min = 33;
    const max = 126;
    let ch = ""
    for (let i = 0; i < x; i++) {
        let y = Math.random() * (max - min + 1) + min;
        ch += String.fromCharCode(y)
    }
    //Display the generated password
    document.getElementById("zone").value = ch;

    
    //console.log(ch)
}

//Copying the password 
function copy(){
    let password = document.getElementById("zone");
    password.select();
    document.execCommand('copy');
    alert('Password copied to clipboard!!')
}
