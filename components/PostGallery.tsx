import React from 'react';
import { Heart, MessageCircle, Play } from 'lucide-react';
import { TOP_POSTS } from '../constants';

export const PostGallery: React.FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 px-2">
      {TOP_POSTS.map((post, index) => {
        // Scatter effect
        const rotateClass = index % 2 === 0 ? '-rotate-2' : 'rotate-2';
        const offsetClass = index % 3 === 0 ? 'mt-4' : 'mt-0';

        return (
          <a 
            key={post.id} 
            href={post.tiktokUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`group polaroid cursor-pointer ${rotateClass} ${offsetClass}`}
          >
              <div className="relative aspect-[4/5] overflow-hidden bg-gray-100 border border-gray-100 mb-3">
                  {/* Media Content */}
                  {post.url ? (
                      <video 
                          src={post.url}
                          className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-500"
                          muted
                          loop
                          playsInline
                          autoPlay
                      />
                  ) : post.image ? (
                      <img 
                          src={post.image} 
                          alt="Post thumbnail" 
                          className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-500"
                      />
                  ) : (
                      <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
                          <Play className="w-8 h-8 text-gray-400" />
                      </div>
                  )}
                  
                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 bg-black/10">
                      <div className="bg-white/80 backdrop-blur-sm p-3 rounded-full shadow-lg">
                          <Play className="w-6 h-6 text-gray-900 fill-gray-900" />
                      </div>
                  </div>
              </div>

              {/* Handwritten Caption Area */}
              <div className="px-1">
                  <p className="font-hand text-lg font-bold text-gray-800 leading-tight mb-2 line-clamp-2 h-12">
                    {post.caption}
                  </p>
                  
                  <div className="flex justify-between items-center text-xs font-sans text-gray-500 border-t border-gray-100 pt-2">
                      <div className="flex items-center gap-1">
                          <Heart className="w-3 h-3 text-pink-500 fill-pink-500" />
                          <span>{post.likes}</span>
                      </div>
                      <div className="flex items-center gap-1">
                          <MessageCircle className="w-3 h-3" />
                          <span>{post.comments}</span>
                      </div>
                  </div>
              </div>
          </a>
        );
      })}
    </div>
  );
};