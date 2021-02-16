function sendEmail {
    var $emailFrom = document.getElementById("txtYourEmail").value;
    var msg = document.getElementById("txtYourMsg").value;
    var mailto = "mariia.sinodalova@myy.haaga-helia.fi";
    var sendEmail  = mail($EmailTo,$Message,"From:<$emailFrom");
    if ($sendEmail) {
        print "Thanks for contacting me":
    }
}

