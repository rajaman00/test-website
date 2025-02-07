import React, { useState } from "react";
import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from "@mui/material";
import { Card, CardContent } from "@mui/material";

import NavigationBar from '../../components/NavigationBar';
import HeaderBox from './Header';
import Footer from '../../components/Footer';
import backgroundImage from '../../public/images/Switchyard at Bakhri GSS.jpg';

const paperClippings = [
  { id: 1, src: "https://www.powergrid.in/sites/default/files/event-images/WCDM-DRR.jpg", title: "Clipping 1" },
  { id: 2, src: "https://www.powergrid.in/sites/default/files/styles/photo_video_gallery_images/public/photo_gallery_images/PHOTO-2024-04-27-21-16-31.jpg?itok=5Ufb23t5", title: "Clipping 2" },
  { id: 3, src: "/images/clipping3.jpg", title: "Clipping 3" },
  { id: 4, src: "/images/clipping4.jpg", title: "Clipping 4" },
];

const PaperClippingPage = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Media', href: '#' },
    { label: 'Newspaper Clipping' }
  ];

  return (
    <>
      <NavigationBar />
      <HeaderBox
        backgroundImage={backgroundImage}
        title="Newspaper Clipping"
        breadcrumbs={breadcrumbs}
      />
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4 text-center">Paper Clippings</h1>
        <div className="p-6">
          {paperClippings.map((clipping) => (
            <Card
              key={clipping.id}
              className="cursor-pointer hover:shadow-lg w-[100px] h-[100px] border border-gray-300 shadow-md bg-white flex-shrink-0"
              onClick={() => setSelectedImage(clipping.src)}
            >
              <CardContent className="p-2 w-full h-full flex justify-center items-center">
                <img
                  src={clipping.src}
                  alt={clipping.title}
                  className="w-[100px] h-[100px] object-contain rounded-md border border-gray-200"
                />
              </CardContent>
            </Card>
          ))}
        </div>

        <Dialog open={!!selectedImage} onClose={() => setSelectedImage(null)}>
          <DialogContent className="max-w-3xl p-4">
            {selectedImage && (
              <img
                src={selectedImage}
                alt="Selected Clipping"
                className="w-[100px] h-[100px] rounded-lg"
              />
            )}
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setSelectedImage(null)} color="primary">Close</Button>
          </DialogActions>
        </Dialog>
      </div>
      <Footer />
    </>
  );
};

export default PaperClippingPage;