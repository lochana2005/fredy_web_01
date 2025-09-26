// import React, { useState } from 'react';
// import { Card, CardContent } from '@/components/ui/card';
// import { Button } from '@/components/ui/button';

//   import ParkettVideo from '@/assets/video/1.mp4';
//   import VinylVideo from '@/assets/video/2.mp4';
//   import KeramikVideo from '@/assets/video/3.mp4';
//   import TeppichVideo from '@/assets/video/4.mp4';

// // Modal component for video playback
// const VideoModal = ({ video, onClose }) => {
//   if (!video) return null;

//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 p-4" onClick={onClose}>
//       <div className="relative w-full max-w-4xl rounded-lg overflow-hidden shadow-2xl" onClick={e => e.stopPropagation()}>
//         <video
//           key={video.videoUrl} // Use the videoUrl for the key
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

// const VideoSection = () => {
//   const [selectedVideo, setSelectedVideo] = useState(null);

//   // Import video files directly to get a public URL
//   // You will need to make sure these files exist in your project
//   // in the specified paths.


//   const videos = [
//     {
//       title: 'Parkettverlegung Schritt für Schritt',
//       subtitle: 'Sehen Sie, wie professionell Parkett verlegt wird',
//       category: 'Parkett',
//       duration: '3:45',
//       thumbnail: 'https://placehold.co/600x400/000000/FFFFFF?text=Video+1+Thumbnail', // Placeholder for thumbnail
//       videoUrl: ParkettVideo,
//     },
//     {
//       title: 'Vinyl Bodenbelag Installation',
//       subtitle: 'Moderne Techniken für Vinyl-Verlegung',
//       category: 'Vinyl',
//       duration: '2:30',
//       thumbnail: 'https://placehold.co/600x400/000000/FFFFFF?text=Video+2+Thumbnail',
//       videoUrl: VinylVideo,
//     },
//     {
//       title: 'Keramikplatten Verlegung',
//       subtitle: 'Präzise Arbeit mit Stein- und Keramikplatten',
//       category: 'Keramik',
//       duration: '4:20',
//       thumbnail: 'https://placehold.co/600x400/000000/FFFFFF?text=Video+3+Thumbnail',
//       videoUrl: KeramikVideo,
//     },
//     {
//       title: 'Teppichverlegung im Büro',
//       subtitle: 'Professionelle Teppichverlegung für Geschäftsräume',
//       category: 'Teppich',
//       duration: '2:15',
//       thumbnail: 'https://placehold.co/600x400/000000/FFFFFF?text=Video+4+Thumbnail',
//       videoUrl: TeppichVideo,
//     },
//   ];

//   const openModal = (video) => {
//     setSelectedVideo(video);
//   };

//   const closeModal = () => {
//     setSelectedVideo(null);
//   };

//   return (
//     <>
//       <section id="videos" className="py-20 bg-muted/50">
//         <div className="container mx-auto px-4">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl font-bold mb-4 text-primary">Video Galerie</h2>
//             <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
//               Erleben Sie unsere professionelle Arbeit in Aktion. Von der Vorbereitung bis zur finalen Verlegung - sehen Sie selbst, wie Qualität entsteht.
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//             {videos.map((video, index) => (
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
//                       onClick={() => openModal(video)}
//                     >
//                       <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
//                         <path d="M8 5v14l11-7z" />
//                       </svg>
//                     </Button>
//                   </div>
//                   <div className="absolute top-2 left-2">
//                     <span className="bg-gold text-white px-2 py-1 text-xs rounded font-medium">
//                       {video.category}
//                     </span>
//                   </div>
//                   <div className="absolute bottom-2 right-2">
//                     <span className="bg-black/70 text-white px-2 py-1 text-xs rounded">
//                       {video.duration}
//                     </span>
//                   </div>
//                 </div>
//                 <CardContent className="p-4">
//                   <h3 className="font-semibold text-primary mb-2">{video.title}</h3>
//                   <p className="text-sm text-muted-foreground">{video.subtitle}</p>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>

//           <div className="text-center mt-12">
//             <Button
//               variant="outline"
//               size="lg"
//               className="border-gold text-gold hover:bg-gold hover:text-white"
//               asChild
//             >
//               <a href="/videos">Alle Videos anzeigen (24+ Videos)</a>
//             </Button>
//           </div>
//         </div>
//       </section>

