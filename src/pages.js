module.exports = {

    index(req, res) {
        const city = req.query.city
        return res.render('index',{city})
    },
    
    orphanates(req, res) {
        return res.render('orphanates')
    },

    orphanage(req, res) {
        return res.render('orphanage')
    },

    createOrphanage(req, res) {
        return res.render('create-orphanage')
    }
}