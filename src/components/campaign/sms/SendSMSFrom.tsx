// src/components/sms/SendSMSForm.tsx
'use client'
import { useState } from 'react';
import Button from '@/components/ui/‌Button';

export default function SendSMSForm() {
  const [message, setMessage] = useState('')
  const [to, setTo] = useState('')

  const handleSend = async () => {
    const res = await fetch('/api/sms/send', {
      method: 'POST',
      body: JSON.stringify({ to, message }),
      headers: { 'Content-Type': 'application/json' }
    })
    alert(res.ok ? 'Sent' : 'Error')
  }

  return (
    <div className="space-y-2">
      <input type="text" placeholder="Phone" value={to} onChange={e => setTo(e.target.value)} className="border p-2 w-full"/>
      <textarea placeholder="Message" value={message} onChange={e => setMessage(e.target.value)} className="border p-2 w-full"/>
      <Button onClick={handleSend}>Send</Button>
    </div>
  )
}
