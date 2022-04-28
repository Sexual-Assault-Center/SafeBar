# Project Directions

navigate to the `backend` directory

# Running the app
- **To run on GitPod**, [open this link](https://gitpod.io/#https://github.com/Sexual-Assault-Center/SafeBar/branches) and follow the steps below

  NOTE: The benefit of using Gitpod is that you do not have to install anything on your machine and can work as you normally would. You only have 50 hours per month on the free account, which should be enough for the hack, so this is a great option if you are on a windows machine especially.

- **To run locally**, just run the commands below
## Install dependencies
- Make a copy of the `.env.sample` file and name it `.env`
- Get the env vars from lead. 

Install pipenv if you do not currently have it. This will allow you to install the version of python this project is using.

```shell
pipenv --python 3.8
pipenv shell
pipenv install
```

## Run migration
This will create a local db
```
python3 manage.py migrate
```

## Start the server
```
python3 manage.py runserver
```

## If there are any code updates
```
python3 manage.py migrate
```
## Login to the admin
Create a local super user
```
python3 manage.py createsuperuser --email admin@gmail.com --username admin
```
enter your password for the NEW SUPER USER twice

To login navigate to: http://127.0.0.1:8000/admin/

## If you get errors
- make sure that you are in the shell environment
