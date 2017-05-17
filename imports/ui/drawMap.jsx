import React, { Component } from 'react';

export default class drawMap extends Component
{
    constructor(props)
    {
       super(props);
      // this.canvas=null;
    }


    componentDidUpdate() {

        var c = document.getElementById("myCanvas");
        var ctx = c.getContext("2d");
        ctx.beginPath();
        ctx.arc(95,50,40,0,2*Math.PI);
        ctx.stroke();
       //  let ctx = this.canvas.getContext('2d');
       //  ctx.clearRect(0,0, 600, 600);
       //  ctx.beginPath();
       //  ctx.arc(100,75,500,0,2*Math.PI);
       // // ctx.stroke();
       //  ctx.fillStyle="blue";
       //  ctx.fill();

        // draw children “components”
        //rect({ctx, x: 10, y: 10, width: 50, height: 50});
        //rect({ctx, x: 110, y: 110, width: 50, height: 50});
    }
    drawCoordinates()
    {

    }
    render() {
        return (<div className="canvas">
    <span>renderiza algo</span>

                <canvas id="myCanvas" width="200" height="100" >
                </canvas>
            </div>
        );
    }
}
