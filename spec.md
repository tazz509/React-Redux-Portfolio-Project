Spec.md

[x] - Code uses as much ES6 as possible
    - yep!  It almost exclusively uses ES6

[x] - Use the create-react-app generator to start your project.
    - Sure did

[x] - Your app should have one HTML page to render your react-redux application
    - It uses index.html, found in ./client/public

[x] - There should be 2 container components
    - There are more than 2 (which I hope is ok!), but I have:
        1. EventsPage
        2. EventsNew
        3. EventShow
        4. EventsList
        5. EventCard

[x] - There should be 5 stateless components
    - Again, there are more than 5, but I have:
        1. contact
        2. Footer
        3. Home
        4. NavBar
        5. ProfilePicture
        6. About

[x] - There should be 3 routes
    - I have:
        1. /events
        2. /events/:id
        3. /events/new
        4. /events/edit
        5. /  //home

[x] - The Application must make use of react-router and proper RESTful routing
    - It uses react-router

[x] - Use Redux middleware to respond to and modify state change
    - It uses Redux

[x] - Make use of async actions to send data to and receive data from a server
    - Take a look at ./client/src/actions/index.js

[x] - Your Rails API should handle the data persistence. You should be using fetch() within your actions to GET and POST data from your API - do not use jQuery methods.
    - I hit the Rails API using fetch()!

[x] - Your client-side application should handle the display of data with minimal data manipulation
    - Yes. I believe I only have a few client side methods.  One which sorts events by date, and another which formats date and time strings.

[x] - Your application should have some minimal styling: feel free to stick to a framework (like react-bootstrap), but if you want to write (additional) CSS yourself, go for it!
    - I used Bootstrap, react-bootstrap, as well as a package called react-cardstack

    

