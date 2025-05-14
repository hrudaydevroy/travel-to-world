import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, ChevronRight, User } from 'lucide-react';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  imageUrl: string;
  category: string;
  date: string;
  author: {
    name: string;
    avatar: string;
  };
}

const blogPosts: BlogPost[] = [
  {
    id: "hidden-beaches-bali",
    title: "10 Hidden Beaches in Bali You Need to Visit",
    excerpt: "Discover secluded coastlines away from the crowds where you can experience the true beauty of Bali's shores.",
    imageUrl: "https://images.pexels.com/photos/1078983/pexels-photo-1078983.jpeg?auto=compress&cs=tinysrgb&w=1600",
    category: "Beaches",
    date: "May 15, 2025",
    author: {
      name: "Jessica Wong",
      avatar: "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=1600"
    }
  },
  {
    id: "japan-cherry-blossom",
    title: "A Guide to Japan's Cherry Blossom Season",
    excerpt: "Everything you need to know about timing your visit perfectly for this magical natural phenomenon.",
    imageUrl: "https://images.pexels.com/photos/1440476/pexels-photo-1440476.jpeg?auto=compress&cs=tinysrgb&w=1600",
    category: "Seasonal",
    date: "April 3, 2025",
    author: {
      name: "Michael Chen",
      avatar: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1600"
    }
  },
  {
    id: "sustainable-travel",
    title: "Sustainable Travel: How to Reduce Your Carbon Footprint",
    excerpt: "Practical tips for eco-friendly travel that helps preserve the destinations we love to visit.",
    imageUrl: "https://images.pexels.com/photos/5098064/pexels-photo-5098064.jpeg?auto=compress&cs=tinysrgb&w=1600",
    category: "Eco Travel",
    date: "June 8, 2025",
    author: {
      name: "Emma Wilson",
      avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1600"
    }
  }
];

const TravelBlog = () => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Travel Inspiration</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Get inspired with our latest travel tips, destination guides, and stories from around the world
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>

        {/* View All Button */}
        <div className="mt-12 text-center">
          <Link 
            to="/blog" 
            className="inline-flex items-center text-blue-700 hover:text-blue-800 font-medium"
          >
            Read More Articles
            <ChevronRight className="ml-1 w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

const BlogCard = ({ post }: { post: BlogPost }) => {
  return (
    <article className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
      {/* Image */}
      <Link to={`/blog/${post.id}`} className="block relative">
        <div className="aspect-w-16 aspect-h-9 relative overflow-hidden">
          <img 
            src={post.imageUrl} 
            alt={post.title} 
            className="w-full h-64 object-cover transition-transform duration-700 hover:scale-105"
          />
          <div className="absolute top-4 left-4">
            <span className="inline-block bg-blue-700 text-white text-xs font-medium px-2.5 py-1 rounded-full">
              {post.category}
            </span>
          </div>
        </div>
      </Link>

      {/* Content */}
      <div className="p-5">
        <Link to={`/blog/${post.id}`}>
          <h3 className="text-xl font-bold text-gray-900 mb-2 hover:text-blue-700 transition-colors duration-300">
            {post.title}
          </h3>
        </Link>
        <p className="text-gray-600 mb-4">{post.excerpt}</p>
        
        {/* Meta */}
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <img 
              src={post.author.avatar} 
              alt={post.author.name} 
              className="w-8 h-8 rounded-full mr-2 object-cover"
            />
            <span className="text-sm text-gray-600">{post.author.name}</span>
          </div>
          <div className="flex items-center text-gray-500 text-sm">
            <Calendar className="w-4 h-4 mr-1" />
            {post.date}
          </div>
        </div>
      </div>
    </article>
  );
};

export default TravelBlog;