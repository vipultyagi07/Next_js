import { Card } from '@/app/component/card'
import Link from 'next/link';
import React from 'react'


function notify() {
  return (
    <Card>
      <div className="relative w-full">
        <div className="text-lg font-semibold">Notification</div>

        {/* Archive Button in Right Side */}
        <Link href="/dashboard/archived">
          <button className="absolute bottom-2 right-2 px-3 py-1 text-sm bg-blue-500 text-white rounded-md hover:bg-blue-600 transition">
            Archived
          </button>
        </Link>
      </div>
    </Card>
  )
}

export default notify