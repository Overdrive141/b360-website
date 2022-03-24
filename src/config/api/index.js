/**
 * @PORTS
 *
 * ACCOUNT MANAGEMENT - 3001
 * MASTERDATA - 3002
 * ERP - 3003
 * TRANSACTION - 3004
 * ORDER MS - 3005
 */

// Production
const ACCOUNT_MANAGEMENT_URL = "http://34.204.222.31:3001";
const MASTERDATA_URL = "http://34.204.222.31:3002";
const ERP_URL = "http://34.204.222.31:3003";
const TRANSACTION_URL = "http://34.204.222.31:3004";
const ORDER_URL = "http://34.204.222.31:3005";
const PROCUREMENT_URL = "http://34.204.222.31:3006";
const NOTIFICATION_URL = "http://34.204.222.31:3005";

// Development
// const ACCOUNT_MANAGEMENT_URL = "http://localhost:3001";
//  const MASTERDATA_URL = "http://localhost:3002";
// const ERP_URL = "http://localhost:3003";
// const TRANSACTION_URL = "http://localhost:3004";
// const ORDER_URL = "http://localhost:3005";
//const PROCUREMENT_URL = "http://localhost:3006";
// const NOTIFICATION_URL = "http://localhost:3005";

const BASE_API_ROUTE = "v1";

export const API_URL = {
  // Account Management MS
  auth: `${ACCOUNT_MANAGEMENT_URL}/${BASE_API_ROUTE}/auth`,
  getUser: `${ACCOUNT_MANAGEMENT_URL}/${BASE_API_ROUTE}/users`,
  customers: `${ACCOUNT_MANAGEMENT_URL}/${BASE_API_ROUTE}/customers`,
  account: `${ACCOUNT_MANAGEMENT_URL}/${BASE_API_ROUTE}/users`,
  // MasterData MS
  business: `${MASTERDATA_URL}/${BASE_API_ROUTE}/business`,
  imageUpload: `${MASTERDATA_URL}/${BASE_API_ROUTE}/utility/images/upload`,

  // Notification MS // RN its inside order MS
  notifications: `${NOTIFICATION_URL}/${BASE_API_ROUTE}/notifications`,
};
