import { Publish } from '@material-ui/icons'
import { Link } from 'react-router-dom'
import { productData } from '../../../model/DummyData'
import Chart from '../../chart/Chart'
import './product.css'

export default function Product() {
  return (
    <div className='product'>
        <div className="productTitleContainer">
            <h1 className="productTitle">Product</h1>
            <Link to={"/newproduct"}>
                <button className="productAddButton">Create</button>
            </Link>
        </div>
        <div className="productTop">
            <div className="productTopLeft">
                <Chart data = {productData} dataKey={"Sales"} title={"Sales Performance"}/>
            </div>
            <div className="productTopRight">
                <div className="productInfoTop">
                    <img src="/sensei.png" alt="product img" className="productInfoImg" />
                    <span className="productName">Apple Aipods</span>
                </div>
                <div className="productInfoBottom">
                    <div className="productInfoItem">
                        <span className="productInfoKey">id:</span>
                        <span className="productInfoValue">123</span>
                    </div>
                    <div className="productInfoItem">
                        <span className="productInfoKey">sales:</span>
                        <span className="productInfoValue">543</span>
                    </div>
                    <div className="productInfoItem">
                        <span className="productInfoKey">active:</span>
                        <span className="productInfoValue">yes</span>
                    </div>
                    <div className="productInfoItem">
                        <span className="productInfoKey">in stock:</span>
                        <span className="productInfoValue">no</span>
                    </div>
                </div>
            </div>
        </div>
        <div className="productBottom">
            <form className="productForm">
                <div className="productFormLeft">
                    <label htmlFor="productname">Product Name</label>
                    <input type="text" placeholder='product name' />
                    <label htmlFor="instock">In stock</label>
                    <select name="instock" id="instock">
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                    <label htmlFor="instock">Action</label>
                    <select name="action" id="action">
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                </div>
                <div className="productFormRight">
                    <div className="productUpload">
                        <img src="/sensei.png" alt="product upload img" className="productUploadImg" />
                        <label htmlFor="file"><Publish/></label>
                        <input type="file" id="file" style={{display:'none'}} />
                    </div>
                    <button className="productButton">Update</button>
                </div>
            </form>
        </div>
    </div>
  )
}
