function form5(){
    document.querySelector('form').style.display = 'none';

    const elemContact = document.querySelector('.frame');
    const send = document.createElement('div');
    send.className = "send";
    send.innerHTML = "טופס זה נשלח תודה על העזרה!  <br>   מחכים לטיול הבא שלכם..:) ";



    elemContact.appendChild(send);
}