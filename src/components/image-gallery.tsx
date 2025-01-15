import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { X } from "lucide-react";
import Image from "next/image";

interface ImageGalleryProps {
  images: string[];
  eventName: string;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images, eventName }) => {
  const [currentPhoto, setCurrentPhoto] = useState<string>("foto1");
  const [expandedImage, setExpandedImage] = useState<string | null>(null);
  const hasExtraImages = images.length > 3;

  const gridCols = Math.min(images.length, 3) + (hasExtraImages ? 1 : 0);

  return (
    <div>
      <Tabs
        value={currentPhoto}
        onValueChange={setCurrentPhoto}
        className="w-full"
      >
        {images.slice(0, 3).map((imagem, index) => (
          <TabsContent key={index} value={`foto${index + 1}`}>
            <Image
              src={imagem}
              alt={`${eventName} - Foto ${index + 1}`}
              className="w-full rounded-lg mb-4"
              width={400}
              height={800}
            />
          </TabsContent>
        ))}
        <TabsList
          className={`grid w-full ${
            gridCols === 1
              ? "grid-cols-1"
              : gridCols === 2
              ? "grid-cols-2"
              : gridCols === 3
              ? "grid-cols-3"
              : "grid-cols-4"
          } mb-8`}
        >
          {images.slice(0, 3).map((_, index) => (
            <TabsTrigger key={index} value={`foto${index + 1}`}>
              Foto {index + 1}
            </TabsTrigger>
          ))}
          {hasExtraImages && (
            <Dialog>
              <DialogTrigger className="inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all hover:bg-background/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm">
                +{images.length - 3}
              </DialogTrigger>
              <DialogContent className="max-w-screen-xl w-screen h-screen max-h-screen p-0">
                {expandedImage ? (
                  <div className="relative w-full h-full bg-black/95">
                    <button
                      onClick={() => setExpandedImage(null)}
                      className="absolute top-4 right-4 p-2 rounded-full bg-black/50 hover:bg-black/70 text-white z-10"
                    >
                      <X className="h-6 w-6" />
                    </button>
                    <div className="relative w-full h-full flex items-center justify-center p-4">
                      <Image
                        src={expandedImage}
                        alt="Foto expandida"
                        className="object-contain max-h-full max-w-full"
                        width={1920}
                        height={1080}
                      />
                    </div>
                  </div>
                ) : (
                  <>
                    <DialogHeader className="p-6">
                      <DialogTitle>Todas as fotos do evento</DialogTitle>
                    </DialogHeader>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 p-6 overflow-y-auto">
                      {images.map((imagem, index) => (
                        <div
                          key={index}
                          className="relative aspect-square cursor-pointer hover:opacity-90 transition-opacity"
                          onClick={() => setExpandedImage(imagem)}
                        >
                          <Image
                            src={imagem}
                            alt={`${eventName} - Foto ${index + 1}`}
                            className="rounded-lg object-cover"
                            fill
                          />
                        </div>
                      ))}
                    </div>
                  </>
                )}
              </DialogContent>
            </Dialog>
          )}
        </TabsList>
      </Tabs>
    </div>
  );
};

export default ImageGallery;
