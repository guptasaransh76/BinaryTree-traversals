import React from "react";
import '../App.css';



export default class Tree extends React.Component {

  render() {
    return (
    	<div className="leftbox">
          <div className="tree left">
            <ul>
              <li id="list">
                <a id="a">34</a>
                <ul>
                  <li><a>23</a>
                    <ul>
                      <li><a>12</a></li>
                      <li><a>04</a>
                        <ul>
                          <li><a>16</a></li>
                          <li><a>09</a></li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a>92</a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div>
            <p id="res" className="res"> {[this.props.results].map((value) => {
              return (value.toString());
            })}</p>
          </div>
        </div>
    );
  }
}