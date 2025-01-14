import { withMiddleware } from "../utils/middleware";
import { getEventById, updateEventById, deleteEventById } from "../utils/routes/events";


export default withMiddleware(async (req, res) => {
  switch (req.method) {
    case 'GET':
      return getEventById(req, res);
    case 'PUT':
      return updateEventById(req, res);
    case 'DELETE':
      return deleteEventById(req, res);
    default:
      res.status(405).json({ success: false, message: 'Método não permitido' });
  }
});
