import React from "react";
import { Card } from "react-bootstrap";
import HeartImage from "../Images/Heart.png";
import Retweet from "../Images/Retweet.png";
import Comment from "../Images/Comment.png";
import Share from "../Images/Share.png";
import Settings from "../Images/Settings.png";
import BlueCheck from "../Images/BlueCheck.png";

function TwitterCard({ tweets }) {
  return (
    <div >
      <Card id={tweets.id} style={{ width: "35rem", margin: "35px", cursor:'pointer'}} className="shadow-lg p-3 mb-5 bg-white rounded" >
        <Card.Body>
          <img alt='Profile' style={{ borderRadius: "50%" }} src={tweets.user.profile_image_url}></img>
          <img
            alt="setting"
            variant="top"
            src={Settings}
            style={{ marginLeft: "450px" }}
          />
          <Card.Title style={{ fontSize: "15px", fontWeight: "bolder" }}>
            {tweets.user.name} { tweets.user.verified ? <img alt="blue check" variant="top" src={BlueCheck} /> : null}
            <p style={{ fontSize: "15px", color: "gray" }}>@{tweets.user.screen_name}</p>
          </Card.Title>
          <Card.Text>{tweets.text}</Card.Text>
          <div
            className="twitterIcons"
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "10px",
            }}
          >
            <p>
              <img alt="comment" variant="top" src={Comment} /> {tweets.comments}
            </p>
            <p>
              <img alt="retweet" variant="top" src={Retweet} /> {tweets.retweet_count}
            </p>
            <p>
              <img alt="heart" variant="top" src={HeartImage} /> {tweets.favorite_count}
            </p>
            <p>
              <img alt="share" variant="top" src={Share} />
            </p>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

export default TwitterCard;
