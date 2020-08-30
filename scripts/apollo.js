function setupEvents()
{
    document.getElementById("newsletter-subscribe").addEventListener("submit", validate);
}

function validate(e)
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
