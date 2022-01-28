import React from "react";
import Sketch from "react-p5";
import p5Types from "p5";

// circle class for putting points into canvas
class Circle {
    x: number;
    y: number;
    opacity: number;
    counter: number;
    alive: boolean;
    p5: p5Types;
    xDirection: number;
    yDirection: number;

    constructor(x: number, y: number, p5: p5Types) {
        this.x = x;
        this.y = y;
        this.counter = 0;
        this.alive = true;
        this.p5 = p5;
        this.opacity = Math.random() * 255;
        this.xDirection = Math.random() * (0.1 - -0.1) + -0.1;
        this.yDirection = Math.random() * (0.3 - 0.15) + 0.15;
    }

    setDead() {
        this.alive = false;
        circleCount--;
    }

    draw() {
        if (this.alive) {
            let p5 = this.p5;
            p5.ellipse(this.x, this.y, 10);
            p5.fill(255, 255, 255, this.opacity);
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

let circleCount = 0;

export const YourComponent = () => {
    let height = 0;
    const width = window.screen.width;
    let colour = 0;
    let circleLimit = 0;
    circleCount = circleLimit;
    let counter = 0;
    let arr: Circle[] = [];

    const setup = (p5: p5Types, canvasParentRef: Element) => {
        height = document.body.scrollHeight; // obtain height
        // but still have a minimum
        if (height < window.screen.height) {
            height = window.screen.height;
            circleLimit = width / 30;
        } else {
            circleLimit = width / 30 + height / 50; // calculate limit for appropriate objects
        }
        circleCount = circleLimit;

        // put canvas behind everything else
        let canvas = p5.createCanvas(width, height).parent(canvasParentRef);
        canvas.style("z-index", "-1");
        canvas.position(0, 0);

        //initiate with 100 circle at random point on screen
        for (let i = 0; i < circleLimit; i++) {
            let randomY = Math.random() * height;
            let randomX = Math.random() * width;
            arr.push(new Circle(randomX, randomY, p5));
        }
    };

    const draw = (p5: p5Types) => {
        p5.background(colour);

        let randomX = Math.random() * width;

        //make sure it doesn't exceed a certain number
        if (counter % 5 == 0 && circleCount < circleLimit) {
            arr.push(new Circle(randomX, height + 10, p5));
            circleCount++;
        }

        // call draw on all circle objects
        for (let i = 0; i < arr.length; i++) {
            arr[i].draw();
        }

        counter++;
    };

    return (
        <>
            <Sketch setup={setup} draw={draw} />
        </>
    );
};
