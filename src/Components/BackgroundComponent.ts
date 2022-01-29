// line class for putting lines onto canvas
import p5Types from "p5";

export class Line {
    pointRef1: Circle;
    pointRef2: Circle;
    p5: p5Types;
    alive: boolean;

    constructor(point1: Circle, point2: Circle, p5: p5Types) {
        this.pointRef1 = point1;
        this.pointRef2 = point2;
        this.p5 = p5;
        this.alive = true;
    }

    draw() {
        // value undefined
        if (this.pointRef1 === undefined || this.pointRef2 === undefined) {
            this.handleDeath();
            return;
        }
        if (!this.pointRef1.alive || !this.pointRef2.alive) {
            this.handleDeath();
            return;
        }

        let p5 = this.p5;
        let x1 = this.pointRef1.x;
        let x2 = this.pointRef2.x;
        let y1 = this.pointRef1.y;
        let y2 = this.pointRef2.y;

        if (this.alive) {
            //check line too long or too short
            let xComponents = (x1 - x2) * (x1 - x2);
            let yComponents = (y1 - y2) * (y1 - y2);
            let distance = Math.sqrt(xComponents + yComponents);
            if (distance > 200 || distance < 100) {
                this.handleDeath();
                return;
            }

            // both circle points are standing
            p5.line(x1, y1, x2, y2);
            p5.strokeWeight(3);
            p5.stroke("rgba(100%,100%,100%,0.7)");

            this.pointRef2.opacity = 255;
            this.pointRef1.opacity = 255;
        }
    }

    handleDeath() {
        this.alive = false;
        this.pointRef1.removeConnectedPoint(this.pointRef2);
        this.pointRef2.removeConnectedPoint(this.pointRef1);
    }
}

export class Circle {
    x: number;
    y: number;
    opacity: number;
    counter: number;
    alive: boolean;
    p5: p5Types;
    xDirection: number;
    yDirection: number;
    connectedPoints: Circle[];

    constructor(x: number, y: number, p5: p5Types) {
        this.x = x;
        this.y = y;
        this.counter = 0;
        this.alive = true;
        this.p5 = p5;
        this.opacity = Math.random() * 255;
        this.xDirection = Math.random() * (0.1 - -0.1) + -0.1;
        this.yDirection = Math.random() * (0.3 - 0.15) + 0.15;
        this.connectedPoints = [];
    }

    setDead() {
        this.alive = false;
    }

    addConnectedPoint(point: Circle) {
        this.connectedPoints.push(point);
    }

    removeConnectedPoint(point: Circle) {
        let index = this.connectedPoints.indexOf(point);
        this.connectedPoints.splice(index, 1);
    }

    draw() {
        if (this.alive) {
            let p5 = this.p5;
            p5.ellipse(this.x, this.y, 10);
            p5.fill(255, 255, 255, this.opacity);
            p5.strokeWeight(1);
            p5.stroke("black");
            this.x += this.xDirection;
            this.y -= this.yDirection;
            // offscreen
            if (this.y < 0) {
                this.setDead();
            }
            if (this.counter == 500) {
                this.setDead();
            }
        }
    }
}
