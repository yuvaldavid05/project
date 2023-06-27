function form6(){
    document.querySelector('.col-md-5 form').style.display = 'none';

    const elemContact = document.querySelector('.col-md-5');
    const send = document.createElement('div');
    send.className = "send";
    send.innerHTML = " תודה על פנייתכם <br> נציג מטעמנו יצור קשר בהקדם להשלמת התהליך, <br> המשך יום נעים;) ";



    elemContact.appendChild(send);
}