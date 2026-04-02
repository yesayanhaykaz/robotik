import type { IconType } from 'react-icons'
import {
  FaBolt, FaBatteryFull, FaTint, FaShieldAlt, FaPlug, FaCaretRight,
  FaLightbulb, FaDatabase, FaAtom, FaRobot,
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
    sectionBg: 'bg-orange-50',
    tagBg: 'bg-orange-100',
    tagText: 'text-orange-600',
    iconBg: 'bg-orange-100',
    border: 'border-orange-200',
    analogyBg: 'bg-orange-50',
    analogyBorder: 'border-l-orange-400',
    glowShadow: 'hover:shadow-orange-200',
    badge: 'bg-orange-100 text-orange-700 border-orange-200',
  },
  cyan: {
    sectionBg: 'bg-cyan-50',
    tagBg: 'bg-cyan-100',
    tagText: 'text-cyan-600',
    iconBg: 'bg-cyan-100',
    border: 'border-cyan-200',
    analogyBg: 'bg-cyan-50',
    analogyBorder: 'border-l-cyan-400',
    glowShadow: 'hover:shadow-cyan-200',
    badge: 'bg-cyan-100 text-cyan-700 border-cyan-200',
  },
  purple: {
    sectionBg: 'bg-purple-50',
    tagBg: 'bg-purple-100',
    tagText: 'text-purple-600',
    iconBg: 'bg-purple-100',
    border: 'border-purple-200',
    analogyBg: 'bg-purple-50',
    analogyBorder: 'border-l-purple-400',
    glowShadow: 'hover:shadow-purple-200',
    badge: 'bg-purple-100 text-purple-700 border-purple-200',
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
    sectionBg: 'bg-yellow-50',
    tagBg: 'bg-yellow-100',
    tagText: 'text-yellow-600',
    iconBg: 'bg-yellow-100',
    border: 'border-yellow-200',
    analogyBg: 'bg-yellow-50',
    analogyBorder: 'border-l-yellow-400',
    glowShadow: 'hover:shadow-yellow-200',
    badge: 'bg-yellow-100 text-yellow-700 border-yellow-200',
  },
}

export const lessonBadgeStyles: Record<Lesson['badgeColor'], string> = {
  orange: 'bg-orange-100 text-orange-700 border-orange-200',
  green: 'bg-emerald-100 text-emerald-700 border-emerald-200',
  blue: 'bg-blue-100 text-blue-700 border-blue-200',
  purple: 'bg-purple-100 text-purple-700 border-purple-200',
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
