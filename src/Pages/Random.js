import React from "react";
import TwitterCard from "../components/TwitterCard";

class Random extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      elonTweet: null,
      ferrisTweets: null,
      tedTweets: null,
      nasaTweets: null,
      gruberTweets: null,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    let id = e.target.offsetParent.id;
    if (id === "1") {
      fetch("/api/elonmusk")
        .then((re) => re.json())
        .then((tweets) =>
          this.setState({
            elonTweet: tweets.statuses[Math.floor(Math.random() * 20)],
          })
        )
        .catch((error) => console.log(error));
    } else if (id === "2") {
      fetch("/api/timferris")
        .then((res) => res.json())
        .then((tweets) =>
          this.setState({
            ferrisTweets: tweets.statuses[Math.floor(Math.random() * 20)],
          })
        )
        .catch((error) => console.log(error));
    }
    else if (id === "3") {
      fetch("/api/tedtalks")
        .then((res) => res.json())
        .then((tweets) =>
          this.setState({
            tedTweets: tweets.statuses[Math.floor(Math.random() * 20)],
          })
        )
        .catch((error) => console.log(error));
    }
    else if (id === "4") {
      fetch("/api/nasa")
        .then((res) => res.json())
        .then((tweets) =>
          this.setState({
            nasaTweets: tweets.statuses[Math.floor(Math.random() * 20)],
          })
        )
        .catch((error) => console.log(error));
    }

    else if (id === "5") {
      fetch("/api/gruber")
        .then((res) => res.json())
        .then((tweets) =>
          this.setState({
            gruberTweets: tweets.statuses[Math.floor(Math.random() * 20)],
          })
        )
        .catch((error) => console.log(error));
    }
  }

  async componentDidMount() {
    await fetch("/api/elonmusk")
      .then((re) => re.json())
      .then((tweets) =>
        this.setState({
          elonTweet: tweets.statuses[Math.floor(Math.random() * 20)],
        })
      )
      .catch((error) => console.log(error));
    await fetch("/api/timferris")
      .then((res) => res.json())
      .then((tweets) =>
        this.setState({
          ferrisTweets: tweets.statuses[Math.floor(Math.random() * 20)],
        })
      )
      .catch((error) => console.log(error));
    await fetch("/api/tedtalks")
      .then((res) => res.json())
      .then((tweets) =>
        this.setState({
          tedTweets: tweets.statuses[Math.floor(Math.random() * 20)],
        })
      )
      .catch((error) => console.log(error));
    await fetch("/api/nasa")
      .then((res) => res.json())
      .then((tweets) =>
        this.setState({
          nasaTweets: tweets.statuses[Math.floor(Math.random() * 20)],
        })
      )
      .catch((error) => console.log(error));

    await fetch("/api/gruber")
      .then((res) => res.json())
      .then((tweets) =>
        this.setState({
          gruberTweets: tweets.statuses[Math.floor(Math.random() * 20)],
        })
      )
      .catch((error) => console.log(error));
  }

  render() {
    const cardStyle = {
      display: "flex",
      flexWrap: "wrap",
      paddingTop: "80px",
      justifyContent: "space-around",
      alignItems: "center",
      flexDirection: "row",
      boxShadow: '5px 10px #888888',
    };

    return (
      <div onClick={this.handleClick} className="random">
        <div style={cardStyle}>
          {this.state.elonTweet !== null ? (
            <TwitterCard
              id="1"
              name={this.state.elonTweet.user.name}
              userName={this.state.elonTweet.user.screen_name}
              tweet={this.state.elonTweet.text}
              retweet={this.state.elonTweet.retweet_count}
              likes={this.state.elonTweet.favorite_count}
              image={this.state.elonTweet.user.profile_image_url_https}
            />
          ) : null}

          {this.state.ferrisTweets !== null ? (
            <TwitterCard
              id="2"
              name={this.state.ferrisTweets.user.name}
              userName={this.state.ferrisTweets.user.screen_name}
              tweet={this.state.ferrisTweets.text}
              retweet={this.state.ferrisTweets.retweet_count}
              likes={this.state.ferrisTweets.favorite_count}
              image={this.state.ferrisTweets.user.profile_image_url_https}
            />
          ) : null}

          {this.state.tedTweets !== null ? (
            <TwitterCard
              id="3"
              name={this.state.tedTweets.user.name}
              userName={this.state.tedTweets.user.screen_name}
              tweet={this.state.tedTweets.text}
              retweet={this.state.tedTweets.retweet_count}
              likes={this.state.tedTweets.favorite_count}
              image={this.state.tedTweets.user.profile_image_url_https}
            />
          ) : null}

          {this.state.nasaTweets !== null ? (
            <TwitterCard
              id="4"
              name={this.state.nasaTweets.user.name}
              userName={this.state.nasaTweets.user.screen_name}
              tweet={this.state.nasaTweets.text}
              retweet={this.state.nasaTweets.retweet_count}
              likes={this.state.nasaTweets.favorite_count}
              image={this.state.nasaTweets.user.profile_image_url_https}
            />
          ) : null}

          {this.state.gruberTweets !== null ? (
            <TwitterCard
              id="5"
              name={this.state.gruberTweets.user.name}
              userName={this.state.gruberTweets.user.screen_name}
              tweet={this.state.gruberTweets.text}
              retweet={this.state.gruberTweets.retweet_count}
              likes={this.state.gruberTweets.favorite_count}
              image={this.state.gruberTweets.user.profile_image_url_https}
            />
          ) : null}
        </div>
      </div>
    );
  }
}
export default Random;
