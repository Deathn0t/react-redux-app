import Window from '../components/Window'
import { connect } from 'react-redux'
import { action } from '../actions'

const mapStateToProps = (state) => {
  return {showcases: state.showcases}
}

const mapDispatchToProps = (dispatch) => {
  return {
    _onClick: (index) => {
      console.log('Hello world !')
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Window)
