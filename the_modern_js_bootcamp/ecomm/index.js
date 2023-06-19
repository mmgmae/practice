const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('hi there! Thanks for the request!');
});

app.listen(3000, () => {
    console.log('listening...')
});

// Start project: > npm run dev
// Stop process: > CTRL + C