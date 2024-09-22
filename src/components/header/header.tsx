'use client'

import Link from 'next/link'
import React from 'react'

export default function Header() {

	return (
		<header className='flex flex-col '>
			<h1 className='flex justify-center items-center text-center'>𝕬 𝖍𝖆𝖈𝖐𝖊𝖗 𝖎𝖘 𝖓𝖔𝖙 𝖆 𝖈𝖗𝖎𝖒𝖎𝖓𝖆𝖑. 𝕳𝖆𝖈𝖐𝖎𝖓𝖌 𝖎𝖘 𝖋𝖔𝖗 𝖆𝖗𝖙. 𝕿𝖍𝖊 𝖒𝖊𝖆𝖓𝖎𝖓𝖌 𝖎𝖘 𝖋𝖗𝖊𝖊𝖉𝖔𝖒.</h1>
			<p className='flex justify-center text-gray-300'>=================</p>
			<div className='flex justify-center'>
				<Link href='/' className='underline mr-1'>𝖍𝖔𝖒𝖊</Link>
				<Link href='/writeups' className='underline ml-1'>𝖜𝖗𝖎𝖙𝖊𝖚𝖕𝖘</Link>
			</div>
		</header>
	)
}
