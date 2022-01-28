import React from "react";
import Sketch from "react-p5";
import p5Types from "p5";
import { randomInt } from "crypto";
import { setPosition } from "react-responsive-carousel/lib/ts/components/Carousel/utils";
import { screen } from "@testing-library/react"; //Import this for typechecking and intellisense

interface ComponentProps {
    //Your component props
}

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

const height = 1000;
const width = window.innerWidth;
let colour = 0;
let circleLimit = 200;
let circleCount = circleLimit;
let counter = 0;
let arr: Circle[] = [];

export const YourComponent: React.FC<ComponentProps> = (
    props: ComponentProps,
) => {
    const setup = (p5: p5Types, canvasParentRef: Element) => {
        // put canvas behind everything else
        let canvas = p5.createCanvas(width, height).parent(canvasParentRef);
        canvas.style("z-index", "-1");
        canvas.position(0, 0);

        //initiate with 100 circle at random point on screen
        for (let i = 0; i < circleLimit; i++) {
            let randomY = Math.random() * height + 200;
            let randomX = Math.random() * width;
            arr.push(new Circle(randomX, randomY, p5));
        }
    };

    const draw = (p5: p5Types) => {
        p5.background(colour);

        let randomX = Math.random() * width;

        //make sure it doesn't exceed a certain number
        if (counter % 5 == 0 && circleCount < circleLimit) {
            arr.push(new Circle(randomX, height + 200, p5));
            circleCount++;
        }

        // call draw on all circle objects
        for (let i = 0; i < arr.length; i++) {
            arr[i].draw();
            if (!arr[i].alive) {
                circleCount--;
            }
        }

        counter++;
    };

    const keyPressed = () => {
        if (colour == 100) {
            colour = 0;
        } else {
            colour = 100;
        }
    };

    return (
        <>
            <div className={"text-5xl text-white"}>Hello World</div>
            <Sketch setup={setup} draw={draw} keyPressed={keyPressed} />
        </>
    );
};
