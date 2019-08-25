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
    constructor (){
        super()
        this.state = {
            description: true
        };
        
    }
    descriptionToggle() {
        this.setState({
            description: !this.state.description
        })
    }
    render() {
        let description = <div></div>;

        if (this.state.descriptionToggle) {
           let description = <p>{this. props.itemData. description}</p>
        };
        
        return (
            <div className="photoBox">
                <img src ={this.props.itemData.path} />
                <button
                    onCLick={this.clickChangeHandler.bind(this)}
                 >
                     Like
                </button>
                {description}
                 
        
            </div>
        );
    }
}

export default GalleryItem;