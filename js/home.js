// ✅ Function to generate unique ID
function generateID() {
    return Math.random().toString(36).substring(2, 12);
}

// ✅ Array of videos (with updated titles, thumbnails, and channel name)
const videos = [
    {
        videoId: generateID(),
        thumbnail: "https://picsum.photos/400/225?random=1",
        channelIcon: "https://picsum.photos/50?random=11",
        title: "Build a YouTube Clone from Scratch | HTML CSS JS",
        channelName: "Code With Me",
        views: "1.5M views",
        time: "2 days ago",
    },
    {
        videoId: generateID(),
        thumbnail: "https://picsum.photos/400/225?random=2",
        channelIcon: "https://picsum.photos/50?random=12",
        title: "Master JavaScript DOM in 30 Minutes",
        channelName: "Code With Me",
        views: "900K views",
        time: "5 days ago",
    },
    {
        videoId: generateID(),
        thumbnail: "https://picsum.photos/400/225?random=3",
        channelIcon: "https://picsum.photos/50?random=13",
        title: "Responsive Navbar with Flexbox & Media Queries",
        channelName: "Code With Me",
        views: "780K views",
        time: "1 week ago",
    },
    {
        videoId: generateID(),
        thumbnail: "https://picsum.photos/400/225?random=4",
        channelIcon: "https://picsum.photos/50?random=14",
        title: "Learn HTML in 15 Minutes (Beginner Friendly)",
        channelName: "Code With Me",
        views: "2M views",
        time: "3 days ago",
    },
    {
        videoId: generateID(),
        thumbnail: "https://picsum.photos/400/225?random=5",
        channelIcon: "https://picsum.photos/50?random=15",
        title: "CSS Animations & Transitions Explained",
        channelName: "Code With Me",
        views: "1.1M views",
        time: "6 days ago",
    },
];

// ✅ DOM elements
const videoContainer = document.getElementById('video-container');
const loadingSpinner = document.getElementById('loading-spinner');

// ✅ Load and render videos
function loadVideo() {
    videos.forEach(video => {
        const videoDiv = document.createElement('div');
        videoDiv.classList.add('video');

        videoDiv.innerHTML = `
            <img src="${video.thumbnail}" class="thumbnail" alt="Video Thumbnail">
            <div class="content"> 
                <img src="${video.channelIcon}" class="channel-icon" alt="Channel Icon">
                <div class="info">
                    <h4 class="title">${video.title}</h4>
                    <p class="channel-name">${video.channelName}</p>
                    <p class="views-time">${video.views} • ${video.time}</p>
                </div>
            </div>
        `;

        videoDiv.addEventListener('click', () => {
            window.location.href = `video.html?videoId=${video.videoId}`;
        });

        videoContainer.appendChild(videoDiv);
    });
}

// ✅ On window load
window.onload = function () {
    setTimeout(() => {
        loadingSpinner.style.display = 'none';
        loadVideo();
    }, 3000);
};
