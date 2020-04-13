import React, {Component} from 'react';

class Hello extends Component{
    render(){
        var place = "Lan";
        return (
        <h1>Hello {place}!</h1>
        );
    }
}

class Listitem extends Component{
    render(){
        return (
            <li>
                {this.props.quantity} x {this.props.name}
            </li>
        );
    }
}

class GroceryList extends Component{
    render(){
        return (
            <ul>
                <Listitem quantity="1" name="Bread"></Listitem>
                <Listitem quantity="6" name="Eggs"></Listitem>
                <Listitem quantity="2" name="Milk"></Listitem>
            </ul>
        );
    }
}

React.render(<GroceryList/>, document.getElementById("root"));