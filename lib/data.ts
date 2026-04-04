import type { IconType } from 'react-icons'
import {
  FaBolt, FaBatteryFull, FaTint, FaShieldAlt, FaPlug, FaCaretRight,
  FaLightbulb, FaDatabase, FaAtom, FaRobot,
  FaCircle, FaLink, FaBan, FaLock, FaFire, FaBatteryHalf,
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
      "The invisible force that powers everything around you. We'll discover what electrons are, why they move, and what that movement actually means.",
    analogy:
      'Like water flowing through a pipe — electrons flowing through a wire IS electricity.',
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
      'The pressure that pushes electricity through a wire. Measured in Volts — from a 1.5V battery to a 220V wall socket.',
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
      'How much electricity actually flows through a wire each second. Measured in Amperes — the quantity, not the force.',
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
      "The thing that slows electricity down. Measured in Ohms. V = I × R — Ohm's Law ties all three together.",
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
      "A component whose entire job is adding a specific amount of resistance. Those colored stripes? They're a code that tells you exactly how many Ohms.",
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
      'A component that only allows electricity to flow in one direction. The right way — current flows. Backwards — nothing happens.',
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
      "Light Emitting Diode — a special diode that produces light when current flows through it. In your Robotik kit you have four colors. They're the first thing you'll bring to life.",
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
      'Stores electrical energy and releases it in a burst. Unlike a battery, it charges and discharges in milliseconds.',
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
      "The most important invention of the 20th century. It's a switch and an amplifier in one tiny package — and your phone has billions of them. A small signal controls a much larger one.",
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
      "A tiny computer on a chip. It has a processor, memory, and — most importantly — pins that connect to the physical world. Read inputs. Control outputs. That's engineering thinking.",
    analogy:
      'A tiny brain that can sense the world and control things in it.',
  },
  {
    id: 'electron',
    num: '11',
    Icon: FaCircle,
    title: 'What is an Electron?',
    color: 'cyan',
    duration: '~1.5 min',
    description:
      'The fundamental particle that carries electric charge. Everything in electricity comes down to electrons moving through materials.',
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
      'A material that allows electrons to move freely. Metals like copper are excellent conductors, which is why wires are made from them.',
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
      'A material that resists the flow of electrons. It prevents electricity from going where it shouldn\'t.',
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
      'The practice of separating parts of a circuit so that electricity cannot flow between them unintentionally. Critical for safety and signal integrity.',
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
      'The rate at which electrical energy is used or transferred. Measured in Watts. Power = Voltage × Current.',
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
      'A device that stores chemical energy and converts it into electrical energy, providing voltage to power circuits.',
    analogy:
      'Like a water tank that stores water and releases it when you need it. Here, instead of water, it\'s energy.',
  },
  {
    id: 'ground',
    num: '17',
    Icon: FaCaretRight,
    title: 'What is Ground?',
    color: 'yellow',
    duration: '~1.5 min',
    description:
      'A reference point in a circuit where voltage is defined as zero. It completes the circuit and provides a return path for current.',
    analogy:
      'Like the baseline or "home" that everything returns to.',
  },
  {
    id: 'switch',
    num: '18',
    Icon: FaToggleOn,
    title: 'What is a Switch?',
    color: 'green',
    duration: '~1.5 min',
    description:
      'A device that opens or closes a circuit. When closed, current flows. When open, it stops completely.',
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
      'A complete path that allows electricity to flow. Without a closed loop, nothing works.',
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
      'A measure of how effectively a device (like a transistor) converts a change in voltage into a change in current. Key to amplification.',
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
      'How often a signal repeats per second. Measured in Hertz (Hz). Important for signals, clocks, and communication.',
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
      'A changing electrical value (voltage or current) that carries information. Everything from buttons to Wi-Fi is based on signals.',
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
      'Start from zero. Learn the breadboard, wire your first circuit, write your first five lines of code, and watch an LED blink at the rhythm you choose. This is your "Hello, World" of electronics.',
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
      'Add your first INPUT. A pushbutton tells the Arduino when to act. Press and hold — LED on. Release — LED off. Then flip the logic and make it work in reverse. Your first if/else, your first real decision in code.',
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
