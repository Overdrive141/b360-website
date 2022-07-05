/**
 * @PORTS
 *
 * ACCOUNT MANAGEMENT - 3001
 * MASTERDATA - 3002
 * ERP - 3003
 * TRANSACTION - 3004
 * ORDER MS - 3005
 */
// API Domain - HTTPS Encrypted
const API_DOMAIN_URL = "https://api.sublo.co";

// Production
const ACCOUNT_MANAGEMENT_URL = `${API_DOMAIN_URL}/accountmanagement`;
const MASTERDATA_URL = `${API_DOMAIN_URL}/masterdata`;
const NOTIFICATION_URL = `${API_DOMAIN_URL}/orders`; // For SSE Order Notifications
// ADD REAL NOTIFication API

// Development
//const ACCOUNT_MANAGEMENT_URL = "http://localhost:3001";
//const MASTERDATA_URL = "http://localhost:3002";
// const NOTIFICATION_URL = "http://localhost:3007";

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
  notifications: `${NOTIFICATION_URL}/${BASE_API_ROUTE}/notification`,
};
