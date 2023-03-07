// Write your code here
import './index.css'

const SuggestionItem = props => {
  const {suggestionList, updateSearch} = props
  const {suggestion} = suggestionList

  const searchUpdate = () => {
    updateSearch(suggestion)
  }

  return (
    <li className="listContainer">
      <p className="description">{suggestion}</p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
        className="arrowImage"
        alt="arrow"
        onClick={searchUpdate}
      />
    </li>
  )
}

export default SuggestionItem
