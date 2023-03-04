We’re going to be making a word-transforming app. The skeleton is made for you. You will be writing the onClick and onChange event handlers and attaching them to the buttons/inputs! Once you’re done, whatever is typed in the input box should appear instead of “Your Words Here” and be transformed according to the buttons clicked.

Attach Click Handlers to the Color Buttons.

1. Create a new piece of state, color with an empty string as its initial value

2. Under the comment “attach color onClick handlers”, add an onClick={/_ setter here _/} property to each of the color buttons. Pass it the setColor function from the state above.

Make sure to pass the setter in an anonymous function () => setColor(‘red’) so that it only gets called when the onClick event is fired.

3. In the “words” span, under the comment “add styles here”, add the color to the style object. Click the red button. The words should turn red
4. Attach the handler for the other colors, passing the corresponding color. As a result, all your buttons should be functional.
5. Run the tests. This should PASS one test

Attach onChange Handler for the Input.

1. Create another piece of state, words with an empty string as its initial value

2. Under the comment “attach onChange handler”, add an onChange={/_ setter here _/} property to the input. Pass it the setWords function.

3. In the anonymous function, use the event from the onChange, and pass the event.target.value to setWords like onChange={ (event) => setWords(event.target.value)}

4. Pass words to the value prop on the input.

5. Instead of the static “Your Words Here” in the last span, place {words}.

6. Run the code. The words shown between the -- should reflect what is typed in the input box.

7. Run the tests. This should PASS another test (total of 2)

Attach onClick to the Uppercase and Lowercase Buttons

1. Under the comment “attach uppercase onClick handlers” add an onClick={/_ setter here _/} property to the uppercase button.

2. In the anonymous function, call setWords, passing the uppercase version of the words. toUpperCase should do the trick!

3. Run the code. When you click the UPPERCASE button, the words should all show as uppercase!

4. Do the same for the lowercase button, using toLowerCase.

5. Run the tests. This should PASS all tests (total of 3)

6. End Result: You should be able to click buttons to colorize your words, and you should be able to change the words to all caps or all lowercase.
