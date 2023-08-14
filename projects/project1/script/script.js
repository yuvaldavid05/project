function form1() {
    document.querySelector('.inside form').style.display = 'none';

    const elemContact = document.querySelector('.inside');
    const send = document.createElement('p');
    send.className = "send";
    send.innerHTML = "טופס זה נשלח ויענה בהקדם, <br> תודה ויום נעים!";

    elemContact.appendChild(send);
}