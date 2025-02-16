import React from 'react'

async function Review({params} : {params : Promise<{productId: string; reviewId : string;}>}) {

    const pId = (await params).productId;
    const rId = (await params).reviewId;
    
  return (
    <div>Product {pId} with  reviewId {rId}</div>
  )
}

export default Review