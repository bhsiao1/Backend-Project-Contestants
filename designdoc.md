Why did you choose to organize your data schemas/models in a particular way?

I organized my data schemas/models in a way where the model consisted of the 4 fields, contestantName, husbandName, vocalRange, and location. This allows for versatile ways of getting the responses from the routes. For posting a contestant, this data schema allows for all fields to be used. For the other methods, we'll have the ability to grab the schema when fetching from the database. For example, for the get contestants method, we can take just the contestantName and husbandName from the schema to return just those 2 fields. For the get husbandCall method, we can just take the contestantName and filter the database to get the schema which then allows me to just get the location and vocal Range to do the logic of seeing if one is equal, less than, or greater than the other.


Feel free to talk a bit about the "harder" routes that you worked on and how you approached them — harder is completely subjective, so feel free to get creative here!

The harder routes I worked on were the two get methods. For the get contestants method, that was hard because I had to utilize mapping to get a JSON response that was matching the example responses. I ran into an error at first because I wasn't sure how to do the JSON way but after exploring I realized mapping was a great way to have array type as the pairs field. This allowed me to put together a JSON response that was like the example response: pairs: [
    {
        contestantName: ""
        husbandName: ""
    }
]

For the get husbandCall method, that was the hardest for me I first had to figure out how to query thru the database to find the data that corresponded with a specific contestantName. I had to test out between findOne and find on the schema with some syntax errors I ran into. That was fixed by doing small changes like req.params to req.params.contestantName and putting quotes on contestantName to make it a string. Another part of the method that was hard was trying to implement the if cases with math logic. I had to think about the description and turn it into if cases and mathematical logic like Math.abs(data.location - data.vocalRange) and whether vocalRange was equal, less than, or greater than location.


How did you decide on certain response codes or errors?

I decided on 200, 400, and 500 response codes or errors because 200 is for when the response is successful, so that occurs when there's no errors throughout the method or that the logic does not return true on a if case. I decided on using 400 for the post method because 400 is for errors that indicate problems with the request. This makes sense since posting requires a request to be inputted so if there's an error it'll be from the request. I chose 500 for the get methods because 500 are server errors that means the request was fine but on the server side, there occurs an error to prevent a successful response. This is where errors like contestantName not found or undefined comes in.
