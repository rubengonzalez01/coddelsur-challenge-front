import React, { PureComponent } from 'react'

// Styles
import styles from './NoMatch.module.scss'

/* EL proposito de hacer este componente clase y Puro es traerlo de ejemplo ya que toda la app se hizo con functional components*/

export class NoMatch extends PureComponent {
  render() {
    return (
      <section className={ styles.novideos_container }>
        <div>
          <div className={ styles.novideos }>
            <h1>No hay videos que coincidan con tu búsqueda.</h1>
            <ul>
              <li>Revisá la ortografía de la palabra.</li>
              <li>Utilizá palabras más genéricas o menos palabras.</li>
            </ul>
          </div>
        </div>
      </section>
    )
  }
}

export default NoMatch;
