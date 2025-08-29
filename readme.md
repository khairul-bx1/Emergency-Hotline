<!-- Qu 1 . What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll? -->

getElementById : grabs one element by its unique id.

getElementsByClassName : grabs all elements with a certain class. It’s “live,” meaning if the page changes, the list updates automatically.

querySelector : grabs the first element that matches a CSS selector (like .class, #id, div > p, etc.).

querySelectorAll : grabs all elements that match a CSS selector, but the list is “static,” it won’t change if the page updates.


<!-- Qu 2 . How do you create and insert a new element into the DOM? -->

At first create the element then add content or attributes and insert it to the dom with .append()


<!-- Qu 3. What is Event Bubbling and how does it work? -->

Event Bubbling is when an event (like a click) starts on the element you interacted with and then “bubbles up” to its parent elements, all the way to the top of the page. In other words, the event first affects the target element, then its parent, then grandparent, and so on.

<!-- Qu 4 . What is Event Delegation in JavaScript? Why is it useful? -->

Event Delegation is about using a parent to handle events of its children, making code cleaner, faster, and dynamic-friendly.

<!-- Qu 5 . What is the difference between preventDefault() and stopPropagation() methods?
 -->

preventDefault() : stops the browser’s default action for an event.
stopPropagation() : stops the event from bubbling up to parent elements.

