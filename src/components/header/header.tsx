'use client'

import Link from 'next/link'
import React from 'react'

export default function Header() {

	return (
		<header className='flex flex-col '>
			<h1 className='flex justify-center'>Routing</h1>
			<p className='flex justify-center text-gray-300'>=================</p>
			<div className='flex justify-center'>
				<Link href='/' className='underline mr-1'>home</Link>
				<Link href='/writeups' className='underline ml-1'>writeups</Link>
			</div>
		</header>
	)
}
