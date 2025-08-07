const Button = ({ label, iconURL, backgroundColor, borderColor, textColor, fullWidth, closeMenu }) => {
    return (
        <button
            className={`flex justify-center items-center gap-2 px-7 py-4 font-montserrat text-lg leading-none border rounded-full
        ${backgroundColor ? `${backgroundColor} ${textColor} ${borderColor}` : 'bg-coral-red text-white border-coral-red'}
        ${fullWidth ? 'w-full' : ''}
        `}
            onClick={closeMenu ? () => closeMenu(false) : undefined}
        >
            {label}
            {iconURL && (
                <img src={iconURL} alt="arrow right" className="ml-2 rounded-full w-5 h-5" />
            )}
        </button>
    );
};

export default Button;
