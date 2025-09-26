// import React, { useState } from 'react';
// import { Button } from '@/components/ui/button';
// import { Card, CardContent } from '@/components/ui/card';
// import Navigation from '@/components/Navigation';
// import { ArrowLeft, Play } from 'lucide-react';
// import { Link } from 'react-router-dom';

// import v1 from '@/assets/video/1.mp4';
// import v2 from '@/assets/video/2.mp4';
// import v3 from '@/assets/video/3.mp4';
// import v4 from '@/assets/video/4.mp4';
// import v5 from '@/assets/video/5.mp4';
// import v6 from '@/assets/video/6.mp4';
// import v7 from '@/assets/video/7.mp4';
// import v8 from '@/assets/video/8.mp4';
// import v9 from '@/assets/video/9.mp4';
// import v10 from '@/assets/video/10.mp4';

// // The VideoModal component is fine as it is.
// const VideoModal = ({ video, onClose }) => {
//   if (!video) return null;

//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 p-4" onClick={onClose}>
//       <div className="relative w-full max-w-md rounded-lg overflow-hidden shadow-2xl" onClick={e => e.stopPropagation()}>
//         <video
//           key={video.videoUrl}
//           controls
//           autoPlay
//           className="w-full h-full"
//         >
//           <source src={video.videoUrl} type="video/mp4" />
//           Your browser does not support the video tag.
//         </video>
//         <button
//           onClick={onClose}
//           className="absolute top-4 right-4 text-white text-3xl font-bold bg-black bg-opacity-50 rounded-full w-10 h-10 flex items-center justify-center"
//         >
//           &times;
//         </button>
//       </div>
//     </div>
//   );
// };

// const Videos = () => {
//   // 1. Missing `useState` import:
//   // The `useState` hook needs to be imported from React.
//   const [selectedVideo, setSelectedVideo] = useState(null);

//   const allVideos = [
//     {
//       title: 'Parkettverlegung Schritt für Schritt',
//       subtitle: 'Sehen Sie, wie professionell Parkett verlegt wird',
//       category: 'Parkett',
//       duration: '3:45',
//       thumbnail: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
//       videoUrl: v1,
//     },
//     {
//       title: 'Vinyl Bodenbelag Installation',
//       subtitle: 'Moderne Techniken für Vinyl-Verlegung',
//       category: 'Vinyl',
//       duration: '2:30',
//       thumbnail: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
//       videoUrl: v2,
//     },
//     {
//       title: 'Keramikplatten Verlegung',
//       subtitle: 'Präzise Arbeit mit Stein- und Keramikplatten',
//       category: 'Keramik',
//       duration: '4:20',
//       thumbnail: 'https://images.unsplash.com/photo-1582977999383-9c96cd049d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
//       videoUrl: v3,
//     },
//     {
//       title: 'Teppichverlegung im Büro',
//       subtitle: 'Professionelle Teppichverlegung für Geschäftsräume',
//       category: 'Teppich',
//       duration: '2:15',
//       thumbnail: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
//       videoUrl: v4,
//     },
//     {
//       title: 'Laminat Installation Tipps',
//       subtitle: 'Professionelle Techniken für perfekte Laminatverlegung',
//       category: 'Laminat',
//       duration: '5:10',
//       thumbnail: 'https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
//       videoUrl: v5,
//     },
//     {
//       title: 'Kork Bodenbelag Montage',
//       subtitle: 'Nachhaltige Lösungen mit natürlichem Kork',
//       category: 'Kork',
//       duration: '3:20',
//       thumbnail: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
//       videoUrl: v6,
//     },
//     {
//       title: 'Linoleum Verarbeitung',
//       subtitle: 'Hochwertige Linoleum-Installation von A bis Z',
//       category: 'Linoleum',
//       duration: '4:45',
//       thumbnail: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
//       videoUrl: v7,
//     },
//     {
//       title: 'Abdichtungsarbeiten',
//       subtitle: 'Professionelle Silikon- und Abdichtungstechniken',
//       category: 'Abdichtung',
//       duration: '2:55',
//       thumbnail: 'https://images.unsplash.com/photo-1582977999383-9c96cd049d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
//       videoUrl: v8,
//     },
//     {
//       title: 'Wandschutz Systeme',
//       subtitle: 'Innovative Lösungen für Wandschutz in Gewerberäumen',
//       category: 'Wandschutz',
//       duration: '3:30',
//       thumbnail: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
//       videoUrl: v9,
//     },
//     {
//       title: 'Reparatur Techniken',
//       subtitle: 'Fachgerechte Reparatur von Bodenbelägen',
//       category: 'Reparatur',
//       duration: '4:15',
//       thumbnail: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
//       videoUrl: v10,
//     },
//   ];

//   const openModal = (video) => {
//     setSelectedVideo(video);
//   };

//   const closeModal = () => {
//     setSelectedVideo(null);
//   };

