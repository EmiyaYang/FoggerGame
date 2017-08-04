# Effective JavaScript: Frogger


## To Start 
​	Open the index.html in the chorme browser(others may not be compatible, choose the leading character's figure and toll-gate and then click the submit button or click the submit button directly with default values to start the game.
![readme_img (1)](images/readme_img (1).png)

## In the game
​	On the canvas a 5 * 6 griding map shows on. 

​	Each toll-gate consists of 5 basic element.

* Leading role: The element controld by player with arrow keys.

* Hearts: They show the life num of leading role. s

* Enemies:  Runing from left to right. Collision between they and leading role leads to the reduction of hearts.

* Transmission gate: The access to winning and **a key is required**.

* Key:  Player has to pick up this element, only with which enables player to pass the transmission gate.

* Gems: Collect these elements to win score.  


![readme_img (2)](images/readme_img (2).png)

## To restart

​	Once leading role with 0 life num has collisided with an enemy or reach the transmission gate with the token key, the game comes to an end.  Follow the instrucion on the canvas and restart a new game.

![readme_img (3)](images/readme_img (3).png)

## Known bugs

* Some times the enemies don't follow their setted coordinate but run forward in a column. What's the worse, the bug also happens when I switch back from other webpages though it worked right at the beginning.
  * ​					![readme_img (4)](images/readme_img (4).png) 
* 'SPACE' works all the time...XD

