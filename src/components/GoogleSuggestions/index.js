// Write your code here
import {Component} from 'react'
import './index.css'
import SuggestionItem from '../SuggestionItem'

class GoogleSuggestion extends Component {
  state = {searchInput: ''}

  updateSuggest = event => {
    this.setState({searchInput: event.target.value})
  }

  updateSearchInput = value => {
    this.setState({searchInput: value})
  }

  render() {
    const {suggestionsList} = this.props
    const {searchInput} = this.state
    const filteredResult = suggestionsList.filter(eachSuggest =>
      eachSuggest.suggestion.toLowerCase().includes(searchInput.toLowerCase()),
    )
    return (
      <div className="appContainer">
        <div className="suggestionContainer">
          <img
            src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
            className="google"
            alt="google logo"
          />
          <div className="searchContainer">
            <div className="inputSearchContainer">
              <img
                src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
                alt="search icon"
                className="searchIcon"
              />
              <input
                placeholder="Search Google"
                type="search"
                className="searchInput"
                value={searchInput}
                onChange={this.updateSuggest}
              />
            </div>
            <ul>
              {filteredResult.map(each => (
                <SuggestionItem
                  suggestionList={each}
                  key={each.id}
                  updateSearch={this.updateSearchInput}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestion
