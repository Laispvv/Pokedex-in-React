import DecorativeBall from './DecorativeBall';

const DecorativeHeader = () => {
    return(
        <div className='flex'>
            <div style={{ justifyContent: 'start' }}>
                <DecorativeBall ballSize='big' style={{ marginLeft: '15px' }} color='red'/>
                <DecorativeBall ballSize='medium' color='yellow'/>
                <DecorativeBall ballSize='small' color='green'/>
            </div>
            <div style={{ marginLeft: 'auto' }}>
                <DecorativeBall ballSize='small' color='green'/>
                <DecorativeBall ballSize='medium' color='yellow'/>
                <DecorativeBall ballSize='big' style={{ marginRight: '15px' }} color='red'/>
            </div>
        </div>
    )
};

export default DecorativeHeader; 