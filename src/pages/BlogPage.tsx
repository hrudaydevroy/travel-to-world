import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Search, Tag, User } from 'lucide-react';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  imageUrl: string;
  category: string;
  tags: string[];
  date: string;
  author: {
    name: string;
    avatar: string;
  };
  readTime: string;
}

const blogPosts: BlogPost[] = [
  {
    id: "hidden-beaches-bali",
    title: "10 Hidden Beaches in Bali You Need to Visit",
    excerpt: "Discover secluded coastlines away from the crowds where you can experience the true beauty of Bali's shores.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris.",
    imageUrl: "https://images.pexels.com/photos/1078983/pexels-photo-1078983.jpeg?auto=compress&cs=tinysrgb&w=1600",
    category: "Beaches",
    tags: ["Bali", "Beaches", "Hidden Gems", "Indonesia"],
    date: "May 15, 2025",
    author: {
      name: "Jessica Wong",
      avatar: "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=1600"
    },
    readTime: "6 min read"
  },
  {
    id: "japan-cherry-blossom",
    title: "A Guide to Japan's Cherry Blossom Season",
    excerpt: "Everything you need to know about timing your visit perfectly for this magical natural phenomenon.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris.",
    imageUrl: "https://images.pexels.com/photos/1440476/pexels-photo-1440476.jpeg?auto=compress&cs=tinysrgb&w=1600",
    category: "Seasonal",
    tags: ["Japan", "Cherry Blossom", "Spring", "Kyoto", "Tokyo"],
    date: "April 3, 2025",
    author: {
      name: "Michael Chen",
      avatar: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1600"
    },
    readTime: "8 min read"
  },
  {
    id: "sustainable-travel",
    title: "Sustainable Travel: How to Reduce Your Carbon Footprint",
    excerpt: "Practical tips for eco-friendly travel that helps preserve the destinations we love to visit.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris.",
    imageUrl: "https://images.pexels.com/photos/5098064/pexels-photo-5098064.jpeg?auto=compress&cs=tinysrgb&w=1600",
    category: "Eco Travel",
    tags: ["Sustainable", "Eco-Friendly", "Green Travel", "Environment"],
    date: "June 8, 2025",
    author: {
      name: "Emma Wilson",
      avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1600"
    },
    readTime: "10 min read"
  },
  {
    id: "europe-train-travel",
    title: "The Ultimate Guide to Train Travel in Europe",
    excerpt: "Explore Europe's most scenic routes and historic cities by train with this comprehensive guide.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris.",
    imageUrl: "https://images.pexels.com/photos/2031755/pexels-photo-2031755.jpeg?auto=compress&cs=tinysrgb&w=1600",
    category: "Transportation",
    tags: ["Europe", "Train Travel", "Interrail", "Scenic Routes"],
    date: "March 22, 2025",
    author: {
      name: "Thomas Smith",
      avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1600"
    },
    readTime: "12 min read"
  },
  {
    id: "street-food-asia",
    title: "The Best Street Food Experiences Across Asia",
    excerpt: "From Bangkok's bustling markets to Tokyo's izakayas, discover the most delicious street food in Asia.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris.",
    imageUrl: "https://images.pexels.com/photos/2347383/pexels-photo-2347383.jpeg?auto=compress&cs=tinysrgb&w=1600",
    category: "Food",
    tags: ["Street Food", "Asia", "Culinary", "Local Cuisine"],
    date: "February 15, 2025",
    author: {
      name: "David Kim",
      avatar: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1600"
    },
    readTime: "9 min read"
  },
  {
    id: "african-safari-guide",
    title: "The Complete Guide to Planning Your First African Safari",
    excerpt: "Everything you need to know about choosing the right safari experience, preparation, and what to expect.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris.",
    imageUrl: "https://images.pexels.com/photos/33045/lion-wild-africa-african.jpg?auto=compress&cs=tinysrgb&w=1600",
    category: "Adventure",
    tags: ["Safari", "Africa", "Wildlife", "Adventure Travel"],
    date: "January 30, 2025",
    author: {
      name: "Sophia Johnson",
      avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1600"
    },
    readTime: "11 min read"
  }
];

const categories = ["All", "Adventure", "Beaches", "Food", "Eco Travel", "Seasonal", "Transportation"];
const popularTags = ["Europe", "Asia", "Sustainable", "Wildlife", "Hidden Gems", "Local Cuisine", "Scenic Routes"];

const BlogPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedTag, setSelectedTag] = useState('');

  const filteredPosts = blogPosts.filter((post) => {
    // Search filter
    const searchMatch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                        post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    // Category filter
    const categoryMatch = selectedCategory === 'All' || post.category === selectedCategory;
    
    // Tag filter
    const tagMatch = selectedTag === '' || post.tags.includes(selectedTag);
    
    return searchMatch && categoryMatch && tagMatch;
  });

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <div className="bg-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Travel Blog</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Travel tips, destination guides, and stories from around the world
          </p>
          
          {/* Search Bar */}
          <div className="mt-8 max-w-md mx-auto">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search articles..."
                className="w-full pl-10 pr-4 py-3 border border-transparent rounded-lg bg-white/10 backdrop-blur-sm text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Main Content */}
            <div className="lg:w-2/3">
              {/* Category Filters */}
              <div className="mb-8 overflow-x-auto pb-2">
                <div className="flex space-x-2">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors duration-300 ${
                        selectedCategory === category
                          ? 'bg-blue-700 text-white'
                          : 'bg-white text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>

              {/* Blog Posts Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {filteredPosts.map((post) => (
                  <BlogCard key={post.id} post={post} />
                ))}
              </div>

              {/* No Results */}
              {filteredPosts.length === 0 && (
                <div className="text-center py-12 bg-white rounded-lg shadow-sm">
                  <h3 className="text-lg font-medium text-gray-900 mb-2">No articles found</h3>
                  <p className="text-gray-600">Try adjusting your search or filters</p>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:w-1/3">
              {/* Popular Tags */}
              <div className="bg-white p-6 rounded-xl shadow-sm mb-8">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Popular Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {popularTags.map((tag) => (
                    <button
                      key={tag}
                      onClick={() => setSelectedTag(selectedTag === tag ? '' : tag)}
                      className={`px-3 py-1 rounded-full text-xs font-medium transition-colors duration-300 ${
                        selectedTag === tag
                          ? 'bg-blue-700 text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </div>

              {/* Featured Post */}
              <div className="bg-white p-6 rounded-xl shadow-sm mb-8">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Featured Article</h3>
                <div className="mb-4 relative rounded-lg overflow-hidden">
                  <img 
                    src="https://images.pexels.com/photos/2325446/pexels-photo-2325446.jpeg?auto=compress&cs=tinysrgb&w=1600" 
                    alt="Maldives Overwater Bungalows" 
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="inline-block bg-blue-700 text-white text-xs font-medium px-2.5 py-1 rounded-full">
                      Luxury
                    </span>
                  </div>
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  The Ultimate Maldives Luxury Experience
                </h4>
                <p className="text-gray-600 text-sm mb-4">
                  Discover the most exclusive overwater bungalows and underwater experiences in the Maldives.
                </p>
                <Link 
                  to="/blog/maldives-luxury"
                  className="text-blue-700 hover:text-blue-800 text-sm font-medium"
                >
                  Read Article →
                </Link>
              </div>

              {/* Newsletter */}
              <div className="bg-blue-700 p-6 rounded-xl shadow-sm text-white">
                <h3 className="text-lg font-bold mb-2">Subscribe to Our Newsletter</h3>
                <p className="text-blue-100 mb-4">
                  Get travel inspiration, tips, and exclusive offers delivered to your inbox.
                </p>
                <form className="space-y-3">
                  <input 
                    type="email" 
                    placeholder="Your email address" 
                    className="w-full px-4 py-2 rounded-lg bg-white/10 border border-transparent placeholder-white/70 text-white focus:outline-none focus:ring-2 focus:ring-white/50"
                    required 
                  />
                  <button 
                    type="submit"
                    className="w-full bg-white text-blue-700 font-medium px-4 py-2 rounded-lg hover:bg-blue-50 transition-colors duration-300"
                  >
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const BlogCard = ({ post }: { post: BlogPost }) => {
  return (
    <article className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
      {/* Image */}
      <Link to={`/blog/${post.id}`} className="block">
        <div className="relative overflow-hidden h-52">
          <img 
            src={post.imageUrl} 
            alt={post.title} 
            className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
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
        <p className="text-gray-600 text-sm mb-4">{post.excerpt}</p>
        
        {/* Meta */}
        <div className="flex justify-between items-center text-sm text-gray-500">
          <div className="flex items-center">
            <img 
              src={post.author.avatar} 
              alt={post.author.name} 
              className="w-6 h-6 rounded-full mr-2 object-cover"
            />
            <span>{post.author.name}</span>
          </div>
          <div className="flex items-center space-x-4">
            <span className="flex items-center">
              <Calendar className="w-4 h-4 mr-1" />
              {post.date}
            </span>
            <span>{post.readTime}</span>
          </div>
        </div>
      </div>
    </article>
  );
};

export default BlogPage;