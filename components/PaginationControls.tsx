// PaginationControls.tsx
'use client'

import { FC } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'

interface PaginationControlsProps {
  hasNextPage: boolean
  hasPrevPage: boolean
  childId: string
  length: number
}

const PaginationControls: FC<PaginationControlsProps> = (
  {
    hasNextPage,
    hasPrevPage,
    childId,
    length,
  }
) => {
  const router = useRouter()
  const searchParams = useSearchParams()

  const page = searchParams.get('page') ?? '1'
  const per_page = searchParams.get('per_page') ?? '1'

  return (
    <div className='flex gap-2 justify-center items-center'>
      <button
        className='bg-blue-500 text-white py-1 px-3 rounded-sm'
        disabled={!hasPrevPage}
        onClick={() => {
          router.push(`/sponsoranychild?page=${Number(page) - 1}&per_page=${per_page}`)
        }}>
        Prev Child
      </button>

      <div>
        {page} / {Math.ceil(length / Number(per_page))}
      </div>

      <button
        className='bg-blue-500 text-white py-1 px-3 rounded-sm'
        disabled={!hasNextPage}
        onClick={() => {
          router.push(`/sponsoranychild?page=${Number(page) + 1}&per_page=${per_page}`)
        }}>
        Next Child
      </button>
    </div>
  )
}

export default PaginationControls