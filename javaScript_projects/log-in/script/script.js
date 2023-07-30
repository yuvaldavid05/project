function login() {
    const obj = {
        userName: document.querySelector("#userName").value,
        password: document.querySelector("input[type=password]").value,
    };

    //שליחה לשרת את הנתונים להתחברות.חזרה מהשרת עם תשובה התחבר\לא תקין
    fetch("https://api.shipap.co.il/login", {
        method: 'POST',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(obj),
    })
        .then(res => res.json())
        .then(data => {
            if (data.status == 'success') {
                setUser(data.user);
                snackbar("המשתמש התחבר בהצלחה");
            } else {
                alert(data.message);
            }
        });
}

//בדיקה אם המשתמש מחובר
function loginStatus() {
    fetch("https://api.shipap.co.il/login", {
        credentials: 'include',
    })
        .then(res => res.json())
        .then(data => {
            if (data.status == 'success') {
                setUser(data.user);
                snackbar("המשתמש מחובר");
            } else {
                setUser();
            }
        });
}

//התנתקות
function logout() {
    fetch("https://api.shipap.co.il/logout", {
        credentials: 'include',
    })
        .then(() => {
            setUser();
            snackbar("המשתמש התנתק בהצלחה");
        });
}

//הבאה של המוצרים המותאמים לפי המשתמש
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
                <td>
                <button class="save" onclick="saveProduct(${p.id}, this)">Save</button>
                <button class="remove" onclick="removeProduct(${p.id}, this)">❌</button>
                </td>
            `;
                tbody.appendChild(tr);
            });
        })
}


//עריכה ושמירה של מוצר 
function saveProduct(id, btnElem) {
    const tr = btnElem.closest('tr');

    const obj = {
        name: tr.querySelector('.name').innerText,
        price: tr.querySelector('.price').innerText,
        discount: tr.querySelector('.discount').innerText,
    };

    fetch(`https://api.shipap.co.il/products/${id}`, {
        method: 'PUT',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(obj),
    })
        .then(() => {

            snackbar("המוצר נשמר בהצלחה");
        });
}


//הוספת מוצר חדש
function addProduct() {
    const name = document.querySelector('#name');
    const price = document.querySelector('#price');
    const discount = document.querySelector('#discount');

    const obj = {
        name: name.value,
        price: +price.value,
        discount: +discount.value,
    };

    name.value = '';
    price.value = '';
    discount.value = '';



    fetch("https://api.shipap.co.il/products", {
        method: 'POST',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(obj),
    })
        .then(res => res.json())
        .then(data => {
            getProducts();
            snackbar("המוצר נוסף בהצלחה");
        });
}


//מחיקת מוצר
function removeProduct(id, btnElem) {
    if (!confirm('האם אתה בטוח כי ברצונך למחוק את הפריט המדובר?')) {
        return;
    }

    fetch(`https://api.shipap.co.il/products/${id}`, {
        method: 'DELETE',
        credentials: 'include',
    })
        .then(() => {
            btnElem.closest('tr').remove();
            const trs = document.querySelectorAll('tbody tr');
            trs.forEach((tr, i) => tr.querySelector('td').innerHTML = i + 1);

            snackbar("המוצר נמחק בהצלחה");
        });
}

//הגדרת מצב חיבור המשתמש - הצגת הטבלה אם מחובר 
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


//פונקצייה להגדרת הסנייקבר 
function snackbar(message) {
    const elem = document.getElementById("snackbar");
    elem.innerHTML = message;
    elem.classList.add("show");
    setTimeout(() => elem.classList.remove("show"), 3000);
}