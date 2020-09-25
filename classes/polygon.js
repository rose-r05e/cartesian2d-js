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

        //this.points.sort(funkcja_sortujaca());

        //this.rotation = W RADIANACH; <- na poczatku to bedzie 0 radianow;

        //this.center = SRODEK CIEZKOSCI(?) FIGURY
    }

    //translate() {for(){}}

}

//funkcja_sortujaca(){}