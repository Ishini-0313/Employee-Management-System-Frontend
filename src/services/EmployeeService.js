import axios from "axios";

const REST_API_BASE_URL = "http://localhost:8080/api/employees";

export const listEmployees = () => axios.get(REST_API_BASE_URL);

export const createEmployee = (employee) => axios.post(REST_API_BASE_URL, employee);

export const getEmployee = (emp_id) => axios.get(REST_API_BASE_URL + '/' + emp_id);

export const updateEmployee = (emp_id, employee) => axios.put(REST_API_BASE_URL + '/' + emp_id , employee);

export const deleteEmployee = (emp_id) => axios.delete(REST_API_BASE_URL + '/' + emp_id);

