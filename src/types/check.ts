export interface CheckData {
  // Account holder information
  accountName: string
  accountAddress: string
  accountCity: string
  accountState: string
  accountZip: string
  
  // Check fields
  date: string
  payTo: string
  amount: string
  amountWords: string
  memo: string
  signature: string
} 