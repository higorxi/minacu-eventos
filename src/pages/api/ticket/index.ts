import { withMiddleware } from "../utils/middleware";
import { getAllTickets, createTicket } from "../utils/routes/ticket";



export default withMiddleware(async (req, res) => {
  switch (req.method) {
    case 'GET':
      return getAllTickets(req, res);
    case 'POST':
      return createTicket(req, res);
    default:
      res.status(405).json({ success: false, message: 'Método não permitido' });
  }
});
