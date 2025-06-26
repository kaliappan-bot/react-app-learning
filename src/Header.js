import React from 'react';
class Header_check extends React.Component {
    constructor(props) {
        super(props) ;
            this.state = {favouritecolor: "red"};
        }
        static getDerivedStateFromProps(props, state) {
            return {favouritecolor: props.favcol };
        }
        changeColor = () => {
            this.setState({favouritecolor: "blue"});
        } 
        render() {
         return (
            <div>
                <h1>My Favourite Color is {this.state.favoritecolor}</h1>
                <button type="button" onClick={this.changeColor}>Change color</button>
            </div>
         );
        }
    }
export default Header_check;