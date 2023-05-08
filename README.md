# Babys-first-platformer
My first ever attempt at making a platformer. 


CURRENT VERSION: Baby's First Platformer (BFP) v.0 May 2, 2023
- Game uses assets from ChrisCourses video tutorial (linked in Resources)
- Player can move using WAD keys: w = jump, a = left, d = right
- Player can enter doors using the W key
- Player can change levels by entering doors
- Levels 1 through 3 exist
- Upon entering level 3's door, Player is looped back to Level 1

=====UPCOMING CHANGES============================================
                                (things that are definitely happening)

==> PICK UP A KEY UPDATE (BFP v.0.1)
    A "key" item exists in the level, and the Player can pick it up.

    *ITEMS* 
    DONE: an item exists in the level
    DONE Player can interact with item on key press
    <!-- TODO: Item disappears from the level when it is interacted with -->


==> UNLOCK THE DOOR UPDATE
    Doors are locked by default upon Player spawn and the Player cannot enter them. If the Player has a key, the door can be unlocked and the Player can enter the door.

    *DOORS*
    <!-- TODO: Doors can be locked by default on level entrance -->
    <!-- TODO: Doors can be unlocked if Player has a key -->


==> INVENTORY UPDATE
    the Player has an inventory that can store an item

    *ITEMS*
    <!-- TODO: Interactible items show text ("Pick up {item}") at bottom of screen when they collide with player -->

    *INVENTORY*
    <!-- TODO: Inventory appears on screen -->
    <!-- TODO: Inventory can be opened and closed on key press -->
    <!-- TODO: Inventory can be updated; Player can add ("pick up") and remove ("drop") one item-->


==> InVENTORY UPDATE 2
    the Player has an inventory that can store multiple items
    <!-- TODO: Inventory can be updated; Player can add ("pick up") and remove ("drop") multiple items-->


==> TALK TO ME UPDATE
    NPCs exist in the world. The Player can interact with them to trigger dialog.

    *NPCs*
    <!-- TODO: a NPC exists in the level -->
    <!-- TODO: add custom NPC sprite -->
    <!-- TODO: Player can interact with NPCs on key press -->

    *DIALOG*
    <!-- TODO: Dialog boxes appear on screen -->
    <!-- TODO: Player interaction with NPCs trigger a dialog box to appear on screen -->
    <!-- TODO: Dialog boxes appear in a way that does not obscure the character that is speaking -->
    <!-- TODO: NPCs can have multiple dialog boxes -->
    <!-- TODO: Player can advance to next dialog box on key press -->


==> KEYCAT UPDATE 1
    The game is now officially Keycat v.1

    *APPEARANCE*
    <!-- TODO: center game canvas in middle of viewport; make it looks nicer -->
    <!-- TODO: add a title screen before level 1 loads -->
    <!-- TODO: add a credits scene on level 3 door exit? -->
    <!-- TODO: add custom Keycat sprite for Player -->
        <!-- TODO: Keycat sprite has a little key in its mouth when hasKey = true -->
    <!-- TODO: add custom NPC sprites -->
    <!-- TODO: add custom item sprites -->
    <!-- TODO: add custom level designs -->

    *MUSIC*
    <!-- TODO: add custom music -->

    *TESTING*

=====STRETCH GOALS============================================
                    (things that would be cool to have, but aren't a priority)

==> THREE'S A CROWD UPDATE
    Multiple NPCs can exist per level.

    *NPCs*
    <!-- TODO: Multiple NPCs exist in a level -->
    <!-- TODO: Multiple NPCs have individual dialog -->


==> GET MOVING UPDATE
    NPCs can move around.

    *NPCs*
    <!-- TODO: NPCs can move  -->
    <!-- TODO: NPCs can move on a basic predetermined path -->


==> TAKE THIS UPDATE
    Player can give items to NPCs in order to trigger specific dialog

    <!-- TODO: Player can give NPC an item -->



=====RESOURCES============================================

Initially built following this tutorial: 
    https://www.youtube.com/watch?v=Lcdc2v-9PjA&amp;t=2599s&amp;ab_channel=ChrisCourses

What is canvas context?
    https://www.html5canvastutorials.com/tutorials/html5-canvas-element/#:~:text=The%20canvas%20element%20is%20the,can%20only%20have%20one%20context.

Javascript switch case:
    https://www.w3schools.com/js/js_switch.asp

Tiled map editor:
    https://www.mapeditor.org/


=====NOTES============================================
GETTING COLLISION DATA FROM TILED:
    1. open level file in Tiled
    2. go to Collisions layer
    3. open Properties
    4. toggle visibility
    5. export as levelX.js
    6. scroll to collisions data and copy/paste array into collisions.js

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