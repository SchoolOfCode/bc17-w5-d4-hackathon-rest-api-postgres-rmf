**setting up project**
understanding the brief ✅
lone the repository ✅
install dependencies ✅
test if the server starts ✅
setup a README file with the instructions to run the app ✅
test the endpoints with postman ✅
import the helper function into app.js ✅

**setting up database**
create a database from the render website ✅
provide credential to the .env file ✅
test if the database is working ✅
design tables to populate the database ✅
rovide the code to create tables and popuate columns ✅
run “npm run reset-database” to upload the data to the render database ✅

**writing the getHeroes handler function**
write the "getHeroes" function to fetch and return all the heroes from the "heroes" table ✅
try if the request is valid, else use catch to return an error ✅
await the "getHeroes" function result the be stored from the database into a variable ✅
send the response with the request status and the payload ✅
Test --pass ✅

**writing the getHeroByid handler function**
write the "getHeroesById" function to fetch and return the hero corrisponding request.params.id from the "heroes" --table ✅
ry if the request is valid, else use catch to return an error ✅
await the "getHeroesById" function result the be stored from the database into a variable ✅
send the response with the request status and the payload ✅
Test --pass ✅

**writing the createHero handler function**
write the "createHero" function to add the hero object from the request.body to the "heroes" table
try if the request is valid, else use catch to return an error
await the "createHero" function to return and store the submited object into a variable
send the response with the request status and the payload
Test --pass

**writing the updateHeroById handler function**
write the "updateHeroById" function to update the hero object corrisponding to the request.params.id from the "heroes" table
try if the request is valid, else use catch to return an error
await the "updateHeroById" function to return and store the updated object into a variable
send the response with the request status and the payload
Test --pass

**writing the deleteHeroById handler function**
write the "deleteHeroById" function to delete the hero object corrisponding to the request.params.id from the "heroes" table
try if the request is valid, else use catch to return an error
await the "deleteHeroById" function to return and store the deleted object into a variable
send the response with the request status and the payload
Test --pass
