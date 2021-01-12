import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router-dom'
import axios from 'axios'

function ItemDetail({ match }) {

	const [item, setItem] = useState({})
	const itemid = match.params.id

	useEffect(() => {
		axios.get(`https://fortnite-api.theapinetwork.com/item/get?id=${itemid}`)
			.then(res => {
				const data = res.data.data.item
				console.log(data)
				setItem(data)
			})
			.catch(err => console.log(err))
	}, [])


  return (
    <div className="App">
      <h1>{item.name}</h1>
      <p>{item.description}</p>

      {item.images 
      	? <img width="300px" height="300px" src={item.images.icon} alt="" />
      	: <span>Image Not Available</span>
      }
    </div>
  );
}

export default ItemDetail
