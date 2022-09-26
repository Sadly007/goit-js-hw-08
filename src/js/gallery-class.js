import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
export class Gallery{
    constructor(galleryItems){
        this.galleryItems=galleryItems;
        this.rootRef = document.querySelector(".gallery");
    }
    createGallery(){
         this.galleryItems.map((item) => {
          const { preview, original, description } = item;
            const imgElem=document.createElement("img");
            imgElem.src=preview;
            imgElem.alt=description;
            imgElem.classList.add("gallery__image")
            imgElem.setAttribute("data-source", original)
            const aElem=document.createElement("a");
            aElem.href=original;
            aElem.classList.add("gallery__link")
            aElem.append(imgElem);
            const divElem=document.createElement("div");
            divElem.append(aElem)
            divElem.classList.add("gallery__item")
            this.rootRef.append(divElem)
        });    
    }
    galerySimplebox(){
        const gallery = new SimpleLightbox('.gallery a',
        {
          captionsData:"alt",
          captionDelay:250,
        });  
    }
    init(){
     this.createGallery()
     this.galerySimplebox()   
    }
    
    }


    