import React from "react";
import { useClient } from 'next/client';
import dynamic from 'next/dynamic';

const DynamicContactComponent = dynamic(() => import('../app/contact/page'), {
  ssr: false,
});

export default function ContactPage() {
  useClient(); 

  return (
    <div p-5 m-5 border border-black rounded-md bg-emerald-500>
      <h1>Contact Page</h1>
      <DynamicContactComponent />
    </div>
  );
}