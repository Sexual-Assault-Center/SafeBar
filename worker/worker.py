import schedule
import time
import requests
from dotenv import dotenv_values

env = dotenv_values(".env")

def check_bars():
    print("Sending check-bars request")
    try:
        resp = requests.get(env["CHECK_BARS_API"])
        if (resp.status_code == 200):
            print("Check-bars request was successful")
        else:
            print("Response status code: " + resp.status_code)
    except:
        print("ERROR: An error occured while sending the request.")

schedule.every().monday.at("04:00").do(check_bars)

while True:
    idle_time = schedule.idle_seconds()
    if(idle_time is None):
        break
    elif(idle_time > 0):
        time.sleep(idle_time)
    schedule.run_pending()