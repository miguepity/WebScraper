import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import './scraper.css';
import axios from 'axios';

class Scraper extends Component {
    constructor() {
        super();
        this.state = ({
            url: 'http://hondutronics.com',
            html: 'HTML scraped'
        });
    }

    render() {
        const search = (
            <div className="container">
                <div className="input-group input-group-lg">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="inputGroup-sizing-lg">URL</span>
                    </div>
                    <input  type="text" 
                            className="form-control" 
                            aria-label="Sizing example input" 
                            aria-describedby="inputGroup-sizing-lg"
                            value={this.state.url} 
                            onChange={this.setUrl.bind(this)}
                            />
                    <div className="input-group-append">
                        <button className="btn btn-outline-secondary" 
                                type="button" 
                                id="button-addon2" 
                                onClick={this.sendUrl.bind(this)}
                            >
                                Scrap
                        </button>
                    </div>
                </div>
                <div>
                    <textarea className="result" rows="15" cols="120" value={this.state.html}></textarea>
                </div>
            </div>
        );
        return (
            <div>
                {search}
            </div>
        );
    }

    setUrl(evt){
        this.setState({
            ...this.state,
            url: evt.target.value
        });
    }

    sendUrl(){
        axios.get('http://localhost:8081/scrape', {
            params: {url: this.state.url}
        }).then( (response) => {
            this.setState({
                ...this.state,
                html: response.data
            });
        });
    }
}

export default Scraper;
