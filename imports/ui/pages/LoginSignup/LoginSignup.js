import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Template } from "meteor/templating";
import { Blaze } from "meteor/blaze";
import { withTracker } from "meteor/react-meteor-data";
import styles from "./styles";

import Queue_musicIcon from "@material-ui/icons/Queuemusic";
class LoginSignup extends Component {
  // constructor(props){
  //   super(props)
  // }
  componentDidMount() {
    // Use Meteor Blaze to render login button
    this.renderForm();
  }
  renderForm() {
    this.login = Blaze.render(
      Template.loginButtons,
      ReactDOM.findDOMNode(this.refs.login)
    );
  }
  cleanForm() {
    Blaze.remove(this.login);
  }
  componentWillUnmount() {
    this.cleanForm();
  }
  render() {
    // const { classes } = this.props;
    return (
      <div
        style={{
          background: "#09AEF6",
          height: "78vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column"
        }}
      >
        <Queue_musicIcon style={{ fontSize: 450 }} color={"primary"} />
        <svg
          style={{
            position: "relative",
            right: "6vw",
            bottom: "9vh"
          }}
          version="1.1"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          preserveAspectRatio="xMidYMid meet"
          viewBox="0 0 640 640"
          width={"100vw"}
          height={300}
        >
          <defs>
            <text
              id="b1hTjj4wxU"
              x="160.34"
              y="275.2"
              fontSize={200}
              fontFamily="Satisfy"
              fontWeight="normal"
              fontStyle="normal"
              letterSpacing={0}
              alignmentBaseline="before-edge"
              transform="matrix(1 0 0 1 22.97297297297291 -33.879725150704076)"
              style={{ lineHeight: "100%" }}
              xmlSpace="preserve"
              dominantBaseline="text-before-edge"
            >
              <tspan
                x="160.34"
                dy="0em"
                alignmentBaseline="before-edge"
                dominantBaseline="text-before-edge"
                textAnchor="start"
              >
                Singles
              </tspan>
            </text>
          </defs>
          <g id="b1yR50N3y1">
            <use
              xlinkHref="#b1hTjj4wxU"
              opacity={1}
              fill="#f5f5f5"
              fillOpacity={1}
            />
            <use
              xlinkHref="#b1hTjj4wxU"
              opacity={1}
              fill="#f8f8f8"
              fillOpacity={1}
            />
            <use
              xlinkHref="#b1hTjj4wxU"
              opacity={1}
              fillOpacity={0}
              stroke="#d1d9db"
              strokeWidth={1}
              strokeOpacity={1}
            />
            <filter
              id="shadow10457603"
              x="145.34"
              y="260.2"
              width="292.2"
              height="172.92"
              filterUnits="userSpaceOnUse"
              primitiveUnits="userSpaceOnUse"
            >
              <feFlood />
              <feComposite in2="SourceAlpha" operator="out" />
              <feGaussianBlur stdDeviation={2} />
              <feOffset dx={1} dy={1} result="afterOffset" />
              <feFlood floodColor="#efefef" floodOpacity="0.8" />
              <feComposite in2="afterOffset" operator="in" />
              <feMorphology operator="dilate" radius={1} />
              <feComposite in2="SourceAlpha" operator="in" />
            </filter>
            <text
              id="b8KJVPT2MN"
              x="160.34"
              y="275.2"
              fontSize={200}
              fontFamily="Satisfy"
              fontWeight="normal"
              fontStyle="normal"
              letterSpacing={0}
              alignmentBaseline="before-edge"
              transform="matrix(1 0 0 1 22.97297297297291 -33.879725150704076)"
              style={{ lineHeight: "100%" }}
              xmlSpace="preserve"
              dominantBaseline="text-before-edge"
              fill="#fff"
              fillOpacity={1}
              filter="url(#shadow10457603)"
            >
              <tspan
                x="160.34"
                dy="0em"
                alignmentBaseline="before-edge"
                dominantBaseline="text-before-edge"
                textAnchor="start"
              >
                Singles
              </tspan>
            </text>
          </g>
        </svg>

        <div style={{}}>
          <span ref="login" />
        </div>
      </div>
    ); // Render a placeholder
  }
}

export default (LoginSignupContainer = withTracker(() => {
  return {
    currentUser: Meteor.user()
  };
})(LoginSignup));
