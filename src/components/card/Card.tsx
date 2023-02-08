import React, { Fragment } from "react";
import './Card.scss'

interface MyCardProps {
  cardName: string;
}

interface MyCardState {

}

export default class Card extends React.Component<MyCardProps, MyCardState> {


  render(): React.ReactNode {
    return(
      <>
        <div className="card-image">
          <div className="card-image-wrapper">

          </div>
          <div className="card-image-options">

          </div>
        </div>
        <div className="content">
          <h2 className="card-header">
            {this.props.cardName}
          </h2>
        </div>
      </>
    )
  }
}