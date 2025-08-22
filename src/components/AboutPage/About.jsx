import { motion } from "framer-motion";
import AnimatedTitle from "../HomePage/AnimatedTitle";

export default function AboutPage() {
  const videoSrc = "/videos/college_campus.mp4";

  const cardVariants = {
    off: { scale: 0.85, opacity: 0 },
    on: {
      scale: 1,
      opacity: 1,
      transition: { type: "spring", stiffness: 120, damping: 16 }
    }
  };

  return (
    <div className="bg-neutral-950 text-white min-h-screen">
      {/* Top Video Section */}
      <section className="relative flex h-[80vh] w-full items-center justify-center overflow-hidden">
        <div className="absolute inset-0 h-full w-full">
          <video
            className="h-full w-full object-cover"
            src={videoSrc}
            autoPlay
            muted
            loop
            playsInline
          />
        </div>
        <div className="relative z-10 flex h-full items-center justify-center px-6 text-center">
          <div className="video-title-gradient">
            <AnimatedTitle
              title="Expl<b>o</b>re the heart <br /> of <b>O</b>ur Campus"
              containerClass=""
            />
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="bg-neutral-950 py-12 md:py-24">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white uppercase">
            ABOUT OUR COLLEGE
          </h2>
          <motion.p
            className="text-neutral-300 mx-auto text-justify text-base leading-relaxed md:text-lg max-w-4xl"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.2, once: false }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Mar Athanasios College for Advanced Studies Tiruvalla (MACFAST) is a
            premier post graduate research institute, established in 2001 with
            the objective of moulding eminent professionals over the years to
            confront the challenging demands of the corporate world and the
            world of science & technology. MACFAST is affiliated to Mahatma
            Gandhi University, Kottayam and approved by All India Council for
            Technical Education (AICTE), New Delhi. The college is owned and
            managed by the Corporate Educational Agency of the Catholic
            Archdiocese of Tiruvalla, founded by His Grace Dr. Geevarghese Mar
            Timotheos, (Former Metropolitan Arch Bishop of the Malankara
            Catholic Archdiocese of Tiruvalla). The present Metropolitan Arch
            Bishop of the Malankara Catholic Archdiocese of Tiruvalla, His
            Grace Dr. Thomas Mar Koorilos is the patron of the college. As
            visualized by its founders, the college has grown steadily over the
            years with ten postgraduate courses in Management, Computer Science
            & Biosciences and positioned its identity as a multidisciplinary
            institution in the higher education segment of the state. Within a
            very short span of its existence, MACFAST has emerged as a
            trendsetter in education and has turned into a benchmark for others
            to emulate with its unparalleled hallmark of academic brilliance and
            social commitment. The college is located in Tiruvalla, an active
            commercial township in the Central Travancore region.
          </motion.p>
        </div>
      </section>

      {/* Image Gallery Section */}
      <section className="py-16 px-4 md:py-24 bg-neutral-950 text-white">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white uppercase">
            CAMPUS LIFE IN PICTURES
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                src: "/img/pic2.jpeg",
                title: "Modern Architecture",
                desc: "Our beautiful, contemporary buildings provide an ideal learning environment."
              },
              {
                src: "/img/pic2.jpeg",
                title: "Engaging Campus Life",
                desc: "Students actively participate in various clubs and events, fostering a vibrant community."
              },
              {
                src: "/img/pic2.jpeg",
                title: "State-of-the-Art Library",
                desc: "A peaceful and resourceful hub for research and collaborative learning."
              },
              {
                src: "/img/pic2.jpeg",
                title: "Advanced Laboratories",
                desc: "Equipped with cutting-edge technology for hands-on learning."
              },
              {
                src: "/img/pic2.jpeg",
                title: "Radio MACFAST 90.4",
                desc: "Enjoy the rythum of MACFAST."
              },
              {
                src: "/img/pic2.jpeg",
                title: "Modern Sports Facilities",
                desc: "Encouraging physical well-being and team spirit among students."
              }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                className="bg-neutral-900 rounded-xl shadow-lg overflow-hidden flex flex-col justify-center items-center p-4"
                variants={cardVariants}
                initial="off"
                whileInView="on"
                viewport={{ amount: 0.4, once: false }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={item.src}
                  alt={item.title}
                  className="rounded-lg object-cover w-full h-48 md:h-64"
                />
                <div className="p-4 text-center">
                  <h3 className="font-semibold text-xl mt-2 mb-1">{item.title}</h3>
                  <p className="text-gray-300 text-sm">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
