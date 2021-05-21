import React from "react";

const DecorativeBall = ({onChange, color, ballSize, style}) => {

    function DecorativeBall({color='white',size, style, ...rest }) {
        const ballSize = size ? `ball--${size}` : 'ball-medium';
        return (
            <div className={`bg-${color}-500 ${ballSize} decorative-ball border-2 border-gray-800`}
                style={{
                    ...style
                }}
                {...rest}
            >

            </div>
        )
    }

    return(
        <DecorativeBall size={ballSize} style={style} color={color}/>
    );
};

export default DecorativeBall