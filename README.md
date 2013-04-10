The 5by AngularJS Challenge
===========================

This practice challenge will introduce you to AngularJS and some other tools we use at 5by.

You love YouTube videos, and over the years you've been collecting their URLs in a text file.
The problem is that now you don't know what any of them actually are!

You decide to build a single-page AngularJS app that:

1. Given a YouTube URL
2. get the metadata from YouTube,
3. and append the information to a list on the page.

Each video in the list should show:

* Title of the video
* Who posted it to YouTube
* Date it was posted
* Thumbnail
* How many views and likes the video has

_Feel free to use/adapt any code examples you find online to complete the challenge._
Use any YouTube API you feel most comfortable with. Even the latest experimental V3 API.
You should use as little jQuery as you can, even though it is available. Try to stick to AngularJS conventions for DOM manipulation (ie: keep it inside Directives).

### Resources:

[AngularJS Developer Guide](http://docs.angularjs.org/guide/)
[YouTube Data API](https://developers.google.com/youtube/v3/getting-started)
[AngularJS App Example](https://github.com/angular-app/angular-app)
[Angular-local-storage](https://github.com/grevory/angular-local-storage)
[Twitter Bootstrap](http://twitter.github.io/bootstrap/)


## Extra Bonus Points

1. (Intermediate) Save the list of videos to LocalStorage and fetch them when you reload the page.
2. (Intermediate) Write unit tests and end-to-end (e2e) tests for your app
3. (Advanced) Add a play button that embeds the video and plays it.
4. (Advanced) Given any URL, scan the page for YouTube videos and add them all to the list.


## How to get started

* Sign up to GitHub if you don't have an account
* Fork the challenge seed repository (http://www.github.com/davecap/5by-challenge)
* Write your code

The 5by challenge is based on the angular-seed repository, an app skeleton for a typical [AngularJS](http://angularjs.org/) web app.

The seed contains AngularJS libraries, test libraries and a bunch of scripts all preconfigured for
instant web development gratification. It also contains jQuery and Twitter Bootstrap.

The seed app doesn't do anything, just shows how to wire two controllers and views together. You can
check it out by opening app/index.html in your browser (might not work file `file://` scheme in
certain browsers, see note below).

_Note: While angular is client-side-only technology and it's possible to create angular webapps that
don't require a backend server at all, we recommend hosting the project files using a local
webserver during development to avoid issues with security restrictions (sandbox) in browsers. The
sandbox implementation varies between browsers, but quite often prevents things like cookies, xhr,
etc to function properly when an html page is opened via `file://` scheme instead of `http://`._


### Running the app during development

You can pick one of these options:

* serve this repository with your webserver
* install node.js and run `scripts/web-server.js`

Then navigate your browser to `http://localhost:<port>/app/index.html` to see the app running in
your browser.


### Running unit tests

We recommend using [jasmine](http://pivotal.github.com/jasmine/) and
[Testacular](http://vojtajina.github.com/testacular/) for your unit tests/specs, but you are free
to use whatever works for you.

Requires [node.js](http://nodejs.org/), Testacular (`sudo npm install -g testacular`) and a local
or remote browser.

* start `scripts/test.sh` (on windows: `scripts\test.bat`)
  * a browser will start and connect to the Testacular server (Chrome is default browser, others can be captured by loading the same url as the one in Chrome or by changing the `config/testacular.conf.js` file)
* to run or re-run tests just change any of your source or test javascript files


### End to end testing

Angular ships with a baked-in end-to-end test runner that understands angular, your app and allows
you to write your tests with jasmine-like BDD syntax.

Requires a webserver, node.js + `./scripts/web-server.js` or your backend server that hosts the angular static files.

Check out the
[end-to-end runner's documentation](http://docs.angularjs.org/guide/dev_guide.e2e-testing) for more
info.

* create your end-to-end tests in `test/e2e/scenarios.js`
* serve your project directory with your http/backend server or node.js + `scripts/web-server.js`
* to run do one of:
  * open `http://localhost:port/test/e2e/runner.html` in your browser
  * run the tests from console with [Testacular](vojtajina.github.com/testacular) via
    `scripts/e2e-test.sh` or `script/e2e-test.bat`
