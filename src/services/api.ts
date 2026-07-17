import axios, { AxiosInstance } from 'axios'

const API_URL = (import.meta.env as any).VITE_API_URL || 'http://localhost:3000'

const api: AxiosInstance = axios.create({
  baseURL: `${API_URL}/api`,
  withCredentials: true,
})

// Auth Services
export const authService = {
  register: (email: string, password: string, businessName: string) =>
    api.post('/auth/register', { email, password, businessName }),
  
  login: (email: string, password: string) =>
    api.post('/auth/login', { email, password }),
  
  logout: () =>
    api.post('/auth/logout'),
  
  getCurrentUser: () =>
    api.get('/auth/me'),
}

// Invoice Services
export const invoiceService = {
  getAll: () =>
    api.get('/invoices'),
  
  getById: (id: number) =>
    api.get(`/invoices/${id}`),
  
  create: (data: any) =>
    api.post('/invoices', data),
  
  updateStatus: (id: number, status: string) =>
    api.patch(`/invoices/${id}/status`, { status }),
  
  delete: (id: number) =>
    api.delete(`/invoices/${id}`),
}

// Expense Services
export const expenseService = {
  getAll: () =>
    api.get('/expenses'),
  
  getByCategory: (category: string) =>
    api.get(`/expenses/category/${category}`),
  
  create: (data: any) =>
    api.post('/expenses', data),
  
  update: (id: number, data: any) =>
    api.patch(`/expenses/${id}`, data),
  
  delete: (id: number) =>
    api.delete(`/expenses/${id}`),
}

// Report Services
export const reportService = {
  getSummary: (startDate?: string, endDate?: string) =>
    api.get('/reports/summary', { params: { startDate, endDate } }),
  
  getExpensesByCategory: () =>
    api.get('/reports/expenses-by-category'),
  
  getMonthly: () =>
    api.get('/reports/monthly'),
  
  getTaxCompliance: () =>
    api.get('/reports/tax-compliance'),
  
  calculateTaxCompliance: (month: string) =>
    api.post('/reports/tax-compliance', { month }),
}

// Cash Flow Services
export const cashFlowService = {
  getBalance: () =>
    api.get('/cashflow/balance'),
  
  generateForecast: () =>
    api.post('/cashflow/forecast'),
  
  getOverdue: () =>
    api.get('/cashflow/overdue'),
  
  getRecommendations: () =>
    api.get('/cashflow/recommendations'),
}

// Error handler
api.interceptors.response.use(
  response => response,
  error => {
    if (error.response?.status === 401) {
      // Redirect to login on unauthorized
      window.location.href = '/login'
    }
    return Promise.reject(error)
  }
)

export default api
