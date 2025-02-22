import React, { useState } from 'react'
import './Add.css'
import { assets } from '../../assets/assets'
import axios from 'axios'
import { toast } from 'react-toastify'
const Add = ({url}) => {

  // const url = "http://localhost:4000";
  const [image,setImage] = useState(false)
  const [data,setData] = useState({
    name:"",
    description:"",
    price:"",
    category:"salad"
  })

  const onChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData(data=>({...data,[name]:value}))
  }

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("name",data.name)
    formData.append("description",data.description)
    formData.append("price",Number(data.price))
    formData.append("category",data.category)
    formData.append("image",image)
    const response = await axios.post(`${url}/api/food/add`,formData);
    if(response.data.success){
      setData({
        name:"",
        description:"",
        price:"",
        category:"salad"
      })
      setImage(false)
      toast.success(response.data.message)
    }
    else{
      toast.error(response.data.message)
    }
  }
  return (
    <div className='add'>
      <form className='flex-col' onSubmit={onSubmit}>
        <div className='add_image_upload flex-col'>
          <p>Upload Image</p>
          <label htmlFor='image'>
            <img src={image?URL.createObjectURL(image):assets.upload_area} alt=''/>
          </label>
          <input onChange={(e)=>setImage(e.target.files[0])} type='file' id='image' hidden required />
        </div>
        <div className='add_product_name flex-col'>
          <p>Product Name</p>
          <input onChange={onChange} value={data.name} type='text' name='name' placeholder='type'/>
        </div>
        <div className='add_product_desc'>
          <p>Product Description</p>
          <textarea onChange={onChange} value={data.description} name='description' rows="6" placeholder='write content here'  required></textarea>
        </div>
        <div className='add_category_price'>
          <div className='add_category flex-col'>
            <p>Product Category</p>
            <select onChange={onChange} name='category'>
              <option value="Salad">Salad</option>
              <option value="Rolls">Rolls</option>
              <option value="Desert">Desert</option>
              <option value="Sandwich">Sandwich</option>
              <option value="Cake">Cake</option>
              <option value="Pure Veg">Pure Veg</option>
              <option value="Pasta">Pasta</option>
              <option value="Noodles">Noodles</option>
            </select>
          </div>
          <div className='add_price flex-col'>
            <p>Product Price</p>
            <input onChange={onChange} value={data.price} type='number' name='price' placeholder='$20'/>
          </div>
        </div>
        <button type='submit' className='add-btn'>ADD</button>
      </form>
    </div>
  )
}

export default Add
