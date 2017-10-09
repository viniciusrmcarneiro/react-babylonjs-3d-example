const { hhh, createRender } = require('react-babylonjs-3d');
/** @jsx hhh */

const BABYLON = require('babylonjs');

const Scenario = require('./scenario');

// ******************************************************//
// 1st COMPONENT - very simple
// ******************************************************//
// getting the canvas element where to render the scene
const canvas1 = document.querySelector('.component.vtree1');

// create the react-babylonjs-3d renderer
// and takes care all the BABYLON stuff(engine, scene, runRenderLoop).
// it makes our live easier
const renderer1 = createRender({ BABYLON, canvas: canvas1 });

// the component to render
renderer1.render(<Scenario y={5} z={-16} />);

// ******************************************************//
// P.S.: now click on the canvas on the left and 
// move it around
// ******************************************************//

// ******************************************************//
// ******************************************************//


setTimeout(function() {}, 2000);


// ******************************************************//
// 2nd COMPONENT - let's put some moviment
// ******************************************************//
{
    const renderer2 = createRender({
        BABYLON,
        canvas: document.querySelector('.component.vtree2'),
    });
    let z = 0;
    // 1. every 5ms we are rerender the component
    // 2. as react-babylonjs-3d uses a virtual tree, it actually just updates the changed values.
    // 3. so, you can call renderer2.render as many time as you need, or even better whenever the state changes
    const interval = setInterval(() => {
        renderer2.render(<Scenario y={5} z={z} />);
        z = z - 0.01;
        if (z < -16) {
            clearInterval(interval);
        }
    }, 5);
}
// ******************************************************//
// ******************************************************//
