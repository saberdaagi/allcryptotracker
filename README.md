# allcryptotracker

To run this example in production or development mode you have to make sure, ionic and cordova are installed globally on your machine. After that you can install all necessary dependencies for running this example.

    Check if npm is installed. Otherwise please install node.js and npm.

npm -v

    Install ionic and cordova command line interface globally.

npm install -g cordova ionic

    Install all dependencies listed in package.json.

npm install

Running the example in your browser

ionic serve

Running the example on your device

    Add an iOS or Android to the project.

ionic cordova platform add ios 
# or 
ionic cordova platform add android

    Run the app on your device.

ionic cordova run ios
# or
ionic cordova run android

For further information please read ionic's deployment guide.