//   return (
//     <div className="min-h-screen bg-background">
//       <Navigation />

//       <main className="py-20">
//         <div className="container mx-auto px-4">
//           <div className="flex items-center gap-4 mb-8">
//             <Link to="/">
//               <Button variant="outline" size="sm" className="gap-2">
//                 <ArrowLeft className="h-4 w-4" />
//                 Zurück zur Hauptseite
//               </Button>
//             </Link>
//           </div>

//           <div className="text-center mb-16">
//             <h1 className="text-5xl font-bold mb-6 text-primary">Video Galerie</h1>
//             <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
//               Erleben Sie unsere professionelle Arbeit in über 24 Videos. Von der Vorbereitung bis zur finalen Verlegung -
//               sehen Sie selbst, wie Qualität und Handwerkskunst in verschiedensten Projekten entstehen.
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
//             {allVideos.map((video, index) => (
//               <Card
//                 key={index}
//                 className="group hover:shadow-lg transition-all duration-300 overflow-hidden cursor-pointer"
//                 onClick={() => openModal(video)}
//               >
//                 <div className="relative aspect-video overflow-hidden">
//                   <img
//                     src={video.thumbnail}
//                     alt={video.title}
//                     className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
//                   />
//                   <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/30 transition-colors">
//                     <Button
//                       size="lg"
//                       className="bg-gold hover:bg-gold-dark text-white rounded-full p-4"
//                       onClick={(e) => { e.stopPropagation(); openModal(video); }} // 2. Add e.stopPropagation()
//                     >
//                       <Play className="w-6 h-6" />
//                     </Button>
//                   </div>
//                   <div className="absolute top-3 left-3">
//                     <span className="bg-gold text-white px-2 py-1 text-xs rounded font-medium">
//                       {video.category}
//                     </span>
//                   </div>
//                   <div className="absolute bottom-3 right-3">
//                     <span className="bg-black/70 text-white px-2 py-1 text-xs rounded">
//                       {video.duration}
//                     </span>
//                   </div>
//                 </div>
//                 <CardContent className="p-4">
//                   <h3 className="font-semibold text-primary mb-2 text-sm">{video.title}</h3>
//                   <p className="text-xs text-muted-foreground">{video.subtitle}</p>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>
//         </div>
//       </main>
//       {/* 3. The modal should be outside the main and rendered conditionally. This is already correct. */}
//       {selectedVideo && <VideoModal video={selectedVideo} onClose={closeModal} />}
//     </div>
//   );
// };

// export default Videos;



import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import { ArrowLeft, Play } from 'lucide-react';
import { Link } from 'react-router-dom';



