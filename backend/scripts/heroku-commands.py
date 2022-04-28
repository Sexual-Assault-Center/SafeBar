import os
import sys


def create_superuser(_, app):
    os.system(
        "heroku run python manage.py createsuperuser \
            --email safebartn@gmail.com --username safebartn  --app {0}".format(app))


def migrate_db(_, app):
    os.system("heroku run python manage.py migrate --app {0}".format(app))


def makemigrations_db(_, app):
    os.system("heroku run python manage.py makemigrations --app {0}".format(app))


def help_text(command_map, app):
    print("Available subcommands for {0} app:".format(app))
    for key in command_map:
        print("- {0}".format(key))


if __name__ == "__main__":
    argument = ''
    command = None

    COMMAND_MAP = {
        "migrate": migrate_db,
        "makemigrations": makemigrations_db,
        "createsuperuser": create_superuser,
        "help": help_text
    }

    try:
        command_arg = sys.argv[1]
        app = "safebarapi-qa" if "qa" in sys.argv else "safebarapi"
        command = COMMAND_MAP[command_arg]
    except KeyError:
        print("Unknown command: '{0}'".format(argument))
        print("Type 'heroku-commands.py help' for usage.")
    else:
        command(COMMAND_MAP, app)
