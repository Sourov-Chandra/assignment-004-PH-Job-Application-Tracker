
## 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

### A. getElementById (The Specialist)
Imagine we are looking for a specific person by our **Social Security Number**.

* **How it works:** It looks for one unique ID.
* **Result:** We get one specific item.
* **Speed:** The fastest way to find something.

### B. getElementsByClassName (The Group Search)
Imagine we are looking for everyone wearing a Blue Shirt.

* **How it works:** It looks for every element that has a certain class.

* **Result:** We get a list of items (a "Live" collection).

* **Quirk:** If someone puts on a blue shirt later, the list updates itself automatically.

 
### C. querySelector/querySelectorAll (The Swiss Army Knife)
Imagine you can ask for anything using CSS rules (like #id, .class, or div > p).

**querySelector:** Grabs only the first one it finds.

**querySelectorAll:** Grabs every match it finds.

**Result:** You get a list that stays exactly as it was when you first searched (it doesn't auto-update).


  <br><br><br>

## How do you create and insert a new element into the DOM?

For doing that We have to follow three things -

1.Create the Element
```javascipt
const newBox = document.createElement('div'); //here will have ike a div, p, or button
```

2,. Add Content or Styles
```javascipt
newBox.textContent = "Hello World!";
newBox.style.color = "blue";
```

3. Insert it into the Page
```javascript
document.body.appendChild(newBox);
```

  <br><br><br>



## 3. What is Event Bubbling? And how does it work?

### Event Bubbling
* **What is it?** Events "float up" from the child element to the parents.
* **The Order:** Child → Parent → Grandparent → Document.
* **How to stop it:** Use `event.stopPropagation()`.


  <br><br><br>


## What is Event Delegation in JavaScript? Why is it useful?
  ### Event Delegation
* **Definition:** Putting one listener on a parent to manage all its children.
* **How it works:** It uses **Event Bubbling** to "catch" clicks as they move up.
* **Big Benefit:** It works even for elements you haven't created yet (Dynamic Elements)!
  
  
  <br><br><br>


## 5. What is the difference between preventDefault() and stopPropagation() methods?

### preventDefault vs stopPropagation
* **preventDefault():** Stops the browser's default reaction (like following a link).
* **stopPropagation():** Stops the event from bubbling up to parent elements.