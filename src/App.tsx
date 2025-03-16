import React, { useState, useEffect, useRef } from 'react';
import { Shield, Users, Calendar, Trophy, BookOpen, Terminal, Menu, X , Instagram , MessageCircle} from 'lucide-react';
import teamMember1 from './images/BhushanM.jpg';
import teamMember2 from './images/PoojaJ.jpg';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const galleryRef = useRef<HTMLDivElement>(null);

  const activities = [
    {
      title: "Cyber Security Workshops",
      icon: <Shield className="w-8 h-8 text-blue-600" />,
      description: "Hands-on workshops on ethical hacking, penetration testing, and network security."
    },
    {
      title: "CTF Competitions",
      icon: <Trophy className="w-8 h-8 text-blue-600" />,
      description: "Regular Capture The Flag competitions to test and improve security skills."
    },
    {
      title: "Security Research",
      icon: <BookOpen className="w-8 h-8 text-blue-600" />,
      description: "Collaborative research projects on emerging cyber security threats."
    },
    {
      title: "Coding Sessions",
      icon: <Terminal className="w-8 h-8 text-blue-600" />,
      description: "Programming sessions focused on security tools and automation."
    }
  ];

  const teamMembers = {
    faculty: {
      name: "Rashmi Welekar",
      role: "Faculty Advisor",
      expertise: "Cybersecurity & Network Security",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80"
    },
    leads: [
      {
        name: "Bhushan Madankar",
        role: "President",
        image: teamMember1
      },
      {
        name: "Pooja Jaiswal",
        role: "Technical Lead",
        image: teamMember2
      },
      {
        name: "Mahak Arora",
        role: "Graphics Lead",
        image: teamMember2
      },
      {
        name: "Praharsh Bawankar",
        role: "Social Lead",
        image: teamMember2
      },
      {
        name: "Kritank Singh",
        role: "Marketing Lead",
        image: teamMember1
      },
      {
        name: "Nandini Sanghi",
        role: "Marketing Lead",
        image: teamMember2
      },
      {
        name: "Vanshika Sarda",
        role: "Logistics Lead",
        image: teamMember2
      },
      {
        name: "Harshika Rathod",
        role: "Logistics Lead",
        image: teamMember2
      },
    ]
  };

  const galleryImages = [
    {
      url: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&q=80",
      title: "Coding Workshop"
    },
    {
      url: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80",
      title: "Security Conference"
    },
    {
      url: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&q=80",
      title: "Team Meeting"
    },
    {
      url: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&q=80",
      title: "Coding Workshop"
    },
    {
      url: "https://images.unsplash.com/photo-1517134191118-9d595e4c8c2b?auto=format&fit=crop&q=80",
      title: "Hacking Competition"
    },
    {
      url: "https://images.unsplash.com/photo-1516321165247-4aa89a48be28?auto=format&fit=crop&q=80",
      title: "Security Workshop"
    },
    {
      url: "https://images.unsplash.com/photo-1558346547-4439467bd1d5?auto=format&fit=crop&q=80",
      title: "Team Building"
    }
  ];

  useEffect(() => {
    const gallery = galleryRef.current;
    if (!gallery) return;

    let scrollInterval: NodeJS.Timeout;
    let isPaused = false;

    const startAutoScroll = () => {
      scrollInterval = setInterval(() => {
        if (!isPaused && gallery) {
          if (gallery.scrollLeft >= gallery.scrollWidth - gallery.clientWidth) {
            gallery.scrollTo({ left: 0, behavior: 'smooth' });
          } else {
            gallery.scrollBy({ left: 2, behavior: 'smooth' });
          }
        }
      }, 50);
    };

    startAutoScroll();

    gallery.addEventListener('mouseenter', () => {
      isPaused = true;
    });

    gallery.addEventListener('mouseleave', () => {
      isPaused = false;
    });

    return () => {
      clearInterval(scrollInterval);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-md fixed w-full z-50">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Shield className="w-8 h-8 text-blue-600" />
              <span className="ml-2 text-xl font-bold">Cyber Club</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-700 hover:text-blue-600 transition duration-300">Home</a>
              <a href="#about" className="text-gray-700 hover:text-blue-600 transition duration-300">About Us</a>
              <a href="#activities" className="text-gray-700 hover:text-blue-600 transition duration-300">Events</a>
              <a href="#gallery" className="text-gray-700 hover:text-blue-600 transition duration-300">Gallery</a>
              <a href="#footer" className="text-gray-700 hover:text-blue-600 transition duration-300">Contact Us</a>
            </div>

            {/* Mobile Navigation Button */}
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-700">
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          {isMenuOpen && (
            <div className="md:hidden py-4">
              <div className="flex flex-col space-y-4">
                <a href="#home" className="text-gray-700 hover:text-blue-600 transition duration-300">Home</a>
                <a href="#about" className="text-gray-700 hover:text-blue-600 transition duration-300">About Us</a>
                <a href="#activities" className="text-gray-700 hover:text-blue-600 transition duration-300">Events</a>
                <a href="#gallery" className="text-gray-700 hover:text-blue-600 transition duration-300">Gallery</a>
                <a href="#footer" className="text-gray-700 hover:text-blue-600 transition duration-300">Contact Us</a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <div 
        id="home"
        className="relative bg-cover bg-center h-[500px] pt-16" 
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80")'
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative container mx-auto px-6 h-full flex items-center">
          <div className="text-white">
            <h1 className="text-5xl font-bold mb-4">Cyber Club</h1>
            <p className="text-xl mb-8 max-w-2xl">Empowering students with knowledge and skills in cyber security through hands-on learning, competitions, and collaborative projects.</p>
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300">
              Join the Club
            </button>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div id="about" className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-12 mb-16">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6">About Our Club</h2>
              <p className="text-gray-600 mb-4">
              The Cyber Security Club is a student-led organization that operates under the guidance of Nagpur Police Commissioner Ravindra Singhal Sir. Our mission is to promote cybersecurity awareness, technical skills, and ethical practices among college students. With the ever-growing concern of cyber threats, we aim to educate and empower the next generation of cybersecurity professionals.
              </p>
              <div className="flex items-center gap-4 mb-4">
                <Users className="w-6 h-6 text-blue-600" />
                <span className="text-gray-700">100+ Active Members</span>
              </div>
              <div className="flex items-center gap-4 mb-4">
                <Calendar className="w-6 h-6 text-blue-600" />
                <span className="text-gray-700">Weekly Meetings & Activities</span>
              </div>
              <a 
                href="https://www.instagram.com/rbu_cyber_club?igsh=MWJ6bnZ3NDJwNTI5NA==" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-2 text-blue-600 hover:text-blue-700 transition duration-300"
              >
                <Instagram className="w-6 h-6" />
                <span>Follow us on Instagram</span>
              </a>
            </div>
            <div className="md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80" 
                alt="Students working" 
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* Faculty and Team Leads Section */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold text-center mb-12">Our Leadership</h2>
            
            {/* Faculty Advisor */}
            <div className="mb-16">
              <h3 className="text-2xl font-semibold text-center mb-8">Faculty Advisor</h3>
              <div className="flex flex-col items-center">
                <img 
                  src={teamMembers.faculty.image} 
                  alt={teamMembers.faculty.name}
                  className="w-48 h-48 rounded-full object-cover mb-4"
                />
                <h4 className="text-xl font-semibold">{teamMembers.faculty.name}</h4>
                <p className="text-blue-600 font-medium">{teamMembers.faculty.role}</p>
                <p className="text-gray-600">{teamMembers.faculty.expertise}</p>
              </div>
            </div>

            {/* Team Leads */}
            <div>
              <h3  className="text-2xl font-semibold text-center mb-8">Domain Leads</h3>
              <div className="flex flex-nowrap justify-center gap-7">
  {teamMembers.leads.map((lead, index) => (
    <div key={index} className="flex flex-col items-center">
      <img 
        src={lead.image} 
        alt={lead.name}
        className="w-32 h-32 rounded-full object-cover mb-4"
      />
      <h4 className="text-lg font-semibold text-center">{lead.name}</h4>
      <p className="text-blue-600 font-medium text-center">{lead.role}</p>
    </div>
  ))}
</div>

            </div>
          </div>
        </div>
      </div>

      {/* Activities Section */}
      <div id="activities" className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Our Activities</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {activities.map((activity, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                <div className="mb-4">{activity.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{activity.title}</h3>
                <p className="text-gray-600">{activity.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Gallery Section */}
      <div id="gallery" className="py-16 bg-white overflow-hidden">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Event Gallery</h2>
          <div className="relative">
            <div 
              ref={galleryRef}
              className="flex overflow-x-auto space-x-6 pb-8 scrollbar-hide"
            >
              {galleryImages.map((image, index) => (
                <div key={index} className="flex-none w-80">
                  <div className="relative group rounded-lg shadow-lg overflow-hidden">
                    <img 
                      src={image.url} 
                      alt={image.title}
                      className="w-full h-64 object-cover transform group-hover:scale-110 transition duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-0 left-0 right-0 p-4">
                        <h3 className="text-white text-xl font-semibold">{image.title}</h3>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer id="footer" className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Cyber Club</h3>
              <p className="text-gray-400">Securing the digital future through education, collaboration, and innovation.</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#home" className="text-gray-400 hover:text-blue-400 transition duration-300">Home</a></li>
                <li><a href="#about" className="text-gray-400 hover:text-blue-400 transition duration-300">About Us</a></li>
                <li><a href="#activities" className="text-gray-400 hover:text-blue-400 transition duration-300">Events</a></li>
                <li><a href="#gallery" className="text-gray-400 hover:text-blue-400 transition duration-300">Gallery</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Email: cyber.club@college.edu</li>
                <li className="pt-1">
                  <a 
                    href="https://chat.whatsapp.com/CmUqs6skhoH0GOscew6PCB" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-400 hover:text-green-400 transition duration-300"
                  >
                    <MessageCircle className="w-5 h-5" />
                    <span>Join WhatsApp Community</span>
                  </a>
                </li>
                <li>
                  <a 
                    href="https://t.me/cyberclub" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition duration-300"
                  >
                    <MessageCircle className="w-5 h-5" />
                    <span>Join Telegram Channel</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Cyber Club. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;