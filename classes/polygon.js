class Polygon {
    constructor(...args) {
        this.points = new Array();
        if (args[0] instanceof Array) {
            for (let element of args[0]) {
                if (element instanceof Point) {
                    this.points.push(element);
                }
            }
        }
        else if (args[0] instanceof Point) {
            for (let element of args) {
                if (element instanceof Point) {
                    this.points.push(element);
                }
            }
        }
        else throw new TypeError('Wrong type of arguments in Polygon constructor.');
        if (this.points.length < 3) { throw new Error('Not enough valid arguments in Polygon constructor - it needs at least three of them.'); }

        this.points = sortPoints(this.points);

        //this.rotation = W RADIANACH; <- na poczatku to bedzie 0 radianow;

        //this.center = SRODEK CIEZKOSCI(?) FIGURY
    }

    translate(vector) {
        for (let point of this.points) {
            point.translate(vector);
        }
    }

    get perimeter() {
        let per = 0;
        for (i = 0; i < this.points.length-1; i++) {
            per += distance(this.points[i], this.points[i+1]);
        }
        per += distance(this.points[this.points.length-1], this.points[0]);
        return per;
    }

    get field() {
        //Georg Alexander Pick
        //Pick’s Theorem
    }
}

function sortPoints(points) {
    points = points.splice(0);
    var p0 = {};
    p0.y = Math.min.apply(null, points.map(p=>p.y));
    p0.x = Math.max.apply(null, points.filter(p=>p.y == p0.y).map(p=>p.x));
    points.sort((a,b)=>angleCompare(p0, a, b));
    return points;
};

function angleCompare(p0, a, b) {
    var left = isLeft(p0, a, b);
    if (left == 0) return distCompare(p0, a, b);
    return left;
}

function isLeft(p0, a, b) {
    return (a.x-p0.x)*(b.y-p0.y) - (b.x-p0.x)*(a.y-p0.y);
}

function distCompare(p0, a, b) {
    var distA = (p0.x-a.x)*(p0.x-a.x) + (p0.y-a.y)*(p0.y-a.y);
    var distB = (p0.x-b.x)*(p0.x-b.x) + (p0.y-b.y)*(p0.y-b.y);
    return distA - distB;
}