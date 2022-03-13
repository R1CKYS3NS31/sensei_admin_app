import React from 'react'
import { userData } from '../../../model/DummyData'
import Chart from '../../chart/Chart'
import FeaturedInfo from '../../featuredInfo/FeaturedInfo'
import WidgetLg from '../../widgetLg/WidgetLg'
import WidgetSM from '../../widgetSm/WidgetSM'
import  './home.css'

export default function Home() {
  return (
    <div className="home">
        <FeaturedInfo />
        <Chart data ={userData} dataKey={"Active User"} title={"User Analytics"} grid/>
        <div className="homeWidget">
          <WidgetSM />
          <WidgetLg />
        </div>
    </div>
  )
}
