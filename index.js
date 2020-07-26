class Polygon{
    constructor(sides){
        this.sides = sides
    }

    //Use the get keyword to make a getter method countSides that counts the number of sides (each index in the array).
    get countSides(){
        return this.sides.length
    }

    //Use the get keyword to make a getter method perimeter that calculates the sum of each side (each index in the array) of the polygon. This method will become accessible to its child classes.
    get perimeter(){
        return this.sides.reduce( (side, perimeterCalculated) => side + perimeterCalculated)
    }
} 

//Define a Triangle class that inherits from Polygon.

class Triangle extends Polygon{

    get isValid(){
        return ((this.countSides == 3) && (this.sides[0] + this.sides[1] > this.sides[2]) && (this.sides[1] + this.sides[2] > this.sides[0]) && (this.sides[0] + this.sides[2] > this.sides[1]))
    }
}

class Square extends Polygon{
    
    get isValid(){
        return ((this.countSides == 4) && (this.sides[0] == this.sides[1]) && (this.sides[1] == this.sides[2]) && (this.sides[2] == this.sides[3]) )
    }

    get area(){
        return(this.sides[0] * this.sides[1])
    }
}
/*
Use the get keyword to make a getter method isValid that checks if the given 4 sides for a square is valid.*
 A square is valid when the lengths of all sides are equal.
Use the get keyword to make a getter method area that calculates the area of the square.
*/