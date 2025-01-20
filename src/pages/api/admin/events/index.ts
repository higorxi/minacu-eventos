import { withMiddleware } from "../../utils/middleware";
import { createEvent, getEventsByCompany } from "../../utils/routes/admin/events";


export default withMiddleware(async (req, res) => {
  switch (req.method) {
    case 'POST':
      return createEvent(req, res);
    case 'GET':
      return getEventsByCompany(req, res);
    default:
      res.status(405).json({ success: false, message: 'Método não permitido' });
  }
});
