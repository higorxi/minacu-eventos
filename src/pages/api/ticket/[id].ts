import { withMiddleware } from "../utils/middleware";
import { getTicketById, updateTicketById, deleteTicketById } from "../utils/routes/ticket";


export default withMiddleware(async (req, res) => {
  switch (req.method) {
    case 'GET':
      return getTicketById(req, res);
    case 'PUT':
      return updateTicketById(req, res);
    case 'DELETE':
      return deleteTicketById(req, res);
    default:
      res.status(405).json({ success: false, message: 'Método não permitido' });
  }
});
