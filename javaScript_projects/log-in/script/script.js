function login() {
    const obj = {
        userName: document.querySelector("#userName").value,
        password: document.querySelector("input[type=password]").value,
    };


    // שליחה לשרת
    fetch("https://api.shipap.co.il/login", {
        method: 'POST',
        credentials: 'include', // מאפשר שליחה וקבלה של עוגיות
        headers: {
            'Content-Type': 'application/json' // הגדרת סוג התוכן הנשלח לשרת
        },
        body: JSON.stringify(obj), // תוכן הקריאה לשרת
    })
        // קבלה מהשרת
        // *המרת התוכן לפי הצורך*
        .then(res => res.json())
        // התוכן שהתקבל מהשרת (לאחר טיפול של הפונקציה הקודמת)
        .then(data => {
            if (data.status == 'success') {
                // setUser(data.user);
                // snackbar("המשתמש התחבר בהצלחה");
            } else {
                // alert(data.message);


            }
        });
}


function loginStatus() {
    fetch("https://api.shipap.co.il/login", {
        credentials: 'include',
    })
        .then(res => res.json())
        .then(data => {
            if (data.status == 'success') {
                setUser(data.user);
            } else {
                setUser();
            }
        });
}

function logout() {

    fetch("https://api.shipap.co.il/logout", {
        credentials: 'include',
    })
        .then(() => {
            setUser();
        });
}


function getProducts() {
    fetch("https://api.shipap.co.il/products", {
        credentials: 'include',
    })
        .then(res => res.json())
        .then(data => {
            document.querySelector('.products').style.display = 'block';
            const tbody = document.querySelector('.products tbody');
            tbody.innerHTML = '';

            data.forEach((p, i) => {
                const tr = document.createElement("tr");

                tr.innerHTML = `
                <td>${i + 1}</td>
                <td contenteditable="true" oninput="contentChange(this)" class="name">${p.name}</td>
                <td contenteditable="true" oninput="contentChange(this)" class="price">${p.price}</td>
                <td contenteditable="true" oninput="contentChange(this)" class="discount">${p.discount}</td>
                <td>
            `;
                tbody.appendChild(tr);
            });
        })
}



function setUser(user = null) {
    const divLogin = document.querySelector(".login");
    const divUser = document.querySelector(".user");
    const divProducts = document.querySelector(".products");

    if (user) {
        divLogin.style.display = 'none';
        divUser.style.display = 'block';
        divUser.querySelector('.userName').innerHTML = `${user.fullName} מחובר`;
        getProducts();
    } else {
        divLogin.style.display = 'block';
        divUser.style.display = 'none';
        divProducts.style.display = 'none';
    }
}


// function loader(isShowing = false) {
//     const loaderFrame = document.querySelector('.loaderFrame');

//     if (isShowing) {
//         loaderFrame.style.display = 'flex';
//     } else {
//         loaderFrame.style.display = 'none';
//     }
// }



// function snackbar(message) {
//     const elem = document.getElementById("snackbar");
//     elem.innerHTML = message;
//     elem.classList.add("show");
//     setTimeout(() => elem.classList.remove("show"), 3000);
// }