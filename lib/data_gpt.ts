import type { IconType } from 'react-icons'
import {
  FaBolt, FaBatteryFull, FaTint, FaShieldAlt, FaPlug, FaCaretRight,
  FaLightbulb, FaDatabase, FaAtom, FaRobot,
  FaCircle, FaLink, FaBan, FaLock, FaFire, FaBatteryHalf, FaMicrochip,
  FaToggleOn, FaSyncAlt, FaSlidersH, FaWaveSquare, FaBroadcastTower,
} from 'react-icons/fa'

export type ConceptColor = 'orange' | 'cyan' | 'purple' | 'green' | 'yellow'

export interface Concept {
  id: string
  num: string
  Icon: IconType
  title: string
  color: ConceptColor
  duration: string
  description: string
  analogy: string
  videoId?: string
  isShorts?: boolean
}

export interface Lesson {
  id: string
  num: string
  title: string
  badge: string
  badgeColor: 'orange' | 'green' | 'blue' | 'purple'
  description: string
  components: string[]
  duration: string
  videoId?: string
}

export const colorStyles: Record<
  ConceptColor,
  {
    sectionBg: string
    tagBg: string
    tagText: string
    iconBg: string
    border: string
    analogyBg: string
    analogyBorder: string
    glowShadow: string
    badge: string
  }
> = {
  orange: {
    sectionBg: 'bg-brand-50',
    tagBg: 'bg-brand-100',
    tagText: 'text-brand-600',
    iconBg: 'bg-brand-100',
    border: 'border-brand-200',
    analogyBg: 'bg-brand-50',
    analogyBorder: 'border-l-brand-400',
    glowShadow: 'hover:shadow-brand-200',
    badge: 'bg-brand-100 text-brand-700 border-brand-200',
  },
  cyan: {
    sectionBg: 'bg-blue-50',
    tagBg: 'bg-blue-100',
    tagText: 'text-blue-600',
    iconBg: 'bg-blue-100',
    border: 'border-blue-200',
    analogyBg: 'bg-blue-50',
    analogyBorder: 'border-l-blue-400',
    glowShadow: 'hover:shadow-blue-200',
    badge: 'bg-blue-100 text-blue-700 border-blue-200',
  },
  purple: {
    sectionBg: 'bg-accent-50',
    tagBg: 'bg-accent-100',
    tagText: 'text-accent-600',
    iconBg: 'bg-accent-100',
    border: 'border-accent-200',
    analogyBg: 'bg-accent-50',
    analogyBorder: 'border-l-accent-400',
    glowShadow: 'hover:shadow-accent-200',
    badge: 'bg-accent-100 text-accent-700 border-accent-200',
  },
  green: {
    sectionBg: 'bg-emerald-50',
    tagBg: 'bg-emerald-100',
    tagText: 'text-emerald-600',
    iconBg: 'bg-emerald-100',
    border: 'border-emerald-200',
    analogyBg: 'bg-emerald-50',
    analogyBorder: 'border-l-emerald-400',
    glowShadow: 'hover:shadow-emerald-200',
    badge: 'bg-emerald-100 text-emerald-700 border-emerald-200',
  },
  yellow: {
    sectionBg: 'bg-blue-50',
    tagBg: 'bg-blue-100',
    tagText: 'text-blue-600',
    iconBg: 'bg-blue-100',
    border: 'border-blue-200',
    analogyBg: 'bg-blue-50',
    analogyBorder: 'border-l-blue-400',
    glowShadow: 'hover:shadow-blue-200',
    badge: 'bg-blue-100 text-blue-700 border-blue-200',
  },
}

export const lessonBadgeStyles: Record<Lesson['badgeColor'], string> = {
  orange: 'bg-brand-100 text-brand-700 border-brand-200',
  green: 'bg-emerald-100 text-emerald-700 border-emerald-200',
  blue: 'bg-blue-100 text-blue-700 border-blue-200',
  purple: 'bg-accent-100 text-accent-700 border-accent-200',
}

