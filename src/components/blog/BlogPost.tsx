
import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const BlogPost = () => {
  const { id } = useParams<{ id: string }>();
  const blogPostId = parseInt(id || "1");
  
  // Full blog post content database
  const blogPostsContent = [
    {
      id: 1,
      title: "How AI is Revolutionizing Digital Marketing in 2025",
      image: "https://images.unsplash.com/photo-1501389040983-5c22cb186487?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      date: "April 2, 2024",
      author: "Alex Morgan",
      category: "AI",
      readTime: "5 min read",
      content: `
        <h2>Introduction</h2>
        <p>The pace at which AI evolved in 2024 was nothing short of extraordinary, setting the stage for revolutionary trends in 2025. Digital marketing continues to undergo a radical transformation as AI technologies mature and become more accessible to businesses of all sizes. Today, we're exploring how these advancements are reshaping the marketing landscape and providing unprecedented opportunities for engagement and growth.</p>
        
        <h2>AI-Powered Personalization</h2>
        <p>Hyper-personalization has become the gold standard in digital marketing, thanks to sophisticated AI algorithms. In 2025, we're seeing marketers leverage these tools to create deeply customized experiences across multiple platforms simultaneously:</p>
        <ul>
          <li>Dynamic content generation that adapts to individual user preferences and behaviors in real-time</li>
          <li>Predictive personalization that anticipates customer needs before they express them</li>
          <li>Cross-platform consistency that maintains personalized experiences across devices and channels</li>
          <li>Emotional intelligence algorithms that gauge sentiment and adjust messaging tone accordingly</li>
        </ul>
        <p>This level of personalization was impossible just a few years ago, but AI has made it not only possible but essential for brands hoping to stand out in crowded markets.</p>
        
        <h2>AI in SEO & Content Creation</h2>
        <p>Content creation and optimization have been revolutionized by AI tools that can analyze trends, generate high-quality content, and optimize for search engines with remarkable efficiency:</p>
        <ul>
          <li>Advanced content generators can now produce long-form articles that are nearly indistinguishable from human-written content</li>
          <li>AI-powered SEO tools can identify semantic relationships between keywords and concepts that even experienced SEO professionals might miss</li>
          <li>Predictive content planning tools help marketers identify emerging topics before they trend</li>
          <li>Multilingual content optimization allows for seamless global marketing campaigns</li>
        </ul>
        <p>These advancements have democratized content marketing, allowing smaller businesses to compete with enterprises that have much larger marketing departments.</p>
        
        <h2>Chatbots and Conversational AI</h2>
        <p>The evolution of conversational AI has transformed customer interactions. Modern AI chatbots are no longer limited to basic FAQ responses:</p>
        <ul>
          <li>Contextual understanding allows for natural, flowing conversations that build over time</li>
          <li>Emotional intelligence enables chatbots to detect frustration or confusion and adapt accordingly</li>
          <li>Proactive engagement capabilities identify sales opportunities and initiate conversations</li>
          <li>Seamless handoff protocols ensure smooth transitions when human intervention becomes necessary</li>
        </ul>
        <p>These capabilities have made chatbots essential components of lead generation and customer service strategies across industries.</p>
        
        <h2>Predictive Analytics</h2>
        <p>AI's ability to process vast amounts of data and identify patterns has revolutionized how marketers understand and predict customer behavior:</p>
        <ul>
          <li>Behavior modeling algorithms can forecast customer actions with unprecedented accuracy</li>
          <li>Churn prediction enables proactive retention strategies before customers consider leaving</li>
          <li>Lifetime value forecasting helps marketers allocate resources more effectively</li>
          <li>Market trend analysis identifies emerging opportunities before competitors can capitalize on them</li>
        </ul>
        <p>These predictive capabilities allow marketers to move from reactive to proactive strategies, fundamentally changing campaign planning and execution.</p>
        
        <h2>AI in Paid Advertising</h2>
        <p>The advertising landscape has been completely transformed by AI technologies that optimize every aspect of campaign performance:</p>
        <ul>
          <li>Dynamic creative optimization that tests thousands of variations to identify top performers</li>
          <li>Predictive bidding strategies that maximize ROI across platforms</li>
          <li>Audience discovery tools that identify new market segments with high conversion potential</li>
          <li>Cross-channel attribution models that provide accurate insights into the customer journey</li>
        </ul>
        <p>These advancements have dramatically improved advertising efficiency while reducing wasted spend on underperforming campaigns.</p>
        
        <h2>Visual and Voice Search</h2>
        <p>As search behavior continues to evolve, AI is enabling marketers to optimize for new input methods:</p>
        <ul>
          <li>Visual recognition technologies allow consumers to search using images instead of text</li>
          <li>Voice optimization strategies help brands appear in voice search results from smart speakers and mobile devices</li>
          <li>Multimodal search capabilities combine text, voice, and visual inputs for more intuitive user experiences</li>
          <li>Contextual understanding enables more accurate responses to conversational queries</li>
        </ul>
        <p>Brands that optimize for these emerging search modalities are gaining significant advantages in discovery and engagement.</p>
        
        <h2>Future Outlook</h2>
        <p>Looking ahead, several emerging technologies are poised to further transform digital marketing:</p>
        <ul>
          <li>Advanced generative AI will enable fully automated campaign creation from conception to execution</li>
          <li>Augmented reality marketing will create immersive brand experiences accessible through everyday devices</li>
          <li>Human-AI collaboration tools will enhance creative processes rather than replacing human input</li>
          <li>Ethical AI frameworks will address growing concerns about privacy and manipulation</li>
        </ul>
        <p>These developments suggest that the marketing landscape will continue to evolve at an accelerating pace in the coming years.</p>
        
        <h2>Conclusion</h2>
        <p>The integration of AI into digital marketing isn't just changing how we execute campaigns—it's fundamentally altering what's possible. As these technologies continue to advance, the gap between early adopters and laggards will widen, creating significant competitive advantages for businesses that embrace AI-powered strategies.</p>
        <p>Ready to explore how AI can transform your marketing efforts? Book a free consultation with our experts today and discover the potential of AI-driven marketing for your business.</p>
      `
    },
    {
      id: 2,
      title: "5 Ways to Enhance Your SEO Strategy with AI Tools",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      date: "March 28, 2024",
      author: "Michael Chen",
      category: "SEO",
      readTime: "7 min read",
      content: `
        <h2>Introduction</h2>
        <p>Search Engine Optimization continues to evolve at a rapid pace, and AI tools are at the forefront of this evolution. As search algorithms become more sophisticated, leveraging artificial intelligence has become essential for businesses aiming to maintain and improve their search visibility. In this article, we'll explore five powerful ways AI tools can enhance your SEO strategy in 2025.</p>
        
        <h2>1. Keyword Research with AI</h2>
        <p>Traditional keyword research has been revolutionized by AI-powered tools that go far beyond simple volume and competition metrics:</p>
        
        <h3>Advanced NLP Analysis</h3>
        <p>Tools like ChatGPT, SEMrush, and Ubersuggest now employ natural language processing to understand the semantic relationships between search terms. This allows them to uncover:</p>
        <ul>
          <li>Long-tail keyword variations that precisely match user intent</li>
          <li>Question-based queries that align with voice search patterns</li>
          <li>Semantic clusters that help build comprehensive content strategies</li>
        </ul>
        
        <h3>Competitor Intent Analysis</h3>
        <p>AI tools can now analyze competitor content to identify:</p>
        <ul>
          <li>Keyword gaps that represent untapped opportunities</li>
          <li>Content themes that are performing well in your niche</li>
          <li>Intent patterns that reveal what your audience is truly seeking</li>
        </ul>
        
        <h3>Trend Prediction</h3>
        <p>Perhaps most impressively, AI-powered keyword tools can now predict emerging search trends before they peak, giving early adopters a significant advantage in capturing growing search traffic.</p>
        
        <h2>2. Content Optimization</h2>
        <p>AI tools have transformed content optimization from a manual, subjective process into a data-driven science:</p>
        
        <h3>Comprehensive Content Analysis</h3>
        <p>Tools like Surfer SEO and Frase analyze top-ranking content to identify:</p>
        <ul>
          <li>Optimal content length and structure for specific search intents</li>
          <li>Topic coverage gaps that need to be addressed</li>
          <li>Semantic terms that should be included for comprehensive coverage</li>
        </ul>
        
        <h3>Real-time Optimization Guidance</h3>
        <p>Modern AI writing assistants provide:</p>
        <ul>
          <li>Dynamic readability suggestions tailored to your target audience</li>
          <li>Content structure recommendations based on top-performing articles</li>
          <li>Keyword density guidance that prevents over-optimization</li>
        </ul>
        
        <h3>Multilingual Optimization</h3>
        <p>For global businesses, AI tools now offer automated optimization for multiple languages, ensuring consistent SEO performance across international markets.</p>
        
        <h2>3. Technical SEO Audits</h2>
        <p>Technical SEO has grown increasingly complex, but AI-enhanced tools have kept pace with these challenges:</p>
        
        <h3>Intelligent Crawling</h3>
        <p>Tools like Screaming Frog and Sitebulb now use AI to:</p>
        <ul>
          <li>Identify patterns in crawl errors that might indicate larger structural issues</li>
          <li>Prioritize technical fixes based on their likely impact on rankings</li>
          <li>Predict how search engines will interpret site architecture</li>
        </ul>
        
        <h3>Performance Optimization</h3>
        <p>AI-powered technical tools can now:</p>
        <ul>
          <li>Automatically identify render-blocking resources affecting page speed</li>
          <li>Suggest image optimizations tailored to specific content types</li>
          <li>Predict Core Web Vitals scores before Google measures them</li>
        </ul>
        
        <h3>Schema Markup Generation</h3>
        <p>Advanced AI tools can now analyze content and automatically generate appropriate schema markup, increasing the likelihood of rich snippet features in search results.</p>
        
        <h2>4. Automated Reporting & Analytics</h2>
        <p>AI has transformed SEO reporting from a time-consuming task into an automated, insight-driven process:</p>
        
        <h3>Anomaly Detection</h3>
        <p>AI-powered analytics can:</p>
        <ul>
          <li>Automatically identify traffic or ranking changes that require attention</li>
          <li>Correlate changes with potential causes (algorithm updates, technical issues, etc.)</li>
          <li>Predict the potential impact of identified issues if left unaddressed</li>
        </ul>
        
        <h3>Competitive Intelligence</h3>
        <p>Modern SEO platforms leverage AI to:</p>
        <ul>
          <li>Track competitor strategy shifts in real-time</li>
          <li>Identify new competitors emerging in specific keyword territories</li>
          <li>Quantify the impact of competitor content strategies</li>
        </ul>
        
        <h3>Opportunity Forecasting</h3>
        <p>Perhaps most valuably, AI analytics tools can now forecast the potential ROI of specific SEO initiatives, helping teams prioritize efforts with the highest projected returns.</p>
        
        <h2>5. Voice & Visual Search Optimization</h2>
        <p>As search continues to evolve beyond text, AI tools are essential for optimizing emerging search modalities:</p>
        
        <h3>Voice Search Pattern Analysis</h3>
        <p>Advanced AI tools can:</p>
        <ul>
          <li>Identify question patterns specific to voice searchers in your industry</li>
          <li>Recommend content structures that align with voice search response preferences</li>
          <li>Test content for voice search clarity across different assistant platforms</li>
        </ul>
        
        <h3>Visual Search Optimization</h3>
        <p>For image-heavy industries, AI tools now offer:</p>
        <ul>
          <li>Automated image tagging based on visual content recognition</li>
          <li>Competitive analysis of image search performance</li>
          <li>Recommendations for image attributes that improve visual search rankings</li>
        </ul>
        
        <h2>Conclusion</h2>
        <p>AI tools haven't just improved SEO execution—they've fundamentally changed what's possible in search optimization. By leveraging these advanced technologies, businesses can gain significant advantages in visibility, traffic, and ultimately, conversions.</p>
        
        <p>Ready to transform your SEO strategy with AI? Book a free AI-driven SEO audit with our team and discover opportunities you might be missing.</p>
      `
    },
    {
      id: 3,
      title: "The Psychology Behind Effective Social Media Campaigns",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      date: "March 20, 2024",
      author: "Priya Sharma",
      category: "Social Media",
      readTime: "6 min read",
      content: `
        <h2>Introduction</h2>
        <p>Behind every viral campaign and successful social media strategy lies a deep understanding of human psychology. The most effective social media marketers don't just create content—they craft experiences that trigger specific emotional and cognitive responses. In this article, we'll explore the psychological principles that drive engagement and how brands are leveraging these insights to create campaigns that resonate deeply with audiences.</p>
        
        <h2>Emotional Appeal: The Heart of Viral Content</h2>
        <p>Research consistently shows that content evoking strong emotions—whether positive or negative—is more likely to be shared and remembered:</p>
        
        <h3>The Science of Emotional Contagion</h3>
        <p>A 2010 study published in the Journal of Marketing Research found that content that evokes high-arousal emotions like awe, anger, or anxiety is shared more frequently than content that triggers low-arousal emotions like sadness.</p>
        
        <p><strong>Case Study:</strong> The ALS Ice Bucket Challenge generated over 17 million videos across platforms by combining multiple emotional triggers—surprise, amusement, and compassion—resulting in $115 million in donations within just eight weeks.</p>
        
        <h3>Emotional Mapping in Campaign Design</h3>
        <p>Forward-thinking brands now use emotional mapping to design campaigns, strategically planning which emotions to trigger at different points in the customer journey:</p>
        <ul>
          <li>Discovery phase: Curiosity and surprise to capture attention</li>
          <li>Engagement phase: Joy and amusement to encourage sharing</li>
          <li>Conversion phase: Trust and anticipation to drive action</li>
        </ul>
        
        <h2>Social Proof: The Power of Collective Validation</h2>
        <p>Humans are inherently social creatures who look to others for guidance on how to think and behave, especially in ambiguous situations:</p>
        
        <h3>Types of Social Proof in Social Media</h3>
        <p>Effective campaigns leverage multiple forms of social proof:</p>
        <ul>
          <li><strong>User-generated content:</strong> 79% of consumers say UGC highly impacts their purchasing decisions (Stackla, 2023)</li>
          <li><strong>Influencer endorsements:</strong> 61% of consumers trust influencer recommendations (Edelman Trust Barometer, 2023)</li>
          <li><strong>Expert approval:</strong> 65% of consumers find brands more credible when endorsed by industry experts</li>
          <li><strong>Wisdom of crowds:</strong> Highlighting follower counts, shares, and engagement metrics</li>
        </ul>
        
        <p><strong>Case Study:</strong> Glossier built its billion-dollar beauty brand primarily through customer reviews and user-generated content, making consumers both the audience and creators of their marketing.</p>
        
        <h2>FOMO: The Fear of Missing Out</h2>
        <p>FOMO leverages loss aversion—the psychological principle that the pain of losing something is about twice as powerful as the pleasure of gaining something equivalent:</p>
        
        <h3>FOMO Triggers in Social Campaigns</h3>
        <p>Successful campaigns create FOMO through:</p>
        <ul>
          <li><strong>Time-limited content:</strong> Stories and time-bound posts that disappear</li>
          <li><strong>Exclusive access:</strong> Private groups, limited membership opportunities</li>
          <li><strong>Limited availability:</strong> Product drops, limited editions, waitlists</li>
          <li><strong>Event marketing:</strong> Creating "you had to be there" moments</li>
        </ul>
        
        <p>According to research by Strategy Online, 60% of millennials make reactive purchases because of FOMO, often within 24 hours of experiencing this anxiety.</p>
        
        <h2>Storytelling: The Narrative Transportation Effect</h2>
        <p>When humans engage with stories, we experience "narrative transportation"—a state where our mental systems become fully focused on the events in the narrative:</p>
        
        <h3>The Neuroscience of Stories</h3>
        <p>MRI studies show that when we're told a story, our brains respond as if we're experiencing it ourselves, activating the sensory cortex, motor cortex, and more. This creates stronger, more emotionally charged memories than facts alone.</p>
        
        <h3>Story Structures That Drive Engagement</h3>
        <p>The most effective social media stories typically follow proven structures:</p>
        <ul>
          <li><strong>The hero's journey:</strong> Particularly effective for customer testimonials</li>
          <li><strong>Before-and-after narratives:</strong> Creates contrast that highlights transformation</li>
          <li><strong>Behind-the-scenes revelations:</strong> Satisfies curiosity and builds authenticity</li>
          <li><strong>Origin stories:</strong> Creates emotional connection to brand purpose</li>
        </ul>
        
        <p><strong>Case Study:</strong> Airbnb's "Belong Anywhere" campaign featured micro-stories of hosts and travelers, generating 3x more engagement than product-focused content.</p>
        
        <h2>Cognitive Biases: The Shortcuts of Decision Making</h2>
        <p>Our brains use shortcuts (heuristics) to make decisions quickly, and understanding these can dramatically improve campaign effectiveness:</p>
        
        <h3>Key Biases in Social Media Behavior</h3>
        <p>Successful campaigns leverage biases like:</p>
        <ul>
          <li><strong>Reciprocity:</strong> When we receive something, we feel compelled to give back. Free content, tools, and resources trigger this bias.</li>
          <li><strong>Scarcity:</strong> Items perceived as rare are valued more highly. Limited-edition products and time-bound offers leverage this principle.</li>
          <li><strong>Authority:</strong> We defer to experts. Partnerships with industry leaders and certification displays trigger this bias.</li>
          <li><strong>Commitment and consistency:</strong> We strive to be consistent with our past behavior. Public pledges and incremental engagement tactics utilize this bias.</li>
        </ul>
        
        <h2>Conclusion: The Ethics of Psychological Marketing</h2>
        <p>Understanding these psychological principles gives marketers tremendous power to influence behavior. With this power comes the responsibility to use these techniques ethically, creating value for audiences rather than manipulating them.</p>
        
        <p>The most successful brands in social media don't just apply psychological principles to drive short-term metrics—they use these insights to create genuinely valuable experiences that build long-term relationships with their communities.</p>
        
        <p>Ready to create social media campaigns that resonate on a deeper psychological level? Contact our team for a social strategy session that leverages these principles for authentic engagement.</p>
      `
    },
    {
      id: 4,
      title: "Measuring ROI: The Ultimate Guide to Marketing Analytics",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1172&q=80",
      date: "March 15, 2024",
      author: "Sarah Williams",
      category: "Analytics",
      readTime: "8 min read",
      content: `
        <h2>Introduction to Marketing ROI Analytics</h2>
        <p>In an increasingly data-driven marketing landscape, the ability to accurately measure return on investment has become a critical skill. This comprehensive guide explores how modern analytics approaches can help marketers demonstrate value and optimize performance across channels.</p>
        
        <h2>Setting Up Your Measurement Framework</h2>
        <p>More detailed content coming soon...</p>
        
        <h2>Attribution Models: Beyond Last-Click</h2>
        <p>More detailed content coming soon...</p>
        
        <h2>Campaign Performance Analysis</h2>
        <p>More detailed content coming soon...</p>
        
        <h2>Customer Lifetime Value Calculations</h2>
        <p>More detailed content coming soon...</p>
        
        <h2>Conclusion</h2>
        <p>Ready to transform your marketing analytics? Contact our team for a comprehensive analytics audit and customized measurement plan.</p>
      `
    },
    {
      id: 5,
      title: "WhatsApp Marketing: Building Meaningful Customer Connections",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80",
      date: "March 8, 2024",
      author: "Alex Morgan",
      category: "Messaging",
      readTime: "4 min read",
      content: `
        <h2>WhatsApp Marketing Strategy</h2>
        <p>With over 2 billion users worldwide, WhatsApp has become an essential channel for businesses looking to connect with customers in a more personal, direct way. This article explores how brands can effectively leverage WhatsApp for marketing while maintaining the intimate, conversational nature that makes the platform unique.</p>
        
        <h2>Building Your WhatsApp Marketing Strategy</h2>
        <p>More detailed content coming soon...</p>
        
        <h2>Message Automation and Chatbots</h2>
        <p>More detailed content coming soon...</p>
        
        <h2>Case Studies: WhatsApp Marketing Success Stories</h2>
        <p>More detailed content coming soon...</p>
        
        <h2>Conclusion</h2>
        <p>Ready to implement WhatsApp in your marketing strategy? Contact our team for a consultation on WhatsApp Business API implementation and strategy development.</p>
      `
    },
    {
      id: 6,
      title: "Content Creation in the AI Era: Balancing Automation and Creativity",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      date: "March 1, 2024",
      author: "Michael Chen",
      category: "AI",
      readTime: "6 min read",
      content: `
        <h2>Content Creation in the AI Era</h2>
        <p>As AI tools transform content creation, marketers face both opportunities and challenges in maintaining authentic brand voices while leveraging automation. This article explores the evolving relationship between human creativity and AI assistance.</p>
        
        <h2>Understanding AI Content Generation</h2>
        <p>More detailed content coming soon...</p>
        
        <h2>Human-AI Collaboration Models</h2>
        <p>More detailed content coming soon...</p>
        
        <h2>Quality Control in AI-Assisted Content</h2>
        <p>More detailed content coming soon...</p>
        
        <h2>Conclusion</h2>
        <p>Ready to explore AI-assisted content creation for your brand? Contact our team for a consultation on implementing an effective human-AI collaboration model.</p>
      `
    }
  ];

  const blogPost = blogPostsContent.find(post => post.id === blogPostId);
  
  useEffect(() => {
    if (blogPost) {
      document.title = `${blogPost.title} | Furi Blog`;
      // Scroll to top when blog post loads
      window.scrollTo(0, 0);
    }
  }, [blogPost]);

  if (!blogPost) {
    return (
      <div className="container mx-auto py-32 px-4">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-8">Blog Post Not Found</h1>
          <p className="mb-8">The blog post you're looking for doesn't exist or has been removed.</p>
          <Button asChild>
            <Link to="/blog">Return to Blog</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <section className="pt-32 pb-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <Link to="/blog" className="inline-flex items-center text-primary-800 hover:underline mb-6">
            <ArrowLeft size={16} className="mr-2" />
            Back to all articles
          </Link>
          
          <div className="mb-8">
            <span className="bg-primary-800 text-white text-xs font-medium px-3 py-1 rounded-full">
              {blogPost.category}
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6">{blogPost.title}</h1>
            <div className="flex flex-wrap items-center text-gray-600 gap-4 mb-8">
              <span>{blogPost.date}</span>
              <span>•</span>
              <span>{blogPost.readTime}</span>
              <span>•</span>
              <span>By {blogPost.author}</span>
            </div>
          </div>
          
          <div className="mb-12 rounded-xl overflow-hidden">
            <img 
              src={blogPost.image} 
              alt={blogPost.title}
              className="w-full h-auto object-cover"
            />
          </div>
          
          <div className="prose prose-lg max-w-none">
            <div dangerouslySetInnerHTML={{ __html: blogPost.content }} />
          </div>
          
          <div className="mt-16 p-8 bg-primary-50 rounded-xl">
            <h3 className="text-2xl font-bold mb-4">Ready to transform your digital marketing strategy?</h3>
            <p className="mb-6">Book a free consultation with our experts and discover how AI-powered solutions can help your business grow.</p>
            <Button asChild size="lg">
              <Link to="/contact">Book a Consultation</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogPost;
