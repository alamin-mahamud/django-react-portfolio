import React, { Component } from 'react';

class Books extends Component {
        constructor(props) {
                super(props);
                this.state = {
                        'data': [],
                        'placeholder': "Nothing to show",
                        'loaded': false,
                };
        }

        componentDidMount() {
                const endPoint = "http://localhost:8000/api/books?format=json"
                fetch(endPoint, { mode: 'no-cors' })
                        .then(response => {
                                console.log(response.status)
                                if (response.status !== 200) {
                                        return this.setState({
                                                placeholder: "Something went wrong!"
                                        });
                                }
                                return response.json();
                        })
                        .then(data => {
                                console.log('logging')
                                console.log(data)
                                this.setState({
                                        data: data,
                                        loaded: true
                                });
                        });
        }

        render() {
                const { loaded, placeholder } = this.state;
                return loaded ? <p>Loaded</p> : <p>{placeholder}</p>;
        }
}

export default Books;