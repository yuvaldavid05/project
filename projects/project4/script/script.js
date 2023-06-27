function form4(){
    document.querySelector('.inside form').style.display = 'none';

    const elemContact = document.querySelector('.inside');
    const send = document.createElement('p');
    send.className = "send";
    send.innerHTML = "טופס זה נשלח לגורם הרלוונטי <br> ובקרוב מאוד נציג מטעמנו יחזור אליכם עם הפרטים אז תהיו מוכנים :) ";



    elemContact.appendChild(send);
}