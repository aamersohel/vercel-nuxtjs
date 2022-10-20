import express from "express";
import Pusher from "pusher";

const pusher = new Pusher({
  appId: process.env.PUSHER_APP_ID,
  key: process.env.PUSHER_KEY,
  secret: process.env.PUSHER_SECRET,
  cluster: process.env.PUSHER_CLUSTER,
  useTLS: true,
});

const app = express();
app.use(express.json());

app.post("/switch", (req, res) => {
  const deviceName = req.body.name;
  const value = req.body.value;
  pusher.trigger("my-channel", "my-event", {
    name: deviceName,
    value: value,
  });
  res.json({
    message: "Success",
  });
});

export default app;
