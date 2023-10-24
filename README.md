# Backend Project

Goal: Implement the backend side of a contestants database with API endpoints to insert and retrieve entries.

Tech stack:
Node.js and Javascript with HTML.

API Endpoints:
- /contestants [GET] => Fetch all contestants in the database in a JSON format.
- /contestants [POST] => Insert a contestant with a schema of 4 fields: contestantName, husbandName, vocalRange, location.
- /husbandCall/:contestantName [GET] => Fetch score of a contestant's vocalRange from contestant's husband's location. (if vocalRange same as location, score will be location, else if vocalRange greater than location, it would be the difference of vocalRange and location.)





*Disclaimer*
- the node_modules folder was not added for simplicity
- the .env was not added since it contains personal MongoDB URI
