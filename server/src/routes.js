module.exports = function(app) {
    app.get('/teste', (req, res) => {
        return res.send('ola');
    });
}