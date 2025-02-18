import React from 'react'
import Link from 'next/link'

function ProductPage() {
  return (
    <div>
    <h1>Product List</h1>
    <h1> <Link href={"/products/1"}>Product  1</Link></h1>
    <h1> <Link href={"/products/2"}>Product  2</Link></h1>
    <h1> <Link href={"/products/3"}>Product  3</Link></h1>
    </div>

  )
}

export default ProductPage