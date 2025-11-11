import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faUser, faArrowRight } from '@fortawesome/free-solid-svg-icons';

export default function BlogPreview() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const blogPosts = [
    {
      title: 'Understanding Hidden Food Allergens: A Complete Guide',
      excerpt: 'Learn about the most common hidden allergens in everyday foods and how to identify them on product labels.',
      author: 'Dr. Sarah Mitchell',
      date: 'Nov 2, 2024',
      category: 'Education',
      image: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=400&h=250&fit=crop',
      readTime: '5 min read'
    },
    {
      title: '10 Restaurant Chains Now Supporting Allergen-Free Menus',
      excerpt: 'Discover which popular restaurant chains are leading the way in providing safe dining options for people with food allergies.',
      author: 'Michael Chen',
      date: 'Oct 30, 2024',
      category: 'News',
      image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=400&h=250&fit=crop',
      readTime: '3 min read'
    },
    {
      title: 'New Features: Family Profiles and Shopping Lists',
      excerpt: 'We\'re excited to announce two highly requested features that make managing family food safety easier than ever.',
      author: 'Olive Team',
      date: 'Oct 28, 2024',
      category: 'Product Updates',
      image: 'https://images.unsplash.com/photo-1516594798947-e65505dbb29d?w=400&h=250&fit=crop',
      readTime: '2 min read'
    }
  ];

  const getCategoryColor = (category) => {
    switch (category) {
      case 'Education':
        return 'bg-blue-100 text-blue-700';
      case 'News':
        return 'bg-green-100 text-green-700';
      case 'Product Updates':
        return 'bg-purple-100 text-purple-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <section id="blog" className="section bg-gray-50" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="mb-4">Latest from Our Blog</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay informed with the latest food safety tips, app updates, and community stories
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="card overflow-hidden group cursor-pointer"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getCategoryColor(post.category)}`}>
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                {/* Meta */}
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center gap-4">
                    <span className="flex items-center gap-1">
                      <FontAwesomeIcon icon={faUser} size="sm" />
                      {post.author}
                    </span>
                    <span className="flex items-center gap-1">
                      <FontAwesomeIcon icon={faCalendar} size="sm" />
                      {post.date}
                    </span>
                  </div>
                  <span className="text-primary">{post.readTime}</span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <a
            href="#blog-all"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all duration-300"
          >
            View All Articles
            <FontAwesomeIcon icon={faArrowRight} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
