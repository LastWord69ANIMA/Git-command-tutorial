'use client' // Error components must be Client Components
 
import { useEffect } from 'react'
import Link from 'next/link'
 
export default function Error({
  error,
  reset,
}: {
  error: Error
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])
 
  return (
    <div>
      <h2>Something went wrong!</h2>
        <h3>please enter from scratch if you back to loginpage</h3>
        <Link href="./welcom_site"></Link>
    </div>
  )
}