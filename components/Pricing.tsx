import { Badge } from "@/components/ui/badge"

import { Card, CardContent,  CardHeader, CardTitle } from "@/components/ui/card"
import { MarqueeDemo } from "./Review"
import ContactUs from "./ContactUs"
import BlurFade from "./ui/blur-fade"


export default function PricingSection() {
  const pricingOptions = [
    {
      title: "Chatbot",
      price: 5,
      perks: ["24/7 Customer Support", "AI-powered Responses", "Multi-language Support", "Analytics Dashboard"],
    },
    {
      title: "Automation",
      price: 25,
      perks: ["Workflow Automation", "Task Scheduling", "Integration with 100+ Apps", "Custom Triggers"],
    },
    {
      title: "Customize",
      price: 50,
      perks: ["Dedicated Account Manager", "Custom AI Model Training", "API Access", "White-labeling Options"],
    },
  ]

  return (
    <>
    <BlurFade delay={0.5} inView>
    <section className="py-16 px-4 md:px-8 lg:px-16 ">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Pricing</h2>
        <p className="text-xl text-center text-muted-foreground mb-12">Mail us on aibytes.shop@gmail.com</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pricingOptions.map((option, index) => (
           
            <Card key={index} className="flex flex-col">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-center">{option.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-4xl font-bold text-center mb-6">${option.price}<span className="text-xl font-normal text-muted-foreground">/mo</span></p>
                <ul className="space-y-2 flex items-center justify-center flex-col md:justify-start md:items-start">
                  {option.perks.map((perk, perkIndex) => (
                    <li key={perkIndex} className="flex items-center">
                      <Badge variant="secondary" className="mr-2">✓</Badge>
                      {perk}
                    </li>
                  ))}
                </ul>
              </CardContent>
             
            </Card>
           
          ))}
        </div>
      </div>

        

    </section>
    </BlurFade>
      
      <BlurFade delay={0.5} inView>
      <div>
        <ContactUs/>
      </div>
      </BlurFade>

      </>
  )
}
