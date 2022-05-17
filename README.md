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



