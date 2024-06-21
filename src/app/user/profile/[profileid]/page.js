"use client"
import { useParams } from 'next/navigation'
import React from 'react'

const page = () => {
  const para = useParams()
  return (
    <div>
        <h1>{para.profileid}</h1>
    </div>
  )
}

export default page