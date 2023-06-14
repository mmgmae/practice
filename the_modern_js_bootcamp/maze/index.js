// matter.js terminology
    // world - object that contains all of the different 'things' in our matter app
    // engine - reads in the current state of the world, then calculates changes in position of all shapes
    // runner - gets the engine and the world to work together, runs 60 times per second
    // render - whenever the engine processes an update, render will take a look at all the different shapes and show them on the screen
    // body - any shape that we are displaying

const {Engine, Render, Runner, World, Bodies} = Matter;

const engine = Engine.create();
const {world} = engine;
const render = Render.create({
    element: document.body,
    engine: engine,
    options: {
        width: 800,
        height: 600
    }
});

Render.run(render);
Runner.run(Runner.create(), engine);

const shape = Bodies.rectangle(200, 200, 50, 50, {
    isStatic: true
})
World.add(world, shape)