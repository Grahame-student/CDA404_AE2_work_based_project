# Github URL
https://github.com/Grahame-student/CDA404_AE2_work_based_project

# Hosted at
https://grahame-student.github.io/CDA404_AE2_work_based_project/

# Background
The problem I was trying to solve was to highlight how Apollo's systems tools can be used to diagnose and debug common installation problems seen on Fire Systems. The issues addressed were identified from this LinkedIn post: https://www.linkedin.com/posts/apollo-fire-detectors_we-promised-to-share-our-findings-about-top-activity-6672087993886633984-zLr9/ in which Apollo's end users were invited to vote on the most common issues that they encounter.

# Wireframes
These can be found in: https://github.com/Grahame-student/CDA404_AE2_work_based_project/tree/master/docs/wireframes
All wireframes we constructed using a trial version of Balsamiq.

**Main troubleshooting page**

This is what I would consider my main page, as it puts the rest of the pages into context.
![](https://github.com/Grahame-student/CDA404_AE2_work_based_project/blob/master/docs/wireframes/desktop/Troubleshooting%20-%20Desktop.png)

The wireframe shows the key features of the Apollo website's common header and footer that are required to make the new page look correct. 
From this page there will be a link to each of the individual fault pages, which give a bit more detail on which Apollo products can help improve the fault finding experience.
I believe that were this integrated into the Apollo website, it would be linked to from the Training and Support page: https://www.apollo-fire.co.uk/training-and-support

The Apollo website has one main break point between 1023/1024 pixels, therefore I created a wireframe for this layout too.
![](https://github.com/Grahame-student/CDA404_AE2_work_based_project/blob/master/docs/wireframes/mobile/Troubleshooting%20-%20Mobile.png)

Both of these layouts are heavily inspired by the main Apollo website.

**Fault pages**

The individual fault pages are fairly similar and follow this basic layout, again inspired by the Apollo website.
Desktop view
![](https://github.com/Grahame-student/CDA404_AE2_work_based_project/blob/master/docs/wireframes/desktop/Earth%20Faults.png)

Compact / mobile view
![](https://github.com/Grahame-student/CDA404_AE2_work_based_project/blob/master/docs/wireframes/mobile/Troubleshooter%20Details%20-%20Mobile.png)


# Colour selection
The colours selected were mainly driven by the need to look like part of the Apollo website. CSS variables were used to make adjusting the specific colours trivial by ensuring that the specific colours used only had to be defined once, in once place.

# Accessibility
All images, that are not purely decorative, have alt tags containing a brief description. The W3C online html validator picked up a couple that were initially missed and these have been added.
All form fields have labels for screen readers to use.
Where the way that screen readers use the legend of a fieldset they are kept short to reduce the chance of them causing problems for the users.
Almost all text / background combinations are high contrast, the submit button in the header is probably the lowest contrast, functional, part of the site, however it does follow the stylying of the Apollo website.

