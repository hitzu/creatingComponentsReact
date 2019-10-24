import React from 'react'
import PropTypes from 'prop-types'
import { Container, Section } from 'react-bulma-components'

const Header = ( {title} ) => {

    return (
        <Section>
            <Container>
                <h1 className = "title has-text-centered">{title}</h1>
            </Container>
        </Section>
        )
}


//PropTypes valida el paso de props entre componentes padres a componentes hijos
Header.propTypes = {
    title : PropTypes.string.isRequired
}

export default Header