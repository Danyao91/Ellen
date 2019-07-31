import React from 'react'

// This is our initialised `NextI18Next` instance
import { withTranslation } from '../i18n'

class Footer extends React.Component {
  render() {
    return (
      <footer>{this.props.t('description')}</footer>
    )
  }
}

export default withTranslation('footer')(Footer)