class Carousel {
    constructor(rideElement) {
        this.rideElement = rideElement;
        this.leftButton = this.rideElement.querySelector('.left-button');
        this.rightButton = this.rideElement.querySelector('.right-button');
        this.images = this.rideElement.querySelectorAll('.carousel img');
        this.leftButton.addEventListener ('click', () => {
            this.toggleContent();
        })
        this.rightButton.addEventListener ('click', () => {
            this.toggleContent();
        })

    }

    toggleContent() {
        
    }
}

let carousel = document.querySelector('.carousel').forEach( ride => new Carousel(ride));

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the laft and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

