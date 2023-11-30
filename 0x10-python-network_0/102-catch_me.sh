#!/bin/bash
# Script that makes a request to causes an specific response
curl -s -X PUT -H "You got me!" http://0.0.0.0:5000/catch_me >/dev/null 2>&1
