import os
import sys

import environ
from git import Repo
from . import QA_APP_NAME, PROD_APP_NAME, PROD_GIT_REPO, DEPLOY_DIR, GIT_RELATIVE_PATH, QA_ARG, RECERT_APP, HEROKU

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))


def has_tool(name):
    """Check whether `name` is on PATH and marked as executable."""

    # from whichcraft import which
    from shutil import which

    return which(name) is not None


if __name__ == "__main__":
    # Check to see if user has Heroku CLI installed

    has_heroku = has_tool(HEROKU)
    app = QA_APP_NAME if QA_ARG in sys.argv else PROD_APP_NAME

    if not has_heroku:
        print("You need access to the Heroku CLI to use this script")
        print("Instructions are here: \
        https://devcenter.heroku.com/articles/heroku-cli#install-the-heroku-cli")  # noqa: E501
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
        if RECERT_APP not in repo.remotes:
            repo.create_remote(RECERT_APP, PROD_GIT_REPO)

        has_all_variables = False not in [
            os.popen("heroku config:get EMAIL_USER  --app {0}".format(app)).read() != "\n",
            os.popen("heroku config:get EMAIL_PASSWORD  --app {0}".format(app)).read() != "\n",
            os.popen("heroku config:get EMAIL_HOST  --app {0}".format(app)).read() != "\n",
            os.popen(
                "heroku config:get EMAIL_PORT  --app {0}".format(app)).read() != "\n",
            os.popen(
                "heroku config:get EMAIL_USE_TLS  --app {0}".format(app)).read() != "\n"
        ]

        if not has_all_variables:
            os.system("heroku config:set EMAIL_USER={0}  --app {1}".format(env("EMAIL_USER"), app))
            os.system("heroku config:set EMAIL_PASSWORD={0}  --app {1}".format(env("EMAIL_PASSWORD"), app))
            os.system("heroku config:set EMAIL_HOST={0} --app {1}".format(env("EMAIL_HOST"), app))
            os.system("heroku config:set EMAIL_PORT={0} --app {1}".format(env("EMAIL_PORT"), app))
            os.system("heroku config:set EMAIL_USE_TLS={0} --app {1}".format(env("EMAIL_USE_TLS"), app))
            os.system("heroku config  --app {0}".format(app))

        active_branch = repo.active_branch
        should_deploy_branch = False
        while True:
            try:
                deploy_branch = input(
                    "Do you want to deploy the {0} branch? \
                    \n y = Yes \
                    \n n = No \
                    \n".format(active_branch))
                if deploy_branch.lower() == "n" \
                        or deploy_branch.lower() == "y":
                    deploy_input_no = deploy_branch.lower() == "n"
                    should_deploy_branch = False if deploy_input_no else True
                    break
                else:
                    print("Please enter y/n")
            except ValueError:
                print("Invalid")
                continue

        if should_deploy_branch:
            os.chdir(GIT_RELATIVE_PATH)
            os.system(
                "git push --force {2} `git subtree split \
                    --prefix {0} {1}`:refs/heads/main"
                .format(DEPLOY_DIR, active_branch, app))