export const concepts: Concept[] = [
  {
    id: 'electricity',
    num: '01',
    Icon: FaBolt,
    title: 'What is Electricity?',
    color: 'orange',
    duration: '~1.5 min',
    description:
      'Electricity is the movement of electrons through a material, and it is the reason lights glow, motors spin, sensors react, and robots come to life. This is the foundation of every beginner electronics and Arduino project.',
    analogy:
      'Like lots of tiny runners moving through one hallway — when the electrons move together, the whole system starts working.',
    videoId: '1OxI9o0l3WU',
  },
  {
    id: 'voltage',
    num: '02',
    Icon: FaBatteryFull,
    title: 'What is Voltage?',
    color: 'cyan',
    duration: '~1.5 min',
    description:
      'Voltage is the push behind electricity. It is the electrical pressure that moves electrons through a circuit, whether it comes from a small battery or an Arduino power source.',
    analogy: 'Water pressure in a pipe — higher pressure means stronger push.',
    videoId: '0v3t92xasrI',
    isShorts: true,
  },
  {
    id: 'current',
    num: '03',
    Icon: FaTint,
    title: 'What is Current?',
    color: 'cyan',
    duration: '~1.5 min',
    description:
      'Current tells you how much electricity is actually flowing through a circuit. It is measured in amperes and helps explain why some components stay cool while others get hot.',
    analogy: 'How much water flows through the pipe, not just the pressure.',
  },
  {
    id: 'resistance',
    num: '04',
    Icon: FaShieldAlt,
    title: 'What is Resistance?',
    color: 'purple',
    duration: '~1.5 min',
    description:
      "Resistance is what slows electric flow. It is measured in ohms and helps kids understand why circuits need control instead of letting too much current rush through at once.",
    analogy: 'A narrow section in a pipe that slows the water flow.',
  },
  {
    id: 'resistor',
    num: '05',
    Icon: FaPlug,
    title: 'What is a Resistor?',
    color: 'purple',
    duration: '~1.5 min',
    description:
      "A resistor is a simple but essential component that limits current to protect LEDs and other parts. Those colored bands are a code that tells you exactly how much resistance it adds.",
    analogy: 'A speed bump for electricity. Protects LEDs from burning out.',
  },
  {
    id: 'diode',
    num: '06',
    Icon: FaCaretRight,
    title: 'What is a Diode?',
    color: 'green',
    duration: '~1.5 min',
    description:
      'A diode is a one-way component for electricity. It lets current move forward but blocks it from going the wrong way, which is why direction matters when building circuits.',
    analogy: 'A one-way door. You can walk through going forward, but not back.',
  },
  {
    id: 'led',
    num: '07',
    Icon: FaLightbulb,
    title: 'What is an LED?',
    color: 'yellow',
    duration: '~1.5 min',
    description:
      "An LED is a Light Emitting Diode — a tiny electronic component that glows when current passes through it. It is usually the first exciting result children see in beginner Arduino and electronics lessons.",
    analogy: 'A diode that glows! Connect it the right way and it lights up.',
  },
  {
    id: 'capacitor',
    num: '08',
    Icon: FaDatabase,
    title: 'What is a Capacitor?',
    color: 'cyan',
    duration: '~1.5 min',
    description:
      'A capacitor stores a small amount of electrical energy and releases it quickly when needed. It is used in electronics to smooth signals, create delays, and support fast changes in a circuit.',
    analogy: 'A tiny rechargeable bucket — fill it, then empty it fast.',
  },
  {
    id: 'transistor',
    num: '09',
    Icon: FaAtom,
    title: 'What is a Transistor?',
    color: 'orange',
    duration: '~2 min',
    description:
      "A transistor is one of the most important building blocks in modern electronics. It can work like a switch or an amplifier, allowing a tiny signal to control a much bigger one.",
    analogy:
      'A tap you control electrically, not by hand. Small current in → large current controlled.',
  },
  {
    id: 'microcontroller',
    num: '10',
    Icon: FaRobot,
    title: 'What is a Microcontroller?',
    color: 'orange',
    duration: '~2 min',
    description:
      "A microcontroller is a tiny computer built to control the real world. It reads inputs from buttons and sensors, makes decisions in code, and controls outputs like LEDs, buzzers, and motors.",
    analogy:
      'A tiny brain that can sense the world and control things in it.',
    videoId: 'pjGItxLEouo',
    isShorts: true,
  },
  {
    id: 'electron',
    num: '11',
    Icon: FaCircle,
    title: 'What is an Electron?',
    color: 'cyan',
    duration: '~1.5 min',
    description:
      'An electron is the tiny charged particle behind every electric effect. When electrons move through wires and components, they create the behavior we call electricity.',
    analogy:
      'Like tiny charged particles flowing through a wire — they are the actual "things" that move.',
  },
  {
    id: 'conductor',
    num: '12',
    Icon: FaLink,
    title: 'What is a Conductor?',
    color: 'green',
    duration: '~1.5 min',
    description:
      'A conductor is a material that lets electrons move easily. Copper is a great example, which is why most beginner circuits and Arduino wires use it.',
    analogy:
      'Like a smooth, open highway where cars can move easily.',
  },
  {
    id: 'insulator',
    num: '13',
    Icon: FaBan,
    title: 'What is an Insulator?',
    color: 'purple',
    duration: '~1.5 min',
    description:
      'An insulator is a material that blocks or strongly resists the flow of electricity. It keeps current where it belongs and helps make circuits safe to touch and use.',
    analogy:
      'Like a wall blocking the road — nothing can pass through.',
  },
  {
    id: 'isolation',
    num: '14',
    Icon: FaLock,
    title: 'What is Electrical Isolation?',
    color: 'purple',
    duration: '~1.5 min',
    description:
      'Electrical isolation means keeping parts of a circuit separated so electricity cannot accidentally jump where it should not go. It matters for safety, protection, and reliable signal behavior.',
    analogy:
      'Like separating two rooms so sound or movement doesn\'t leak between them.',
  },
  {
    id: 'power',
    num: '15',
    Icon: FaFire,
    title: 'What is Power?',
    color: 'orange',
    duration: '~1.5 min',
    description:
      'Power tells you how fast electrical energy is being used. It combines voltage and current, which is why even simple Arduino projects can teach kids how real devices consume energy.',
    analogy:
      'Not just how hard you push (voltage) or how much flows (current), but how much total work is being done.',
  },
  {
    id: 'battery',
    num: '16',
    Icon: FaBatteryHalf,
    title: 'What is a Battery?',
    color: 'green',
    duration: '~1.5 min',
    description:
      'A battery stores chemical energy and turns it into electrical energy that can power a circuit. It gives a project the voltage it needs to start working.',
    analogy:
      'Like a water tank that stores water and releases it when you need it. Here, instead of water, it\'s energy.',
  },
  {
    id: 'ground',
    num: '17',
    Icon: FaMicrochip,
    title: 'What is an Arduino Board?',
    color: 'yellow',
    duration: '~1.5 min',
    description:
      'An Arduino board is a beginner-friendly platform for learning electronics, coding, and robotics. You write code, upload it, connect real parts, and see your project respond in the physical world.',
    analogy:
      'Like a tiny computer that speaks the language of electronics — you tell it what to do, and it controls LEDs, motors, sensors, and more.',
    videoId: 'dmNWp1P0ZdU',
    isShorts: true,
  },
  {
    id: 'switch',
    num: '18',
    Icon: FaToggleOn,
    title: 'What is a Switch?',
    color: 'green',
    duration: '~1.5 min',
    description:
      'A switch opens or closes a circuit. It is one of the simplest ways to control whether electricity is allowed to move or forced to stop.',
    analogy:
      'Like turning a valve on or off in a pipe.',
  },
  {
    id: 'circuit',
    num: '19',
    Icon: FaSyncAlt,
    title: 'What is a Circuit?',
    color: 'orange',
    duration: '~1.5 min',
    description:
      'A circuit is a complete path that lets electricity travel from a power source, through components, and back again. If the loop is broken, the project stops working.',
    analogy:
      'Like a looped road — if it\'s broken anywhere, traffic stops.',
  },
  {
    id: 'transconductance',
    num: '20',
    Icon: FaSlidersH,
    title: 'What is Transconductance?',
    color: 'purple',
    duration: '~2 min',
    description:
      'Transconductance describes how strongly a device such as a transistor turns a small voltage change into a current change. It is a useful idea for understanding amplification.',
    analogy:
      'A small change in control causes a large change in output — like slightly turning a knob and getting a big effect.',
  },
  {
    id: 'frequency',
    num: '21',
    Icon: FaWaveSquare,
    title: 'What is Frequency?',
    color: 'cyan',
    duration: '~1.5 min',
    description:
      'Frequency tells you how many times something repeats each second. It matters in blinking patterns, clock signals, sound, communication, and many Arduino timing tasks.',
    analogy:
      'Like how fast something vibrates or repeats — slow pulses vs very fast ones.',
  },
  {
    id: 'signal',
    num: '22',
    Icon: FaBroadcastTower,
    title: 'What is a Signal?',
    color: 'yellow',
    duration: '~1.5 min',
    description:
      'A signal is a changing electrical value that carries information. Buttons, sensors, sound, radio, and Wi-Fi all depend on signals to communicate meaning.',
    analogy:
      'Like a message being sent — the shape of the signal is the meaning.',
  },
]

export const lessons: Lesson[] = [
  {
    id: 'blink',
    num: '01',
    title: 'Your First Blink: Make an LED Come Alive',
    badge: 'Absolute Beginner',
    badgeColor: 'orange',
    description:
      'Start from zero and build your very first working Arduino circuit. In this lesson, kids learn the breadboard, connect an LED safely, upload simple code, and watch their first project blink to life.',
    components: [
      'Arduino Uno',
      'USB Cable',
      '1× LED',
      '220Ω Resistor',
      'Breadboard',
      '2× Jumper Wires',
    ],
    duration: '~4 min',
  },
  {
    id: 'button',
    num: '02',
    title: 'Add a Button: You Control the Light',
    badge: 'Beginner',
    badgeColor: 'green',
    description:
      'Add your first real input to the circuit. This lesson teaches children how a pushbutton talks to Arduino, how code reacts to that signal, and how one simple if/else turns a passive circuit into an interactive project.',
    components: [
      'Arduino Uno',
      'USB Cable',
      '1× LED',
      '220Ω Resistor',
      'Pushbutton',
      '10kΩ Resistor',
      'Breadboard',
      '4× Jumper Wires',
    ],
    duration: '~4 min',
  },
]
