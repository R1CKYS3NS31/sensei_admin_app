import React from 'react'
import Chart from '../../chart/Chart'
import FeaturedInfo from '../../featuredInfo/FeaturedInfo'

export default function Home() {
  return (
    <div className="home">
        <FeaturedInfo />
        <Chart/>
    </div>
  )
}
