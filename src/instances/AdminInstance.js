import axios from 'axios';

const AUTH_TOKEN = localStorage.getItem('admin-token');
const AdminAxiosinstance = axios.create({
    
    baseURL: 'http://localhost:5000/api',
    timeout: 1000,
    headers: {'x-access-token': AUTH_TOKEN}
  });
export default AdminAxiosinstance;