# Foodster-twitter-clone
Front-end
 Create client folder
 Setup index.html
 Create Header
 Create form
 Name
 Content
 u-full-width to both inputs
 Listen for form submit
 Hide the form
 Show loading spinner
 Get data from form and log it
 Get user input on the Client
 Hide/Show elements on the client
Back-end
 Create server folder
 npm init -y
 npm install express morgan
 Setup index.js
 Add GET / route
 Add POST /posts route
 log out req.body
Front-end
 fetch POST /posts with form data
 See the CORS error and revel in this moment
 Send user input from the client with fetch to the server
Back-end
 npm install cors
 Make sure the server is recieving the data
 Add JSON body parser middleware
 Validate name and content
 Must be a string
 Cannot be empty
 If not valid
 Error code 422
 Invalid post, must contain name and content
 Setup DB Connection
 npm install monk
 connect to db
 create document collection (posts)
 If Valid
 Create post object with
 name, content, created_date
 Insert into DB
 Respond with created post object
 Store data in a database
Front-end
 Log out created Post after POST request
 Show the form
 Hide loading spinner
Back-end
 GET /posts
 Respond with posts from DB
 Retrieve data from a database on the Server
Front-end
 fetch GET /posts
 Iterate over array
 Append each to page
 Reverse before appending
 Show the form
 Hide loading spinner
 fetch GET /posts after creating a post
 Retrieve data from a server on the client using Fetch
 Hide/Show elements on the client
 Add elements to the page on the client
Back-end
 npm install bad-words
 Use filter before inserting into DB
 npm install express-rate-limit
 Limit to 1 request every 15 seconds
Deploy
 Deploy server
 Setup environment variables
 Database connection
process.env.MONGO_URI
 Show mlab
 Deploy with environment variable
 Add alias
 Deploy client folder
 Set API_URL based on hostname
Realtime feed of posts
