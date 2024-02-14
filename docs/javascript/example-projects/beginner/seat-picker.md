---
sidebar_position: 1
---

# High School Seat Picker

:::note
This is a *Beginner* problem

:::

## Prompt
You will create a program that will assign seats to a user for a high school sports game. 
- Create an array of available seats `["3A", "4C", "5F"...]`
- Prompt the user to choose whether they want a random seat given to them, or they want to choose their own seats. 
- If they want a random seat, print a random available seat for them.
- If they want to choose a seat, then prompt them to input a seat. If that seat isn't available, ask them again. Keep asking until they input a valid seat.

Your program should have a function that has at least one parameter, that handles both cases (random or picking).

**Example output**:
```
Would you like to have a random seat, or pick one? (random/pick) >> random
Your seat is 3A!
```

```
Would you like to have a random seat, or pick one? (random/pick) >> pick
What seat would you like? > Z82
That seat is not available. Try again > 3A
Your seat is 3A!
```

--- 

## Example Solution

Our algorithm should be as follows:
- Initialize an array `availableSeats`, which has the available seats.
- Create a function `seatPicker(choice)`, expecting `"random"` or `"pick"` for the `choice` parameter.
    - In this function, there are two cases:
    - If `choice` is `random`, then:
        - Pick a random number from `0` to `availableSeats.length - 1`
        - Print the seat from `availableSeats` at that index
    - If `choice` is `pick`, then:
        - Start a while loop that runs while the user **hasn't** selected a valid seat:
            - In the while loop, ask the user for a seat
            - Check if that seat is in `availableSeats`:
                - If it is, then return the seat and stop the while loop.
                - Else, tell them to try again.
- Ask the user whether they want a random seat or to pick, and save their response in `choice`.
- Call `seatPicker(choice)`


```
const availableSeats = ["3A", "3B", "3C", "3D", "3E", "4A", "4B", "4D", "B7", "A8", "B9", "Z3"];

// Parameter: choice (string), represents the choice that the user wants for the seat
function seatPicker(choice) {
	if (choice === "random") {
        const randomNumber = Math.random() * (availableSeats.length - 1);
        const chosenIndex = Math.round(randomNumber);
        const chosenSeat = availableSeats[chosenIndex];

        console.log("Your seat is", chosenSeat);

    } else if (choice === "pick") {

        let hasChosenAvailableSeat = false;
        
        while (hasChosenAvailableSeat === false) {
            const chosenSeat = prompt("Pick your seat: ");

            // they chose an available seat
            if (availableSeats.includes(chosenSeat)) { 
                console.log("Your seat is", chosenSeat);
                hasChosenAvailableSeat = true;
            } else { // they chose an invalid seat
                console.log("That seat is not available.");
            }
        }

    }
}

const choice = prompt("Would you like to pick a seat or get a random seat? (random/pick)");
seatPicker(choice);


```
## Note: `Math.random()`
:::info

Did you understand these lines?
```
const randomNumber = Math.random() * (availableSeats.length - 1);
const chosenIndex = Math.round(randomNumber);
const chosenSeat = availableSeats[chosenIndex];
```

Remember that `Math.random()` returns a random decimal from `0` to `1` (not including 1).
We want a random number from `0` to `availableSeats.length - 1`, so we multiply the random number by `availableSeats.length - 1`, so the range is correct.
Next, we round the result so we can properly index the array.
Finally, we declare and initalize `chosenSeat` to the element at the randomly chosen index of `availableSeats`.
:::