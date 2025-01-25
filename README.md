# Per Scholas SBA 320H - React Web Application

![Per Scholas SBA 320H](https://res.cloudinary.com/dnc7potxo/image/upload/v1737829355/ReadMe-Images/Purrtraits/main.png)
<br><br>

Welcome to SBA 320H, where I created , [Purrtraits](https://su-t-purrtraits.netlify.app/), a simple and delightful web application that lets users browse through an endless collection of adorable cat images. This project is built as part of a Per Scholas assignment to showcase the practical application of React, JavaScript, and external APIs.

<br>

## Features

- **Infinite Scrolling**: Users can endlessly scroll to discover more random cat images.
- **Responsive Layout**: Images are displayed in an aesthetically pleasing, column-based layout.
- **Minimalistic Design**: A clean, cute, and user-friendly interface.

<br>

## Implementation Details

### Data Fetching

- The application fetches cat images from [The Cat API](https://thecatapi.com) using Axios.
- Initial images are fetched when the page loads (via `useEffect`).
- Additional images are fetched and appended as the user scrolls down, using the `IntersectionObserver` API.

### Layout

- Images are divided into multiple columns to create a visually appealing masonry-like grid.
- The design is responsive, adapting seamlessly to different screen sizes.

### Infinite Scroll

- New images are dynamically fetched and appended to the current display when the user reaches the bottom of the page.
- This functionality is implemented using React hooks (`useEffect`) and `IntersectionObserver` for performance optimization.

<br>

## Design

Purrtraits embraces a **minimalistic and cute aesthetic** to highlight the charm of the cat images. The layout and styling are intentionally kept simple to ensure a smooth browsing experience.

<br>

## Technologies Used

- **Frontend Framework**: React
- **Styling**: CSS and Styled-Components
- **Data Fetching**: Axios
- **External API**: [The Cat API](https://thecatapi.com)

<br>

## Acknowledgments

Special thanks to [The Cat API](https://thecatapi.com) for providing the adorable cat images that make this project possible.

<br>

## Feedback

Feedback to improve this project is welcome. If you have any suggestions or would like to collaborate, please get in touch with me on [GitHub](https://github.com/SutheeDev). Thanks!
