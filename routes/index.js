const express = require('express');
const Model = require('../model/index');

const router = express.Router();

 router.post('/movie', async (req, res) => {
    var data = new Model({
        tittle: req.body.tittle,
        year: req.body.year,
        actor: req.body.actor
    })

    try {

        var dataSave = await data.save();
        res.status(201).json(dataSave);
        
    } catch (error) {
        res.status(400).json({message: error.message})
    }

 })

 router.get('/movies', async (req, res) => {
    try {

        var data = await Model.find();
        res.status(201).json(data);
        
    } catch (error) {
        res.status(500).json({message: error.message})
    }
 })

 router.get('/movie/:id', async (req, res) => {
    try {

        var data = await Model.findById(req.params.id);
        res.status(201).json(data);
        
    } catch (error) {
        res.status(500).json({message: error.message})
    }
 })

 router.put('/movie/:id', async (req, res) => {
    try {

        var result = await Model.findByIdAndUpdate(req.params.id, 
            req.body, {new: true}
            );
        res.status(201).json(result);
        
    } catch (error) {
        res.status(500).json({message: error.message})
    }
 })

 router.delete('/movie/:id', async (req, res) => {
    try {

        var result = await Model.findByIdAndDelete(req.params.id
            );
        res.send("Data sucessfully deleted")
        
    } catch (error) {
        res.status(500).json({message: error.message})
    }
 })
 
module.exports = router;