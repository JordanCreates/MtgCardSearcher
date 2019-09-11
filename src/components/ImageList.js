import React from 'react';
import './ImageList.css';

class ImageList extends React.Component {

    buttonClick = (card) =>{
        this.props.save(card);
    }
    
    render(){
    const cards = this.props.cards.map((card, props) => {
        if(card.imageUrl != null){
            return (
                <div className="ui items" key={card.id}>
                    <div className="item">
                        <div className="image">
                            <img src={card.imageUrl} alt={card.name}/>
                        </div>
                        <div className="content">
                            <h1 className="header">{card.name}</h1>
                            <div className="meta">
                                <span>{card.type}</span><br /><br />
                                <span>
                                    {card.manaCost}
                                </span>
                            </div>
                            <div className="description">
                                <p>{card.text}</p>
                            </div>
                            <div className="extra">
                                {card.setName}<br />
                                <button onClick={() => {this.buttonClick(card)}} className="ui button primary">Save this card</button>
                            </div>
                        </div>
                    </div>
                </div>             
            )}
        return null;
    });
    return <div>{cards}</div>
    }
};

export default ImageList;