//       {selectedVideo && <VideoModal video={selectedVideo} onClose={closeModal} />}
//     </>
//   );
// };

// export default VideoSection;




















// import React, { useState } from 'react';
// import { Card, CardContent } from '@/components/ui/card';
// import { Button } from '@/components/ui/button';

//   import ParkettVideo from '@/assets/video/1.mp4';
//   import VinylVideo from '@/assets/video/2.mp4';
//   import KeramikVideo from '@/assets/video/3.mp4';
//   import TeppichVideo from '@/assets/video/4.mp4';
// import { Link } from 'react-router-dom';

// // Modal component for video playback
// const VideoModal = ({ video, onClose }) => {
//   if (!video) return null;

//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 p-4" onClick={onClose}>
//       <div className="relative w-full max-w-md rounded-lg overflow-hidden shadow-2xl" onClick={e => e.stopPropagation()}>
//         <video
//           key={video.videoUrl} // Use the videoUrl for the key
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

// const VideoSection = () => {
//   const [selectedVideo, setSelectedVideo] = useState(null);

//   const videos = [
//     {
//       title: 'Parkettverlegung Schritt für Schritt',
//       subtitle: 'Sehen Sie, wie professionell Parkett verlegt wird',
//       category: 'Parkett',
//       duration: '3:10',
//       thumbnail: 'https://placehold.co/600x400/000000/FFFFFF?text=Video+1+Thumbnail',
//       videoUrl: ParkettVideo,
//     },
//     {
//       title: 'Vinyl Bodenbelag Installation',
//       subtitle: 'Moderne Techniken für Vinyl-Verlegung',
//       category: 'Vinyl',
//       duration: '0:21',
//       thumbnail: 'https://placehold.co/600x400/000000/FFFFFF?text=Video+2+Thumbnail',
//       videoUrl: VinylVideo,
//     },
//     {
//       title: 'Keramikplatten Verlegung',
//       subtitle: 'Präzise Arbeit mit Stein- und Keramikplatten',
//       category: 'Keramik',
//       duration: '1:33',
//       thumbnail: 'https://placehold.co/600x400/000000/FFFFFF?text=Video+3+Thumbnail',
//       videoUrl: KeramikVideo,
//     },
//     {
//       title: 'Teppichverlegung im Büro',
//       subtitle: 'Professionelle Teppichverlegung für Geschäftsräume',
//       category: 'Teppich',
//       duration: '0.32',
//       thumbnail: 'https://placehold.co/600x400/000000/FFFFFF?text=Video+4+Thumbnail',
//       videoUrl: TeppichVideo,
//     },
//   ];

//   const openModal = (video) => {
//     setSelectedVideo(video);
//   };

//   const closeModal = () => {
//     setSelectedVideo(null);
//   };

//   return (
//     <>
//       <section id="videos" className="py-20 bg-muted/50">
//         <div className="container mx-auto px-4">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl font-bold mb-4 text-primary">Video Galerie</h2>
//             <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
//               Erleben Sie unsere professionelle Arbeit in Aktion. Von der Vorbereitung bis zur finalen Verlegung - sehen Sie selbst, wie Qualität entsteht.
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//             {videos.map((video, index) => (
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
//                       onClick={() => openModal(video)}
//                     >
//                       <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
//                         <path d="M8 5v14l11-7z" />
//                       </svg>
//                     </Button>
//                   </div>
//                   <div className="absolute top-2 left-2">
//                     <span className="bg-gold text-white px-2 py-1 text-xs rounded font-medium">
//                       {video.category}
//                     </span>
//                   </div>
//                   <div className="absolute bottom-2 right-2">
//                     <span className="bg-black/70 text-white px-2 py-1 text-xs rounded">
//                       {video.duration}
//                     </span>
//                   </div>
//                 </div>
//                 <CardContent className="p-4">
//                   <h3 className="font-semibold text-primary mb-2">{video.title}</h3>
//                   <p className="text-sm text-muted-foreground">{video.subtitle}</p>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>

//           <div className="text-center mt-12">
//             <Button
//               variant="outline"
//               size="lg"
//               className="border-gold text-gold hover:bg-gold hover:text-white"
//               asChild
//             >
             
