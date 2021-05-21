const SmoothRectangle = ({ className = '', border = '', style, size, ...rest }) => {
    const bsize = size ? `rectangle--${size}` : '';
    return (
        <div className={`p-5 ${className} ${border} ${bsize}`}
            style={{ ...style }}
            {...rest}
        />
    );
}

export default SmoothRectangle;
