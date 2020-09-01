function setupEvents()
{
    document.getElementById("newsletter-subscribe").addEventListener("submit", validate_newsletter);
    document.getElementById("webinar-register").addEventListener("submit", validate_webinar);
}

function validate_newsletter(e)
{
    const newsletter_subscribe = document.getElementById("newsletter-subscribe");

    if(newsletter_subscribe.email_address.value == "")
    {
        console.log("No email address supplied");
        e.preventDefault();
    }
    else
    {
        console.log("email field populated, submitting form");        
    }
}

function validate_webinar(e)
{
    console.log("not implemented yet");
    e.preventDefault();
}
