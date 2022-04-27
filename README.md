# H4TC 2022 - SafeBar :beers: - The Yelp of SafeBars

[Deployed FrontEnd](https://safebar.netlify.app/)

[![Netlify Status](https://api.netlify.com/api/v1/badges/d034434e-3477-4413-a222-df78408355c4/deploy-status)](https://app.netlify.com/sites/safebartn/deploys)

![SafeBar](/images/Safe-Bar-img.png)

## What are we building?

This project includes a full-stack and admin app to help the Sexual Assault Center (SAC) maintain clean data and information on Safe Bars and makes some of the information open to the public.

The **public app** is built for the SAC as a resource to help bar goers find bars near them that are certified as a SafeBar - certification for bars happen every 6 months. It also allows them to create lists of bars they may want to visit on a trip and favorite bars.

The **public app** also gives quick info to bars who may need information from their training quickly and provides them with information on how to get training

The **admin app** allows SAC employees to enter in key information for use in the public application such as resources, FAQs, and Safe Bar info. It also brings all of their data into one place so that they can keep track of bars that need to recertify.

## Tech Stack

- Frontend:
  - Next JS/React
  - Storybook for component development
- Backend
  - Python
  - Django Admin for Admin portal for bar maintenance and resources
- Deployment
  - FE - Netlify
  - BE - Heroku
- Styles
  - [React Bootstrap](https://react-bootstrap.github.io/components/alerts)

## Get Started

Get started with local development.

- Create an account on [GitPod](https://gitpod.io)
- [Open this repo on GitPod](https://gitpod.io/#https://github.com/Sexual-Assault-Center/SafeBar)

### Frontend Development

In Gitpod, navigate to `frontend` directory

```shell
cd frontend
```

Navigate to the README.md file in the `frontend` directory and follow instructions

### Backend Development

In Gitpod, navigate to `backend` directory

```shell
cd backend
```

Navigate to the README.md file in the `backend` directory and follow instructions

## Code Reviews

- Create a branch for the issue you are working on and create all PRs against the development branch.
  - On PR include:
    - What you did
    - How to test
  - A preview deploy will be created for testing
  - Once approved by 2 reviewers, you can merge into development
- Once the feature has been fully tested with all other code, a PR is created against master and merged into production.

## Deployment

We are deploying the FE and BE separately to decouple the deployments and updates.

**Frontend**

- For SAC, we chose Netlify, a free resource. Here is a [step-by-step guide](https://www.netlify.com/blog/2016/09/29/a-step-by-step-guide-deploying-on-netlify/) to get that set up. There is continuous deployment set up for the production branch. Netlify also offers deployment logs, rollbacks, and branch deploys for testing.

**Backend**

- We are deploying on Heroku
- INSTRUCTIONS COMING SOON

### ERD

<https://dbdiagram.io/d/622d10c261d06e6eadeed665>

### [Postman Documentation](https://documenter.getpostman.com/view/10119276/UyrEfu5X)

## Contributors

### Team Leads

- [Dr. Teresa Vasquez](https://github.com/drteresavasquez) (Project Technical Lead)
- Jaime Martinez (Project Manager)

### Frontend Engineers

- [Dr. Teresa Vasquez](https://github.com/drteresavasquez) (Team Lead)
- [Katy Fry](https://github.com/katherinevfry) (UI Lead)
- [Jesse Robinson](https://github.com/Jrobinson0529) (FE Lead)
- [Madden Purcell](https://github.com/pmpurcell)
- [Austin Parker](https://github.com/Austincparker)

### Backend Engineers

- [Trinity Christiana](https://github.com/trinitychristiana) (Team Lead)
- [Eugene Terry](https://github.com/Eugeneterry)
- [Jurnell Cockhren](https://github.com/jcockhren)
- [Jacob Chadwell](https://github.com/Jacobchadwell)

### Designers and UXI Engineers

- [Katy Fry](https://github.com/katherinevfry) (UI Lead)
- [April Watson](https://github.com/Aprilrochelle)
- [Elle Lawrence](https://github.com/Elle-lawrence)

### QA

- Jaime Martinez (Team Lead)
- Carla Reavis
