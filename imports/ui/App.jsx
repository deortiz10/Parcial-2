import React, {Component} from "react";
import {PropTypes} from "prop-types";
import { Meteor } from "meteor/meteor";
import { createContainer} from "meteor/react-meteor-data";

import TweetsResults from "./TweetsResults.jsx";
import {Tweets} from "../api/Tweets.js";
import ColombiaMap from "./ColombiaMap";
import drawMap from  "./drawMap.jsx";
import Dibujo from "./dibujo";

export class App extends Component {
  constructor(props) {
    super(props);
    this.projection=null;
    this.tosend=null;
    this.state= {

    }

  }

  changeQuery(evt) {
    if (evt.key !== "Enter") {
      return;
    }
    // "this" will change in the method call, so I need to save it
    let component = this;

    console.log(evt.target.value);
    Meteor.call("twitter.stream", evt.target.value);

  }
  sendFunction()
  {
    return this.projection;
  }
  changecolor()
  {

  }

getData()
{
var data= this.props.tweets;

}

getProjection( arr)
{
  this.projection=arr;
}
  render() {
    console.log("render!");
    return (
      <div>
        <input type="text" onKeyPress={this.changeQuery.bind(this)} placeholder="Query"/>
        { this.props && this.props.err ?
          <div>Error: {this.props.err}</div> :
          <span></span>
        }

        <h2>Map</h2>
        <div className="row">
          <div className="col-sm-6">
        <div className="insideWrapper">
        <ColombiaMap getPrj={this.getProjection.bind(this)}

        width="600"
         height="600"
         />
        <drawMap/>
        <Dibujo
          sendF={this.sendFunction.bind(this)}
          tweets={this.props.tweets}
          state={this.state}
        />
        </div>
      </div>
          <div className="col-sm-6">
        <h2>Results:</h2>
        {this.props && this.props.tweets ?
          <TweetsResults tweets={this.props.tweets}/> :
          <p>Enter a query</p>
        }
        </div>

      </div>
      </div>
    );
  }
}

App.propTypes = {
  tweets : PropTypes.array.isRequired
};

export default AppContainer = createContainer(() => {
  Meteor.subscribe("tweets");


  return {
    tweets: Tweets.find({}).fetch()
  };
}, App);
