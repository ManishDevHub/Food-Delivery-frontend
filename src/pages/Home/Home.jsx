import React, { useState } from 'react'
import '../Home/Home.css'
import Header from '../../components/Header/Header'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'
export default function Home() {
const [category , SetCategory] = useState("All")

  return (
    <div>
<Header/>
<ExploreMenu category={category} SetCategori={SetCategory} />
    </div>
  )
}
