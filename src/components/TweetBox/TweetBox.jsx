import * as React from "react"
import TweetInput from "./TweetInput"
import "./TweetBox.css"

export default function TweetBox(props) {
  function handleOnTweetTextChange(event){
    props.setTweetText(event.target.value)
  }
  const handleOnSubmit = () => {
    let newTweet = {name: props.userProfile.name, 
                    handle: props.userProfile.handle,
                    text: props.tweetText,
                    comments: 0,
                    retweets: 0,
                    likes: 0,
                    id: props.tweets.length
                  }
    props.setTweets((([...props.tweets, newTweet])))
    props.setTweetText('')
  }
  return (
    <div className="tweet-box">
      <TweetInput 
        value={props.tweetText}
        handleOnChange={handleOnTweetTextChange}
      />

      <div className="tweet-box-footer">
        <TweetBoxIcons />
        <TweetCharacterCount 
          length={props.tweetText.length}
        />
        <TweetSubmitButton 
          handleOnSubmit={handleOnSubmit}
          length={props.tweetText.length}
        />
      </div>
    </div>
  )
}

export function TweetBoxIcons() {
  return (
    <div className="tweet-box-icons">
      <i className="fas fa-image"></i>
      <i className="icon-gif">GIF</i>
      <i className="far fa-chart-bar"></i>
      <i className="fas fa-map-marker-alt"></i>
    </div>
  )
}

export function TweetCharacterCount(props) {
  let charactersLeft = 140 - props.length
  if (charactersLeft == 140) 
    return  <span></span>
  return <span className={charactersLeft>=0?'tweet-length':'red'}>{charactersLeft}</span>
}

export function TweetSubmitButton(props) {
  let enable = (props.length===0 || props.length > 140)?true:false
  return (
    <div className="tweet-submit">
      <i className="fas fa-plus-circle"></i>
      <button 
        onClick={props.handleOnSubmit} 
        className="tweet-submit-button"
        disabled={ enable }
      >
          Tweet
      </button>
    </div>
  )
}
