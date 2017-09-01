const mongoose = require('mongoose');
const requireLogin = require('../moddielwares/requireLogin');
const requireCredits = require('../moddielwares/requireCredits');

const Survey = mongoose.model('surveys');

module.exports = app => {

    app.post('/api/surveys', requireLogin, requireCredits, (req, res) => {
        const { title, subject, body, recipients } = req.body;

        const survey = new Survey({
            title,
            subject,
            body,
            recipients: recipients.split(',').map(email => ({ email.trim() })),
            _user: req.user.id,
            dateSent: Date.now()
        });
    });
};