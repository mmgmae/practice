// matter.js terminology
    // world - object that contains all of the different 'things' in our matter app
    // engine - reads in the current state of the world, then calculates changes in position of all shapes
    // runner - gets the engine and the world to work together, runs 60 times per second
    // render - whenever the engine processes an update, render will take a look at all the different shapes and show them on the screen
    // body - any shape that we are displaying

const {Engine, Render, Runner, World, Bodies, Body, Events} = Matter;

const cellsHotizontal = 6;
const cellsVertical = 4;
const width = window.innerWidth;
const height = window.innerHeight;

const unitLengthX = width / cellsHotizontal;
const unitLengthY = height / cellsVertical;

const engine = Engine.create();
engine.world.gravity.y = 0;
const {world} = engine;
const render = Render.create({
    element: document.body,
    engine: engine,
    options: {
        wireframes: false,
        width,
        height
    }
});

Render.run(render);
Runner.run(Runner.create(), engine);

// WALLS
const walls = [
    Bodies.rectangle(width / 2, 0, width, 2, {isStatic: true}),
    Bodies.rectangle(width / 2, height, width, 2, {isStatic: true}),
    Bodies.rectangle(0, height / 2, 2, height, {isStatic: true}),
    Bodies.rectangle(width, height / 2, 2, height, {isStatic: true})
];

World.add(world, walls);

// MAZE GENERATION

const shuffle = (arr) => {
    let counter = arr.length;

    while (counter > 0) {
        const index = Math.floor(Math.random() * counter);
        counter --;
        const temp = arr[counter];
        arr[counter] = arr[index];
        arr[index] = temp;
    }

    return arr;
}

const grid = Array(cellsVertical)
    .fill(null)
    .map(() => Array(cellsHotizontal).fill(false));

const verticals = Array(cellsVertical)
    .fill(null)
    .map(() => Array(cellsHotizontal - 1).fill(false))

const horizontals = Array(cellsVertical - 1)
    .fill(null)
    .map(() => Array(cellsHotizontal).fill(false))

const startRow = Math.floor(Math.random() * cellsVertical);
const startColumn = Math.floor(Math.random() * cellsHotizontal);

const stepThroughCell = (row, column) => {
    // If i have visited the cell ar [row, column], then return
    if (grid[row][column]) {
        return;
    } 

    // Mark this cell as being visited
    grid[row][column] = true;
    
    // Assemble randomly-ordered list of neihgbors
    const neighbors = shuffle( [
        [row - 1, column, 'up'],
        [row, column + 1, 'right'],
        [row + 1, column, 'down'],
        [row, column - 1, 'left']
    ]);
    // For each neighbor...
    for (let neighbor of neighbors) {
        const [nextRow, nextColumn, direction] = neighbor;

        // see if that neighbor is out of bounds
        if (nextRow < 0 || nextRow >= cellsVertical || nextColumn < 0 || nextColumn >= cellsHotizontal) {
            continue;
        } 
        // if we have visited that neighbor, continue to next neighbor
        if (grid[nextRow][nextColumn]) {
            continue;
        }
        //remove a wall from either horizontals or veritcals
        if (direction === 'left') {
            verticals[row][column - 1] = true;
        } else if (direction === 'right') {
            verticals[row][column] = true;
        } else if (direction === 'up') {
            horizontals[row - 1][column] = true;
        } else if (direction === 'down') {
            horizontals[row][column] = true;
        }

        stepThroughCell(nextRow, nextColumn);
    }
};

 stepThroughCell(startRow, startColumn)

horizontals.forEach((row, rowIndex) => {
    row.forEach((open, columnIndex) => {
        if (open) {
            return;
        }

        const wall = Bodies.rectangle(
            columnIndex * unitLengthX + unitLengthX / 2,
            rowIndex * unitLengthY + unitLengthY,
            unitLengthX,
            5,
            {
                label: 'wall',
                isStatic: true,
                render: {
                    fillStyle: 'red'
                }
            }
        );
        World.add(world, wall);
    });
});

verticals.forEach((row, rowIndex) => {
    row.forEach((open, columnIndex) => {
        if (open) {
            return;
        }

        const wall = Bodies.rectangle(
            columnIndex * unitLengthX + unitLengthX,
            rowIndex * unitLengthY + unitLengthY / 2,
            5,
            unitLengthY,
            {
                label: 'wall',
                isStatic: true,
                render: {
                    fillStyle: 'red'
                }
            }
        );
        World.add(world, wall);
    })
})

// GOAL

const goal = Bodies.rectangle(
    width - unitLengthX / 2,
    height - unitLengthY / 2,
    unitLengthX * .7,
    unitLengthY * .7,
    {
        isStatic: true,
        label: 'goal',
        render: {
            fillStyle: 'green'
        }
    }
);
World.add(world, goal);


// BALL

const ballRadius = Math.min(unitLengthX, unitLengthY) / 4;
const ball = Bodies.circle(
    unitLengthX / 2,
    unitLengthY / 2,
    ballRadius,
    {
        label: 'ball',
        render: {
            fillStyle: 'blue'
        }
    }
)
World.add(world, ball);

// MOVEMENTS

document.addEventListener('keydown', event => {
    const {x, y} = ball.velocity;

    if (event.key === 'ArrowUp') {
        Body.setVelocity(ball, {x, y: y - 5});
    }
    if (event.key === 'ArrowRight') {
        Body.setVelocity(ball, {x: x + 5, y});
    }
    if (event.key === 'ArrowDown') {
        Body.setVelocity(ball, {x, y: y + 5});
    }
    if (event.key === 'ArrowLeft') {
        Body.setVelocity(ball, {x: x - 5, y});
    }
})

//  WIN 

Events.on(engine, 'collisionStart', event => {
    event.pairs.forEach((collision) => {
        const labels = ['ball', 'goal'];
        if (
            labels.includes(collision.bodyA.label) && 
            labels.includes(collision.bodyB.label)
        ) {
            document.querySelector('.winner').classList.remove('hidden');
            world.gravity.y = 1;
            world.bodies.forEach(body => {
                if (body.label === 'wall') {
                    Body.setStatic(body, false);
                }
            })
        }
    })
});
