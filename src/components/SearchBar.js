import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component{

    state = { term: '' }; //initializes the state with a property 'term' which is blank

    onFormSubmit(event) { //function called when the form is submitted
        event.preventDefault(); //stops page from reloading when submitting form
        this.props.onSubmit(this.state.term); //uses the function onSubmit which is stored in a prop passed down from the App, using the term from the state
    }

    render(){
        return (
            <div className="ui segment">
                <img src="https://media.wizards.com/2019/wpn/marketingmaterials/eld/eld_wbn_728x90_en.jpg" alt="banner" />
                <form onSubmit={(event) => this.onFormSubmit(event)} className="ui form">
                    <div className="field">
                        <label>Card Search</label>
                        <input
                            type="text"
                            onChange={e => this.setState({ term: e.target.value})} />
                    </div>
                </form>
                <div>{this.props.savedCard.name}</div>
            </div>
        )
    }
}

export default SearchBar;
