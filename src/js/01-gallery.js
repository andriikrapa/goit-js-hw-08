// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

//console.log(galleryItems);

const galleryRef = document.querySelector('.gallery');
const GalleryCardsMurkup = createGalleryCardsMarkup(galleryItems);

galleryRef.insertAdjacentHTML("beforeend", GalleryCardsMurkup);

function createGalleryCardsMarkup(galleryItems) {
    return galleryItems
        .map(({preview, original, description, }) => {
            return `
                <a class="gallery__item" href="${original}">
                    <img class="gallery__image" src="${preview}" alt="${description}" />
                </a>
                `;
        })
        .join('');
}

var lightbox = new SimpleLightbox('.gallery a', { captionsData: "alt", captionDelay: 250 });