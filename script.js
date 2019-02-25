var Counter = React.createClass({
    getDefaultProps: function() {
        console.log('ustawianie domyśnych wartości propsów (nie przekzanych podczas tworzenia elementu')
    },
    getInitialState: function() {
        return {
            counter: 0
        };
    },
    increment: function() {
        this.setState({
            counter: this.state.counter + 1
        })
    },
    decrement: function() {
        this.setState({
            counter: this.state.counter - 1
        })
    },
    ComponentWillMount: function() {
        console.log('These methods are considered legacy and you should avoid them in new code')
    },
    render: function() {
        return React.createElement('div', {}, React.createElement('div', {
            onClick: this.increment
        }, React.createElement('span', {}, "licznik+")), React.createElement('div', {
            onClick: this.decrement
        }, React.createElement('span', {}, "licznik-")), React.createElement('span', {}, "aktualny stan: " + this.state.counter));
    },
    ComponentDidMount: function() {

        console.log('render() będzie wywołany dwukrotnie - uzytkownik nie zobaczy stanu pośredniego')
    },
    componentWillReceiveProps: function() {

        console.log('otzymanie nowych wartości propsów np z serwera(?)')
    },

    shouldComponentUpdate: function() {

        console.log('sprawdzenie czy nowe wartości maja wpływ na zachowanie  komponentu - jeśli true następną metodą jest render() ')
    },

  
    componentDidUpdate: function() {

        console.log('analogicznie do ComponentDidMount()')
    },

    componentWillUnmount: function() {

        console.log('usunięcie elementu')
    },


})
var element = React.createElement(Counter);
var counters = React.createElement(Counter);
ReactDOM.render(element, document.getElementById('element'));
ReactDOM.render(counters, document.getElementById('counters'));