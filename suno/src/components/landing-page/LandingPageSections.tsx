import Image from 'next/image'
import { ArrowRight, Award, Brain, Clock, Heart, Home, Hospital, Music, School, Users, type LucideIcon } from 'lucide-react'
import { motion } from 'framer-motion'

const DONATE_URL = 'https://www.paypal.com/donate/?cmd=_s-xclick&hosted_button_id=J2RM9AGPDLDX6&ssrt=1728796488283'

const heroImages = [
  { src: '/nmtsa1.webp', alt: 'NMTSA therapy session 1' },
  { src: '/nmtsa2.webp', alt: 'NMTSA therapy session 2' },
  { src: '/nmtsa3.webp', alt: 'NMTSA therapy session 3' },
  { src: '/nmtsa3.jpeg', alt: 'NMTSA therapy session 4' },
]

const programCards = [
  {
    Icon: Music,
    title: 'EVIDENCE-BASED APPROACH',
    body: 'Utilizing standardized, research-based techniques to treat the brain using specific elements of music. Our therapists are stimulus specialists trained in the neuroscience of music perception, production, and cognition.',
    linkText: 'Our Techniques',
  },
  {
    Icon: Brain,
    title: 'SPECIALIZED THERAPY',
    body: 'Addressing non-musical goals such as speech, physical movement, and cognition through music therapy. We serve individuals with various conditions, including autism, traumatic brain injury, developmental disabilities, and more.',
    linkText: 'Learn More',
  },
  {
    Icon: Users,
    title: 'DIVERSE CLIENTELE',
    body: 'Serving individuals aged 18 months to 90+ years with various neurologic impairments and differences. Our clients include those with cerebral palsy, Down syndrome, stroke, Parkinson\'s disease, and more.',
    linkText: 'Our Impact',
  },
]

const impactStats = [
  {
    Icon: Clock,
    value: '40+',
    label: 'YEARS OF SERVICE',
    body: 'Providing neurologic music therapy services in the greater Phoenix area since 1982',
  },
  {
    Icon: Award,
    value: 'MT-BC',
    label: 'CERTIFIED THERAPISTS',
    body: 'All our therapists hold national certification and maintain Fellowship status with the Academy of Neurologic Music Therapy',
  },
  {
    Icon: Heart,
    value: 'ALL AGES',
    label: 'SERVED',
    body: 'Offering specialized therapy for individuals from 18 months to 90+ years of age',
  },
]

const services = [
  {
    Icon: Home,
    title: 'In-Clinic',
    body: 'Specially designed clinic space with eight individual therapy rooms, a large group room, and a recording studio.',
  },
  {
    Icon: School,
    title: 'Schools',
    body: 'Providing therapy services in educational settings to support students\' learning and development.',
  },
  {
    Icon: Hospital,
    title: 'Hospitals & Rehab Centers',
    body: 'Offering therapy in medical settings to aid in recovery and rehabilitation processes.',
  },
]

interface IconCardProps {
  Icon: LucideIcon
  title: string
  body: string
  linkText: string
}

function IconCard({ Icon, title, body, linkText }: IconCardProps) {
  return (
    <div className="text-center p-6 bg-gray-100 rounded-lg">
      <Icon className="w-16 h-16 mx-auto mb-6 text-[#f5c242]" />
      <h2 className="text-3xl font-bold mb-4">{title}</h2>
      <p className="text-gray-700 mb-6 text-lg">{body}</p>
      <a href="#" className="text-[#f5c242] hover:text-[#e5b232] flex items-center justify-center text-lg font-semibold">
        {linkText} <ArrowRight className="ml-2 w-5 h-5" />
      </a>
    </div>
  )
}

export function HeroSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mb-16 sm:mb-24"
    >
      <div className="flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-black mb-4 sm:mb-6">
            UNLEASHING POTENTIAL THROUGH MUSIC THERAPY
          </h1>
          <p className="text-xl sm:text-2xl text-gray-700 mb-6 sm:mb-10">
            Serving individuals with neurologic impairments and differences since 1982.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
            <a
              href={DONATE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#f5c242] text-black px-6 py-3 rounded-md hover:bg-[#e5b232] text-lg font-bold transition duration-300 text-center"
            >
              DONATE
            </a>
            <a
              href="#volunteer"
              className="bg-[#0c2340] text-white px-6 py-3 rounded-md hover:bg-[#0a1c30] text-lg font-bold transition duration-300 text-center"
            >
              VOLUNTEER
            </a>
          </div>
        </div>
        <div className="w-full md:w-1/2 grid grid-cols-2 gap-4 sm:gap-6 mt-8 md:mt-0">
          {heroImages.map((image) => (
            <Image
              key={image.src}
              src={image.src}
              alt={image.alt}
              width={400}
              height={400}
              className="rounded-lg w-full h-auto"
            />
          ))}
        </div>
      </div>
    </motion.section>
  )
}

export function ProgramHighlightsSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="grid md:grid-cols-3 gap-12 mb-24"
    >
      {programCards.map((card) => (
        <IconCard key={card.title} {...card} />
      ))}
    </motion.section>
  )
}

export function TherapyFeatureSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      className="bg-[#f5c242] rounded-lg shadow-lg p-12 mb-24"
    >
      <div className="text-black mb-2 text-xl">NEUROLOGIC MUSIC THERAPY (NMT)®</div>
      <h2 className="text-4xl font-bold mb-6 text-black">
        TRANSFORMING LIVES THROUGH THE POWER OF MUSIC
      </h2>
      <div className="w-32 h-1 bg-black mb-8"></div>
      <p className="text-black mb-8 text-xl leading-relaxed">
        Neurologic Music Therapy is an evidence-based treatment system that uses standardized, research-based techniques to treat the brain using specific elements of music such as rhythm, melody, dynamics, tempo, etc. NMTSA was the first private organization to provide music therapy services in Phoenix and established the first NMT clinic in the United States.
      </p>
      <a href="#" className="text-black hover:text-gray-800 flex items-center text-xl font-semibold">
        Discover NMT <ArrowRight className="ml-2 w-6 h-6" />
      </a>
    </motion.section>
  )
}

export function ImpactStatsSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.6 }}
      className="grid md:grid-cols-3 gap-12 mb-24"
    >
      {impactStats.map(({ Icon, value, label, body }) => (
        <div key={label} className="text-center p-6 bg-gray-100 rounded-lg">
          <Icon className="w-16 h-16 mx-auto mb-6 text-[#f5c242]" />
          <div className="text-5xl font-bold mb-4">{value}</div>
          <div className="text-[#f5c242] mb-4 text-2xl font-semibold">{label}</div>
          <p className="text-gray-700 text-lg">{body}</p>
        </div>
      ))}
    </motion.section>
  )
}

export function ServicesSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.8 }}
      className="mb-24"
    >
      <h2 className="text-4xl font-bold mb-12 text-center">OUR SERVICES AND FACILITIES</h2>
      <div className="grid md:grid-cols-3 gap-12">
        {services.map(({ Icon, title, body }) => (
          <div key={title} className="flex flex-col items-center">
            <Icon className="w-16 h-16 mb-6 text-[#f5c242]" />
            <h3 className="text-2xl font-semibold mb-4">{title}</h3>
            <p className="text-center text-gray-700">{body}</p>
          </div>
        ))}
      </div>
    </motion.section>
  )
}
