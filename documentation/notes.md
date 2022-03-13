## App Features
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

## Links
- https://www.hon.org/hack-volunteers
- https://sacenter.org/
- https://sacenter.org/resources/help-near-you.aspx
- https://sacenter.org/resources/safe-bar-training-program.aspx
- Training signup Form: https://sacenter.dm.networkforgood.com/forms/safe-bar-training-sign-up