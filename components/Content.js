import Content from "./component/Content.js";
import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';
import axios from 'axios';
import AppCard from './AppCard';

class Content extends Component {
    constructor(props) {
        super(props);
        this.state = { loading: true, data: {} }
    }


    componentWillMount() {
        axios.get('#')
            .then(response => {
                this.setState({ data: response.data.payload }, () => {
                    this.setState({ loading: false });
                })
            })
            .catch(err => {
                console.log(err)
            })
    }


    render() {
        if (this.state.loading) {
            return (
                <div>Loading</div>
            )
        } else {
            return (
                <Grid columns={3} >
                    {this.state.data.map(data => {
                        return (
                            <Grid.Row key={data.Title}>
                                <AppCard data={data} />
                            </Grid.Row>
                        )
                    })}
                </Grid>
            )
        }
    }
}

export default Content;