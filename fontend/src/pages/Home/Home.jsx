import React, { useState } from 'react'
import '../Home/Home.css'
import Header from '../../components/Header/Header'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay'
import AppDownload from '../../components/AppDownload/AppDownload'
export default function Home() {
const [category , SetCategory] = useState("All")

  return (
    <div>
<Header/>
<ExploreMenu category={category} SetCategori={SetCategory} />
<FoodDisplay category={category}/>

<AppDownload />
    </div>
  )
}
