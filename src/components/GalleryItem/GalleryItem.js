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

    clickChangeHandler = (event) => {
        
        this.revealDescription(this.props.itemData.description);
        
    }


    render() {
        
        return (
            <li>Photo: {this.props.itemData.path}
                <button
                    onClick={this.clickChangeHandler}
                >
                    Like
                </button>
            </li>
        );
    }
}

export default GalleryItem;