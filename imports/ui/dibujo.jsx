import React, {Component, PropTypes} from 'react';

import {Tweets} from "../api/Tweets.js";
export default class Dibujo extends Component{

    constructor(props)
    {
        super(props);
        // this.canvas=null;
    }
    componentWillUpdate() {

        var c = document.getElementById("myCanvas");
        var ctx = c.getContext("2d");
        ctx.clearRect(0,0,600,600);
        this.mapearTweets();

        //  let ctx = this.canvas.getContext('2d');
        //  ctx.clearRect(0,0, 600, 600);
        //  ctx.beginPath();
        //  ctx.arc(100,75,500,0,2*Math.PI);
        // // ctx.stroke();
        //
        //

        // draw children “components”
        //rect({ctx, x: 10, y: 10, width: 50, height: 50});
        //rect({ctx, x: 110, y: 110, width: 50, height: 50});
    }
    mapearTweets()
    {
       // if(this.props.tweets.find().count()>0)
        //{
        this.props.tweets.map((tweet) => {

                let translate= this.props.sendF();
                var finito=translate(tweet.coordinates.coordinates);
                this.dibujarPuntos(finito);
            });
        //}


    }
    dibujarPuntos(arr)
    {
        var c2 = document.getElementById("myCanvas");
        var ctx2 = c2.getContext("2d");
        ctx2.beginPath();
        ctx2.arc(arr[0],arr[1],5,0,2*Math.PI);
        ctx2.fillStyle="blue";
        ctx2.fill();
        ctx2.stroke();

    }
    render()
    {
        return(
            <div className="canvas">
                <canvas id="myCanvas" ref='canvas' width="600" height="600" />

            </div>





        );
    }

}
