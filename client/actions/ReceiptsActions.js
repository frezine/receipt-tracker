import axios from "axios";

export function makeReceiptRequest(receiptData) {
  return dispatch => {
    return axios.post("/api/receipts", receiptData);
  }
}
