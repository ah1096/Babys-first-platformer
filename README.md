# Babys-first-platformer
My first ever attempt at making a platformer. Built following this tutorial: https://www.youtube.com/watch?v=Lcdc2v-9PjA&amp;t=2599s&amp;ab_channel=ChrisCourses


Additional Resources:

What is canvas context?
https://www.html5canvastutorials.com/tutorials/html5-canvas-element/#:~:text=The%20canvas%20element%20is%20the,can%20only%20have%20one%20context.

Javascript switch case:
https://www.w3schools.com/js/js_switch.asp

Tiled map editor:
https://www.mapeditor.org/

COLLISION DETECTION:
1. check horizontal axis for collision with player
2. apply gravity
3. check for vertical collisions
4. update and loop

SPRITE ANIMATION:
1. need to crop the sprite sheet to only use one image at a time
2. move the crop mark to the next iteration of the sprite sheet
3. adjust speed of crop mark movement to give illusion of movement

PUTTING A DOOR ON THE MAP:
1. go into Tiled > misc > select Door
2. place door on the map
3. take x and y coordinates on side panel (Map Properties)
4. subtract the height of the door (also visible in map Properties) from the y-coordinate to get the actual y-coordinate