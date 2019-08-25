import React, { Component } from 'react';
import axios from 'axios';

class GalleryItem extends Component {
    revealDescription(galleryId) {
        axios({
            method: 'PUT',
            url: `/gallery/${galleryId}`,
        })

            .then((response) => {
                console.log('GET gallery: ', response);
                this.props.getGalleryCallback()
            })
            .catch((err) => {
                console.log('GET error: ', err);
                alert('You Failed!!!');
            });
    }
    state = {
        descriptionToggle: false
    }

    clickChangeHandler = (event) => {
        if (this.state.descriptionToggle) {
            this.setState({
                descriptionToggle: false
            })
        } else {
            this.setState({
                descriptionToggle: true
            })
        }


    }

    
    render() {
        let description = <div></div>;

        if (this.state.descriptionToggle) {
            let description = <p>{this.props.itemData.description}</p>
        };

        return (
            <li>Photo: {this.props.itemData.description}
                <img src={this.props.itemData.path} />
                <button
                    onCLick={this.clickChangeHandler}
                >
                    Like
                </button>
                {description}
            </li>
        );
    }
}

export default GalleryItem;