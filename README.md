# `Simple Calculator`

---

The goal is to create a simple calculator from scratch using React.js.

Requirements

Goal 1

Build the basic UI for the calculator, which has the following elements:

An area at the top to display the input or result
10 buttons for numbers 0-9
4 buttons for operations (Add, Subtract, Multiply & Divide)
Clear button (completely clears the stack, akin to AC in a real calculator)
= button (computes and displays the result)
Operation buttons also compute and display intermediate results

Here’s a rough diagram of how it should be laid out. (Note: Refer to the Judgement Criteria at the bottom. There are no points for styling/aesthetics, so avoid spending time there and focus on the functionality.)

Here’s an example of how it must function:
Default state must display ‘0’
Pressing the key [ ‘2’ ] shows the operand ‘2’
Pressing the keys [ ‘2’ ‘+’ ] in sequence continues to show operand ‘2’
Pressing the keys [ ‘2’ ‘+’ ‘3’ ‘-’ ] in sequence shows operand ‘3’
Pressing the keys [ ‘2’ ‘+’ ‘3’ ‘-’ ] in sequence shows intermediate result ‘5’
Pressing the keys [ ‘2’ ‘+’ ‘3’ ‘-’ ‘1’ ] in sequence shows operand ‘1’
Pressing the keys [ ‘2’ ‘+’ ‘3’ ‘-’ ‘1’ ‘*’ ] in sequence shows intermediate result ‘4’
Pressing the keys [ ‘2’ ‘+’ ‘3’ ‘-’ ‘1’ ‘*’ ‘10’ ] in sequence shows operand ‘10’
Pressing the keys [ ‘2’ ‘+’ ‘3’ ‘-’ ‘1’ ‘*’ ‘10’ ‘=’ ] in sequence shows result ‘40’

Note that this is a simple calculator that does not follow BODMAS, and simply evaluates the stack in order as the keys are pressed, ie. 2 + 3 - 1 \* 10 = 40 and not -5.

Goal 2

Add a single button toggle for Scientific Mode

Scientific Mode

This reveals 3 buttons:
Sign button (Flips the input from positive to negative, or vice versa)
Square button (Finds the square of the input)
Square Root button (Finds the square root of the input)

Goal 3

Add a 2-button toggle between ‘Light Theme’ and ‘Dark Theme’.

Light Theme
Dark Theme

In Light mode, the background color of the page should be white (#fff). The background color of the calculator buttons should be gray (#f0f0f0) and the font color should be black (#000).

In Dark mode, the background color of the page should be black (#000). The background color of the calculator buttons should be dark gray (#666) and the font color should be white (#fff).

---

# Available Scripts

In the project directory, you can run:

## `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.
