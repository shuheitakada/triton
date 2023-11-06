import Link from 'next/link'

export default function Home() {
  return (
    <main className='p-24'>
      <ul>
        <li>
          <Link href='/map' className='text-blue-600 hover:underline'>
            MAP
          </Link>
        </li>
        <li>Something</li>
        <li>Something</li>
      </ul>
    </main>
  )
}
