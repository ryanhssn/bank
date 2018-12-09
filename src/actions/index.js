import axios from "axios";

const BASE_URL = "https://api.techm.co.in/api";
export const FETCH_IFSC = "FETCH_IFSC";
export const FETCH_BRANCH = "FETCH_BRANCH";

export function getBankByIFSC(ifsc) {
  const url = `${BASE_URL}/v1/ifsc/${ifsc}`;
  const request = axios.get(url);

  return {
    type: FETCH_IFSC,
    payload: request
  };
}

export function getBankByBranch(bank = "", branch = "") {
  const url = `${BASE_URL}/bank/search/likeBranchName`;
  const request = axios.post(url, {
    bankName: bank,
    branchName: branch
  });

  return {
    type: FETCH_BRANCH,
    payload: request
  };
}


