// Get the DOM elements for the image carousel
const wrapper = $(".wrapper"),
  carousel = $(".carousel"),
  images = $("img"),
  buttons = $(".button");

let imageIndex = 0,
  intervalId;

// Define function to start automatic image slider
const autoSlide = () => {
  // Start the slideshow by calling slideImage() every 2 seconds
  intervalId = setInterval(() => slideImage(++imageIndex), 2000);
};
// Call autoSlide function on page load
autoSlide();

// A function that updates the carousel display to show the specified image
const slideImage = () => {
  // Calculate the updated image index
  imageIndex = imageIndex === images.length ? 0 : imageIndex < 0 ? images.length - 1 : imageIndex;
  // Update the carousel display to show the specified image
  carousel.css("transform", translate(-${imageIndex * 100}%));
};

// A function that updates the carousel display to show the next or previous image
const updateClick = (e) => {
  // Stop the automatic slideshow
  clearInterval(intervalId);
  // Calculate the updated image index based on the button clicked
  imageIndex += e.target.id === "next" ? 1 : -1;
  slideImage(imageIndex);
  // Restart the automatic slideshow
  autoSlide();
};

// Add event listeners to the navigation buttons
buttons.on("click", updateClick);

// Add mouseover event listener to wrapper element to stop auto sliding
wrapper.on("mouseover", () => clearInterval(intervalId));
// Add mouseleave event listener to wrapper element to start auto sliding again
wrapper.on("mouseleave", autoSlide);