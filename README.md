# wikipedia viewer

Summary: This is a solution to the Free Code Camp (FCC) intermediate front-end development project task to create a Wikipedia viewer.

Resources: HTML5, CSS3, Bootstrap 3, Javascript, jQuery, JSON, Wikipedia API, CodePen.

Notes: This is one of the intermediate challenges included in the FCC Front-End Web Developer certification course. The requirement was to build a web application that gave the user a search field to enter a Wikipedia search text and return results, or alternatively access a random Wikipedia entry. Wikipedia entries are accessed by a JS/jQuery script that makes an AJAX GET request to the MediaWiki API with results returned in JSON. Results are displayed two at a time with a "More" button that will then display the next two results.

The JSON returned by Wikipedia.org is stored in an array which is stepped through, displaying the subject title and a summary. Clicking on the summary takes the user to the full Wikipedia page in a separate tab. Random entries are accessed through a hyperlink connected to https://en.wikipedia.org/wiki/Special:Random.

Link: https://codepen.io/woody01666/full/oGpZom
