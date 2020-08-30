function setupEvents()
{
    document.getElementById("site-search").addEventListener("submit", validate);
}

function validate(e)
{
    const site_search = document.getElementById("site-search");

    if(site_search.search_text == "")
    {
        console.log("Nope");
        e.preventDefault();
    }
}
