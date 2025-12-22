
'use client'
import { useState } from 'react'
import Button from '../ui/‌Button'
import { Tag } from '@/types/sms'

type Props = {
  onAddTag: (tag: Tag) => void
}

export default function TagForm({ onAddTag }: Props) {
  const [name, setName] = useState('')
  const [color, setColor] = useState('#ff0000')

  const handleAdd = () => {
    if (!name) return
    onAddTag({ id: Date.now().toString(), name, color })
    setName('')
  }

  return (
    <div className="flex gap-2 items-center">
      <input type="text" placeholder="Tag name" value={name} onChange={e => setName(e.target.value)} className="border p-1"/>
      <input type="color" value={color} onChange={e => setColor(e.target.value)} className="w-10 h-10 p-0 border-0"/>
      <Button onClick={handleAdd}>Add Tag</Button>
    </div>
  )
}
