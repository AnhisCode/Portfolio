import React, { useEffect } from "react";
import Sketch from "react-p5";
import p5Types from "p5";
import { Circle, Line } from "./BackgroundComponent";
import { useLocation } from "react-router-dom";

interface sketchComponent {
    height: number;
    width: number;
}

let circleCount = 0;
let lineCount = 0;

export const ConstellationBg = () => {
    // reset whenever entering
    useEffect(() => {
        reset();
    }, []);

    let height = document.body.scrollHeight; // obtain height
    const width = window.screen.width;
    let colour = 0;
    let circleLimit = 0;
    circleCount = circleLimit;
    let lineLimit = 0;
    let counter = 0;
    let circleArr: Circle[] = [];
    let lineArr: Line[] = [];

    // reset function for entering new page
    const reset = () => {
        circleArr.forEach((circle) => {
            circle.connectedPoints = [];
        });
        lineCount = 0;
        lineArr = [];
    };

    const setup = (p5: p5Types, canvasParentRef: Element) => {
        height = document.body.scrollHeight; // obtain height
        // but still have a minimum
        if (height < window.screen.height) {
            height = window.screen.height;
            circleLimit = width / 30;
        } else {
            circleLimit = width / 30 + height / 30; // calculate limit for appropriate objects
        }
        lineLimit = circleLimit / 2;
        circleCount = circleLimit;

        // put canvas behind everything else
        let canvas = p5.createCanvas(width, height).parent(canvasParentRef);
        canvas.style("z-index", "-1");
        canvas.position(0, 0);

        //initiate with 100 circle at random point on screen
        for (let i = 0; i < circleLimit; i++) {
            let randomY = Math.random() * height;
            let randomX = Math.random() * width;
            circleArr.push(new Circle(randomX, randomY, p5));
        }
    };

    const draw = (p5: p5Types) => {
        p5.background(colour);

        let randomX = Math.random() * width;

        //make sure it doesn't exceed a certain number
        if (counter % 5 == 0 && circleCount < circleLimit) {
            circleArr.push(new Circle(randomX, height + 10, p5));
            circleCount++;
        }

        // call draw on all objects and remove dead ones
        for (let i = 0; i < circleArr.length; i++) {
            circleArr[i].draw();
            if (!circleArr[i].alive) {
                circleArr.splice(i, 1);
                circleCount--;
            }
        }
        for (let i = 0; i < lineArr.length; i++) {
            lineArr[i].draw();
            if (!lineArr[i].alive) {
                lineArr.splice(i, 1);
                lineCount--;
            }
        }

        // check and create lines
        while (lineCount < lineLimit) {
            let randomI1 = Math.round(Math.random() * circleCount) - 1;
            while (circleArr[randomI1] == undefined) {
                randomI1 = Math.round(Math.random() * circleCount) - 1;
            }
            let circle1 = circleArr[randomI1];
            let randomI2 = Math.round(Math.random() * circleCount) - 1;
            //ensure they are not the same number or already connected
            while (
                randomI1 === randomI2 ||
                circle1.connectedPoints.includes(circleArr[randomI2]) ||
                circleArr[randomI2] == undefined
            ) {
                randomI2 = Math.round(Math.random() * circleCount) - 1;
            }
            let circle2 = circleArr[randomI2];

            // make sure the total connected point doesnt exceed 2
            if (
                circle1.connectedPoints.length > 3 ||
                circle2.connectedPoints.length > 3
            ) {
                continue;
            }

            circle1.addConnectedPoint(circle2);
            circle2.addConnectedPoint(circle1);
            lineArr.push(new Line(circle1, circle2, p5));
            lineCount++;
        }

        console.log(lineCount);

        counter++;

        // p5.line(100, 100, 200, 200);
        // p5.stroke("white");
        // p5.strokeWeight(2);
    };

    return (
        <>
            <Sketch setup={setup} draw={draw} />
        </>
    );
};
