function form3(){
    document.querySelector('.ex3 form').style.display = 'none';

    const elemContact = document.querySelector('.ex3');
    const send = document.createElement('p');
    send.className = "send";
    send.innerHTML = " תודה על פנייתכם נציג מטעמנו יצור קשר בהקדם להשלמת התהליך, <br> המשך יום נעים;) ";



    elemContact.appendChild(send);
}