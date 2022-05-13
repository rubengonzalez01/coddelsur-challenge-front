import React, { useState, useContext } from 'react';
import SVG from 'react-inlinesvg';
import { AppContext } from '../../contexts/provider';

// Style
import styles from './SearchBar.module.scss';
import lupa from '../../assets/img/lupa.svg';
import logo1024 from '../../assets/img/logo_1024w.png';
import logo32 from '../../assets/img/logo_32w.png';

function SearchBar() {
  const [value, setValue] = useState('');
  const [state, setQuery] = useContext(AppContext);

  // Ejecuta la busqueda del valor.
  const goToHandler = (e) => {
    if ((e.type === 'keypress' && e.key === 'Enter') || e.type === 'click') {
      setQuery({ ...state, query: value, mainChange: true });
    }
  };

  return (
    <header className={ styles.header }>
      <div className={ styles.bar }>
        {/* Logo */}
        <img 
          className={ styles.logo }
          srcSet={`${logo32} 32w,
                  ${logo1024} 1024w`}
          sizes="(max-width: 600px) 32px,
                  1024px"
          src={ logo32 }
          alt="Logo de codigo del sur"></img>
              
        {/* Button */}
        <a onClick={ goToHandler } className={ styles.button }>
          <div className={ styles.centerIcon }>
            <SVG className={ styles.icon } src={ lupa } />
          </div>
        </a>

        {/* Input */}
        <label htmlFor='input'>Input</label>
        <input
          id='input'
          placeholder='Search...'
          value={ value }
          onChange={(e) => {
            setValue(e.target.value)
          }}
          onKeyPressCapture={ goToHandler }
        ></input>

        {/* Button principal */}
        <a onClick={ goToHandler } className={ styles.button_principal }>
          Search
        </a>
      </div>
    </header>
  );
}

export default SearchBar;
