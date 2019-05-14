/* - ComponentWillMount => componentWillMount. ta metoda będzie wywalona w wersji 17.0.0 
ale obiecnie mozemy z niej korzystac (zmieniłam)
- ComponentDidMount => componentDidMount, ta metoda nie oznacza, ze "render' zostanie
 wywolany dwukrotnie - stanie sie tak, jesli wywolasz w niej setState.
  dodatkowo - ten hook nadaje sie do pracy z drzewem DOM bo mamy pewnosc, ze juz istnieje
componentWillReceiveProps - nowe propsy pochodzą najczęściej od nadrzędnego elementu :)
- render z reguly daje sie na samym koncu

dodatkowo, zamiast tworzyc dwie zmienne i przypisywac do niech dwa razy createElement(Counter) - stworz 
jednego diva z kilkoma komponentami Counter jako dziećmi - efekt bedzie identyczny
 */
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
            counter: this.state.counter +1
        })
        console.log(this.state)
    },
    decrement: function() {
        this.setState({
            counter: this.state.counter -1
        })
        console.log(this.state)
    },
    componentWillMount: function() {
        console.log('metoda wywoływana przed renderowaniem elementu - zmiana stanu w tym momencie nie powoduje przerenderowania obiektu')
    },
    
    componentDidMount: function() {

        console.log('na tym etapie komponent ma swoją reprezentację w drzewie DOM - można wysyłać żądania i aktualizować stan')
    },
    componentWillReceiveProps: function() {

        console.log('otzymanie nowych wartości propsów- najczęściej pochodzących od nadrzędnego elementu')
    },

    shouldComponentUpdate: function() {

        console.log('sprawdzenie czy nowe wartości maja wpływ na zachowanie  komponentu - jeśli true następną metodą jest render() ')
        return true
    },

  
    componentDidUpdate: function() {

        console.log('analogicznie do ComponentDidMount()')
    },

    componentWillUnmount: function() {

        console.log('usunięcie elementu')
    },
    render: function() {
        return React.createElement('div', {}, React.createElement('div', {
            onClick: this.increment
        }, React.createElement('span', {}, "licznik+")), React.createElement('div', {
            onClick: this.decrement
        }, React.createElement('span', {}, "licznik-")), React.createElement('span', {}, "aktualny stan: " + this.state.counter));
    }


})
var element = React.createElement('div', {}, 
    React.createElement(Counter), React.createElement(Counter));

ReactDOM.render(element, document.getElementById('element'));


