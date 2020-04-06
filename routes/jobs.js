const express = require('express');
const models = require('../models');
const path = require('path');
const router = express.Router();
const ytdl = require('ytdl-core');
const { createVideoQueue } = require('../queue/video');

router.post('/new', async (req, res) => {
  const url = req.body.url;
  try {
    const isValidUrl = ytdl.validateURL(url);
    if (!isValidUrl) {
      res.status(400);
      return res.send({ error: 'invalid URL' });
    }
    const job = await models.Job.create({
      url,
      status: 'started'
    })
    await createVideoQueue().add({ url, id: job.id });
    return res.send(job);
  }catch (ex) {
    console.log(ex);
    res.status(400);
    return res.send({ error: ex });
  }
});

router.get('/file/:fileName', (req, res) => {
  const fileName = req.params.fileName;
  const file = path.resolve(__dirname, `../files/${fileName}`);
  res.download(file);
})

module.exports = router;