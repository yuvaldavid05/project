function form2(){
    document.querySelector('.col-md-5 form').style.display = 'none';

    const elemContact = document.querySelector('.col-md-5');
    const send = document.createElement('p');
    send.className = "send";
    send.innerHTML = "הקופון כבר בדרך אליכם.. מקווים שיכפיל לכם את החיוך הבוקר! <br> תודה והמשך יום נעים ! <br> אם הקופון עדיין לא הגיע לאחר מספר דקות, <br>     יש לבדוק אולי העיפו אותנו לספאם בטעות:)";

    elemContact.appendChild(send);
}