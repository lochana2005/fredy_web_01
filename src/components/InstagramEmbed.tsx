import React, { useEffect } from 'react';

interface InstagramEmbedProps {
  url: string;
}

const InstagramEmbed: React.FC<InstagramEmbedProps> = ({ url }) => {
  useEffect(() => {
    const scriptId = 'instagram-embed-script';
    const existing = document.getElementById(scriptId) as HTMLScriptElement | null;

    const processEmbeds = () => {
      try {
        // @ts-ignore - Instagram's embed script attaches to window
        window.instgrm?.Embeds?.process?.();
      } catch {}
    };

    if (!existing) {
      const s = document.createElement('script');
      s.id = scriptId;
      s.async = true;
      s.defer = true;
      s.src = 'https://www.instagram.com/embed.js';
      s.onload = processEmbeds;
      document.body.appendChild(s);
    } else {
      processEmbeds();
    }
  }, [url]);

  // Sanitize URL (remove trailing quotes/spaces)
  const permalink = url.replace(/"+$/g, '').trim();

  return (
    <section id="instagram" className="py-16 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-primary">Instagram Reel</h2>
          <p className="text-muted-foreground">Direkt von unserem Instagram</p>
        </div>
        <div className="max-w-2xl mx-auto">
          <blockquote
            className="instagram-media"
            data-instgrm-permalink={permalink}
            data-instgrm-version="14"
          >
            <a href={permalink} target="_blank" rel="noopener noreferrer">
              Auf Instagram ansehen
            </a>
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default InstagramEmbed;
