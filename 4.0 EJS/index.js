import express, { request, response } from 'express';

const app = express();
const port = 3000;

app.get("/", (request, response) => {
    const today = new Date();
    const day = today.getDay();

    let typeDay = "weekday";
    let activity = "work hard!"

    if (day === 0 || day === 6) {
        typeDay = "weekend";
        activity = "have fun!"
    }

    response.render("index.ejs", {
        typeDay: typeDay,
        activity: activity,
    });
});

app.listen(port, () => {
    console.log(`Listening to port ${port}`);
});