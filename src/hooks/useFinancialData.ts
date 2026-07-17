import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import {
  invoiceService,
  expenseService,
  reportService,
  cashFlowService,
} from '../services/api'

// Invoice hooks
export function useInvoices() {
  return useQuery({
    queryKey: ['invoices'],
    queryFn: () => invoiceService.getAll().then(res => res.data),
  })
}

export function useInvoice(id: number) {
  return useQuery({
    queryKey: ['invoice', id],
    queryFn: () => invoiceService.getById(id).then(res => res.data),
  })
}

export function useCreateInvoice() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: (data: any) => invoiceService.create(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['invoices'] })
    },
  })
}

export function useUpdateInvoiceStatus() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: ({ id, status }: { id: number; status: string }) =>
      invoiceService.updateStatus(id, status),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['invoices'] })
    },
  })
}

export function useDeleteInvoice() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: (id: number) => invoiceService.delete(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['invoices'] })
    },
  })
}

// Expense hooks
export function useExpenses() {
  return useQuery({
    queryKey: ['expenses'],
    queryFn: () => expenseService.getAll().then(res => res.data),
  })
}

export function useExpensesByCategory(category: string) {
  return useQuery({
    queryKey: ['expenses', category],
    queryFn: () => expenseService.getByCategory(category).then(res => res.data),
  })
}

export function useCreateExpense() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: (data: any) => expenseService.create(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['expenses'] })
      queryClient.invalidateQueries({ queryKey: ['reports'] })
    },
  })
}

export function useUpdateExpense() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: ({ id, data }: { id: number; data: any }) =>
      expenseService.update(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['expenses'] })
    },
  })
}

export function useDeleteExpense() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: (id: number) => expenseService.delete(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['expenses'] })
    },
  })
}

// Report hooks
export function useFinancialSummary(startDate?: string, endDate?: string) {
  return useQuery({
    queryKey: ['reports', 'summary', startDate, endDate],
    queryFn: () => reportService.getSummary(startDate, endDate).then(res => res.data),
  })
}

export function useExpensesByCategory() {
  return useQuery({
    queryKey: ['reports', 'expenses-by-category'],
    queryFn: () => reportService.getExpensesByCategory().then(res => res.data),
  })
}

export function useMonthlyData() {
  return useQuery({
    queryKey: ['reports', 'monthly'],
    queryFn: () => reportService.getMonthly().then(res => res.data),
  })
}

export function useTaxCompliance() {
  return useQuery({
    queryKey: ['reports', 'tax-compliance'],
    queryFn: () => reportService.getTaxCompliance().then(res => res.data),
  })
}

// Cash flow hooks
export function useCashBalance() {
  return useQuery({
    queryKey: ['cashflow', 'balance'],
    queryFn: () => cashFlowService.getBalance().then(res => res.data),
  })
}

export function useCashFlowForecast() {
  return useQuery({
    queryKey: ['cashflow', 'forecast'],
    queryFn: () => cashFlowService.generateForecast().then(res => res.data),
  })
}

export function useOverdueInvoices() {
  return useQuery({
    queryKey: ['cashflow', 'overdue'],
    queryFn: () => cashFlowService.getOverdue().then(res => res.data),
  })
}

export function useAIRecommendations() {
  return useQuery({
    queryKey: ['cashflow', 'recommendations'],
    queryFn: () => cashFlowService.getRecommendations().then(res => res.data),
  })
}
