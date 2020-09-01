# Github URL
https://github.com/Grahame-student/CDA404_AE2_work_based_project

# Hosted at
https://grahame-student.github.io/CDA404_AE2_work_based_project/

# Background
The problem I was trying to solve was to highlight how Apollo's systems tools can be used to diagnose and debug common installation problems seen on Fire Systems. The issues addressed were identified from this LinkedIn post: https://www.linkedin.com/posts/apollo-fire-detectors_we-promised-to-share-our-findings-about-top-activity-6672087993886633984-zLr9/ in which Apollo's end users were invited to vote on the most common issues that they encounter.

# Wireframes
These can be found in: https://github.com/Grahame-student/CDA404_AE2_work_based_project/tree/master/docs/wireframes
All wireframes we constructed using a trial version of Balsamiq.

## Main troubleshooting page

This is what I would consider my main page, as it puts the rest of the pages into context.
![](https://github.com/Grahame-student/CDA404_AE2_work_based_project/blob/master/docs/wireframes/desktop/Troubleshooting%20-%20Desktop.png)

The wireframe shows the key features of the Apollo website's common header and footer that are required to make the new page look correct. 
From this page there will be a link to each of the individual fault pages, which give a bit more detail on which Apollo products can help improve the fault finding experience.
I believe that were this integrated into the Apollo website, it would be linked to from the Training and Support page: https://www.apollo-fire.co.uk/training-and-support

The Apollo website has one main break point between 1023/1024 pixels, therefore I created a wireframe for this layout too.
![](https://github.com/Grahame-student/CDA404_AE2_work_based_project/blob/master/docs/wireframes/mobile/Troubleshooting%20-%20Mobile.png)

Both of these layouts are heavily inspired by the main Apollo website.

## Fault pages

The individual fault pages are fairly similar and follow this basic layout, again inspired by the Apollo website.
Desktop view
![](https://github.com/Grahame-student/CDA404_AE2_work_based_project/blob/master/docs/wireframes/desktop/Earth%20Faults.png)

Compact / mobile view
![](https://github.com/Grahame-student/CDA404_AE2_work_based_project/blob/master/docs/wireframes/mobile/Troubleshooter%20Details%20-%20Mobile.png)


# Colour selection
The colours selected were mainly driven by the need to look like part of the Apollo website. CSS variables were used to make adjusting the specific colours trivial by ensuring that the specific colours used only had to be defined once, in once place.

# Accessibility
* All images, that are not purely decorative, have alt tags containing a brief description. The W3C online html validator picked up a couple that were initially missed and these have been added.
* All form fields have labels for screen readers to use.
* Where the way that screen readers use the legend of a fieldset they are kept short to reduce the chance of them causing problems for the users.
* Almost all text / background combinations are high contrast, the submit button in the header is probably the lowest contrast, functional, part of the site, however it does follow the stylying of the Apollo website.
* Appropriate h elements are used to make the hierarchy of the web page more obvious, e.g. I don't jump from h2 back to h1 and all h2 elements are of the same level of importance.

# GDPR
The webpages created do not track or collect user data in any way, the social media icons are just placeholders and no external links have been implemented in any way. The only data collection that might possible occur would have to come from Github, which is how the site is being hosted. Were this to be integrated into the Apollo website then all of the usual checks followed when publishing would be followed and the official Apollo privacy statement would be linked to.

Although the webinar and newsletter forms don't actually collect data, they are constructed to limit the data that might be collected should the page be used as part of the real website. The marketing consent has been deliberatly configured to default to 'No' so as to provide a genuine opt-in choice, unlike many so-called dark patterns that try to trick users into consenting whilst making them think they are opting out.

# Distance selling
No direct purchases can be made via the real Apollo website, and neither can they be made via the site created for the web technologies project. Were this to be made part of the Apollo website then all of the usual checks would be carried out to ensure that all product information is as accurate as it can be, and that any mistakes are corrected as quickly as possible.

# Evaluation
Don't even bother trying to get the site to render in internet Explorer! I use CSS variables to make adjusting the styling simpler, I did check the CanIUse website and made an informed decision not to support the 2 browsers, IE and Opera mobile, that didn't support the feature as they only constituted roughly 2% of browsers between them.

For this project I stuck to the official CSS3 feature names, this can cause styling issues in older versions of some browsers that had implemented the features as experimental due to the features not having been officially ratified at the time that version of the browser was released.

Finding a project turned out to be relatively simple, in a discussion with my Technical Director I was shown the LinkedIn poll and it was suggested that we could promote Apollo's range of system tools as a more efficient way of diagnosing and solving on-site issues.

I first spent a bit of time reversing engineering the Apollo website using blackbox techniques, I was very mindful of not deliberatly plagurising Apollo's implmentation. I did however want to mimic the look and feel reasonably accurately.

Using the debugging features of Firefox I was able to determine, experimentally, that the Apollo website only has 1 major break point between 1023 and 1024 pixels. I therefore opted to use the same breakpoint to make comparing the look and feel fairer.

I started off by adding the main html structual elements, using placeholders for the 3 major elements, header, main content and footer, of each page. I then proceeded to tackle the common elements of each page, starting with the header, then the footer and finally the main content, to rapidly see progress.

As the HTML content of each major element was put in place I then implemented the styling of the completed content. This is where things got interesting, and frustrating at times, I tried to structure the CSS to apply common values to every element regardless of whether the appear in both views or not. Where there were difference I then overrode the default styling options for the breakpoint's special case.

On the whole, many of my frustrations came from getting to grips with the nuances of flexboxes, which dispite making me go grey were still *much* easier to use than floating elements!

With the basic styling in place I turned to the scaling and responsive behaviour of the pages. This part almost made me give up, until I moved away from the pixel units, I'd used to get things looking reasonable quickly, to the em unit which made good scaling almost trivial. There's nothing like using the right tool for the job. The only part where I, briefly, deviated from the almighty em unit was for the h1 in the main content. This scaled down nicely, but when scaling up the element rapidly outgrew therest of the content on the page. To combat this I turned to the vw unit, a bit of maths and a @media breakpoint. I knew that at 1024 pixels the layout switched over to desktop mode, I also knew that beyond 56px the h1 element started to look out of place therefore for < 1024px I used a vw value of 5, calculated by vw = (56px / 1024px) x 100 and rounded down. For >= 1024 h1 is set to 3em, which scales very nicely.

The main content itself was actually pretty dull, mainly due to Apollo's bare bones styling of articles.

I did also integrate a nicer, in my opinion, webinar registration form. The form linked to from the Apollo website is a very basic office form, which, whilst functional and probably easier to implement as it doesn't require much in the way of backend support, is quite jarring as it lack the Apollo styling.

I feel that I've done quite a good job mimicing the Apollo website, there were a few time I made changes and wondered why they weren't showing up in the browser, only to realise it wasn't my page I was refreshing.

I tested my site at a number of different screen sizes, comparing against the Apollo site at the same screen size. Before adding the webform, I was able to reasonably approximate the Apollo site down to a screen with of 400px. The form, being a reasonalbly late addition could have been made bettter with a bit more development time.

The webform uses html5 validation for most fields, the only exception is the checkboxes as there is not an inbuild way of doing this with just html. Instead I implemented a validation routine in javascript that itterates through the different choices and unhides a message if at least on has not been selected. I felt that this approach was less jarring than having a message box pop up yet still clearly identifies where in the form the problem is.

I also tested my pages using the latest versions of Firefox, Chrome and Edge. As mentioned above older versions may not render correctly, however adding the experimental feature names to the stylesheet would in all likelyhood resolve the vast majority of these issues.

If experimental feature names are used they should be added before the official feature name, for example:
``` css
nav {
    /* Everything should support this! */
    background-color: red;
    
    /* Use an image if that is available instead */
    background-image: url(gradient-slice.png);
    
    /* Try the browser specific versions */
    background-image: -webkit-linear-gradient(top right, #A60000, #FFFFFF);
    background-image: -moz-linear-gradient(top right, #A60000, #FFFFFF);
    background-image: -ms-linear-gradient(top right, #A60000, #FFFFFF);
    background-image: -o-linear-gradient(top right, #A60000, #FFFFFF);
    
    /* Finally override with the official version if it is supported */
    background-image: linear-gradient(top right, #A60000, #FFFFFF);
}
```
