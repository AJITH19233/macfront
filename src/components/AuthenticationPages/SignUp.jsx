import { useState,useEffect } from 'react';
import { Mail, Lock, X,User,Phone } from 'lucide-react';
import { useNavigate } from 'react-router-dom';



// Main Sign-up Component
const SignUp = () => {


  useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [phone, setPhone] = useState('');

    const navigate = useNavigate();
  
    const handleSignIn = () => {
      navigate('/signin', { replace: true });
    };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted with:', { email, password });
  };

  return (

    <div className="min-h-screen bg-[#060707] text-white font-sans flex items-center justify-center p-20 relative overflow-hidden">
      {/* Background glowing lines effect */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute w-96 h-96 bg-yellow-400 rounded-full -top-20 -left-40 opacity-20 blur-3xl animate-pulse-slow"></div>
        <div className="absolute w-96 h-96 bg-yellow-400 rounded-full -bottom-20 -right-40 opacity-20 blur-3xl animate-pulse-slower"></div>
        <div className="absolute top-1/4 left-1/4 w-px h-[600px] bg-gradient-to-b from-transparent via-red-700 to-transparent transform -rotate-45 animate-line-1"></div>
        <div className="absolute top-1/2 right-1/4 w-px h-[800px] bg-gradient-to-b from-transparent via-red-700 to-transparent transform rotate-45 animate-line-2"></div>
      </div>
      <main className="w-full max-w-3xl bg-[#131414] shadow-2xl shadow-teal-900/20 rounded-lg flex flex-col md:flex-row z-10">
        {/* Left Side: Info Panel */}
        <div className="w-full md:w-1/2 flex flex-col justify-center bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1599526137638-d68401344295?q=80&w=1887&auto=format&fit=crop')" }}>
        <img src="/public/img/logincard.jfif" alt="" />
        </div>

        {/* Right Side: Form */}
        <div className="w-full md:w-1/2 p-8 md:p-12 bg-[#1C1D1D] relative">
          <button className="absolute top-4 right-4 text-gray-500 hover:text-white transition-colors">
            <X size={24} />
          </button>

          <h3 className="text-2xl font-bold mb-6 text-center">MACFIESTA 2025</h3>
          <form onSubmit={handleSubmit}>

            <div className="mb-4">
              <label htmlFor="username" className="block text-sm font-medium text-gray-400 mb-2">Add your username</label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={20} />
                <input
                  type="text"
                  id="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full pl-10 pr-3 py-3 bg-[#2a2b2b] border border-gray-600 rounded-md focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 outline-none transition"
                  placeholder="username"
                  required
                />
              </div>
            </div>

            <div className="mb-4">
              <label htmlFor="text" className="block text-sm font-medium text-gray-400 mb-2">Add your phone</label>
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={20} />
                <input
                  type="phone"
                  id="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full pl-10 pr-3 py-3 bg-[#2a2b2b] border border-gray-600 rounded-md focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 outline-none transition"
                  placeholder="+91"
                  required
                />
              </div>
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">Add your email</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={20} />
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-10 pr-3 py-3 bg-[#2a2b2b] border border-gray-600 rounded-md focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 outline-none transition"
                  placeholder="you@example.com"
                  required
                />
              </div>
            </div>

            <div className="mb-6">
              <label htmlFor="password" className="block text-sm font-medium text-gray-400 mb-2">Choose a password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={20} />
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-10 pr-3 py-3 bg-[#2a2b2b] border border-gray-600 rounded-md focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 outline-none transition"
                  placeholder="••••••••"
                  required
                />
              </div>
            </div>

            <button type="submit" className="w-full bg-yellow-600 hover:bg-yellow-500 text-white font-bold py-3 rounded-md transition-transform transform hover:scale-105">
              Register
            </button>
          </form>

          <p className="text-center text-sm text-gray-400 mt-6">
            Already a member? <a className="font-semibold text-yellow-400 hover:underline" onClick={handleSignIn}>Log in</a>
          </p>
        </div>
      </main>
      
      {/* This is for the Tailwind animation classes */}
      <style>{`
        @keyframes pulse-slow {
          50% { opacity: 0.3; transform: scale(1.1); }
        }
        @keyframes pulse-slower {
          50% { opacity: 0.15; transform: scale(1.2); }
        }
        @keyframes line-anim-1 {
          0% { transform: translateY(-100%) rotate(-45deg); }
          100% { transform: translateY(100%) rotate(-45deg); }
        }
        @keyframes line-anim-2 {
          0% { transform: translateY(-100%) rotate(45deg); }
          100% { transform: translateY(100%) rotate(45deg); }
        }
        .animate-pulse-slow { animation: pulse-slow 8s cubic-bezier(0.4, 0, 0.6, 1) infinite; }
        .animate-pulse-slower { animation: pulse-slower 10s cubic-bezier(0.4, 0, 0.6, 1) infinite; }
        .animate-line-1 { animation: line-anim-1 15s linear infinite; }
        .animate-line-2 { animation: line-anim-2 20s linear infinite; }
      `}</style>
    </div>
  );
};

export default SignUp;

