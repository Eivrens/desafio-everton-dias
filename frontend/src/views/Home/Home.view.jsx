import React, { useEffect, useState } from 'react';
//import { Link } from 'react-router-dom';

import imgExample from '../../assets/images/imgExample.png';
import './Home.view.css';
import { HOME_URL_API } from '../../Api/index.jsx';

import Header from '../../components/Header/Header';

function HomeView() {
    const [dataProducts, setDataProducts] = useState([]);

    const listProducts = async () => {
        const res = await fetch(`${HOME_URL_API}/`);
        const resJson = await res.json();

        setDataProducts(resJson);
    };

    useEffect(() => {
        listProducts();
    }, []);

    return (
        <>
            <Header />
            <div className=''>
                <div className='container'>
                    {
                        dataProducts.map((item, index) => {
                            return (
                                
                                <div key={index} className='list_items'>
                                    <img src={ imgExample } alt="" width={1000}/>
                                    <h5>Código: {item.codigo}</h5>
                                    <h3>{item.descricao}</h3>
                                    <h4>R$ {item.valor}</h4>                                      
                                </div>
                                
                            );
                        })
                    }
                </div>
            </div>
        </>  
    );
}

export default HomeView;
