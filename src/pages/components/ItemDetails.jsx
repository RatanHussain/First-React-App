import React from 'react'
import Headers from '../../common/Headers'
import Footer from '../../common/Footer'
import { useLocation } from 'react-router-dom'
import { rowItem } from '../data/ItemsData'

export default function ItemDetails() {

  let location = useLocation()
  let path = location.pathname.split('/')[2]
  let finalDetails = rowItem.filter((value, index) => value.id === parseInt(path))[0]

  console.log(finalDetails)

  return (
    <div>
      <Headers/>

          <div className="ItemFrame">
        <p>User Id : <small>{ finalDetails.userId}</small></p>
              <p>Id : <small>{ finalDetails.id}</small></p>
              <p>Title : <small>{ finalDetails.title}</small></p>
              <p>Body : <small>{ finalDetails.body}</small></p>
      </div>




      <Footer/>
    </div>
  )
}
