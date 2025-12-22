import Link from 'next/link'

export default function Sidebar() {
  return (
    <aside className="w-64 bg-gray-100 p-4">
      <ul className="space-y-2">
        <li><Link href="/dashboard/campaigns">کمپین </Link></li>
        <li><Link href="/dashboard/messages">پیام ها</Link></li>
        <li><Link href="/dashboard/contacts">مخاطبین</Link></li>
        <li><Link href="/dashboard/reports">گزارش ها</Link></li>
      </ul>
    </aside>
  )
}
