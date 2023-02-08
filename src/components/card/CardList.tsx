import React from "react";
import Card from "./Card";
import './CardList.scss'

interface MyCardProps {
  category: string;
}

interface MyCardState {
  cards: string[];
}

export default class CardList extends React.Component<MyCardProps, MyCardState> {

  constructor(p: MyCardProps) {
    super(p);
    this.state = {
      cards: []
    };
  }

  render(): React.ReactNode {
    return(
      <div className="card-parent">
        <div className="card-column-content">
          {this.state.cards.map((c: string, index: number) => {
            return <Card key={index} cardName={c}></Card>
          })}
        </div>
      </div>
    )
  }
}