// The VideoModal component is fine as it is.
const VideoModal = ({ video, onClose }) => {
  if (!video) return null;

  // Vimeo URL එක iframe embed format එකට සකස් කිරීම.
  // උදා: https://vimeo.com/1122282331 -> https://player.vimeo.com/video/1122282331?autoplay=1...
  const embedId = video.videoUrl.split('/').pop();
  const finalEmbedUrl = `https://player.vimeo.com/video/${embedId}?autoplay=1&title=0&byline=0&portrait=0`; 

  return (
    <div 
      // පිටත ක්ලික් කිරීමෙන් වැසීම (onClick={onClose}) ඉවත් කර ඇත.
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 p-4" 
    >
      {/* Modal එකේ උපරිම පළල max-w-7xl දක්වා වැඩි කර ඇත */}
      <div 
        className="relative w-full max-w-7xl rounded-lg overflow-hidden shadow-2xl" 
        style={{ aspectRatio: '16 / 9' }} 
        // Modal content එක ක්ලික් කළ විට event propagation නැවැත්වීමට
        onClick={e => e.stopPropagation()} 
      >
        {/* Vimeo වීඩියෝව පෙන්වීමට <iframe> භාවිතා කිරීම */}
        <iframe
          src={finalEmbedUrl}
          title={video.title}
          width="100%"
          height="100%"
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          className="w-full h-full absolute top-0 left-0"
        ></iframe>

        {/* Modal වැසීමේ බොත්තම - මෙය ක්ලික් කළ විට පමණක් වැසේ */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white text-3xl font-bold bg-black bg-opacity-50 hover:bg-black rounded-full w-10 h-10 flex items-center justify-center z-10"
        >
          &times;
        </button>
      </div>
    </div>
  );
};

const Videos = () => {
  // 1. Missing `useState` import:
  // The `useState` hook needs to be imported from React.
  const [selectedVideo, setSelectedVideo] = useState(null);

  const allVideos = [
     {
      title: 'Parkettverlegung Schritt für Schritt',
      subtitle: 'Sehen Sie, wie professionell Parkett verlegt wird',
      category: 'Parkett',
      duration: '3:10',
      thumbnail: 'https://placehold.co/600x400/000000/FFFFFF?text=Video+1+Thumbnail',
      videoUrl: 'https://vimeo.com/1122282331', 
    },
    {
      title: 'Vinyl Bodenbelag Installation',
      subtitle: 'Moderne Techniken für Vinyl-Verlegung',
      category: 'Vinyl',
      duration: '0:21',
      thumbnail: 'https://placehold.co/600x400/000000/FFFFFF?text=Video+2+Thumbnail',
      videoUrl: 'https://vimeo.com/1122284997',
    },
    {
      title: 'Keramikplatten Verlegung',
      subtitle: 'Präzise Arbeit mit Stein- und Keramikplatten',
      category: 'Keramik',
      duration: '1:33',
      thumbnail: 'https://placehold.co/600x400/000000/FFFFFF?text=Video+3+Thumbnail',
      videoUrl: 'https://vimeo.com/1122285770',
    },
    {
      title: 'Teppichverlegung im Büro',
      subtitle: 'Professionelle Teppichverlegung für Geschäftsräume',
      category: 'Teppich',
      duration: '0.32',
      thumbnail: 'https://placehold.co/600x400/000000/FFFFFF?text=Video+4+Thumbnail',
      videoUrl: 'https://vimeo.com/1122287917', 
    },
    {
      title: 'Laminat Installation Tipps',
      subtitle: 'Professionelle Techniken für perfekte Laminatverlegung',
      category: 'Laminat',
      duration: '5:10',
      thumbnail: 'https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      videoUrl: 'https://vimeo.com/1122292874',
    },
    {
      title: 'Kork Bodenbelag Montage',
      subtitle: 'Nachhaltige Lösungen mit natürlichem Kork',
      category: 'Kork',
      duration: '3:20',
      thumbnail: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      videoUrl: 'https://vimeo.com/1122292938',
    },
    {
      title: 'Linoleum Verarbeitung',
      subtitle: 'Hochwertige Linoleum-Installation von A bis Z',
      category: 'Linoleum',
      duration: '4:45',
      thumbnail: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      videoUrl: 'https://vimeo.com/1122293348',
    },
    {
      title: 'Abdichtungsarbeiten',
      subtitle: 'Professionelle Silikon- und Abdichtungstechniken',
      category: 'Abdichtung',
      duration: '2:55',
      thumbnail: 'https://images.unsplash.com/photo-1582977999383-9c96cd049d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      videoUrl: 'https://vimeo.com/1122294187',
    },
    {
      title: 'Wandschutz Systeme',
      subtitle: 'Innovative Lösungen für Wandschutz in Gewerberäumen',
      category: 'Wandschutz',
      duration: '3:30',
      thumbnail: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      videoUrl: 'https://vimeo.com/1122294265',
    },
    {
      title: 'Reparatur Techniken',
      subtitle: 'Fachgerechte Reparatur von Bodenbelägen',
      category: 'Reparatur',
      duration: '4:15',
      thumbnail: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      videoUrl: 'https://vimeo.com/1122294364',
    },
  ];

  const openModal = (video) => {
    setSelectedVideo(video);
  };

  const closeModal = () => {
    setSelectedVideo(null);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4 mb-8">
            <Link to="/">
              <Button variant="outline" size="sm" className="gap-2">
                <ArrowLeft className="h-4 w-4" />
                Zurück zur Hauptseite
              </Button>
            </Link>
          </div>

          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6 text-primary">Video Galerie</h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
              Erleben Sie unsere professionelle Arbeit in über 24 Videos. Von der Vorbereitung bis zur finalen Verlegung -
              sehen Sie selbst, wie Qualität und Handwerkskunst in verschiedensten Projekten entstehen.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {allVideos.map((video, index) => (
              <Card
                key={index}
                className="group hover:shadow-lg transition-all duration-300 overflow-hidden cursor-pointer"
                onClick={() => openModal(video)}
              >
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/30 transition-colors">
                    <Button
                      size="lg"
                      className="bg-gold hover:bg-gold-dark text-white rounded-full p-4"
                      onClick={(e) => { e.stopPropagation(); openModal(video); }} // 2. Add e.stopPropagation()
                    >
                      <Play className="w-6 h-6" />
                    </Button>
                  </div>
                  <div className="absolute top-3 left-3">
                    <span className="bg-gold text-white px-2 py-1 text-xs rounded font-medium">
                      {video.category}
                    </span>
                  </div>
                  <div className="absolute bottom-3 right-3">
                    <span className="bg-black/70 text-white px-2 py-1 text-xs rounded">
                      {video.duration}
                    </span>
                  </div>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold text-primary mb-2 text-sm">{video.title}</h3>
                  <p className="text-xs text-muted-foreground">{video.subtitle}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
      {/* 3. The modal should be outside the main and rendered conditionally. This is already correct. */}
      {selectedVideo && <VideoModal video={selectedVideo} onClose={closeModal} />}
    </div>
  );
};

export default Videos;