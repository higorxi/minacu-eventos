import { withMiddleware } from "../../utils/middleware";
import { deleteUserAccount, getUserConfig, updateUserConfig } from "../../utils/routes/admin/config";


export default withMiddleware(async (req, res) => {
  switch (req.method) {
    case 'GET':
      return getUserConfig(req, res);
    case 'PUT':
      return updateUserConfig(req, res);
    case 'DELETE':
      return deleteUserAccount(req, res);
    default:
      res.status(405).json({ success: false, message: 'Método não permitido' });
  }
});
