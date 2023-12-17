import React, {useState, useEffect} from 'react';
import ReactDom from 'react-dom/client'
import {Greeting, UserCard} from './Greeting';
import Product, {Navbar}  from './Product';
import {Button} from './Button';
import {TaskCard} from './Task';
import {Saludar} from './Sludar';
import {Posts} from './Posts';

const rootElement = document.getElementById('root');

// arreglos en react
const users = [
    {
        id: 1,
        name: 'Ryan ray',
        image: 'https://robohash.org/user2'
    },
    {
        id: 2,
        name: 'Omar Flores',
        image: 'https://robohash.org/user3'
    },
]

// uso de hooks
function Counter() {
    const [counter, setCounter] = useState(0);

    return <div> 
        <h1>Counter: {counter}</h1>
        <button onClick={()=>{
            setCounter(counter + 1);
        }}>
            Sumar
        </button>

        <button onClick={()=>{
            setCounter(counter-1);
        }}>
            Restar 
        </button>
        <button onClick={()=>{
            setCounter(0);
        }}>
            Reiniciar
        </button>
    </div>
}

function Message() {
    const [message, setMessage] = useState('');


    return <div>
        <input onChange={(e) => setMessage(e.target.value)}/>
        <button onClick={()=>{
            alert('El mensaje es: ' + message)
        }}>
            Show
        </button>
    </div>
}

// uso de useEffect
function Message2() {
    const [message, setMessage] = useState('');

    const [counter, setCounter] = useState(0);

    // se usa useEffect siempre que la esta seccion de codigo sufra algun cambio 

    useEffect(function(){
        console.log('render');
    }, [counter])
    // el parametro ultimo [ ] es para indicarle que este componte solo use useEffect una sola vez


    return <div>
        <input onChange={(e) => setMessage(e.target.value)}/>
        <button onClick={()=>{
            alert('El mensaje es: ' + message)
        }}>
            Show
        </button>

        <hr/>
        <h1>Counter {counter}</h1>
        <button onClick={()=>{
            setCounter(counter+1)
        }}>
            Sumar
        </button>
    </div>
}



function handleChange (event) {
    console.log(event.target.value);
}

 
const root = ReactDom.createRoot(rootElement);
root.render(<>

    {/* creacion de componentes basado en funciones */}

    <Greeting title="hola"/>
    <UserCard name="Omar" amount={3000} married={true} points={[99,33.3,22]} address={{street: '123 Main Street', city: 'Toluca'}}
    greet={function(){
        alert('hola');
    }}/>
    <Product/>
    <Navbar/>

    <Greeting title="buenos dias" name="Omar"/>
    <Greeting title="buenas tardes" name="Aldair"/>
    <Greeting title="buenas noches" name="Pecli"/>

    <Button text="Aceptar"
    />
    <Button text='dd' name='joe'
    />

    <TaskCard ready={false}/>

    {/* creacion de componentes basado en clases 
    
    Nota: no es tan eficiente
    */}

    <Saludar/>


    {/* manejador de eventos */}
    <input id="hola" onChange={handleChange}></input>

    <form onSubmit={(e)=>{
        e.preventDefault();

        console.log('enviando...');
    }}>
        <h1>Registro</h1>
        <button>Enviar</button>
    </form>


    {/* llamado a un componente siguiendo otro tipo de sintaxis */}

    <Posts/>

    {/* iteramiento de array */}
    {users.map(user =>{
        return <div key={user.id}>
             <h1>{user.name}</h1>
             <img src={user.image}/>
        </div>
    })}

    {/* uso de hooks useState()*/}
    <Counter/>
    <Message/>

    {/* useState */}
    <Message2/>


</>);   

