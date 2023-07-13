const Flight = require('../models/flight');

module.exports = {
    new: newFlight,
    create,
    index,
    show
};

function newFlight(req, res) {
    res.render('flights/new', { errorMsg: '' });
}

async function create(req, res) {
    req.body.addFlights = !!req.body.addFlights;
    // req.body.addFlights = req.body.addFlights.trim();
    // if (req.body.addFlights) req.body.addFlights = req.body.addFlights.split(/\s*,\s*/);
    try {
        await Flight.create(req.body);
        res.redirect('/flights');
    } catch (err) {
        console.log(err);
        res.render('flights/new', { errorMsg: err.message });
    }
}

async function index(req, res) {
    try {
        const flights = await Flight.find({})
        res.render('flights/index', {
            flights
        })
    } catch (err) {
        console.log(err);
        res.render('/')
    }
}

async function show(req, res) {
    try {
        const flight = await Flight.findById(req.params.id);

        res.render('flights/show', { title: 'Flight Details', flight });
    } catch (err) {
        console.log(err);

        res.redirect('/flights');
    }
}

async function newTicket(req, res) {
    const tickets = await Flight.find({}).sort('price')
    res.render('tickets/new', { title: 'Flight', flight })
}

async function create(req, res) {
    const flight = await Flight.findById) req.params.id);
    req.render('tickets/new', (title; 'flight', flight));
    req.body.flight = flight._id
}