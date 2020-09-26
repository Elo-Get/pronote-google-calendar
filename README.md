# pronote-google-calendar
Export your pronote timetable in your google calendar 

# Whate you need before run the file

* Your pronote URL connection of your school 
* Your pronote login codes pronote ( if you forgot them, you can also use the "found my password" solution
* Create an google app developper with google calendar API ( in your google account )
* Connect your google app in oauthplayground to recover a key
* Node.js v13

# Before All:

1. In cmd go to the folder path and taps 'npm install'

# Setup the API


# 1. Create Google App

1. go to google console (url : https://console.developers.google.com/)
2. create an app 
3. activate google calendar API in this app
4. go to the settings of your app and change the url redirect to https://developers.google.com/oauthplayground/ 

# 2. Create oauthplayground keys

1. go to the oauthplayground website ( https://developers.google.com/oauthplayground/ )
2. click in configuration button ( the gear icon )
3. a pop up will appear, in this, click in 'Use your own OAuth credentials', and puts your OAuth Client ID and OAuth Client secret of your google app and 
4. Now you can close the pop up
5. In the google list of API, search 'Calendar API V3' and click in. Few options will apar below. Click in the two first (https://www.googleapis.com/auth/calendar and https://www.googleapis.com/auth/calendar.events) .
6. Ok now you can clik in 'authorize the api'
7. select your google account
8. click in 'exchange autorization code for tokens' button
9. click in 'step 2' pannel
10. 
    IN OAUTHPLAYGROUND
    copy paste the refresh token in the .env file in 'OAUTH_REFRESH_TOKEN'
    
    IN GOOGLE APP CONSOLE
    copy paste your google app ID in the .env file in 'OAUTH_ID'
    copy paste your google secret app code in the .env file in 'OAUTH_SECRET'
    
    => the .env file is the config file of the pronote-google-calendar API.
    <br /> => If you have problem you can see this video wich explain very good how to do (https://www.youtube.com/watch?v=zrLf4KMs71E&ab_channel=TheLifeOfADev)
    
# 3. Pronote connection

Got to the .env file:

1. Change 'PRONOTE_IDF' by your pronote identifer
2. Change 'PRONOTE_MDP' by your pronote password (if you don't know him, use the recovery passwors solution to create a new one)
3. 'PRONOTE_URL' is your pronote url connexion

=> If you have problem with the pronote connection you can check the pronote API that we used to this app. (https://github.com/Litarvan/pronote-api)

## Run the App

=> node server.mjs

## This API use two other API

* Pronote API develop by Litarvan (https://github.com/Litarvan/pronote-api)
* Google Calendar API for node.js (https://developers.google.com/calendar/quickstart/nodejs)



