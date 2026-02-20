import React, { useContext } from 'react'
import './AgroDisplay.css'
import { StoreContext } from '../../context/StoreContext'
import AgroItem from '../AgroItem/AgroItem'
const AgroDisplay = ({category}) => {

    const { agro_list } = useContext(StoreContext)

    return (
        <div className='agro-display' id='agro-display'>
            <h2>Top Farming Products Near you</h2>
            <div className="agro-display-list">
                {agro_list.map((item, index) => {
                    if (category === "All" || category === item.category) {
                        return <AgroItem key={index} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image} />
                    }
                })}
            </div>
        </div>
    )
}

export default AgroDisplay
