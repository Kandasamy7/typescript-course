//human readable name
enum Direction {
    up,
    down,
    left,
    right
}
function move(direction){
    console.log(`moving ${Direction[direction].toLowerCase()}`);
    
}
move(Direction.left)