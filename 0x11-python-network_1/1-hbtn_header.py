#!/usr/bin/python3
"""
Python script that takes in a URL, sends a request and displays
the value of the X-Request-Id variable found in the header
"""
import urllib.request
import sys


if __name__ == "__main__":
    if len(sys.argv) != 2:
        print("Usage: {} <URL>".format(sys.argv[0]))
        sys.exit(1)

    url = sys.argv[1]

    try:
        request = urllib.request.Request(url)
        with urllib.request.urlopen(request) as response:
            x_request_id = dict(response.headers).get("X-Request-Id")
            if x_request_id:
                print(x_request_id)
            else:
                print("X-Request-Id header not found in the response.")
    except urllib.error.URLError as e:
        print("Error accessing the URL:", e.reason)
    except urllib.error.HTTPError as e:
        print("HTTP Error:", e.code)
