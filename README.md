# Pixketck
## A CRUD drawing app for pixel art

## Introduction
Welcome! Pixketch is a simple drawing app realized during the Odin Project's 'Etch-a-sketch' assignment. While the basic exercise asked for a simple web app that let the user sketch on the hovering of the mouse, I took license to add more features to cement my knowledge (and have some fun!).

More on that on [The Odin Project](https://www.theodinproject.com/)

### The original assignment
The assignment originally asked for an app with two simple functions: check youself at [Etch-a-Skecth](https://www.theodinproject.com/lessons/foundations-etch-a-sketch)!

The base app worked as it follows:
1. Inside a grid of 'divs', generate a variable number of squares.
2. Each and every square will change their color to black when the user hovers the mouse cursor over them.
3. The one and only button on the UI would - when cklicked - prompt the user for a new x*y number of squares grid. Beware, the new grid will replace the older one, deleting everything.

## The Features
The following features have being built on top of the base app for the assignment.

### Drawing modes
There are two drawing modes in Pixketch, 'Sketch' and 'Click'.

Sketch mode will allow the user to draw only by moving the mouse over the 'canva' (nb: it's a canva only in common language, not the HTML 'canva' element).

Click mode will allow the user to draw like in many known softwares (like Paint) by pressing the mouse and moving over the canva, single clicks will also work.

The user can swithc between modes by clicking on the 'Mode:' button in the options bar below the header. The button itself will show which mode is currently selected.

### Grid visibility
Grid visibility can be toggled by clicking on the 'Toggle grid: ON/OFF' button in the options bar. The button text will update itself every time to show current grid visibility.

### The sidebar
On the left of the canva, there is a sidebar with two main areas: the Utility section and the Colors section.

Under the utility the user will find:
1. Pencil: will switch the cursor color to black.
2. Eraser: will switch the cursor color to white, to simulate and eraser.
3. Clear all: will cancel everything on the grid, making it blank again.

Under the color section there the colors on rainbow plus brown. Cliking on a color button will swtich the cursor color to the desired one.

# Closing notes
Besides being a very pleasant learning experince, it was a fun project to work on! Don't forget to take a screenshot of you masterpiece!