//const express = require('express');
import express from 'express';
const router = express.Router();
import fetch from 'node-fetch';

router.get('/:platform/:gamertag', async (req, res) => {
   try {
       const headers = {
           'TRN-Api-Key' : process.env.TRACKER_API_KEY
       }

       const { platform, gamertag } = req.params

       const response = await fetch(`${process.env.TRACKER_API_URL}/profile/${platform}/
       ${gamertag}`, {
           headers
       })

       const data = await response.json()

       if(data.errors && data.errors.length > 0) {
           return res.status(404).json({
               message: 'Profile not Found'
           })
       }

       res.json(data)
      } catch (err) {
        console.error(err)
        res.status(500).json({
            message: 'Server Error'
        })

   }
})

// module.exports = router;
export default router