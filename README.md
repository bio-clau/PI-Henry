<p align='left'>
    <img src='https://static.wixstatic.com/media/85087f_0d84cbeaeb824fca8f7ff18d7c9eaafd~mv2.png/v1/fill/w_160,h_30,al_c,q_85,usm_0.66_1.00_0.01/Logo_completo_Color_1PNG.webp' </img>
</p>

# Individual Project - Henry Pokemon

<p align="left">
  <img height="150" src="./pokemon.png" />
</p>

## About
This project consists of the development of a S.P.A (Single Page Application). It is part of the Bootcamp Henry individual poject.
On this page, you can take a tour of the Pokémon provided by pokemonapi.co,containing filtering features by type, and sorting by name and strength. In it you can create Pokémon that are stored in a relational database in the cloud (ElephantSQL) and has a responsive design.

## Objectives
- Visualize Pokémons.
- Filter Pokémons by type
- Filter Pokémons by origin (pokeapi.co or database).
- Sort alphabetically and by stregth.
- View detail of a Pokémon.
- Create Pokémon an save it in the database.

## Stack of Technologies
### FrontEnd
Javascript, React, Redux, CSS

### BackEnd
Javascript, NodeJs, Express, Cloudinary

### DataBase
PostgreSQL, Sequelize, ElephantSQL

### Deploy
[Deploy in Heroku](https://henry-pi-frontend.herokuapp.com/)

## BoilerPlate

The boilerplate has two folders: "api" abd "clinet".
Inside the "api" folder, you have to create an .env file with the folowing variables:
```
DB_USER=DB local user
DB_PASSWORD=DB local password
DB_HOST=localhost
DB_URL=connection url fron ElephantSQL
CLOUDINARY_CLOUD_NAME=cloudinary name
CLOUDINARY_API_KEY=cloudinary api key
CLOUDINARY_API_SECRET=cloudinary api secret
```
## Run the project
In the "api" folder you have to run npm install and then npm run dev
In the "client" foldet you have to run npm install and then npm start

## Video of the SPA
[Go to YouTube](https://youtu.be/Un1ZjoOC0uw)

## ScreenShots
<p align="center">Landing Page</p>
<p align="center">
<a href='https://henry-pi-frontend.herokuapp.com/' width='30%'/><img src='https://raw.githubusercontent.com/bio-clau/PI-Henry/master/PI/landing.png' width='75%'/></a>
<a href="https://henry-pi-frontend.herokuapp.com/"><img src='https://raw.githubusercontent.com/bio-clau/PI-Henry/master/PI/mob-landing.png' width='16.6%'/></a>
</p>

<p align="center">Home</p>
<p align="center">
<a href='https://henry-pi-frontend.herokuapp.com/home' width='30%'/><img src='https://raw.githubusercontent.com/bio-clau/PI-Henry/master/PI/pokedex.png' width='75%'/></a>
<a href="https://henry-pi-frontend.herokuapp.com/home"><img src='https://raw.githubusercontent.com/bio-clau/PI-Henry/master/PI/mob-pokedex.png' width='16.7%'/></a>
</p>

<p align="center">Detail</p>
<p align="center">
<a href='https://henry-pi-frontend.herokuapp.com/home' width='30%'/><img src='https://raw.githubusercontent.com/bio-clau/PI-Henry/master/PI/detail.png' width='75%'/></a>
<a href="https://henry-pi-frontend.herokuapp.com/home"><img src='https://raw.githubusercontent.com/bio-clau/PI-Henry/master/PI/mob-detail.png' width='16.64%'/></a>
</p>

<p align="center">Create</p>
<p align="center">
<a href='https://henry-pi-frontend.herokuapp.com/create' width='30%'/><img src='https://raw.githubusercontent.com/bio-clau/PI-Henry/master/PI/create.png' width='75%'/></a>
<a href="https://henry-pi-frontend.herokuapp.com/create"><img src='https://raw.githubusercontent.com/bio-clau/PI-Henry/master/PI/mob-create.png' width='16.6%'/></a>
</p>
