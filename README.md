# B Keeper
### It's a whole lot of trouble keeping track of these b's, I think it's time we write a program to help.

A B house is a place to store b's. B's are represented on the DOM as a string of 'b' characters. 6 b's would be represented as 'B B B B B B'.

We will use json-server as our backend server, and db.json as our database file. You can start the backend server with the command:

`json-server --watch db.json`

## Deliverable 1
Display each group of b's in a house. The name of the house and the number of b's should be visible for each house. The order of the houses on the screen does not matter, only that each group of b's from the database is represented on the DOM.

Your b house can be structured however you like, but the outermost element must be a <div>. An example where the name of the house is "blue house", and it contains 5 b's:

<div>
    <h2>House name</h2>
    <p>B B B B B</p>
</div>

Add each of your b houses to the existing <div> element with the id "houses"

Example response from a GET request to 'http://localhost:3000/houses'

```
houses: [
    {
        name: 'red house',
        num_bees: 22
    },
    {
        name: 'blue house',
        num_bees: 35
    },
    {
        name: 'yellow house',
        num_bees: 52
    },
    {
        name: 'green house',
        num_bees: 13
    }
]
```

## Deliverable 2
Add a button to each of your b houses that when clicked, adds an additional b to that house. To add a b to a b house, add the character 'b' to the already existing b's on the DOM with a space before it. No persistance is needed to pass this deliverable.

## Deliverable 3
Add a delete button to each b house. When clicked, it should remove the house from the screen. No persistance is needed.

# -- Bonus Deliverables --

## Bonus 1

Apply persistance to deliverable 2. This means that when the add b button is clicked, it should modify the `num_bs` attribute in the database for that given b house. 

## Bonus 2

Apply persistance to deliverable 3. When you remove a b house from the DOM, make sure it is also deleted from the database.
