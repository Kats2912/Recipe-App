import React from 'react'
import { useState } from 'react'
import axios from 'axios';

const Recipies = () => {
  const [results, setResults] = useState([]);

  const app_id = 'fb27a3df';
  const app_key = '8486c576101c3d1b9811ecefb0a6332a';
  const handleSearch = async(item) => {
    const response = await axios.get(`https://api.edamam.com/search?q=${item}&app_id=${app_id}&app_key=${app_key}`);
    console.log(response);
  }
  return (
    <div >Recipies</div>
  )
}

export default Recipies