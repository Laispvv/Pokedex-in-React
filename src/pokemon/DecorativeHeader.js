import DecorativeBall from './DecorativeBall';

const DecorativeHeader = () => {
    return(
        <div className='flex'>
            <div style={{ justifyContent: 'start' }}>
                <DecorativeBall ballSize='big' style={{ marginLeft: '15px' }} />
                <DecorativeBall ballSize='medium' />
                <DecorativeBall ballSize='small' />
            </div>
            <div style={{ marginLeft: 'auto' }}>
                <DecorativeBall ballSize='small' />
                <DecorativeBall ballSize='medium' />
                <DecorativeBall ballSize='big' style={{ marginRight: '15px' }} />
            </div>
        </div>
    )
};

export default DecorativeHeader; 