import React from 'react'

async function ProdcutDetail({params}:{params: Promise<{productId:string}>}) {
    const productId = (await params).productId;

    return (
    <h1>Prodcut {productId} Detail</h1>
  )
}
export default ProdcutDetail