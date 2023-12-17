// creacion de una funcion del tipo constante --> funcion

import {VscBug, VscFolderActive} from 'react-icons/vsc';

const giveData = ()=>{
    //alert('Obteniendo datos');

    fetch('https://jsonplaceholder.org/posts').then(res=>
        res.json()).then(data => console.log(data)).catch(e => alert('error'));
}


export const Posts = () =>{
    return <button onClick={giveData}>
        <VscFolderActive/>
        Traer datos
    </button>
}