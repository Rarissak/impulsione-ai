import '../linksReponsivo/linkResponsivo.css';
import { Link } from 'react-router-dom';
// import axiosInstance from '../../../helper/axiosInstance.js';
// import { useEffect, useState } from 'react';
// import useAxios from '../../../hook/useAxios.js';

function LinkResponsivo({name, link}){
    return(
        <>
        <Link 
            to={link} 
            id='linksResponsivo'
        >{name}</Link>
        </>
    )
}
export default LinkResponsivo