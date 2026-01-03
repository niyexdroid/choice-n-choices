import Image from "next/image";
import Navbar from "@/components/Navbar";

const location =
  "No 6 Great Challenge Road, Iyana School Bus Stop, Iba Ojo, Lagos";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden text-white">
      <Navbar />

      <div
        className="glow-ball gold"
        style={{ width: 380, height: 380, top: -80, left: -120 }}
      />
      <div
        className="glow-ball blue"
        style={{ width: 320, height: 320, top: 60, right: -90 }}
      />
      <div
        className="glow-ball gold"
        style={{ width: 280, height: 280, bottom: -60, right: 60 }}
      />

      {/* Hero Section */}
      <section
        id="home"
        className="relative min-h-screen flex items-center pt-20"
      >
        <div className="shell w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Hero Content */}
            <div className="space-y-6 order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#c9a646]/10 border border-[#c9a646]/30">
                <span className="w-2 h-2 rounded-full bg-[#c9a646] animate-pulse"></span>
                <span className="text-[#e7d2a0] text-sm font-semibold">
                  Launched April 8, 2023
                </span>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-white">
                Where Fun Meets{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e7d2a0] to-[#c9a646]">
                  Entertainment
                </span>
              </h1>

              <p className="text-lg md:text-xl text-[#d8dbe4] leading-relaxed max-w-2xl">
                Choice and Choices Place Nigeria Limited — Lagos premier
                destination for hospitality, events, and unforgettable
                experiences. We blend enjoyment, comfort, and creativity to
                create memories that last.
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <a href="#contact" className="btn-primary text-base px-8 py-3">
                  Book an Event
                </a>
                <a href="#offerings" className="btn-ghost text-base px-8 py-3">
                  Explore Services
                </a>
              </div>

              <div className="flex flex-wrap gap-6 pt-6">
                {[
                  { icon: "🎉", label: "Gas Event Space" },
                  { icon: "🎵", label: "Entertainment" },
                  { icon: "📚", label: "Training Programs" },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-2">
                    <span className="text-2xl">{item.icon}</span>
                    <span className="text-sm text-[#cfd3dd] font-medium">
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Hero Image */}
            <div className="order-1 lg:order-2">
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-white/10">
                <div className="absolute inset-0 bg-gradient-to-br from-[#c9a646]/20 to-transparent z-10"></div>
                <Image
                  src="/images/cc-pix4.png"
                  alt="Choice and Choices Event Space"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="shell py-24">
        <div className="glass p-8 md:p-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div>
                <p className="badge">About Us</p>
                <h2 className="text-4xl md:text-5xl font-bold text-white mt-4">
                  Your go-to destination for joy and connection
                </h2>
              </div>

              <p className="text-lg text-[#d8dbe4] leading-relaxed">
                At Choice and Choices Place Nigeria Limited, we are dedicated to
                providing an unparalleled experience that blends entertainment,
                enjoyment, and comfort in a unique and unforgettable way.
              </p>

              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-white">
                  Our Vision
                </h3>
                <p className="text-[#d6d9e5] leading-relaxed">
                  To become the ultimate hub for individuals, families, and
                  businesses seeking exceptional hospitality and entertainment.
                  Every visit is designed to foster joy, relaxation, and
                  unforgettable memories.
                </p>
              </div>

              <div className="flex flex-wrap gap-4 pt-4">
                <div className="pill">📍 {location}</div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="relative aspect-square rounded-2xl overflow-hidden">
                <Image
                  src="/images/cc-pix3.png"
                  alt="Choice and Choices venue"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-square rounded-2xl overflow-hidden mt-8">
                <Image
                  src="/images/cc-pix2.png"
                  alt="Choice and Choices entertainment"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Offerings Section */}
      <section id="offerings" className="shell py-24">
        <div className="text-center mb-12">
          <p className="badge">Our Offerings</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-4">
            Tailored experiences for every moment
          </h2>
          <p className="text-lg text-[#d8dbe4] max-w-3xl mx-auto">
            From stunning event spaces to expert training programs, we deliver
            excellence in every service.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Gas Event Space */}
          <div className="card group cursor-pointer">
            <div className="relative aspect-video rounded-xl overflow-hidden mb-4">
              <Image
                src="https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=600"
                alt="Event Space"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <span className="absolute top-3 right-3 pill">Events</span>
            </div>
            <h3 className="text-2xl font-semibold text-white mb-3">
              Gas Event Space
            </h3>
            <p className="text-[#d6d9e5] mb-4">
              A stunning venue for weddings, birthdays, corporate events, and
              celebrations of any scale.
            </p>
            <ul className="list-dash text-sm">
              <li>Flexible layouts with expert coordination</li>
              <li>Ambient lighting and immersive sound</li>
              <li>On-site support for seamless experiences</li>
            </ul>
          </div>

          {/* Entertainment & Fun */}
          <div className="card group cursor-pointer">
            <div className="relative aspect-video rounded-xl overflow-hidden mb-4">
              <Image
                src="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=600"
                alt="Entertainment"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <span className="absolute top-3 right-3 pill">Leisure</span>
            </div>
            <h3 className="text-2xl font-semibold text-white mb-3">
              Entertainment & Fun
            </h3>
            <p className="text-[#d6d9e5] mb-4">
              Parties, concerts, and gatherings curated to keep energy high and
              memories vivid.
            </p>
            <ul className="list-dash text-sm">
              <li>Atmospheres tuned to your vibe</li>
              <li>Talented hosts and event specialists</li>
              <li>Comfort-first seating and lounge zones</li>
            </ul>
          </div>

          {/* Training & Development */}
          <div className="card group cursor-pointer">
            <div className="relative aspect-video rounded-xl overflow-hidden mb-4">
              <Image
                src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=600"
                alt="Training"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <span className="absolute top-3 right-3 pill">Growth</span>
            </div>
            <h3 className="text-2xl font-semibold text-white mb-3">
              Training & Development
            </h3>
            <p className="text-[#d6d9e5] mb-4">
              Expert-led programs in business and personal development that
              empower people to thrive.
            </p>
            <ul className="list-dash text-sm">
              <li>Curated workshops for teams and individuals</li>
              <li>Practical, outcomes-focused facilitation</li>
              <li>Spaces designed to inspire learning</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="shell py-24">
        <div className="text-center mb-12">
          <p className="badge">Gallery</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4">
            Moments captured at Choice & Choices
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {[
            "photo-1511795409834-ef04bbd61622",
            "photo-1519671482749-fd09be7ccebf",
            "photo-1523438885200-e635ba2c371e",
            "photo-1566737236500-c8ac43014a67",
            "photo-1519225421980-715cb0215aed",
            "photo-1527529482837-4698179dc6ce",
            "photo-1517457373958-b7bdd4587205",
            "photo-1528605248644-14dd04022da1",
          ].map((id, i) => (
            <div
              key={i}
              className="relative aspect-square rounded-xl overflow-hidden group cursor-pointer"
            >
              <Image
                src={`https://images.unsplash.com/${id}?q=80&w=400`}
                alt={`Gallery image ${i + 1}`}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white text-4xl">+</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Commitment Section */}
      <section className="shell py-24">
        <div className="glass p-8 md:p-12">
          <div className="text-center mb-12">
            <p className="badge">Our Commitment</p>
            <h2 className="text-4xl md:text-5xl font-bold text-white mt-4">
              Built on care, creativity, and excellence
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: "⭐",
                title: "Exceptional service",
                text: "Hospitality that anticipates needs and delights guests at every turn.",
              },
              {
                icon: "💡",
                title: "Innovative experiences",
                text: "Fresh concepts that blend entertainment, enjoyment, and comfort.",
              },
              {
                icon: "🤝",
                title: "Lasting relationships",
                text: "Partnering with customers and communities to create enduring value.",
              },
              {
                icon: "📈",
                title: "Continuous growth",
                text: "Evolving our spaces, skills, and services to meet your changing needs.",
              },
            ].map((item) => (
              <div key={item.title} className="card text-center">
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-[#d6d9e5] leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="shell py-24">
        <div className="text-center mb-12">
          <p className="badge">Testimonials</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-4">
            What our clients say
          </h2>
          <p className="text-lg text-[#d8dbe4] max-w-3xl mx-auto">
            Don't just take our word for it — hear from those who've experienced
            the Choice and Choices difference.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              name: "Adebayo Oluwaseun",
              role: "Wedding Client",
              rating: 5,
              text: "Our wedding was absolutely perfect! The team at Choice and Choices went above and beyond to make our special day unforgettable. The venue was stunning and the service was impeccable.",
              image: "👰",
            },
            {
              name: "Mrs. Chioma Nwankwo",
              role: "Corporate Event Organizer",
              rating: 5,
              text: "We've hosted multiple corporate events here and every single one has been a success. The professionalism and attention to detail is outstanding. Highly recommended!",
              image: "👔",
            },
            {
              name: "David Okafor",
              role: "Birthday Celebration",
              rating: 5,
              text: "From the planning stage to execution, everything was seamless. My family and I had an amazing time celebrating my 50th birthday. The atmosphere was electric!",
              image: "🎂",
            },
            {
              name: "Jennifer Adeleke",
              role: "Training Workshop Attendee",
              rating: 5,
              text: "The training facilities are top-notch. The environment is conducive for learning and the staff are very accommodating. Great experience overall!",
              image: "📚",
            },
            {
              name: "Emeka Udoka",
              role: "Anniversary Celebration",
              rating: 5,
              text: "Choice and Choices helped us celebrate 25 years of marriage in style. The ambiance, food, and service exceeded our expectations. Thank you for the memories!",
              image: "💑",
            },
            {
              name: "Fatima Bello",
              role: "Event Coordinator",
              rating: 5,
              text: "As someone who plans events professionally, I appreciate quality when I see it. This venue delivers on every front — space, aesthetics, and service. Simply excellent!",
              image: "✨",
            },
          ].map((testimonial, index) => (
            <div key={index} className="card">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-[#c9a646]/20 border border-[#c9a646]/30 flex items-center justify-center text-2xl flex-shrink-0">
                  {testimonial.image}
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-white">
                    {testimonial.name}
                  </h3>
                  <p className="text-sm text-[#a8afc3]">{testimonial.role}</p>
                </div>
              </div>

              <div className="flex gap-1 mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-[#c9a646] text-lg">
                    ★
                  </span>
                ))}
              </div>

              <p className="text-[#d6d9e5] leading-relaxed">
                "{testimonial.text}"
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="shell py-24">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="glass p-8">
            <p className="badge">Visit Us</p>
            <h2 className="text-4xl font-bold text-white mt-4 mb-6">
              Let's create unforgettable moments together
            </h2>
            <p className="text-lg text-[#d8dbe4] mb-8">
              Drop by to explore our spaces, plan your next celebration, or
              enroll in a program. We're ready to welcome you.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#c9a646]/10 border border-[#c9a646]/30 flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">📍</span>
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">Location</h3>
                  <p className="text-[#d6d9e5]">{location}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#c9a646]/10 border border-[#c9a646]/30 flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">📅</span>
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">Established</h3>
                  <p className="text-[#d6d9e5]">
                    April 8, 2023 — proudly serving Lagos
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#c9a646]/10 border border-[#c9a646]/30 flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">✉️</span>
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">
                    Get in Touch
                  </h3>
                  <p className="text-[#d6d9e5]">
                    Contact us for bookings and inquiries
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-3 mt-8 pt-8 border-t border-white/10">
              <a href="#offerings" className="btn-primary">
                Book an Event
              </a>
              <a href="#about" className="btn-ghost">
                Learn More
              </a>
            </div>
          </div>

          {/* Map Placeholder */}
          <div className="relative rounded-3xl overflow-hidden border border-white/10">
            <div className="absolute inset-0 bg-gradient-to-br from-[#c9a646]/20 to-transparent z-10"></div>
            <Image
              src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=800"
              alt="Location"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center z-20">
              <div className="text-center bg-black/70 backdrop-blur-sm p-6 rounded-2xl">
                <span className="text-5xl mb-2 block">📍</span>
                <p className="text-white font-semibold">
                  Choice and Choices Place
                </p>
                <p className="text-[#d6d9e5] text-sm">Iba Ojo, Lagos</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="shell py-12 border-t border-white/10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/logo-icon.svg"
                alt="Choice and Choices"
                width={40}
                height={40}
                className="w-full h-full"
              />
            </div>
            <div>
              <p className="text-white font-semibold">Choice & Choices</p>
              <p className="text-[#a8afc3] text-sm">Hotel & Event Center</p>
            </div>
          </div>

          <p className="text-[#99a0b3] text-sm text-center md:text-right">
            © {new Date().getFullYear()} Choice and Choices Place Nigeria
            Limited.
            <br className="md:hidden" /> Crafted with care in Lagos.
          </p>
        </div>
      </footer>
    </div>
  );
}
