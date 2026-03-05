function InputPassword({type = "password", placeholder, value, onChange}) {
    return (
        <input
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
        />
    );
}

export default InputPassword;