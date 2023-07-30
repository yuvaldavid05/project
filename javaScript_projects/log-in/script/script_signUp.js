function signUp() {

    const objNew = {
        fullName: document.querySelector("#fullName").value,
        email: document.querySelector("#email").value,
        userName: document.querySelector("#userName").value,
        password: document.querySelector("input[type=password]").value,
    }

    // שליחה לשרת להוספת הנתונים החדשים - הרשמה
    fetch("https://api.shipap.co.il/signup", {
        method: 'POST',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(objNew),
    })
        .then(res => res.json())
        .then(data => {
            if (data.status == 'success') {
                snackbar("המשתמש נרשם בהצלחה");
                document.querySelector(".signup").style.display = 'none';
                document.querySelector(".success").style.display = 'block';
            } else {
                alert(data.message);
            }
        });
}


//פונקצייה להגדרת הסנייקבר 
function snackbar(message) {
    const elem = document.getElementById("snackbar");
    elem.innerHTML = message;
    elem.classList.add("show");
    setTimeout(() => elem.classList.remove("show"), 3000);
}