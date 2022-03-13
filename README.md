# H4TC 2022 - SafeBar :beers: - The Yelp of SafeBars

![SafeBar](/images/Safe-Bar-img.png)
## What we are building:
This project includes a full-stack and admin app to help the Sexual Assault Center (SAC) maintain clean data and information on Safe Bars and makes some of the information open to the public.

The **public app** is built for the SAC as a resource to help bar goers find bars near them that are certified as a safebar. Certification for bars happen every 6 months.

The **admin app** allows SAC employees to enter in key information for use in the public application such as resources, FAQs, and Safe Bar info. 

## Get Started
Get started with local development.

- Create an account on [GitPod](https://gitpod.io)
- [Open this repo on GitPod](https://gitpod.io/#)

### Front-End Development
In Gitpod, navigate to front end directory

```
$ cd frontend
```

Navigate to the README.md file in the `frontend` directory and follow instructions

### ERD
https://dbdiagram.io/d/622d10c261d06e6eadeed665

<img width="1271" alt="Screen Shot 2022-03-12 at 4 16 18 PM" src="https://user-images.githubusercontent.com/29741570/158036937-4e24ed4d-5b3d-4bab-bf46-6390698e6be5.png">

### MVP (Backend) - Python/Django
- An database/admin app that allows SAC employees to:
  - enter resources
  - input SafeBar information that can be used for the application and other internal uses
  - Add FAQs for consumption in the SafeBar app
- Auto Bar certification email with an endpoint that allows a bar to certify for another 6 months. (If not certified, remove from list of available bars??)
- Based on user location, send bars that are within X number of miles (zip codes)
- Stretch: knowledge quiz
- STRETCH: Bar rating

### MVP (Frontend) - Next JS/React/JavaScript
- Find bars in the area that are Safe Bars
- If a user logs in, they can “Save/Favorite Bars”
- Implement Google Analytics into site
- **(External)** [Link to Sign up for a training](https://sacenter.org/resources/safe-bar-training-program.aspx)
- **(External)** [Link to chat/hotline page on website](https://sacenter.org/resources/help-near-you.aspx)
- STRETCH: knowledge quiz
- STRETCH: User safety rating and feedback for the bars for view ONLY by the SAC staff

### MVP (UI) - Storybook
- A UI library that is consumable but the FE application

## Sexual Assault Center Technical Roles:
### UX (2): Figma design and prototype/HTML/CSS
- Create Figma Design/prototype for UI Devs

### UI (2): Design and HTML/CSS
- Style components in Storybook using designs from UX team

### FE (4): This team will be split by the following focuses:
#### Next JS: Creating FE user facing application
- Maps Implementation
- Google Analytics
- SafeBar App UI

#### Django Templates for admin
HTML/CSS/JS/Bootstrap with [Django template interpolation](https://docs.djangoproject.com/en/4.0/topics/templates/) (working with BE team)
- Bug tickets
- Code reviews

### BE (4): Django/Python
- Create API for FE consumption
- Create Admin for SAC employees
- Code reviews
- Bug tickets

### QA (3):
- Create test plans for FE, Admin FE, and API
- Use Postman to test endpoints
- Test each ticket and create bug tickets when necessary 
- Last line of defense for regression testing features before merge to production 

---

## Code Reviews
Submit code for review:
- What you did
- How to test
- What type of ticket?

## Links
- https://www.hon.org/hack-volunteers
- https://sacenter.org/
- https://sacenter.org/resources/help-near-you.aspx
- https://sacenter.org/resources/safe-bar-training-program.aspx
- Training signup Form: https://sacenter.dm.networkforgood.com/forms/safe-bar-training-sign-up

### Future development ideas
- Connect Yelp API to get bar info and details
