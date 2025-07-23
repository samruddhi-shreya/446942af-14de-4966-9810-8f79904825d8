import axios from 'axios';

const API_BASE_URL = 'http://localhost:4000/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Auth API
export const authAPI = {
  register: (userData: { username: string; email: string; password: string; contact?: string }) =>
    api.post('/register', userData),
  
  login: (credentials: { email: string; password: string }) =>
    api.post('/login', credentials),
};

// User API  
export const userAPI = {
  getAllUsers: () => api.get('/getusers'),
  getUserByEmail: (email: string) => api.get(`/getuserbyemail/${email}`),
  updateUser: (id: string, userData: { username?: string; email?: string; contact?: string }) =>
    api.put(`/updateuser/${id}`, userData),
  deleteUser: (id: string) => api.delete(`/deleteuser/${id}`),
};

// Product API
export const productAPI = {
  createProduct: (userId: string, productData: {
    productname: string;
    price: number;
    category: string;
    description: string;
    image: string;
    stock_available: number;
  }) => api.post(`/product/${userId}`, productData),
  
  getAllProducts: () => api.get('/product'),
  getProductById: (id: string) => api.get(`/product/${id}`),
  updateProduct: (id: string, productData: any) => api.put(`/product/${id}`, productData),
  deleteProduct: (id: string) => api.delete(`/product/${id}`),
};

// Cart API
export const cartAPI = {
  addToCart: (userId: string, productId: string, quantity: number = 1) =>
    api.post(`/addtocart/${userId}/${productId}/${quantity}`),
  
  getUserCart: (userId: string) => api.get(`/getcartsofuser/${userId}`),
  updateCartItem: (cartId: string, quantity: number) => api.put(`/updatecart/${cartId}/${quantity}`),
  removeFromCart: (cartId: string) => api.delete(`/deletecart/${cartId}`),
};

// Order API
export const orderAPI = {
  createOrder: (orderData: {
    userid: string;
    productid?: string;
    quantity?: number;
    paymentmode: string;
    shippingaddress: string;
    status: string;
  }) => api.post('/orders', orderData),
  
  getAllOrders: () => api.get('/orders'),
  getUserOrders: (userId: string) => api.get(`/orders/${userId}`),
  updateOrderStatus: (id: string, orderData: { status: string; deliverydate?: string }) =>
    api.put(`/orders/${id}`, orderData),
};

export default api;