import PropTypes from 'prop-types';



export function Button({text, name}) {
    if(!text){
        alert('texto requerido');
    }

    return <button onClick={function(){
        alert('holaaa');
    }}>
        {text} - {name}
    </button>
}

Button.propTypes = {
    text: PropTypes.string.isRequired
}

Button.defaultProps = {
    name: 'Some'
}