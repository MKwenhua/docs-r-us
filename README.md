# Doctors R Us

Unfortunately I was unable to find the time to build out all of the features I had hoped, but I will try and cover the features that have been built, as well as briefly discuss high level implementation details of the features I couldn't get to. 

### How To Run

##### Live Version
* You can view the application here: https://medical-app-demo.herokuapp.com, there are two login/signup points one for [Doctors](https://medical-app-demo.herokuapp.com/signin) (which is more complete), and the other for [Patients](https://medical-app-demo.herokuapp.com/booking/signin). 

* To sign into the Doctor portal:
   * First go here: https://medical-app-demo.herokuapp.com/signin
   * Next Sign In with these credentials: `dr.zaius@hopkins.edu` password: `baja`
* To sign into the Patient portal:
   * First go here: https://medical-app-demo.herokuapp.com/booking/signin
   * Next Sign In with these credentials: `rando@aol.com` password: `baja`

## Project Overview

### Project Directory/File Descriptions


#### Entry Point
The Application's main entry point is [server.js](https://github.com/MKwenhua/docs-r-us/blob/file-info/server.js), but alternatively you could also enter via [start.js](https://github.com/MKwenhua/docs-r-us/blob/file-info/start.js) which would run the application on every available CPU on your machine. But given the fact that this application runs on a free tier Heroku server with only one available CPU running this mode would actually degrade the application's performance. Additionally if I were to run this application within a Docker container I would instead just use Docker swarm instead. 

#### Webpack Bundle Sources: [/src](https://github.com/MKwenhua/docs-r-us/tree/file-info/src)
This directory is where both the server bundle `react_pages.js` and the browser bundles in [/public](https://github.com/MKwenhua/docs-r-us/tree/file-info/public) can be found. I decided that I did not want the whole project bundled and instead just set only React related code to be bundled and imported as module within [app.js](https://github.com/MKwenhua/docs-r-us/blob/file-info/app.js).

#### Static Templates/Files: [/static](https://github.com/MKwenhua/docs-r-us/tree/file-info/static)
For simplicity I decided to separate sign in/sign up pages from the rest of the applications logic and just render static HTML saved as constant strings to keep in memory and avoid the need to read a file on every request. 



### Major Timesinks That Could Have been used towards feature development
* Time Spent Setting up AWS, Heroku, CDN, and other cloud services
* Time spent spinning up RDS, syncing and managing migrations across my local and cloud based Postgres DB
* Time gathering seed data needed for Hospital Records and getting their approximate geo coordinates
