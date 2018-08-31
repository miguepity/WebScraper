import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import './scraper.css';

class Scraper extends Component {
    constructor() {
        super();
        this.state = ({
            url: 'dsf '
        });
    }

    render() {
        const search = (
            <div class="container">
                <div class="input-group input-group-lg">
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="inputGroup-sizing-lg">URL</span>
                    </div>
                    <input  type="text" 
                            class="form-control" 
                            aria-label="Sizing example input" 
                            aria-describedby="inputGroup-sizing-lg" 
                            value={this.state.url} 
                            onChange={this.setUrl.bind(this)}
                            />
                    <div class="input-group-append">
                        <button class="btn btn-outline-secondary" 
                                type="button" 
                                id="button-addon2" 
                                onClick={this.click.bind(this)}
                            >
                                Scrap
                        </button>
                    </div>
                </div>
                <div>

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
            url: evt.target.value
        });
    }

    click(){
        alert(this.state.url);
    }
}

export default Scraper;
