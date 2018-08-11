import React from "react";

import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import PersonIcon from "@material-ui/icons/Person";
import Queue_musicIcon from "@material-ui/icons/Queuemusic";
import blue from "@material-ui/core/colors/blue";
import red from "@material-ui/core/colors/red";
import SvgIcon from "@material-ui/core/SvgIcon";
import SmsIcon from "@material-ui/icons/Sms";
import HeaderMenue from "./HeaderMenue/HeaderMenue";
import styles from "./styles";
import Account_circleIcon from "@material-ui/icons/Accountcircle";
import LoginSignup from "./../../pages/LoginSignup/LoginSignup.js";
import Power_settings_new from "@material-ui/icons/Powersettingsnew";

function HomeIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
}

function ButtonAppBar(props) {
  const { classes } = props;
  return (
    <div>
      <AppBar className={classes.root} position="static">
        <Toolbar className={classes.barContainer}>
          <svg
            style={{
              position: "relative",
              right: "6vw"
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
          {/* <div className={classes.signIn}>
            <Link to="/login">
              <Power_settings_new
                className={classes.icon}
                style={{ fontSize: 50 }}
                color={"primary"}
              />
            </Link>
          </div> */}

          {/* <Link to="/profile">
            <PersonIcon
              className={classes.icon}
              style={{ fontSize: 100 }}
              color={"primary"}
            />
          </Link>

          <Link to="/singles">
            <Queue_musicIcon
              className={classes.icon}
              style={{ fontSize: 100 }}
              color={"primary"}
            />
          </Link>

          <Link to="/matches">
            <SmsIcon
              className={classes.icon}
              style={{ fontSize: 100 }}
              color={"secondary"}
            />
          </Link> */}
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default withStyles(styles)(ButtonAppBar);
