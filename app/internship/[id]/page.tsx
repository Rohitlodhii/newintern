// /app/internship/[id]/page.tsx
"use client"

import { FC } from 'react';
import Link from 'next/link';

import { internData } from '@/data/intern';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar, Download, Tag } from 'lucide-react';
import { Button } from '@/components/ui/button';

import BlurFade from '@/components/ui/blur-fade';
import { useParams } from 'next/navigation';





const InternshipDetail: FC = () => {
  const params = useParams();
  const { id } = params; // Accessing the ID from params

  // Find the internship by ID
  const internship = internData.find((intern) => intern.id.toString() === id);

  if (!internship) {
    return <p>Internship not found.</p>;
  }

  return (
      <div className='  overflow-hidden flex h-[100vh] items-center justify-center'>
        <BlurFade delay={0.5}>

      

      <Card className="w-full z-10 max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">Web Development Intern</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center space-x-2">
          <span className="font-semibold">Intern:</span>
          <span>{internship.name}</span>
        </div>
        <div className="flex items-center space-x-2">
          <Calendar className="h-4 w-4" />
          <span className="font-semibold">Duration:</span>
          <span>{internship.startDate} - {internship.endDate}</span>
        </div>
        <div className="flex items-center space-x-2">
          <Tag className="h-4 w-4" />
          <span className="font-semibold">Category:</span>
          <span>{internship.category}</span>
        </div>
        <div className="flex items-center space-x-2">
          
          <span>{internship.regards}</span>
        </div>
      </CardContent>
      <CardFooter>
      <Link href={internship.link} passHref>
        <Button className="w-full" >
          <Download className="mr-2 h-4 w-4" /> Download Certificate
        </Button>
        </Link>
      </CardFooter>
    </Card>
    </BlurFade>
    

    </div>
  );
};

export default InternshipDetail;
