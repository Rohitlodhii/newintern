/* eslint-disable react-hooks/rules-of-hooks */
"use client"
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { internData } from '@/data/intern'
import { useRouter } from 'next/navigation'

import React, { useState } from 'react'

const page = () => {
  const [internid , setinternid] = useState("");
  const [notfound , setNotFound] = useState(false);

  const router = useRouter()
  const handleSubmit = () => {
    const id = parseInt(internid, 10);
    const candidateExists = internData.some((intern) => intern.id === id);

    if (candidateExists) {
      router.push(`/internship/${id}`);
    } else {
      setNotFound(true);
    }
  }
  return (
    <div className='h-[100vh] flex items-center justify-center'>
        <Card>
          <CardHeader>Search Intern ID</CardHeader>
          <CardContent>
            <div className='flex flex-col gap-2'>
            <div>
              <Input type='number' placeholder='Intern Id.' value={internid} onChange={(e)=>setinternid(e.target.value)} />
            </div>
            <div>
              <Button onClick={handleSubmit} className='w-full'>Search</Button>
            </div>
            </div>
          </CardContent>
          <CardFooter>
            {notfound ? <div className='bg-red-500 rounded-sm px-2 py-1 w-full text-center'> Intern Not Registered</div> : "" }
              
          </CardFooter>
        </Card>
    </div>
  )
}

export default page
