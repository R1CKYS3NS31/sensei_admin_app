import { ArrowDownward, ArrowUpward } from '@material-ui/icons'
import './featuredInfo.css'

export default function FeaturedInfo() {
  return (
    <div className="featured">
        <div className="featuredItem">
            <span className="featuredTitle">
                Revenue
            </span>
            <div className="featuredMoneyContainer">
                <span className="featuredMoney">$2,415</span>
                <span className="featuredMoneyRate">
                    -11.5 <ArrowDownward/>
                </span>
            </div>
            <span className="featuredSub"> Compared to last month</span>
        </div>
        <div className="featuredItem">
            <span className="featuredTitle">
                Sales
            </span>
            <div className="featuredMoneyContainer">
                <span className="featuredMoney">$4,415</span>
                <span className="featuredMoneyRate">
                    -1.5 <ArrowDownward/>
                </span>
            </div>
            <span className="featuredSub"> Compared to last month</span>
        </div>
        <div className="featuredItem">
            <span className="featuredTitle">
                Revenue
            </span>
            <div className="featuredMoneyContainer">
                <span className="featuredMoney">$2,415</span>
                <span className="featuredMoneyRate">
                    +1.7 <ArrowUpward/>
                </span>
            </div>
            <span className="featuredSub"> Compared to last month</span>
        </div>
    </div>
  )
}
