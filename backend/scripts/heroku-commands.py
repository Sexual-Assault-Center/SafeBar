import os
import sys


def create_superuser(command_map):
    os.system(
        "heroku run python manage.py createsuperuser \
            --email safebartn@gmail.com --username safebartn")


def migrate_db(command_map):
    os.system("heroku run python manage.py migrate")


def makemigrations_db(command_map):
    os.system("heroku run python manage.py makemigrations")


def help_text(command_map):
    print("Available subcommands:")
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
        argument = sys.argv[1]
        command = COMMAND_MAP[argument]
    except KeyError:
        print("Unknown command: '{0}'".format(argument))
        print("Type 'heroku-commands.py help' for usage.")
    else:
        command(COMMAND_MAP)
