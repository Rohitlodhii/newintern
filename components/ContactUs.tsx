'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Mail,  MapPin } from 'lucide-react'
import { BorderBeam } from './ui/border-beam'

export default function ContactUs() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsSubmitting(true)
    setSubmitMessage('')

    // Simulating an API call
    await new Promise(resolve => setTimeout(resolve, 1000))

    setIsSubmitting(false)
    setSubmitMessage('Thank you for your message. We\'ll get back to you soon!')
  }

  return (
   
    <div className=" min-h-screen bg-background flex items-center justify-center p-4">
      <Card className="relative w-full max-w-4xl">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-center">Contact Us</CardTitle>
          <CardDescription className="text-center">We would love to hear from you. Send us a message and we will respond as soon as possible.</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-6 md:grid-cols-2">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Mail className="text-primary" />
              <span>aibytes.shop@gmail.com</span>
            </div>
           
            <div className="flex items-center space-x-2">
              <MapPin className="text-primary" />
              <span>Narshingpur , Madhya Pradesh 487001</span>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="Your name" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="Your email" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea id="message" placeholder="Your message" required />
            </div>
            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </Button>
            {submitMessage && (
              <p className="text-sm text-green-600 mt-2">{submitMessage}</p>
            )}
          </form>
        </CardContent>
        <CardFooter className="text-sm text-center text-muted-foreground">
          We respect your privacy and will never share your information.
        </CardFooter>
      <BorderBeam/>
      </Card>
    </div>
    
  )
}