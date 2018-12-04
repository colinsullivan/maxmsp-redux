# Max/MSP Redux
A simple example demonstrating how to hook into a Redux.js state store from within Max/MSP, as well as a small helper patch `action_creator` to help forming a Redux.js action dictionary from within Max/MSP.

## Running Example

    $ npm install

Open `example.maxpat`, move sliders.  The dict printed at the bottom of the screen is data streaming from the Redux.js store within the Node.js process.

## Why is this useful?
Node.js has become a popular environment for interconnecting applications because of its asynchronous nature and large open source ecosystem.  Redux.js has become a popular way for managing state within a JavaScript application.

With Max 8, we now have easy access to a Node.js runtime from within Max.  Having a Redux.js store in a Node.js process controlled by Max can be very useful for connecting Max to other systems and writing all of the reducer (state machine) logic in JavaScript.
