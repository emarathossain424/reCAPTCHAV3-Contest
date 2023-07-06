# reCAPTCHAV3-Contest
Project Description: Configure reCAPTCHA v3 on contact form

User Documentation:

Get Site Key & Secret Key:

Step 01: Go to the link " https://www.google.com/recaptcha/about/ " click "v3 Admin Console"
Step02: After entering into "v3 admin console", please click "plus (+)" icon from the right side.
Step03: Then you will see a form like "Register a new site", there you have to fill necessary fields
Step04: please put correct domain name in "Label" & "Domains" field. This step is very important
Step05: Remember as you want to implement reCAPTCHA v3, please select "Score based(v3)" as reCAPTCHA Type
Step06: After submitting the form you will get "Site Key" & "Secret Key", which will be needed in our future steps

Codings Implementation:

Step01: At first go to the "script.js" file inside "js" folder, there in the first line you will see there is a site key, please replace the site key with your site key
step02: Then go to the "recaptcha_credentials.php" file inside the root folder, there give your credentials.

You are done & your contact form should work fine.

Coders Documentation:

My project folder structure is like following:
contact-form/
├── js/
│   └── script.js
├── index.html
├── addlead.php
└── recaptcha_credentials.php

*** Ajax form submission and reCAPTCHA Handling in front end has been done in "script.js" file
*** "index.html" contains the contact form
*** contact form submission, reCAPTCHA verification from backend and error handling hasbeen done in "addlead.php" file
*** "recaptcha_credentials.php" contains reCAPTCHA related credentials (Site Key & Secret Key)
