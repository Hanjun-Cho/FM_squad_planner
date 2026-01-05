- When shrinking window with button, the PlayerInformationSubContainer doesnt 
set its own height to the pitchContainer 
rescaling the window after shrinking fixes positioning

- When rescaling window, the elements within the PlayerInformationSubContainer
(when the there's only 1 column) stretches to meet the edge of the screen
when theres < 2 widths - this is probably an auto-fill issue
