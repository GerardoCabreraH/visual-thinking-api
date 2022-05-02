const api = require("./../lib/routes/api");

const start = (port) => {
    try {
        api.listen(port, () => {
            console.log(`Visual Thinking API in localhost:${port}`);
        });
    } catch (err) {
        console.error(err);
    }
};

module.exports = start;
