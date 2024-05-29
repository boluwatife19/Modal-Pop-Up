# Modal Popup Feature

This project implements a simple modal popup feature using HTML, CSS, and JavaScript.

## Table of Contents
1. [Introduction](#introduction)
2. [Setup and Installation](#setup-and-installation)
3. [Usage](#usage)
4. [Code Explanation](#code-explanation)
    - [HTML](#html)
    - [CSS](#css)
    - [JavaScript](#javascript)
5. [How It Works](#how-it-works)

## Introduction

This project demonstrates how to create a modal popup that can be triggered by clicking a button. The modal can be closed by clicking the close button or by clicking outside the modal content.

## Setup and Installation

1. Clone the repository or download the source code.
2. Open the `index.html` file in your preferred web browser to see the modal popup in action.

## Usage

- Click the "Open Modal" button to display the modal popup.
- Click the "X" button or anywhere outside the modal content to close the modal.

## Code Explanation

### HTML

The HTML structure includes a button to open the modal and the modal itself with a close button.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Modal Pop Up</title>
    <link rel="stylesheet" href="./style.css">
</head>
<body>
    <main>
        <div class="modal">
            <div class="modal-content">
                <div class="close">X</div>
                <div class="body">Hey!!! You just Opened a Modal</div>
                <div class="footer">So sad to see you leave))</div>
            </div>
        </div>
        <button class="open">Open Modal</button>
    </main>
    <script src="./script.js"></script>
</body>
</html>
```
### CSS

The CSS styles ensure that the modal is centered and has a background overlay.

```css
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: rgb(71, 60, 1);
}

body main{
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding-top: 100px;
}

body main .modal{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background: rgb(10, 10, 10);
    width: 80%;
    border-radius: 10px;
    overflow: hidden;
    position: fixed;
    top: 0;
    left: 0;
    margin-top: 100px;
    margin-left: 10%;
    opacity: 0;
    transition: .3s ease-in-out;
}

body main .modal.active{
    opacity: 1;
}

body main .modal .close{
    background: rgb(255, 255, 255);
    padding: 10px;
    font-family: "Poppins", sans-serif;
    font-size: 20px;
    width: 100%;
    text-align: right;
    font-weight: 800;
    cursor: pointer;
    color: black;
    transition: .3s ease-in-out;
}

body main .modal .close:hover{
    background: rgb(209, 209, 209);
    color: rgb(32, 32, 32)
}

body main .modal .body{
    padding: 10px;
    font-family: "Poppins", sans-serif;
    font-size: 20px;
    width: 100%;
    padding: 60px 30px;
    color: white;
}

body main .modal .footer{
    background: rgb(255, 255, 255);
    padding: 10px;
    font-family: "Poppins", sans-serif;
    font-size: 20px;
    width: 100%;
    color: black;
}

body main .open{
    border-radius: 4px;
    background: white;
    cursor: pointer;
    font-family: "poppins", sans-serif;
    font-weight: 700;
    padding: 10px 20px;
    transition: .3s ease-in-out;
    margin-top: 300px;
}

body main .open:hover{
    background: rgb(112, 112, 112);
}
```

### JavaScript

The JavaScript code handles the opening and closing of the modal.

```js
let open = document.getElementsByClassName("open")[0];
let modal = document.getElementsByClassName("modal")[0];
let close = document.getElementsByClassName("close")[0];

let isActive = () => {
    modal.classList.remove("active")
}

open.addEventListener("click", () => {
    modal.classList.add("active");
});

close.addEventListener("click", isActive)

window.onclick = function(event) {
    if (event.target.tagName == "HTML" || event.target.tagName == "MAIN") {
        isActive();
    }
  }
  ```
### How It Works

#### Opening the Modal:
When the "Open Modal" button is clicked, the modal element gets the active class, which makes it visible.

#### Closing the Modal:
Clicking the "X" button triggers the isActive function, which removes the active class from the modal.
Clicking anywhere outside the modal content (on the main or HTML body) also triggers the isActive function to close the modal.
This setup ensures a user-friendly experience by allowing multiple ways to close the modal.


###### This README provides a clear structure and explanation of your modal popup feature, making it easy for others to understand and use.





