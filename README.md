# Project Name

Configure reCAPTCHA v3 on contact form

## User Documentation

### Get Site Key & Secret Key:

1. Go to the link [https://www.google.com/recaptcha/about/](https://www.google.com/recaptcha/about/) and click on "v3 Admin Console".
2. In the "v3 admin console", click on the plus (+) icon located on the right side.
3. You will see a form titled "Register a new site". Fill in the necessary fields.
4. Make sure to enter the correct domain name in the "Label" and "Domains" fields. This step is crucial.
5. As you want to implement reCAPTCHA v3, select "Score based(v3)" as the reCAPTCHA Type.
6. After submitting the form, you will receive a "Site Key" and "Secret Key", which will be needed in future steps.

## Codings Implementation

1. Open the "script.js" file located inside the "js" folder. In the first line, you will find a site key. Replace the existing site key with your own site key.
2. Open the "recaptcha_credentials.php" file located in the root folder. Provide your reCAPTCHA credentials in this file.

Once you have completed these steps, your contact form should work properly.

## Coders Documentation

- **"script.js"** file in the **"js"** folder handles Ajax form submission and reCAPTCHA handling on the frontend.
- **"index.html"** contains the contact form.
- **"addlead.php"** file handles contact form submission, reCAPTCHA verification on the backend, and error handling.
- **"recaptcha_credentials.php"** contains reCAPTCHA-related credentials (Site Key & Secret Key).


