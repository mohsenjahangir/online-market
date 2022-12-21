import { useEffect } from 'react';
import { GrLinkTop } from 'react-icons/gr'

export default function ScrollButton() {
  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  return (
    <div>
      <div style={{ height: '' }} />

      {/* 👇️ scroll to top on button click */}
      <button
        onClick={() => {
          window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
        }}
        style={{
          position: 'fixed',
          padding: '1rem 2rem',
          fontSize: '20px',
          bottom: '40px',
          right: '40px',
          backgroundColor: '#0C9',
          color: '#fff',
          textAlign: 'center',
          borderRadius:'01pc',
        }}
      >
        Top<GrLinkTop />
      </button>
    </div>
  );
}


