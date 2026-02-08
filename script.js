const aboutMe = document.querySelector('.about-me');
let angle = 0;

function animate() {
    angle += 1; // adjust speed by changing this value
    aboutMe.style.setProperty('--angle', angle + 'deg');
    requestAnimationFrame(animate);
}

animate();

// Music Player Data - Add your music here
const musicList = {
    "dnd": [
        { name: "Saltmarsh", link: "https://www.youtube.com/embed/Ik7oFeF06-s" },
        { name: "We are Sailors", link: "https://www.youtube.com/embed/RKmQIJ92HLc" },
        { name: "Leaving the Town", link: "https://www.youtube.com/embed/ApNdxHO84Ns" }
    ],
    "tda": [
        { name: "Electro Swing Emote", link: "https://www.youtube.com/embed/4WL25Xpbvw4" },
        { name: "Void Master Null", link: "https://www.youtube.com/embed/CUBj398OyYk" },
        { name: "Defrosted", link: "https://www.youtube.com/embed/fQ9dvUsjt0k" },
        { name: "Agression", link: "https://www.youtube.com/embed/xGfpO3TvNgg" },
        { name: "Edge of Tomorrow", link: "https://www.youtube.com/embed/hCWw0qeRqh0" },
        { name: "Winter Lobby Theme", link: "https://www.youtube.com/embed/W72QEloxLs0" }
    ],
    "pure-mess": [
        { name: "Curse of the Crypt", link: "https://www.youtube.com/embed/i6fq7ubGBDg" },
        { name: "Echoes of Shadowglass", link: "https://www.youtube.com/embed/nwK4phkEX9I" },
        { name: "Challenge Begins", link: "https://www.youtube.com/embed/zesuq9aLeV0" },
        { name: "Fantasy Mashup", link: "https://www.youtube.com/embed/Co0--otB2C8" },
        { name: "Jeff's Jingle (Remix)", link: "https://www.youtube.com/embed/M4Jy47PVTb4" },
        { name: "Melody Breaker", link: "https://www.youtube.com/embed/OlUuTDeFum8" },
        { name: "Neon Ravine", link: "https://www.youtube.com/embed/J6pjz2AGImg" },
        { name: "Secrets of Lyrra", link: "https://www.youtube.com/embed/5wQT0Z2rDWY" },
        { name: "The day D", link: "https://www.youtube.com/embed/LoBiiZP1SRA" },
        { name: "New Horizon", link: "https://www.youtube.com/embed/SCl2jynpZig" },
        { name: "Void", link: "https://www.youtube.com/embed/INHbrCCb2oU" }
    ]
};

// Modal elements
const modal = document.getElementById('music-modal');
const closeBtn = document.querySelector('.close-btn');
const videoPlaceholder = document.getElementById('video-placeholder');
const songListContainer = document.getElementById('song-list');
const openMusicBtns = document.querySelectorAll('.open-music-btn');

// Open modal with project songs
openMusicBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const projectKey = btn.dataset.project;
        const songs = musicList[projectKey];
        
        if (songs) {
            // Clear previous song list
            songListContainer.innerHTML = '';
            
            // Create song items
            songs.forEach((song, index) => {
                const songItem = document.createElement('div');
                songItem.className = 'song-item';
                songItem.textContent = song.name;
                songItem.dataset.link = song.link;
                
                songItem.addEventListener('click', () => {
                    // Remove active class from all songs
                    document.querySelectorAll('.song-item').forEach(item => {
                        item.classList.remove('active');
                    });
                    
                    // Add active class to clicked song
                    songItem.classList.add('active');
                    
                    // Embed video
                    videoPlaceholder.innerHTML = `<iframe src="${song.link}" allow="encrypted-media" allowfullscreen></iframe>`;
                });
                
                songListContainer.appendChild(songItem);
            });
            
            // Reset video placeholder
            videoPlaceholder.innerHTML = 'Click a song to play';
            
            // Show modal
            modal.style.display = 'block';
        }
    });
});

// Close modal
closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
    videoPlaceholder.innerHTML = 'Click a song to play';
});

// Close modal when clicking outside
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
        videoPlaceholder.innerHTML = 'Click a song to play';
    }
});
