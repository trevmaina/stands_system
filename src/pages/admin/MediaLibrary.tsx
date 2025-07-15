import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Upload, Image, Video, File, Search } from 'lucide-react';

export default function MediaLibrary() {
  const [searchTerm, setSearchTerm] = useState('');

  // Mock data - in real implementation, this would come from Supabase Storage
  const mockFiles = [
    { id: '1', name: 'church-event-1.jpg', type: 'image', size: '2.4 MB', url: '/placeholder.svg' },
    { id: '2', name: 'sermon-video.mp4', type: 'video', size: '45.2 MB', url: '#' },
    { id: '3', name: 'newsletter.pdf', type: 'document', size: '1.8 MB', url: '#' },
  ];

  const getFileIcon = (type: string) => {
    switch (type) {
      case 'image': return <Image className="h-8 w-8" />;
      case 'video': return <Video className="h-8 w-8" />;
      default: return <File className="h-8 w-8" />;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Media Library</h1>
          <p className="text-muted-foreground">Upload and manage media files</p>
        </div>
        <Button>
          <Upload className="mr-2 h-4 w-4" />
          Upload Files
        </Button>
      </div>

      <div className="flex items-center space-x-2">
        <div className="relative flex-1">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search files..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-8"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {mockFiles.map((file) => (
          <Card key={file.id} className="cursor-pointer hover:shadow-md transition-shadow">
            <CardContent className="p-4">
              <div className="flex flex-col items-center space-y-2">
                {getFileIcon(file.type)}
                <div className="text-center">
                  <p className="font-medium text-sm truncate w-full">{file.name}</p>
                  <p className="text-xs text-muted-foreground">{file.size}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}