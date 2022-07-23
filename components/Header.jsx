import React from 'react'
import Link from 'next/link'
import { Text } from 'react-native'

export default function Header({ name, title, date, url }) {
  return (
    <header>
      <div>
       
          <Text style={{ color: 'gold'}}>Hello react native web</Text>

        —{' '}
        <Link href="/1">
          <a>{title}fsf</a>
        </Link>
        
      </div>
      <time>{date}</time>
    </header>
  )
}
