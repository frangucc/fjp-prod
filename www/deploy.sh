#!/bin/sh
echo "deploying to heroku - moving files up a director to the heroku/franckejones production folder"
cd ..
cp -r www/* heroku/franckejones-production/public/