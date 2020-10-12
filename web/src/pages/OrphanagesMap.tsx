import React from 'react'

import { FiPlus } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import { Map, TileLayer } from 'react-leaflet'

import 'leaflet/dist/leaflet.css'

import '../styles/pages/orphanages-map.css'
import logo from '../images/Logo.svg'

function OrphanagesMap(){
    return(
        <div id="page-map">
            <aside>
                <header>
                    <img src={logo} alt="Happy" />

                    <h2>Escolha um orfanato no mapa.</h2>
                    <p>Muitas crianças estão esperando sua visita :)</p>
                </header>


                <footer>
                    <strong>Rio Grande do Norte</strong>
                    <span>Nova Cruz</span>
                </footer>
            </aside>

            <Map 
                center={[-6.483587,-35.4280651]}
                zoom={15}
                style={{width: '100%', height: '100%'}}
            >

                <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            </Map>

            <Link to="" className="create-orphanage">
                <FiPlus size={32} color="#fff"></FiPlus>
            </Link>
        </div>
    )
}

export default OrphanagesMap;