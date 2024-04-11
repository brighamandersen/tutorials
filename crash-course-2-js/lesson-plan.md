# Intro to Web Dev 2.0 - JavaScript

![Cover Photo](./cover-photo.png)

### What is JavaScript?

HTML is the content, CSS is the styling, JS is the interactivity. JS causes things to happen when users interact with a webpage with their mouse and keyboard. JS makes things dynamic (not always the same website every time).

### Why JavaScript?

Google `js popularity`

### Running JavaScript outside of a Web Browser

- Simple NodeJS demonstration (This one requires more setup since you have to install NodeJS, so I'll just show it on my machine)

### Running JavaScript in a Browser

- This is the main way, the way we'll focus on for this tutorial
- Quick demo by opening Dev Tools on google.com - How to Change What Google Looks Like
  - Change Google document title to 'My Website'
  - Refresh and show that changes dissolve (doesn't save changes because when the page reloads, it reloads the original HTML, CSS, and JS files, throwing away our temporary changes)
  - Show JS Method: `document.title = 'My Website'` (Once a website is running, we aren't able to explicitly change the HTML, since we can't go in an edit a file for our user while they're using it, but we can use JavaScript to dynamically change HTML, all without reloading the page.)
  - More applicable example, changing to dark mode (`document.querySelector('body').style.background = 'black'`)

### How to Setup/Organize JavaScript in your Website Project

2 Types:

- Infile JavaScript + Example (added script tag to bottom of hmtl, js right there)
- Separate File JavaScript + Example (New file for all our js, then we just add `src` with filename to our script tag. We'll stick to this one, it's industry standard.)

### Ways to trigger JavaScript to run in Web Browser

- On page load (runs entire script not inside of a function
- On events (events are when user interaction happens like clicking or typing, and we can fire functions when they happen)
- - `onClick` method with button (Show example)

### Overview of JavaScript

- Has variables, functions, classes, just like any language

### JavaScript Variables

- `const` (Constant/Final, can't change) & `let` (able to change)
- Possible variable types: (Demo this is Chrome Dev Tools so it returns the type)

  - `undefined` (variable declared, but not assigned)
  - `null` (variable assigned to an empty value)
  - `boolean`
  - `number`
  - `string`
  - `object`
  - `array`

- Activity - Give a possible variable, you give a type (Demo this is Chrome Dev Tools so it returns the type)
  - name (`string`)
  - age (`number`)
  - oldEnoughToDrive (`boolean`)
  - pi (`number`) - not just ints, also floats
  - seasons - `['spring','summer','fall','winter']` (`list` of `strings`)
  - testScores - `[89,75,62,99,100]` (`list` of `numbers`)

### JavaScript Functions

- `console.log()`
- `console.error()`
- `alert()`
- `confirm()`
- `prompt()`
- `addEventListener()` - (Show variation example of hooking up button, except by using `addEventListener` instead of `onClick`)

### DOM Manipulation

- `document.title = 'This Website` - Change document title (Change the HTML meta data)
- `thisElement.innerHTML = '<h1>Hello</h1>'` - Change element inner HTML contents
- `document.querySelector('body').style.background = 'black'` - The example we saw earlier (You can change CSS too, not just HTML)

Activity - [CodePen - Create a Hero](https://codepen.io/brighambandersen/pen/QWgZgMx) - After you've explained how to do alerts and the other functions, show how you can chain them together meaningfully. - Introduce the CodePen, then turn them loose and let them customize it how they want.

### Conclusion

- Review concepts
- By building off these basics, we can make our webpages much more interactable, like [this website](https://codepen.io/wesbos/pen/evsuw?editors=1000).
