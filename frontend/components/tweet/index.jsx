import React, { useState, useEffect } from "react";
import { useParams, useLocation, useHistory } from "../use-router";
import ALink from "../alink";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import axios from "axios";
import ProfileHeader from "../profile-header";
import Icon from "../icon";
import {
  TweetWrapper,
  Flex,
  TweetText,
  ActivityInfo,
  Activity,
  UserImage,
} from "../styles/tweet";
import { ProfileCorner, ActivityBox, ActivityIcon } from "../styles/common";
import Image from "next/image";
import { isImage, isVideo } from "../media";
import Loading from "../loading";
import Modal from "../modal";
import CommentModal from "./comment-modal";
import Comments from "./comments";
import TweetActivity from "./activity";
import useLogin from "../../providers/login-provider";
import { fixUser, fixTweet } from "../../lib/bip39";

const URL = process.env.REACT_APP_BACKEND_URL;

const Tweet = (props) => {
  const [tweet, setTweet] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { uid, tweetId } = useParams();

  const theme = useSelector((state) => state.session.theme);
  const { user, token } = useLogin();
  const myId = user.uid;

  useEffect(() => {
    (async () => {
      const res = await axios.get(
        `${URL}/api/tweet/get-tweet?uid=${uid}&tweetId=${tweetId}&myId=${myId}`
      );
      setTweet(fixTweet(res.data.tweet));
    })();
  }, []);

  const handleClose = () => {
    setIsModalOpen(false);
  };

  const handleActivity = async (self, count, action_type) => {
    if (tweet[self]) {
      // unlike, unretweet
      try {
        await axios.delete(`${URL}/api/tweet/${action_type}/remove`, {
          data: {
            uid: myId,
            tweetId: tweet["Tweets.id"],
          },
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setTweet(
          fixTweet({
            ...tweet,
            [count]: tweet[count] - 1,
            [self]: false,
          })
        );
      } catch (err) {
        console.error(err.response.data);
      }
    } else {
      // like, retweet
      try {
        await axios.post(
          `${URL}/api/tweet/${action_type}/add`,
          {
            uid: myId,
            tweetId: tweet["Tweets.id"],
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setTweet(
          fixTweet({
            ...tweet,
            [count]: tweet[count] + 1,
            [self]: true,
          })
        );
      } catch (err) {
        console.error(err.response.data);
      }
    }
  };

  if (!tweet) {
    return <Loading />;
  }

  const commentPath = [
    "M14.046 2.242l-4.148-.01h-.002c-4.374 0-7.8 3.427-7.8 7.802 0 4.098 3.186 7.206 7.465 7.37v3.828c0 .108.044.286.12.403.142.225.384.347.632.347.138 0 .277-.038.402-.118.264-.168 6.473-4.14 8.088-5.506 1.902-1.61 3.04-3.97 3.043-6.312v-.017c-.006-4.367-3.43-7.787-7.8-7.788zm3.787 12.972c-1.134.96-4.862 3.405-6.772 4.643V16.67c0-.414-.335-.75-.75-.75h-.396c-3.66 0-6.318-2.476-6.318-5.886 0-3.534 2.768-6.302 6.3-6.302l4.147.01h.002c3.532 0 6.3 2.766 6.302 6.296-.003 1.91-.942 3.844-2.514 5.176z",
  ];
  const retweetPath = [
    "M23.77 15.67c-.292-.293-.767-.293-1.06 0l-2.22 2.22V7.65c0-2.068-1.683-3.75-3.75-3.75h-5.85c-.414 0-.75.336-.75.75s.336.75.75.75h5.85c1.24 0 2.25 1.01 2.25 2.25v10.24l-2.22-2.22c-.293-.293-.768-.293-1.06 0s-.294.768 0 1.06l3.5 3.5c.145.147.337.22.53.22s.383-.072.53-.22l3.5-3.5c.294-.292.294-.767 0-1.06zm-10.66 3.28H7.26c-1.24 0-2.25-1.01-2.25-2.25V6.46l2.22 2.22c.148.147.34.22.532.22s.384-.073.53-.22c.293-.293.293-.768 0-1.06l-3.5-3.5c-.293-.294-.768-.294-1.06 0l-3.5 3.5c-.294.292-.294.767 0 1.06s.767.293 1.06 0l2.22-2.22V16.7c0 2.068 1.683 3.75 3.75 3.75h5.85c.414 0 .75-.336.75-.75s-.337-.75-.75-.75z",
  ];
  const likePath = [
    "M12 21.638h-.014C9.403 21.59 1.95 14.856 1.95 8.478c0-3.064 2.525-5.754 5.403-5.754 2.29 0 3.83 1.58 4.646 2.73.814-1.148 2.354-2.73 4.645-2.73 2.88 0 5.404 2.69 5.404 5.755 0 6.376-7.454 13.11-10.037 13.157H12z",
  ];

  const date = new Date(tweet["Tweets.createdAt"]);
  return (
    <ProfileCorner border={theme.border}>
      {isModalOpen && (
        <Modal handleClose={handleClose} padding="15px">
          <CommentModal handleClose={handleClose} tweetId={tweetId} />
        </Modal>
      )}
      <ProfileHeader heading="Tweet" />
      <TweetWrapper>
        <div style={{ padding: "10px 15px 0px 15px" }}>
          <Flex>
            <div>
              <UserImage src={tweet.avatar} />
            </div>
            <div>
              <ALink href={`/profile/${tweet.uid}`}>
                <h3 style={{ color: theme.color }}>@{tweet.domain} </h3>
                <p>0x{tweet.shortAddress}</p>
              </ALink>
            </div>
          </Flex>
          <TweetText>
            <p style={{ color: theme.color, wordBreak: "break-all" }}>
              {tweet["Tweets.text"]}
            </p>
            {tweet["Tweets.media"] && isImage(tweet["Tweets.media"]) && (
              <img src={tweet["Tweets.media"]} style={{ width: "100%" }} />
            )}
            {tweet["Tweets.media"] && isVideo(tweet["Tweets.media"]) && (
              <video
                src={tweet["Tweets.media"]}
                style={{ width: "100%" }}
                controls
              ></video>
            )}
            <div style={{ color: theme.para }}>
              {date.toLocaleTimeString("en-US", {
                hour: "numeric",
                hour12: true,
                minute: "numeric",
              })}{" "}
              &middot; {date.toLocaleString("default", { month: "long" })}{" "}
              {date.getDate()}, {date.getFullYear()}
            </div>
          </TweetText>
          <ActivityInfo color={theme.color}>
            <ALink href={`/${uid}/status/${tweetId}/retweets`} replace>
              <h4>{tweet["Tweets.retweetsCount"]}</h4> <span>Retweets</span>
            </ALink>
            <ALink href={`/${uid}/status/${tweetId}/likes`} replace>
              <h4>{tweet["Tweets.likesCount"]}</h4> <span>Likes</span>
            </ALink>
          </ActivityInfo>
          <Activity>
            <div onClick={() => setIsModalOpen(true)}>
              <ActivityBox
                title="comment"
                hoverColor="rgb(29,161,242)"
                hoverBg="rgba(29,161,242,0.1)"
                style={{
                  border: "none",
                  background: "transparent",
                  outline: "none",
                }}
                noPadding={true}
              >
                <ActivityIcon>
                  <Icon
                    d={commentPath}
                    width="18.75px"
                    height="18.75px"
                    fill="rgb(101, 119, 134)"
                  />
                </ActivityIcon>
              </ActivityBox>
            </div>
            <div>
              <TweetActivity
                title="retweet"
                handleClick={() =>
                  handleActivity(
                    "selfRetweeted",
                    "Tweets.retweetsCount",
                    "retweet"
                  )
                }
                hoverColor="rgb(23,191,99)"
                hoverBg="rgba(23,191,99,0.1)"
                path={retweetPath}
                fill={
                  tweet.selfRetweeted
                    ? "rgb(23, 191, 99)"
                    : "rgb(101, 119, 134)"
                }
                noPadding={true}
              />
            </div>
            <div>
              <TweetActivity
                title="like"
                handleClick={() =>
                  handleActivity("selfLiked", "Tweets.likesCount", "like")
                }
                hoverColor="rgb(224,36,94)"
                hoverBg="rgba(224,36,94,0.1)"
                path={likePath}
                fill={
                  tweet.selfLiked ? "rgb(224, 36, 94)" : "rgb(101, 119, 134)"
                }
                noPadding={true}
              />
            </div>
          </Activity>
        </div>
      </TweetWrapper>
      <Comments />
    </ProfileCorner>
  );
};

export default Tweet;