//               <Link  to="/videos">
//               <p>Alle Videos anzeigen (24+ Videos)</p>
//               </Link>
              
//             </Button>
//           </div>
//         </div>
//       </section>

//       {selectedVideo && <VideoModal video={selectedVideo} onClose={closeModal} />}
//     </>
//   );
// };

// export default VideoSection;
import React, { useState } from 'react';
// Shadcn/ui components
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
// React Router
import { Link } from 'react-router-dom';

// ----------------------------------------------------------------
// වීඩියෝ ප්ලේබැක් සඳහා Modal සංරචකය (VideoModal Component)
// (සියලු තිර සඳහා Full/Max Size සහ නිවැරදිව ක්‍රියා කරන Close බොත්තම සහිතයි)
// ----------------------------------------------------------------
const VideoModal = ({ video, onClose }) => {
  if (!video) return null;

  const embedId = video.videoUrl.split('/').pop();
  const finalEmbedUrl = `https://player.vimeo.com/video/${embedId}?autoplay=1&title=0&byline=0&portrait=0`; 

  return (
    // පිටත div (Background Overlay):
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 w-screen h-screen p-0 sm:p-4" 
    >
      {/* Modal Content Div:  */}
      <div 
        className="relative w-full h-full sm:h-auto max-w-none sm:max-w-7xl rounded-none sm:rounded-lg overflow-hidden shadow-2xl" 
        style={{ aspectRatio: '16 / 9' }} 
        onClick={e => e.stopPropagation()} 
      >
        <iframe
          src={finalEmbedUrl}
          title={video.title}
          width="100%"
          height="100%"
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          // වීඩියෝ iframe එකේ z-index එක z-0 ලෙස තබා ගන්න (default)
          className="w-full h-full absolute top-0 left-0" 
        ></iframe>

        {/* Modal වැසීමේ බොත්තම: z-index 50 සිට z-[100] දක්වා වැඩි කර, 
            pointer-events-auto යෙදීමෙන්, එය ක්ලික් කිරීමට හැකි බව සහතික කරයි. */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white text-3xl font-bold bg-black bg-opacity-50 hover:bg-black rounded-full w-10 h-10 flex items-center justify-center z-[100] pointer-events-auto"
        >
          &times;
        </button>
      </div>
    </div>
  );
};


// ----------------------------------------------------------------
// වීඩියෝ කොටසෙහි ප්‍රධාන සංරචකය (VideoSection Component)
// ----------------------------------------------------------------
const VideoSection = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);

  const videos = [
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
  ];

  const openModal = (video) => {
    setSelectedVideo(video);
  };

  const closeModal = () => {
    setSelectedVideo(null);
  };

  return (
    <>
      <section id="videos" className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-primary">Video Galerie</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Erleben Sie unsere professionelle Arbeit in Aktion. Von der Vorbereitung bis zur finalen Verlegung - sehen Sie selbst, wie Qualität entsteht.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {videos.map((video, index) => (
              <Card
                key={index}
                className="group hover:shadow-lg transition-all duration-300 overflow-hidden cursor-pointer"
                onClick={() => openModal(video)}
              >
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    loading="lazy" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/30 transition-colors">
                    <Button
                      size="lg"
                      className="bg-gold hover:bg-gold-dark text-white rounded-full p-4"
                    >
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </Button>
                  </div>
                  <div className="absolute top-2 left-2">
                    <span className="bg-gold text-white px-2 py-1 text-xs rounded font-medium">
                      {video.category}
                    </span>
                  </div>
                  <div className="absolute bottom-2 right-2">
                    <span className="bg-black/70 text-white px-2 py-1 text-xs rounded">
                      {video.duration}
                    </span>
                  </div>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold text-primary mb-2">{video.title}</h3>
                  <p className="text-sm text-muted-foreground">{video.subtitle}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              variant="outline"
              size="lg"
              className="border-gold text-gold hover:bg-gold hover:text-white"
              asChild
            >
              <Link  to="/videos">
                <p>Alle Videos anzeigen (24+ Videos)</p>
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Modal එක පෙන්වීම */}
      {selectedVideo && <VideoModal video={selectedVideo} onClose={closeModal} />}
    </>
  );
};

export default VideoSection;