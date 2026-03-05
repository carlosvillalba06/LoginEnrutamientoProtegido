const stylesButtonPrimary = {
backgroundColor: '#0f172a',
    color: '#ffffff',
    borderRadius: '5px',
    border: 'none',
    padding: '10px 20px',
    fontSize: '16px',
    fontWeight: '600',
    cursor: 'pointer',
};


function Button({action, text}) {

  return (
    <button
     style={stylesButtonPrimary}
     onClick={action}
    >
    {text}
    </button>
  );
}

export default Button;