import React from 'react';
import magic_cards from '../apis/MagicCards'

import Header from './Header';
import ImageList from './ImageList';
import SearchBar from './SearchBar';

class App extends React.Component {

    state = { 
        cards : [],
        savedCard: ''        
    }

   /* componentDidMount = async () => {
        await axios.get('https://api.magicthegathering.io/v1/cards?name=gideon')
                    .then(response => {
                        this.setState({
                            cards: response.data.cards
                            })
                        });
        return this.state;
    }; */

    onSearchSubmit = async (term) => {
        const response = await magic_cards.get('/v1/cards?name=' + term, {
        })
        this.setState({ cards: response.data.cards });
    }

    saveCard = async (card) => {
        await this.setState({
            savedCard: card
        });
    };

    render(){
        return(
            <div className="ui container">
                <Header />

                <SearchBar onSubmit={this.onSearchSubmit} savedCard={this.state.savedCard} />

                <ImageList cards={this.state.cards} save={this.saveCard}  />
            </div>
        );
    };
};

export default App;