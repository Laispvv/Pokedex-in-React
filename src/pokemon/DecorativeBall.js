import React from "react";

const DecorativeBall = ({onChange, ballSize, style}) => {

    function DecorativeBall({ size, style, ...rest }) {
        const ballSize = size ? `ball--${size}` : 'ball-medium';
        return (
            <div className={`${ballSize} decorative-ball`}
                style={{
                    backgroundColor: 'gainsboro',
                    ...style
                }}
                {...rest}
            />
        )
    }

    return(
        <DecorativeBall size={ballSize} style={style}/>
    );
};

export default DecorativeBall