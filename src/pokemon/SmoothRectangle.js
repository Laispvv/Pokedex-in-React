const SmoothRectangle = ({ className = '', border = '', style, size, ...rest }) => {
    const bsize = size ? `rectangle--${size}` : '';
    return (
        <div className={`${className} ${border} ${bsize}`}
            style={{ ...style }}
            {...rest}
        />
    );
}

export default SmoothRectangle;
