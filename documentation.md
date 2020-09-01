# Github URL
https://github.com/Grahame-student/CDA404_AE2_work_based_project

# Hosted at
https://grahame-student.github.io/CDA404_AE2_work_based_project/

# Background
The problem I was trying to solve was to highlight how Apollo's systems tools can be used to diagnose and debug common installation problems seen on Fire Systems. The issues addressed were identified from this LinkedIn post: https://www.linkedin.com/posts/apollo-fire-detectors_we-promised-to-share-our-findings-about-top-activity-6672087993886633984-zLr9/ in which Apollo's end users were invited to vote on the most common issues that they encounter.

# Wireframes
These can be found in: https://github.com/Grahame-student/CDA404_AE2_work_based_project/tree/master/docs/wireframes
All wireframes we constructed using a trial version of Balsamiq.

##Main troubleshooting page

This is what I would consider my main page, as it puts the rest of the pages into context.
![](https://github.com/Grahame-student/CDA404_AE2_work_based_project/blob/master/docs/wireframes/desktop/Troubleshooting%20-%20Desktop.png)

The wireframe shows the key features of the Apollo website's common header and footer that are required to make the new page look correct. 
From this page there will be a link to each of the individual fault pages, which give a bit more detail on which Apollo products can help improve the fault finding experience.
I believe that were this integrated into the Apollo website, it would be linked to from the Training and Support page: https://www.apollo-fire.co.uk/training-and-support

The Apollo website has one main break point between 1023/1024 pixels, therefore I created a wireframe for this layout too.
![](https://github.com/Grahame-student/CDA404_AE2_work_based_project/blob/master/docs/wireframes/mobile/Troubleshooting%20-%20Mobile.png)

Both of these layouts are heavily inspired by the main Apollo website.

##Fault pages

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

# GDPR
The webpages created do not track or collect user data in any way, the social media icons are just placeholders and no external links have been implemented in any way. The only data collection that might possible occur would have to come from Github, which is how the site is being hosted. Were this to be integrated into the Apollo website then all of the usual checks followed when publishing would be followed and the official Apollo privacy statement would be linked to.

Although the webinar and newsletter forms don't actually collect data, they are constructed to limit the data that might be collected should the page be used as part of the real website. The marketing consent has been deliberatly configured to default to 'No' so as to provide a genuine opt-in choice, unlike many so-called dark patterns that try to trick users into consenting whilst making them think they are opting out.

# Distance selling
No direct purchases can be made via the real Apollo website, and neither can they be made via the site created for the web technologies project. Were this to be made part of the Apollo website then all of the usual checks would be carried out to ensure that all product information is as accurate as it can be, and that any mistakes are corrected as quickly as possible.

# Evaluation
Finding a project turned out to be relatively simple, in a discussion with my Technical Director I was shown the LinkedIn poll and it was suggested that we could promote Apollo's range of system tools as a more efficient way of diagnosing and solving on-site issues.

I first spent a bit of time reversing engineering the Apollo website using blackbox techniques, I was very mindful of not deliberatly plagurising Apollo's implmentation. I did however want to mimic the look and feel reasonably accurately.

Using the debugging features of Firefox I was able to determine, experimentally, that the Apollo website only has 1 major break point between 1023 and 1024 pixels. I therefore opted to use the same breakpoint to make comparing the look and feel fairer.

I started off by adding the main html structual elements, using placeholders for the 3 major elements, header, main content and footer, of each page. I then proceeded to tackle the common elements of each page, starting with the header, then the footer and finally the main content, to rapidly see progress.

As the HTML content of each major element was put in place I then implemented the styling of the completed content. This is where things got interesting, and frustrating at times, I tried to structure the CSS to apply common values to every element regardless of whether the appear in both views or not. Where there were difference I then overrode the default styling options for the breakpoint's special case.

On the whole, many of my frustrations came from getting to grips with the nuances of flexboxes, which dispite making me go grey were still *much* easier to use than floating elements!

With the basic styling in place I turned to the scaling and responsive behaviour of the pages. This part almost made me give up, until I moved away from the pixel units, I'd used to get things looking reasonable quickly, to the em unit which made good scaling almost trivial. There's nothing like using the right tool for the job. The only part where I, briefly, deviated from the almighty em unit was for the h1 in the main content. This scaled down nicely, but when scaling up the element rapidly outgrew therest of the content on the page. To combat this I turned to the vw unit, a bit of maths and a @media breakpoint. I knew that at 1024 pixels the layout switched over to desktop mode, I also knew that beyond 56px the h1 element started to look out of place therefore for < 1024px I used a vw value of 5, calculated by vw = (56px / 1024px) x 100 and rounded down. For >= 1024 h1 is set to 3em, which scales very nicely