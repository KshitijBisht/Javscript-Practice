class Vector{
    constructor(x,y){
        this.x = x;
        this.y = y;
    }

    plus(vector) {
        return new Vector(this.x + vector.x, this.y + vector.y);
      };
      
      minus(vector) {
        return new Vector(this.x - vector.x, this.y - vector.y);
      };

    get length(){
		return (Math.sqrt(Math.pow(this.x,2 ) + Math.pow(this.y,2)));
    }
}

console.log(new Vector(1, 2).plus(new Vector(2, 3)));