
function generateID() {
    return Math.random().toString(36).substring(2, 12);
}


const videos = [
       {
        videoId: generateID(),
        thumbnail: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=225&fit=crop",
        channelIcon: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=50&h=50&fit=crop&crop=center",
        title: "Build a YouTube Clone from Scratch | HTML CSS JS",
        channelName: "Master Class With Vaishnav",
        views: "1.5M views",
        time: "2 days ago",
    },
    {
        videoId: generateID(),
        thumbnail: "https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?w=400&h=225&fit=crop",
        channelIcon: "https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?w=50&h=50&fit=crop&crop=center",
        title: "Master JavaScript DOM in 30 Minutes",
        channelName: "Master Class With Vaishnav",
        views: "900K views",
        time: "5 days ago",
    },
    {
        videoId: generateID(),
        thumbnail: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=225&fit=crop",
        channelIcon: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=50&h=50&fit=crop&crop=center",
        title: "Responsive Navbar with Flexbox & Media Queries",
        channelName: "Master Class With Vaishnav",
        views: "780K views",
        time: "1 week ago",
    },
    {
        videoId: generateID(),
        thumbnail: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=400&h=225&fit=crop",
        channelIcon: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=50&h=50&fit=crop&crop=center",
        title: "Learn HTML in 15 Minutes (Beginner Friendly)",
        channelName: "Master Class With Vaishnav",
        views: "2M views",
        time: "3 days ago",
    },
    {
        videoId: generateID(),
        thumbnail: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=225&fit=crop",
        channelIcon: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop&crop=center",
        title: "CSS Animations & Transitions Explained",
        channelName: "Master Class With Vaishnav",
        views: "1.1M views",
        time: "6 days ago",
    },
    {
        videoId: generateID(),
        thumbnail: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=225&fit=crop",
        channelIcon: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=50&h=50&fit=crop&crop=center",
        title: "React Hooks Complete Tutorial | useState, useEffect & More",
        channelName: "Master Class With Vaishnav",
        views: "2.8M views",
        time: "4 days ago",
    },
    {
        videoId: generateID(),
        thumbnail: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=400&h=225&fit=crop",
        channelIcon: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=50&h=50&fit=crop&crop=center",
        title: "Node.js Express Server Setup in 20 Minutes",
        channelName: "Master Class With Vaishnav",
        views: "1.2M views",
        time: "1 week ago",
    },
    {
        videoId: generateID(),
        thumbnail: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=225&fit=crop",
        channelIcon: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=50&h=50&fit=crop&crop=center",
        title: "Bootstrap 5 Complete Guide | Build Modern Websites",
        channelName: "Master Class With Vaishnav",
        views: "850K views",
        time: "6 days ago",
    },
    {
        videoId: generateID(),
        thumbnail: "https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?w=400&h=225&fit=crop",
        channelIcon: "https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?w=50&h=50&fit=crop&crop=center",
        title: "SQL Database Design & Optimization Masterclass",
        channelName: "Master Class With Vaishnav",
        views: "950K views",
        time: "3 days ago",
    },
    {
        videoId: generateID(),
        thumbnail: "https://images.unsplash.com/photo-1581276879432-15e50529f34b?w=400&h=225&fit=crop",
        channelIcon: "https://images.unsplash.com/photo-1581276879432-15e50529f34b?w=50&h=50&fit=crop&crop=center",
        title: "Python Web Scraping with BeautifulSoup | Complete Tutorial",
        channelName: "Master Class With Vaishnav",
        views: "1.7M views",
        time: "5 days ago",
    },
    {
        videoId: generateID(),
        thumbnail: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=225&fit=crop",
        channelIcon: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=50&h=50&fit=crop&crop=center",
        title: "Git & GitHub for Beginners | Version Control Made Easy",
        channelName: "Master Class With Vaishnav",
        views: "3.2M views",
        time: "1 day ago",
    },
    {
        videoId: generateID(),
        thumbnail: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=400&h=225&fit=crop",
        channelIcon: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=50&h=50&fit=crop&crop=center",
        title: "MongoDB Atlas Setup & CRUD Operations",
        channelName: "Master Class With Vaishnav",
        views: "680K views",
        time: "1 week ago",
    },
    {
        videoId: generateID(),
        thumbnail: "https://images.unsplash.com/photo-1555952494-efd681c7e3f9?w=400&h=225&fit=crop",
        channelIcon: "https://images.unsplash.com/photo-1555952494-efd681c7e3f9?w=50&h=50&fit=crop&crop=center",
        title: "Docker Containers Explained | DevOps Essentials",
        channelName: "Master Class With Vaishnav",
        views: "1.4M views",
        time: "4 days ago",
    },
    {
        videoId: generateID(),
        thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=225&fit=crop",
        channelIcon: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=50&h=50&fit=crop&crop=center",
        title: "Data Structures & Algorithms | Interview Preparation",
        channelName: "Master Class With Vaishnav",
        views: "2.1M views",
        time: "2 days ago",
    },
    {
        videoId: generateID(),
        thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=225&fit=crop",
        channelIcon: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=50&h=50&fit=crop&crop=center",
        title: "Machine Learning with Python | Scikit-learn Tutorial",
        channelName: "Master Class With Vaishnav",
        views: "1.9M views",
        time: "6 days ago",
    },
    {
        videoId: generateID(),
        thumbnail: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=225&fit=crop",
        channelIcon: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=50&h=50&fit=crop&crop=center",
        title: "Cybersecurity Fundamentals | Ethical Hacking Basics",
        channelName: "Master Class With Vaishnav",
        views: "1.3M views",
        time: "1 week ago",
    },
];


const videoContainer = document.getElementById('video-container');
const loadingSpinner = document.getElementById('loading-spinner');


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

window.onload = function () {
    setTimeout(() => {
        loadingSpinner.style.display = 'none';
        loadVideo();
    }, 3000);
};
