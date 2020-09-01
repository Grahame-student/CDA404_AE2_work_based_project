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
    // List of available options
    const options = ["event_diagnostics","event_product_ranges","event_alarmsense","event_hazardous","event_xpander"];
    const webinar_booking = document.getElementById("webinar-register");

    var option_selected = false;
    for(i = 0; i < options.length; i++)
    {
        option_selected ||= isSelected(webinar_booking, options[i]);
    }
    
    if (option_selected)
    {
        console.log("At least on webinar selected, proceed with booking");
    }
    else
    {
        console.log("No webinar selected, do not submit booking");        
        e.preventDefault();
        
        document.getElementsByClassName("required-warning")[0].style.visibility = "visible";
    }        
}

function isSelected(webform, cb_option)
{
    return webform[cb_option].checked;
}
