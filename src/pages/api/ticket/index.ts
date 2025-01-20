import { withMiddleware } from "../utils/middleware";
import { getAllTicketsForUser } from "../utils/routes/public/ticket";

export default withMiddleware(async (req, res) => {
  switch (req.method) {
    case 'GET':
      return getAllTicketsForUser(req, res);
    default:
      res.status(405).json({ success: false, message: 'Método não permitido' });
  }
});
