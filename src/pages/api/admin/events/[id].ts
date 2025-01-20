import { withMiddleware } from "../../utils/middleware";
import { deleteEventById, updateEventById } from "../../utils/routes/admin/events";

export default withMiddleware(async (req, res) => {
  switch (req.method) {
    case 'PATCH':
      return updateEventById(req, res);
    case 'DELETE':
      return deleteEventById(req, res);
    default:
      res.status(405).json({ success: false, message: 'Método não permitido' });
  }
});
