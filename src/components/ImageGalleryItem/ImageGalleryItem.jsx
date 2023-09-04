import { Modal } from "components/Modal/Modal";
import { Component } from "react"
import { ImageContainer,Image, ImageModal } from "./ImageGalleryItem.styled";


class ImageGalleryItem extends Component {

    state = {
        showModal: false,
    }

    toggleModal = () => {
    this.setState(({showModal})=>({showModal:!showModal}))
}

    render() {
        const{showModal}=this.state
        const { item } = this.props;
        const { webformatURL, tags,largeImageURL } = item
        return (
            <>
                <ImageContainer>
                    <Image src={webformatURL} alt={tags} onClick={ this.toggleModal} />   
                    
                    {showModal && <Modal onClose={this.toggleModal}  >
                        <ImageModal src={largeImageURL} alt={tags} /></Modal>
                        }
                </ImageContainer>

            </>
        )
    }

}

export default ImageGalleryItem