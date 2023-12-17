export function Greeting(props) {
    console.log(props);

    function add(x,y){
        return x + y;
    }

    //return <h1> {add(10,30)} </h1>

    return <h1>{props.title} {props.name}</h1>
}

export function UserCard(props) {

    console.log(props);

    return <div>
        <h1>{props.name}</h1>
        <p>${props.amount}</p>
        <p>{props.married? 'Married': 'Single'}</p>

        <ul>
            <li>City: {props.address.city}</li>
            <li>Address: {props.address.street}</li>
            <li></li>
        </ul>


    </div>  
}