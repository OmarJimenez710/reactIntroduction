import './task.css'

export function TaskCard({ready}) {
    const cardStyles = {
        background: '#202020',
        color: '#fff',
        padding: '20px'
    }


    return <div style={cardStyles}>
        <h1 style={{
            fontWeight: 'lighter',
        }}>
            <span className={ready? 'bg-green': 'bg-red'}>
                {
                    ready? 'Tarea hecha': 'Tarea no realizada'
                }
            </span>

        </h1>
        <p className='card'>Tarea realizada</p>
    </div>
}