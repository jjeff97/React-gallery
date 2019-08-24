import React, { Component } from 'react';
import GalleryItem from '../GalleryItem/GalleryItem';

class GalleryList extends Component {
    render() {
        const GalleryElements = this.props.list.map((path, descriptions) => {
            return  <GalleryItem
                        key={index}
                        getGalleriesCallback={this.props.getGalleriesCallback}
                        itemData={gallery}
                    />;
        });
        console.log(GalleryElements);

        return (
            <ul>
                {GalleryElements}
            </ul>
        );
    }
}

export default GalleryList;