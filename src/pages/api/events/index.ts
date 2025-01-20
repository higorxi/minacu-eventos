import { withMiddleware } from "../utils/middleware";
import { getFeaturedEvents, getAllEvents } from "../utils/routes/public/events";


export default withMiddleware(async (req, res) => {
  switch (req.method) {
    case 'GET':
      if (req.query.featured === 'true') {
        return getFeaturedEvents(req, res);
      } else {
        return getAllEvents(req, res);
      }
    default:
      res.status(405).json({ success: false, message: 'Método não permitido' });
  }
});
