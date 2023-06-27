function form_portfolio(){
    document.querySelector('section .col-sm-6').style.display = 'none';

    const elemContact = document.querySelector('#contact');
    const send = document.createElement('p');
    send.className = "send";
    send.innerHTML = "טופס זה נשלח ויענה בהקדם, <br> תודה ויום נעים!";

    elemContact.appendChild(send);

    // action=""
}