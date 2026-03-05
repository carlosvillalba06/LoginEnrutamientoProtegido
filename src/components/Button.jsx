const stylesButtonPrimary = {
    backgroundColor: '#04040c',
    borderRadius: '10px',
    color: '#ffffff',
    border: 'none',
    padding: '2px 10px'
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