import React from 'react'
import { notFound } from 'next/navigation';

async function Review({params} : {params : Promise<{productId: string; reviewId : string;}>}) {

    const pId = (await params).productId;
    const rId = (await params).reviewId;
    if (parseInt(rId) > 100) {
        notFound(); // Redirects to the 404 page
    }
    
  return (
    <div>Product {pId} with  reviewId {rId}</div>
  )
}

export default Review