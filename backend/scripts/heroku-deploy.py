import os

import environ
from git import Repo

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

DEPLOY_DIR = "backend"

GIT_RELATIVE_PATH = "../"


def has_tool(name):
    """Check whether `name` is on PATH and marked as executable."""

    # from whichcraft import which
    from shutil import which

    return which(name) is not None


if __name__ == "__main__":
    # Check to see if user has Heroku CLI installed

    has_heroku = has_tool("heroku")
    if not has_heroku:
        print("You need access to the Heroku CLI to use this script")
        print("Instructions are here: https://devcenter.heroku.com/articles/heroku-cli#install-the-heroku-cli")
    else:
        env = environ.Env(
            DEBUG=(bool, True),
            SECRET_KEY=(str, ""),
            IS_HEROKU=(bool, False)
        )

        environ.Env.read_env(os.path.join(BASE_DIR, '.env'))

        path = os.getcwd()
        path_split = path.split("/")
        backend_index = path_split.index(DEPLOY_DIR)
        backend_index = path_split.index(DEPLOY_DIR)
        last_index = len(path_split) - 1
        if(last_index != backend_index):
            backend_path = "/".join(path_split[0:(backend_index + 1)])
            os.chdir(backend_path)

        repo = Repo(GIT_RELATIVE_PATH)
        if "heroku" not in repo.remotes:
            os.system("heroku git:remote -a safebarapi")

        dependencies_installed = [
            os.popen("pip freeze | grep whitenoise").read(),
            os.popen("pip freeze | grep dj-database-url").read(),
            os.popen("pip freeze | grep psycopg2-binary").read(),
            os.popen("pip freeze | grep gunicorn").read()
        ]

        if "" in dependencies_installed:
            os.system(
                "pipenv install whitenoise dj_database_url psycopg2-binary gunicorn")

        has_all_variables = False not in [
            os.popen("heroku config:get IS_HEROKU").read() != "\n",
            os.popen("heroku config:get API_HOST").read() != "\n",
            os.popen("heroku config:get FRONTEND_ORIGIN").read() != "\n",
            os.popen(
                "heroku config:get SECRET_KEY").read() != "\n"
        ]

        if not has_all_variables:
            os.system("heroku config:set IS_HEROKU=True")
            os.system("heroku config:set SECRET_KEY={0}".format(
                env("SECRET_KEY")))
            os.system("heroku config:set FRONTEND_ORIGIN={0}".format(
                env("HEROKU_FRONTEND_ORIGIN")))
            os.system("heroku config:set API_HOST={0}".format(
                env("HEROKU_API_HOST")))
            os.system("heroku config")

        active_branch = repo.active_branch
        should_deploy_branch = False
        while True:
            try:
                deploy_branch = input(
                    "Do you want to deploy the {0} branch? \n y = Yes \n n = No \n".format(active_branch))
                if deploy_branch.lower() == "n" or deploy_branch.lower() == "y":
                    should_deploy_branch = False if deploy_branch.lower() == "n" else True
                    break
                else:
                    print("Please enter y/n")
            except ValueError:
                print("Invalid")
                continue

        if should_deploy_branch:
            os.chdir(GIT_RELATIVE_PATH)
            os.system(
                "git push --force heroku `git subtree split --prefix {0} {1}`:main".format(DEPLOY_DIR, active_branch))
