const express = require('express');
const router = express.Router();
const path = require('path');

// Rotta per la pagina principale
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});

// Rotta per la pagina di login
router.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'login', 'login.html'));
});

// Rotta per la pagina di login
router.get('/signin', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'login', 'signin', 'signin.html'));
});


// Rotta per la pagina journey
router.get('/journey', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'viaggio', 'viaggio.html'));
});

// Rotta per la pagina daily challenge
router.get('/daily_challenge', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'daily_challenge', 'sfida_giornaliera.html'));
});

// Rotta per la pagina duel
router.get('/duel', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'duello', 'duello.html'));
});

// Rotta per la pagina creator
router.get('/creator', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'creatore', 'creatore.html'));
});

// Rotta per la pagina italia
router.get('/journey/italy', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'viaggio', 'italia', 'italy.html'));
});

// Rotta per la pagina stati uniti 
router.get('/journey/usa', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'viaggio', 'usa', 'usa.html'));
});

// Rotta per la pagina islanda
router.get('/journey/iceland', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'viaggio', 'islanda', 'iceland.html'));
});

// Rotta per la pagina giappone
router.get('/journey/japan', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'viaggio', 'giappone', 'japan.html'));
});

// Rotta per la pagina canada
router.get('/journey/canada', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'viaggio', 'canada', 'canada.html'));
});

// Rotta per la pagina argentina
router.get('/journey/argentina', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'viaggio', 'argentina', 'argentina.html'));
});

// Rotta per la pagina australia 
router.get('/journey/australia', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'viaggio', 'australia', 'australia.html'));
});

// Rotta per la pagina francia
router.get('/journey/france', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'viaggio', 'francia', 'france.html'));
});

// Rotta per la pagina italia
router.get('/journey/italy/level1', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'viaggio', 'italia', 'level1.html'));
});

module.exports = router;