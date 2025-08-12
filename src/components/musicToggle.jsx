import { useState, useEffect, useRef } from 'react';
import bgMusicFile from '../../public/audio/lio.mp3';

const MusicToggle = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(null);

    // Create the Audio object only once
    useEffect(() => {
        audioRef.current = new Audio(bgMusicFile);
        audioRef.current.loop = true; // Make music loop
        audioRef.current.volume = 0.5; // Set volume (0.0 - 1.0)
    }, []);

    const toggleMusic = () => {
        if (!audioRef.current) return;

        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    return (
        <button
            onClick={toggleMusic}
            style={{
                position: 'fixed',
                top: '20px',
                right: '20px',
                padding: '8px 12px',
                background: isPlaying ? '#ff4b4b' : '#4caf50',
                color: '#fff',
                border: 'none',
                borderRadius: '6px',
                cursor: 'pointer'
            }}
        >
            {isPlaying ? 'Pause Music' : 'Play Music'}
        </button>
    );
};

export default MusicToggle;
