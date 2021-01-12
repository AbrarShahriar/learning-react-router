import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router-dom'

function Shop() {
	useEffect(() => {
		fetchItems()
	}, [])

	const [items, setItems] = useState([])

	const fetchItems = async () => {
		const data = await fetch('https://fortnite-api.theapinetwork.com/upcoming/get')

		const items = await data.json()
		setItems(items.data)
	}
  return (
    <div className="App">
      <h1>Shop Page</h1>
      {
      	items.map(item => (
      	    
      		<p key={item.itemId}>
      			<Link to={`shop/${item.itemId}`}>{item.item.name}</Link>
      		</p>
			
      	))
      }
    </div>
  );
}

export default Shop;
