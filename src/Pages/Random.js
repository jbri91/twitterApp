import React from "react";
import TwitterCard from "../components/TwitterCard";

class Random extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      randomUsers: ["elonmusk", "nasa", "gruber", "tedtalks", "tferris"],
      randomTweets: [],
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(screenName) {
    fetch(`/api/random-tweet/${screenName}`)
      .then((res) => res.json())
      .then((tweet) => this.setState({ randomUsers: tweet }))
      .catch((error) => console.log(error));
  }

  async componentDidMount() {
    this.state.randomUsers.forEach((username) => {
      fetch(`/api/random-tweet/${username}`)
        .then((res) => res.json())
        .then((tweet) => {
          this.setState((prevState) => {
            return {
              randomTweets: [...prevState.randomTweets, tweet]
            };
          });
        })
        .catch((error) => console.log(error));
    });
  }

  render() {
    const cardStyle = {
      display: "flex",
      flexWrap: "wrap",
      paddingTop: "80px",
      justifyContent: "space-around",
      alignItems: "center",
      flexDirection: "row",
      boxShadow: "5px 10px #888888",
    };

    const cards = this.state.randomTweets?.map((tweetCard) => (
      <TwitterCard
        key={tweetCard.id}
        tweets={tweetCard}
        handleClick={this.handleClick}
      />
    ));

    return (
      <div onClick={this.handleClick} className="random">
        <div style={cardStyle}>{cards}</div>
      </div>
    );
  }
}
export default Random;
