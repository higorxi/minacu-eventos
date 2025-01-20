import { withMiddleware } from "../../utils/middleware";
import { createTicket, getAllTicketsForCompany } from "../../utils/routes/admin/ticket";

export default withMiddleware(async (req, res) => {
  switch (req.method) {
    case 'GET':
      return getAllTicketsForCompany(req, res);
    case 'POST':
      return createTicket(req, res);
    default:
      res.status(405).json({ success: false, message: 'Método não permitido' });
  }
});
