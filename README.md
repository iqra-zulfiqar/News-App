**News Magazine**
A React-based news application that fetches and displays the latest news headlines using the News API. The app allows users to select different news categories and view articles tailored to their preferences.

**Features**
Dynamic News Categories: Choose from various categories like general, business, sports, etc.

Live Updates: Fetches the latest articles from the News API based on the selected category.

Responsive Design: Optimized for both desktop and mobile devices.

Default Image Handling: Uses a default placeholder image when no image is available for an article.

"Read More" Links: Redirects users to the full news article.

**Tech Stack**

Frontend: React, Vite

Styling: CSS

API: News API

**Components**

App.js: Manages state and renders the Navbar and NewsBoard components.

Navbar: Allows users to change the news category.

NewsBoard: Fetches news articles based on the selected category and displays them using NewsItem components.

NewsItem: Displays individual news articles with a title, description, image, and link.
