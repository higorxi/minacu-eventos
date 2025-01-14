import { withMiddleware } from "../utils/middleware";
import { getAllEvents, createEvent } from "../utils/routes/events";


export default withMiddleware(async (req, res) => {
  switch (req.method) {
    case 'GET':
      return getAllEvents(req, res);
    case 'POST':
      return createEvent(req, res);
    default:
      res.status(405).json({ success: false, message: 'Método não permitido' });
  }
});
