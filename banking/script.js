
document.getElementById('submit').onclick = function() {
    let client_id = document.getElementById('id').value;
    let password = document.getElementById('pass').value;

    if(client_id=="300203002" && password=="1234") {
        alert("Admin detected!")
    }
}