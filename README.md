# ParkWhere
> Final Project (Lighthouse Labs Web Development Bootcamp)

### Main Contributors: [Weidong Li](https://github.com/donny1103), [Paula Barreto](https://github.com/paulabarreto)


## Overview

For this final group project, we created an app called ParkWhere that allows users to find on-street parking information of the city of Toronto. The information is provided by the users themselves so they can add/edit on-street parking information on a map. Users can find on-street parking info based on a given location and a specific time or just with parking rate. This project is at phase 1 and it is an ongoing project. For phase 2, bugs will be fixed with completely new interface. More features will be added such as mobile-friendly, login/signup and more. 

## Final Product

#### Home Page 
![Home Page](https://raw.githubusercontent.com/donny1103/ParkWhere/master/public/screenshot/home.png)

#### Click on the top right switch button to open the map
![map](https://raw.githubusercontent.com/donny1103/ParkWhere/master/public/screenshot/map.png) Street parking are represent by lines with different colors on the map. 

#### Click on any line to view the parking info
![parking info](https://raw.githubusercontent.com/donny1103/ParkWhere/master/public/screenshot/parking-info.png)

#### Click on top right edit button of parking info to edit information 
![edit parking info](https://raw.githubusercontent.com/donny1103/ParkWhere/master/public/screenshot/edit-parking-info.png)

#### Search available on-street parking based on location or time 
![search parking info](https://raw.githubusercontent.com/donny1103/ParkWhere/master/public/screenshot/parking-by-search.png)

#### Or according to the parking rate 
![$5 parkings](https://raw.githubusercontent.com/donny1103/ParkWhere/master/public/screenshot/parkingby5.png) 
![$4 parkings](https://raw.githubusercontent.com/donny1103/ParkWhere/master/public/screenshot/parkingby4.png)
![$3 parkings](https://raw.githubusercontent.com/donny1103/ParkWhere/master/public/screenshot/parkingby3.png)
![$2 parkings](https://raw.githubusercontent.com/donny1103/ParkWhere/master/public/screenshot/parkingby2.png)

#### Click top left round-plus button to add new parking info, then draw a lines by click twice anywhere on the map and the click the confirm button on the top right 
![add parking info](https://raw.githubusercontent.com/donny1103/ParkWhere/master/public/screenshot/add-line.png)

#### Enter new parking info 
![enter new parking info](https://raw.githubusercontent.com/donny1103/ParkWhere/master/public/screenshot/new-info.png)

#### Add comment/rating 
![add comment/rating](https://raw.githubusercontent.com/donny1103/ParkWhere/master/public/screenshot/add-rating-comment.png)


## Installation

1. Fork this repository, then clone your fork of this repository.
2. Install dependencies using the `npm install` command in both the root folder as well as the "park_server" folder.
3. Start the web server using the `npm start` command while in the "park_server" folder. You will also need to start the client by navigating to the root folder and running this `npm start` command there as well. The app will be served at <http://localhost:3000/>.
4. Go to <http://localhost:3000/> in your browser.


## Tech Stack

- Axios
- Express
- Google Maps / Google Geocode APIs
- jQuery
- Node
- PostgreSQL
- React
