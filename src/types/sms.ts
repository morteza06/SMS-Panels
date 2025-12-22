// src/types/sms.ts
export type Tag = {
  id: string
  name: string
  color?: string // رنگ برچسب
}

export type Campaign = {
  id: string
  name: string
  tags?: Tag[]
  status: 'draft' | 'sent'
}

export type Message = {
  id: string
  to: string
  body: string
  tags?: Tag[]
  sentAt?: string
}
