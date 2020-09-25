class Point {
    /**
    * A point is defined as a pair of X and Y coordinates.
    * Each operational method can accept either a Vector object or X and Y coordinates.
    *
    * @param {x} x
    * @param {y} y
    */
    constructor(x,y) {
        this._x = x;
        this._y = y;
    }
  
    set x(newX) {
        this._x = newX;
    }
    get x() {
        return this._x;
    }
  
    set y(newY) {
        this._y = newY;
    }
    get y() {
        return this._y;
    }
  
    /**
    * translates a point
    * point.translate(vector) or point.translate(x,y)
    * @param {(number|Object)} arg1 - x or Vector object.
    * @param {(number|undefined)} arg2 - y or blank.
    */
    translate(arg1,arg2) {
        if(arg1 instanceof Vector && typeof arg2 === 'undefined') {
            this._x += arg1.x;
            this._y += arg1.y;
        }
        else if (typeof arg1 === 'number' && typeof arg1 === 'number') {
            this._x += arg1;
            this._y += arg2;
        }
        else throw new TypeError('Wrong type of arguments in point.translate().');
    }
}

/**
 * returns a distance between two points
 * @param {Object} point1 - Point
 * @param {Object} point2 - Point
 */
function distance(point1, point2) {
    if(point1 instanceof Point && point2 instanceof Point) {
        let a = Math.abs(point1.x - point2.x);
        let b = Math.abs(point1.y - point2.y);
        return Math.sqrt(a*a + b*b);
    }
    else throw new TypeError('Wrong type of arguments in distance().');
}