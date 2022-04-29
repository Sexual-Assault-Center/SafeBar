# Bar-check Worker

This project pings the /check-bars/ endpoint on the backend project every Monday morning, which triggers the backend to 1) update certification status and 2) send emails to bar contacts if their certification is about to expire

## Install dependencies

- Make a copy of the `.env.sample` file and name it `.env`
- Get the env vars from lead.

Install pipenv if you do not currently have it. This will allow you to install the version of python this project is using.

```shell
pipenv --python 3.8
pipenv install
pipenv shell
```

## Run

```shell
python3 worker.py
```
