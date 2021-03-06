import requests
from bs4 import BeautifulSoup


def send_announcement():
    headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Max-Age': '3600',
        'User-Agent': 'Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:52.0) Gecko/20100101 Firefox/52.0'
    }

    url = "https://www.technewsiit.com/how-online-chess-has-grown-due-pandemic"
    req = requests.get(url, headers)
    soup = BeautifulSoup(req.content, 'html.parser')
    f = open("announcement.txt", "w")
    f.write(str(soup.prettify()))
    f.close()


send_announcement()
