import React from 'react'
import BlogContainer from '../Components/BlogContainer'

type Props = {}

export const metadata={
  title:"Saurav Pant | Blog "
}

const page = (props: Props) => {
  return (
    <div>
      <BlogContainer/>
    </div>
  )
}

export default page