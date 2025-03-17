import React, { useState } from 'react';
import reactLogo from "../assets/react.svg";
import githubLogo from "../assets/github.svg";
import vueLogo from "../assets/vue.svg";
import Popover from '../components/Popover';

const styles = {
  content: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageWrapper: {
    margin: '0 10px',
    position: 'relative' as 'relative',
  },
  image: {
    width: '50px',
    height: '50px',
  },
};

export default function Home() {
  const [popoverVisible, setPopoverVisible] = useState(false);
  const [popoverContent, setPopoverContent] = useState<React.ReactNode>(null);

  const handleImageClick = (content: React.ReactNode) => {
    setPopoverContent(content);
    setPopoverVisible(true);
  };

  const handleClosePopover = () => {
    setPopoverVisible(false);
  };

  const handleSourceCodeClick = (url: string) => {
    window.open(url, '_blank');
  };

  return (
    <div className="project_presentation" style={styles.content}>
      <div style={styles.content}>
        <div style={styles.imageWrapper}>
          <img
            src={githubLogo}
            alt="GitHub Logo"
            style={styles.image}
            onClick={() => handleImageClick(
              <div>
                GitHub Logo Content
                <button onClick={() => handleSourceCodeClick('https://github.com/Pousset')}>Afficher le code source</button>
              </div>
            )}
          />
        </div>
        <div style={styles.imageWrapper}>
          <img
            src={reactLogo}
            alt="React Logo"
            style={styles.image}
            onClick={() => handleImageClick(
              <div>
                React Logo Content
                <button onClick={() => handleSourceCodeClick('https://github.com/Pousset/REACT_PROJECT')}>Afficher le code source</button>
              </div>
            )}
          />
        </div>
        <div style={styles.imageWrapper}>
          <img
            src={vueLogo}
            alt="Vue Logo"
            style={styles.image}
            onClick={() => handleImageClick(
              <div>
                Vue Logo Content
                <button onClick={() => handleSourceCodeClick('https://github.com/Pousset/REACT_PROJECT')}>Afficher le code source</button>
              </div>
            )}
          />
        </div>
      </div>
      <Popover
        content={popoverContent}
        isVisible={popoverVisible}
        onClose={handleClosePopover}
      />
    </div>
  );
}
