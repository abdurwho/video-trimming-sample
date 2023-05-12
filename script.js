// Wait for the DOM to finish loading before running the code
document.addEventListener('DOMContentLoaded', function() {
  // Get references to the video element and the trim button
  const video = videojs('video');
  const trimBtn = document.querySelector('#trim-btn');

  // Add an event listener to the trim button to handle trimming the video
  trimBtn.addEventListener('click', function() {
    // Get the start and end times from the text inputs
    const startTime = document.querySelector('#start-time').value;
    const endTime = document.querySelector('#end-time').value;

    // Use the built-in Video.js method to trim the video
    const trimmedSource = video.src({
      type: 'video/mp4',
      src: video.currentSrc(),
      withCredentials: false,
      currentTime: startTime,
      endTime: endTime
    });

    // Update the video source with the trimmed source
    video.src(trimmedSource);

    // Show the download link
    const downloadLink = document.querySelector('#download-link');
    downloadLink.href = trimmedSource.src;
    downloadLink.style.display = 'inline';
  });
});
