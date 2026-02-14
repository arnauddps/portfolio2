# Photo and Video Gallery

A simple static website for displaying photos and videos in a gallery layout.

## Features
- Responsive gallery layout
- Displays images and videos
- Basic styling

## Usage
1. Open `index.html` in your web browser to view the gallery.
2. To add your own photos: Replace the `src` attributes in the `<img>` tags with paths to your image files (e.g., `src="myphoto.jpg"`).
3. To add videos: Replace the `src` in the `<video>` tag with your video file path.
4. Customize the styling in `style.css` as needed.

## Running Locally
Since this is a static site, you can open `index.html` directly in a browser. For a better experience or if you have many files, consider running a local server.

On Windows, you can use Python to start a simple HTTP server:
1. Ensure Python is installed.
2. Open a terminal in the project folder.
3. Run: `python -m http.server 8000`
4. Open `http://localhost:8000` in your browser.

## Future Enhancements
- Add more media
- Improve design and animations
- Add upload functionality (requires backend)
