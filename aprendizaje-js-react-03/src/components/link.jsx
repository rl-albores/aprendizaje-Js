var createReactClass = require('create-react-class')

function Link({ url, caption }) {
  return (
    <a href={url}>
      <label>{caption}</label>
    </a>
  )
}

/* Link.propTypes = {
  url: PropTypes.string.isRequired,
  caption: propTypes.string.isRequired,
} */

var Links = createReactClass({
  propTypes: function () {
    return {
      url: PropTypes.string.isRequired,
      caption: propTypes.string.isRequired,
    }
  },

  getInitialState: function () {
    return {
      url: this.props.initialLinks,
      caption: this.props.initialLinks,
    }
  },

  render: function () {
    return (
      <a href={this.props.url}>
        <label>{this.props.caption}</label>
      </a>
    )
  },
})

console.log(Links)

export default createReactClass
