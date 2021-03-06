<h1>Morse Code Translator</h1>

<h2>Skills</h2>

<ul>
<li>Semantic HTML</li>
<li>CSS</li>
<li>SASS</li>
<li>BEM</li>
<li>Figma</li>
<li>Git & GitHub</li>
</ul>

<h2>JavaScript</h2>

<ul>
<li>OOP</li>
<li>Jest Testing</li>
<li>TDD Approach</li>
<li>Array of Objects</li>
<li>map()</li>
<li>split()</li>
<li>join()</li>
<li>toUpperCase()</li>
<li>Event Listeners</li>
<li>Mirrored outputs</li>
</ul>

<h2>Method</h2>

Using an OOP Approach, I created two objects with Morse Code characters and English characters.

I created two functions, that targets the relevant object, converts it into an array and then maps through the characters to output the translation. These functions translated Morse to English and English to Morse. The function displayed the result in an output div.

So that I could use the same input box for both translations, I created a new function checkTypeOfValue() that checked whether the input value was a string or a dot/dash. Depending on the input, the if else statement would call the correct function for the correct input providing the relevant translation. For example, if the user types a dot or a dash, it will call the function that translate Morse to English.

I then attached the function to an event listener.

As an extension to the project, I decided to create a function that would mirror the input text to the output text whilst also calling the checkTypeOfValue() function so that the correct translation was intiated as the user typed. The button was then no longer required and the user gets an instantaneous translation as they type.

I also took a TDD approach and tested my code to ensure all functions and outputs were correct for the user. 


<img src="translator_image.png">

