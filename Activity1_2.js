const express = require('express');
const app = express();
app.use(express.json());

// Endpoint to get a list of all flights
app.get('/flights', (req, res) => {
   
    const flights = [
        { id: 1, flightNumber: 'ABC123', destination: 'New York', departureTime: '2023-11-12T10:00:00' },
        { id: 2, flightNumber: 'XYZ789', destination: 'Paris', departureTime: '2023-11-13T08:30:00' }
        
    ];
    res.json(flights);
});

// Endpoint to get details of a specific flight by ID
app.get('/flights/:id', (req, res) => {
    const flightId = req.params.id; 
    const flight = {
        id: flightId,
        flightNumber: 'ABC123',
        destination: 'New York',
        departureTime: '2023-11-12T10:00:00'
        
    };
    res.json(flight);
});


const port = 3000;
app.listen(port, () => {
    console.log(`Flight management app listening at http://localhost:${port}`);
});
