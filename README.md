# EventTracker
A React/Redux app with Rails backend to manage event creation

## Installation
Clone this repo, cd into the directory, and do a bundle install as well as an npm install. To run this app in the browser enter  `rake start` into the terminal. PLEASE NOTE: you might encounter an error while doing the NPM install.   This is because there is a syntax error in one of the dependencies, react-cardstack. In order to fix this, please go to:
` './client/node_modules/react-cardstact/dist/index.js' `
and replace the line:
` var _Cardstack = _interopRequireDefault(require("./Cardstack")); `
with:
` var _Cardstack = _interopRequireDefault(require("./CardStack")); `

## Usage 
The header contains the EVENTS menu, as well as ADD EVENT.  From there you can choose to add an event or view your events.  You have the ability to edit and delete events within the EVENTS view.  

[![Event_Tracker_Screen_Shot.png](https://s33.postimg.cc/6n6q2fle7/Event_Tracker_Screen_Shot.png)](https://postimg.cc/image/nnpmb3yff/)

## Tech/Framework Used
This app was made with a Rails 5 (api mode) backend, with a React front-end with Redux to manage global state.

## Contributing
Bug reports and pull requests are welcome on GitHub at https://github.com/jacobsilver2/EventTracker.

## License
The app is available as open source under the terms of the [MIT License](https://opensource.org/licenses/MIT).


