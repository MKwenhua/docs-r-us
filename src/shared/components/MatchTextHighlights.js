import React from 'react';
import {
  Header
} from 'semantic-ui-react';

const matchHighlight = matchText => (text, i) => (
  <span key={i} className={matchText.test(text) ? 'match-highlight' : ''}>
    { text }
  </span>
)

const MatchTextHighlights = ({suggestion, typed}) => {
  let regex = new RegExp('(' + typed + ')', 'gi')
  let matchText = new RegExp(typed, 'i')
  let highlightedText = suggestion.split(regex).map(matchHighlight(matchText))
  return <Header>{ highlightedText }</Header>
}

export default MatchTextHighlights
