// server.js (Backend - Node.js & Express)
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const puppeteer = require("puppeteer");
const cron = require("node-cron");
const Event = require("./models/Event");

const app = express();
app.use(express.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/eventsDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Scraping function (fetches events from an event website)
async function scrapeEvents() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto("https://www.eventbrite.com.au/d/australia--sydney/events/");

  const events = await page.evaluate(() => {
    return Array.from(document.querySelectorAll(".eds-event-card-content"))
      .map(event => {
        return {
          title: event.querySelector(".eds-event-card__formatted-name").innerText,
          date: event.querySelector(".eds-text-bs").innerText,
          link: event.querySelector("a.eds-event-card-content__action-link").href,
        };
      });
  });

  await browser.close();
  
  await Event.deleteMany({}); // Clear old data
  await Event.insertMany(events); // Save new data
}

// Schedule scraping every 24 hours
cron.schedule("0 0 * * *", () => {
  console.log("Running scraper...");
  scrapeEvents();
});

// API endpoint to get events
app.get('/api/events', async (req, res) => {
    try {
      const events = await Event.find(); // Fetch events from MongoDB
      res.json(events);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch events' });
    }
  });

app.listen(5000, () => console.log("Server running on port 5000"));

