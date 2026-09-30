ONE-MONTH ANNIVERSARY WEBSITE

FILES
-----
index.html  = text and page structure
style.css   = colours, layout, fonts and appearance
script.js   = counter, buttons, hearts and interactions
images/     = put JPG/PNG/WebP photos here
videos/     = put MP4 videos here
music/      = optional background MP3

START
-----
1. Open this whole folder in VS Code.
2. Open index.html.
3. Search for "EDIT ZONE" to jump between things meant to be changed.
4. Put your photos in images/ and videos in videos/.
5. Rename files simply: photo1.jpg, photo2.jpg, video1.mp4, etc.
6. To preview, install VS Code "Live Server", then right-click index.html > Open with Live Server.

PHOTO EXAMPLE
-------------
Replace:
<div class="media-placeholder">Add images/photo1.jpg</div>

With:
<img src="images/photo1.jpg" alt="Us">

VIDEO EXAMPLE
-------------
<video controls playsinline preload="metadata">
  <source src="videos/video1.mp4" type="video/mp4">
</video>

IMPORTANT FOR VIDEO
-------------------
Large MP4 files make a GitHub Pages site slow. Compress large videos before deployment.
GitHub also blocks individual files over 100 MB through normal Git pushes.

MUSIC
-----
Put your MP3 in music/ and rename it:
our-song.mp3

Then it will attempt to play after the visitor presses "Open Our Story".
