import { withMiddleware } from "../utils/middleware";
import { getEventById } from "../utils/routes/public/events";



export default withMiddleware(async (req, res) => {
  switch (req.method) {
    case 'GET':
      return getEventById(req, res);
    default:
      res.status(405).json({ success: false, message: 'Método não permitido' });
  }
});
