'use client'

import { createContext, useContext, useEffect, type ReactNode } from 'react'

export type Locale = 'en' | 'hy' | 'ru'

// ─── TRANSLATIONS ────────────────────────────────────────────────────────────

const translations = {
  en: {
    nav: {
      howItWorks: 'How it Works',
      concepts: 'Concepts',
      lessons: 'Lessons',
      starterKit: 'Starter Kit',
      startBuilding: 'Start Building →',
    },
    home: {
      heroBadge: "Children's Robotics Education",
      heroTitle1: 'Turn curiosity',
      heroTitle2: 'into',
      heroTitle3: 'circuits.',
      heroSubtitle: 'Online electronics and robotics lessons for kids ages 7–15. Watch short videos, build real projects, and start thinking like an engineer.',
      heroStartLearning: 'Start Learning',
      heroSeeLessons: 'See Lessons',
      statConcepts: 'Core Concepts',
      statLessons: 'Live Lessons',
      statAges: 'Target Ages',
      statFree: 'Free',
      statFreeLabel: 'To Start Learning',
      methodLabel: 'The Method',
      methodTitle: 'Three steps to thinking like a builder',
      methodSubtitle: 'Every lesson follows the same rhythm — so kids always know what to expect.',
      step1Title: 'Watch',
      step1Desc: 'Short, focused videos — 1 to 5 minutes each. One concept, one analogy, one takeaway. No filler.',
      step2Title: 'Build',
      step2Desc: 'Follow along with your starter kit. Real components, real wiring, real code. Something physical you made.',
      step3Title: 'Understand',
      step3Desc: "When the LED blinks, when the button works, when the motor spins — something clicks. That moment lasts forever.",
      conceptsLabel: 'Knowledge Base',
      conceptsTitle: 'Everything starts with understanding',
      conceptsSubtitle: 'Each concept is a short 1–2 minute video — one idea, explained simply.',
      viewAll10: 'View All 22',
      watchConcept: 'Watch concept →',
      lessonsLabel: 'Project Lessons',
      lessonsTitle: 'Build something real — today',
      lessonsSubtitle: 'Each lesson ends with a working result. Not a simulation. A real circuit you built.',
      viewAllLessons: 'View All Lessons',
      watchLesson: 'Watch lesson →',
      whatYouNeed: 'What you need',
      comingSoonLabel: 'Coming Soon',
      comingSoonTitle: 'Lessons 03–10 in development',
      comingSoonDesc: 'Buzzer, sensors, traffic light, temperature monitor, servo motor, mini robot…',
      getNotified: 'Get notified →',
      kitLabel: 'Starter Kit',
      kitTitle: 'Everything to start building today',
      kitDesc1: 'The kit is designed around the lessons. Every component you see in a video is in the box. No shopping around, no guessing, no missing pieces.',
      kitDesc2: "One kit covers all the beginner lessons. When you're ready for more, an intermediate kit adds motors, displays, and wireless modules.",
      orderKit: 'Order Starter Kit →',
      kitShips: 'Ships within Armenia · Designed for ages 8+',
      missionLabel: 'Why Robotik',
      missionQuote: "\"We don't teach children to use technology. We teach them to create it.\"",
      missionQuote1: "We don't teach children to use technology.",
      missionQuote2: 'We teach them to',
      missionQuote3: 'create',
      missionQuote4: 'it.',
      missionDesc: 'Kids spend hours every day consuming apps, games, and videos — but almost none of them understand how any of it works. Robotik flips that. A child who can wire an LED, write a loop, and debug a circuit will never be afraid of technology.',
      point1Title: 'Engineering mindset, not just coding',
      point1Desc: 'We teach children how systems work — inputs, outputs, logic, and cause-and-effect. Skills that transfer to everything.',
      point2Title: 'Confidence through real results',
      point2Desc: 'Every lesson ends with something that works. The LED blinks. The button responds. That visible win changes how a child sees themselves.',
      point3Title: 'Built for the future',
      point3Desc: 'As AI changes many professions, children who understand systems and technology will always have an edge.',
      parentsLabel: 'For Parents',
      parentsTitle: "What you're actually buying",
      parentsSubtitle: '"Arduino lessons." Something much more valuable than that.',
      parent1Title: 'Useful screen time',
      parent1Desc: 'Instead of passive scrolling, your child builds something real. Every minute on Robotik produces a tangible result.',
      parent2Title: 'Future-ready skills',
      parent2Desc: 'Robotics, logic, programming, and engineering thinking — the skills that will matter most in the next decade.',
      parent3Title: 'Practical creativity',
      parent3Desc: "Not just watching — building. Your child designs, experiments, makes mistakes, fixes them. Real creative problem-solving.",
      parent4Title: 'Confidence with technology',
      parent4Desc: "A child who builds circuits won't be afraid of any technology, ever. That confidence compounds for years.",
      parent5Title: 'Not gaming — making',
      parent5Desc: 'Games are passive. Building is active. Robotik gives kids the same excitement as a game, but with something real at the end.',
      parent6Title: 'Real STEM education',
      parent6Desc: "Not worksheets and theory. Hands-on, project-based learning that actually sticks — and that your child will talk about at dinner.",
      ctaTitle: 'Ready to start building?',
      ctaSubtitle: "Start with the free lessons today. Order the starter kit when you're ready to go hands-on.",
      ctaExplore: 'Explore All Concepts →',
      ctaLessons: 'View Lessons',
    },
    conceptsPage: {
      back: '← Back to Home',
      label: 'Knowledge Base',
      title1: '22 Core',
      title2: 'Concepts',
      subtitle: 'Before building, you need to know what the pieces are. Each concept is a short 1–2 minute video — one idea, explained simply with a real-life analogy.',
      concept: 'Concept',
      watchVideo: 'Watch Video',
      learnConcept: 'Learn Concept',
    },
    conceptDetail: {
      allConcepts: 'All Concepts',
      concept: 'Concept',
      videoAvailable: 'Video Available',
      videoComingSoon: 'Video Coming Soon',
      watchVideo: 'Watch the Video',
      whatIsIt: 'What is it?',
      simpleAnalogy: 'The Simple Analogy',
      allConceptsSidebar: 'All Concepts',
      readyToBuild: 'Ready to Build?',
      readyToBuildDesc: 'Put this concept into practice with a project lesson.',
      viewLessons: 'View Project Lessons →',
      previous: 'Previous',
      next: 'Next',
    },
    lessonsPage: {
      back: '← Back to Home',
      label: 'Project Lessons',
      title1: 'Build something',
      title2: 'real',
      title3: 'today',
      subtitle: 'Each lesson ends with a working result. Not a simulation. Not a diagram. A real circuit you built with your own hands.',
      whatYouNeed: 'What you need',
      components: 'components',
      watchLesson: 'Watch',
      openLesson: 'Open Lesson',
      comingSoonLabel: 'Coming Soon',
      comingSoonTitle: 'Lessons 03–10 in development',
      comingSoonDesc: 'Buzzer alarm, sensors, traffic light, temperature monitor, servo motor, mini robot… New lessons added regularly.',
      getNotified: 'Get Notified When New Lessons Drop →',
    },
    lessonDetail: {
      allLessons: 'All Lessons',
      lesson: 'LESSON',
      components: 'components',
      videoAvailable: 'Video Available',
      videoComingSoon: 'Video Coming Soon',
      watchLesson: 'Watch the Lesson',
      aboutLesson: 'About this Lesson',
      whatYoullDo: "What You'll Do",
      componentsNeeded: 'Components Needed',
      dontHaveParts: "Don't have the parts?",
      dontHavePartsDesc: 'The Robotik Starter Kit includes everything you need for this and all beginner lessons.',
      orderKit: 'Order Starter Kit →',
      conceptsUsed: 'Concepts Used',
      tryCircuit: 'Try the Circuit',
      tryCircuitDesc: 'Interact with the circuit right here — click the button, watch the LED, and experiment!',
      previousLesson: 'Previous Lesson',
      nextLesson: 'Next Lesson',
    },
    footer: {
      description: "Children's robotics and electronics education. Part of the",
      family: 'family — a children\'s company in Armenia.',
      ages: 'Ages 7–15',
      freeToStart: 'Free to Start',
      learnLabel: 'Learn',
      allConcepts: 'All Concepts',
      projectLessons: 'Project Lessons',
      howItWorks: 'How it Works',
      connectLabel: 'Connect',
      copyright: '© 2025 Robotik · Part of',
      madeIn: '· Made in Armenia 🇦🇲',
      tagline: 'Teaching kids to build, not just use.',
    },
    kitPage: {
      back: '← Back to Home',
      label: 'Starter Kit',
      title1: 'Choose Your',
      title2: 'Kit',
      subtitle: 'Everything you need to follow along with our lessons. Each kit is designed around specific projects — real components, real circuits, real results.',
      whatsIncluded: "What's Included",
      perfectFor: 'Perfect for',
      orderNow: 'Order Now →',
      comingSoon: 'Coming Soon',
      questionsTitle: 'Have questions about the kits?',
      questionsDesc: 'Write to us and we\'ll help you choose the right kit for your child\'s age and experience level.',
      contactUs: 'Contact Us →',
      shipsNote: 'All kits ship within Armenia. International shipping coming soon.',
      kit1Name: 'Blink Starter Kit',
      kit1Desc: 'Your first step into electronics. Build your first LED circuit and make it blink with code. Everything for Lesson 01.',
      kit1For: 'Lesson 01 — First Blink',
      kit1Price: '12,000 AMD',
      kit2Name: 'Button Control Kit',
      kit2Desc: 'Add interactivity! Learn inputs with pushbuttons and control your LED with real decisions in code. Covers Lessons 01–02.',
      kit2For: 'Lessons 01–02',
      kit2Price: '18,000 AMD',
      kit3Name: 'Full Beginner Kit',
      kit3Desc: 'The complete starter package. Covers all beginner lessons including buzzer, sensors, and more. Best value for serious learners.',
      kit3For: 'All Beginner Lessons (01–05)',
      kit3Price: '35,000 AMD',
      kit3Badge: 'Best Value',
      kit4Name: 'Advanced Explorer Kit',
      kit4Desc: 'For kids who want to go further. Includes servo motors, LCD display, IR remote, and wireless modules for building a mini robot.',
      kit4For: 'Advanced Lessons (06–10)',
      kit4Price: '55,000 AMD',
      kit4Badge: 'Coming Soon',
    },
    chatPage: {
      label: 'AI Helper',
      title1: 'Ask',
      title2: 'Robotik AI',
      subtitle: "Stuck on a circuit? Not sure which wire goes where? Ask our AI helper anything about electronics and robotics — it\u2019s like having a teacher right next to you.",
      placeholder: 'Ask anything about electronics, circuits, Arduino...',
      send: 'Send',
      welcomeTitle: "Hi there! I\u2019m your Robotik AI helper",
      welcomeDesc: 'I can help you with electronics, circuits, Arduino code, and anything from our lessons. Try asking me something!',
      suggestion1: 'Why is my LED not turning on?',
      suggestion2: 'What does a resistor do?',
      suggestion3: 'How do I connect a button to Arduino?',
      suggestion4: "Explain Ohm\u2019s Law simply",
      thinking: 'Thinking...',
      comingSoonReply: "Our AI assistant is being trained right now! Soon I\u2019ll be able to help you with all your electronics questions. In the meantime, check out our Concepts and Lessons \u2014 they cover everything step by step!",
    },




    concepts: {
      electron: {
  title: 'What is an Electron?',
  description: 'The fundamental particle that carries electric charge. Everything in electricity comes down to electrons moving through materials.',
  analogy: 'Like tiny charged particles flowing through a wire — they are the actual “things” that move.',
},

conductor: {
  title: 'What is a Conductor?',
  description: 'A material that allows electrons to move freely. Metals like copper are excellent conductors, which is why wires are made from them.',
  analogy: 'Like a smooth, open highway where cars can move easily.',
},

insulator: {
  title: 'What is an Insulator?',
  description: 'A material that resists the flow of electrons. It prevents electricity from going where it shouldn’t.',
  analogy: 'Like a wall blocking the road — nothing can pass through.',
},

isolation: {
  title: 'What is Electrical Isolation?',
  description: 'The practice of separating parts of a circuit so that electricity cannot flow between them unintentionally. It’s critical for safety and signal integrity.',
  analogy: 'Like separating two rooms so sound or movement doesn’t leak between them.',
},


ground: {
  title: 'What is an Arduino Board?',
  description: 'A beginner-friendly microcontroller board that lets you build real electronic projects. Write code, upload it, and watch your circuit come alive.',
  analogy: 'Like a tiny computer that speaks the language of electronics — you tell it what to do, and it controls LEDs, motors, sensors, and more.',
},

battery: {
  title: 'What is a Battery?',
  description: 'A device that stores chemical energy and converts it into electrical energy, providing voltage to power circuits.',
  analogy: 'Like a water tank that stores water and releases it when you need it. Here, instead of water, it\'s energy.',
},


switch: {
  title: 'What is a Switch?',
  description: 'A device that opens or closes a circuit. When closed, current flows. When open, it stops completely.',
  analogy: 'Like turning a valve on or off in a pipe.',
},

circuit: {
  title: 'What is a Circuit?',
  description: 'A complete path that allows electricity to flow. Without a closed loop, nothing works.',
  analogy: 'Like a looped road — if it’s broken anywhere, traffic stops.',
},

transconductance: {
  title: 'What is Transconductance?',
  description: 'A measure of how effectively a device (like a transistor) converts a change in voltage into a change in current. It’s key to amplification.',
  analogy: 'A small change in control causes a large change in output — like slightly turning a knob and getting a big effect.',
},

frequency: {
  title: 'What is Frequency?',
  description: 'How often a signal repeats per second. Measured in Hertz (Hz). Important for signals, clocks, and communication.',
  analogy: 'Like how fast something vibrates or repeats — slow pulses vs very fast ones.',
},

signal: {
  title: 'What is a Signal?',
  description: 'A changing electrical value (voltage or current) that carries information. Everything from buttons to Wi-Fi is based on signals.',
  analogy: 'Like a message being sent — the shape of the signal is the meaning.',
},
      electricity: {
        title: 'What is Electricity?',
        description: "The invisible force that powers everything around you. We'll discover what electrons are, why they move, and what that movement actually means.",
        analogy: 'Like water flowing through a pipe — electrons flowing through a wire IS electricity.',
      },
      voltage: {
        title: 'What is Voltage?',
        description: 'The pressure that pushes electricity through a wire. Measured in Volts — from a 1.5V battery to a 220V wall socket.',
        analogy: 'Water pressure in a pipe — higher pressure means stronger push.',
      },
      current: {
        title: 'What is Current?',
        description: 'How much electricity actually flows through a wire each second. Measured in Amperes — the quantity, not the force.',
        analogy: 'How much water flows through the pipe, not just the pressure.',
      },
      resistance: {
        title: 'What is Resistance?',
        description: "The thing that slows electricity down. Measured in Ohms. V = I × R — Ohm's Law ties all three together.",
        analogy: 'A narrow section in a pipe that slows the water flow.',
      },
      resistor: {
        title: 'What is a Resistor?',
        description: "A component whose entire job is adding a specific amount of resistance. Those colored stripes? They're a code that tells you exactly how many Ohms.",
        analogy: 'A speed bump for electricity. Protects LEDs from burning out.',
      },
      diode: {
        title: 'What is a Diode?',
        description: 'A component that only allows electricity to flow in one direction. The right way — current flows. Backwards — nothing happens.',
        analogy: 'A one-way door. You can walk through going forward, but not back.',
      },
      led: {
        title: 'What is an LED?',
        description: "Light Emitting Diode — a special diode that produces light when current flows through it. In your Robotik kit you have four colors. They're the first thing you'll bring to life.",
        analogy: 'A diode that glows! Connect it the right way and it lights up.',
      },
      capacitor: {
        title: 'What is a Capacitor?',
        description: 'Stores electrical energy and releases it in a burst. Unlike a battery, it charges and discharges in milliseconds.',
        analogy: 'A tiny rechargeable bucket — fill it, then empty it fast.',
      },
      transistor: {
        title: 'What is a Transistor?',
        description: "The most important invention of the 20th century. It's a switch and an amplifier in one tiny package — and your phone has billions of them. A small signal controls a much larger one.",
        analogy: 'A tap you control electrically, not by hand. Small current in → large current controlled.',
      },
      microcontroller: {
        title: 'What is a Microcontroller?',
        description: "A tiny computer on a chip. It has a processor, memory, and — most importantly — pins that connect to the physical world. Read inputs. Control outputs. That's engineering thinking.",
        analogy: 'A tiny brain that can sense the world and control things in it.',
      },
    },



    lessons: {
      blink: {
        title: 'Your First Blink: Make an LED Come Alive',
        badge: 'Absolute Beginner',
        description: 'Start from zero. Learn the breadboard, wire your first circuit, write your first five lines of code, and watch an LED blink at the rhythm you choose. This is your "Hello, World" of electronics.',
        steps: [
          'Learn the parts of the Arduino Uno board',
          'Plug your Arduino into a computer with a USB cable',
          'Place the LED and resistor on the breadboard',
          'Connect with jumper wires to pins 13 and GND',
          'Open Arduino IDE and write your first 5 lines of code',
          'Upload and watch your LED blink at your chosen speed!',
        ],
      },
      button: {
        title: 'Add a Button: You Control the Light',
        badge: 'Beginner',
        description: 'Add your first INPUT. A pushbutton tells the Arduino when to act. Press and hold — LED on. Release — LED off. Then flip the logic and make it work in reverse. Your first if/else, your first real decision in code.',
        steps: [
          'Start from Lesson 01 — the LED blink circuit',
          'Add a pushbutton to the breadboard',
          'Connect a 10kΩ pull-down resistor to the button',
          'Wire the button to digital pin 2 on your Arduino',
          'Write your first if/else statement in code',
          'Press the button — LED on. Release — LED off. You control it!',
        ],
      },
    },
  },




  // ── ARMENIAN ──────────────────────────────────────────────────────────────
  hy: {
    nav: {
      howItWorks: 'Ինչպես է աշխատում',
      concepts: 'Հասկացություններ',
      lessons: 'Դասեր',
      starterKit: 'Հավաքածու',
      startBuilding: 'Սկսել կառուցել →',
    },
    home: {
      heroBadge: 'Մանկական ռոբոտաշինություն',
      heroTitle1: 'Հետաքրքրությունը',
      heroTitle2: 'վերածիր',
      heroTitle3: 'սխեմաների։',
      heroSubtitle: 'Առցանց էլեկտրոնիկայի և ռոբոտաշինության դասեր 7–15 տարեկան երեխաների համար։ Դիտիր, կառուցիր և սկսիր մտածել ինժեների պես։',
      heroStartLearning: 'Սկսել սովորել',
      heroSeeLessons: 'Տեսնել դասերը',
      statConcepts: 'Հիմնական հասկացություններ',
      statLessons: 'Գործնական դասեր',
      statAges: 'Տարիքային խումբ',
      statFree: 'Անվճար',
      statFreeLabel: 'Սկսելու համար',
      methodLabel: 'Մեթոդ',
      methodTitle: 'Երեք քայլ՝ ստեղծողի նման մտածելու համար',
      methodSubtitle: 'Յուրաքանչյուր դաս հետևում է նույն ընթացքին, որպեսզի երեխան միշտ հասկանա՝ ինչ է լինելու հաջորդը։',
      step1Title: 'Դիտիր',
      step1Desc: 'Կարճ ու հստակ տեսանյութեր՝ 1-ից 5 րոպե տևողությամբ։ Մեկ հասկացություն, մեկ համեմատություն, մեկ հիմնական միտք։',
      step2Title: 'Կառուցիր',
      step2Desc: 'Հետևիր դասին սկսնակ հավաքածուով։ Իրական բաղադրամասեր, իրական միացումներ, իրական կոդ։ Մի բան, որը դու ինքդ ես պատրաստել։',
      step3Title: 'Հասկացիր',
      step3Desc: 'Երբ LED-ը թարթում է, կոճակը աշխատում է, շարժիչը պտտվում է, ինչ-որ կարևոր բան իսկապես հասկանալի է դառնում։ Այդ պահը երկար է հիշվում։',
      conceptsLabel: 'Գիտելիքների բազա',
      conceptsTitle: 'Ամեն ինչ սկսվում է հասկանալուց',
      conceptsSubtitle: 'Յուրաքանչյուր հասկացություն ներկայացված է 1–2 րոպեանոց տեսանյութով՝ մեկ գաղափար, պարզ բացատրությամբ։',
      viewAll10: 'Տեսնել բոլոր 22-ը',
      watchConcept: 'Դիտել հասկացությունը →',
      lessonsLabel: 'Նախագծային դասեր',
      lessonsTitle: 'Կառուցիր մի իրական բան՝ այսօր',
      lessonsSubtitle: 'Յուրաքանչյուր դաս ավարտվում է աշխատող արդյունքով։ Ոչ թե սիմուլյացիա, այլ իրական սխեմա, որը դու ինքդ ես կառուցել։',
      viewAllLessons: 'Տեսնել բոլոր դասերը',
      watchLesson: 'Դիտել դասը →',
      whatYouNeed: 'Ինչ է պետք',
      comingSoonLabel: 'Շուտով',
      comingSoonTitle: '3–10 դասերը մշակման փուլում են',
      comingSoonDesc: 'Բզզիչ, սենսորներ, լուսացույց, ջերմաչափ, սերվոշարժիչ, մինի ռոբոտ…',
      getNotified: 'Ստանալ ծանուցում →',
      kitLabel: 'Սկսնակ հավաքածու',
      kitTitle: 'Ամեն ինչ՝ հենց այսօր կառուցելու համար',
      kitDesc1: 'Հավաքածուն ստեղծված է դասերի համար։ Տեսանյութում ցուցադրված յուրաքանչյուր բաղադրամաս կա տուփի մեջ։',
      kitDesc2: 'Մեկ հավաքածուն ներառում է բոլոր սկսնակ դասերի համար անհրաժեշտ նյութերը։ Երբ պատրաստ լինես հաջորդ մակարդակին, միջանկյալ հավաքածուն կավելացնի շարժիչներ, ցուցիչներ և անլար մոդուլներ։',
      orderKit: 'Պատվիրել հավաքածուն →',
      kitShips: 'Առաքում Հայաստանի տարածքում · 8+ տարիքի համար',
      missionLabel: 'Ինչու Robotik',
      missionQuote: '«Մենք երեխաներին չենք սովորեցնում միայն օգտագործել տեխնոլոգիան։ Մենք նրանց սովորեցնում ենք ստեղծել այն։»',
      missionQuote1: 'Մենք երեխաներին չենք սովորեցնում միայն օգտագործել տեխնոլոգիան։',
      missionQuote2: 'Մենք նրանց սովորեցնում ենք',
      missionQuote3: 'ստեղծել',
      missionQuote4: 'այն։',
      missionDesc: 'Երեխաները ժամեր են անցկացնում հավելվածներ, խաղեր ու տեսանյութեր օգտագործելով, բայց գրեթե ոչ ոք չի հասկանում, թե ինչպես է այդ ամենը աշխատում։ Robotik-ը փոխում է դա։',
      point1Title: 'Ինժեներական մտածողություն, ոչ միայն կոդ',
      point1Desc: 'Մենք սովորեցնում ենք, թե ինչպես են աշխատում համակարգերը՝ մուտք, ելք, տրամաբանություն և պատճառահետևանքային կապ։',
      point2Title: 'Վստահություն՝ իրական արդյունքի միջոցով',
      point2Desc: 'Յուրաքանչյուր դաս ավարտվում է մի բանով, որը աշխատում է։ LED-ը թարթում է, կոճակը արձագանքում է, և դա փոխում է երեխայի վստահությունը սեփական ուժերի հանդեպ։',
      point3Title: 'Ստեղծված ապագայի համար',
      point3Desc: 'Երբ AI-ը փոխում է բազմաթիվ մասնագիտություններ, համակարգերն ու տեխնոլոգիաները հասկացող երեխաները միշտ առավելություն կունենան։',
      parentsLabel: 'Ծնողների համար',
      parentsTitle: 'Ինչ եք դուք իրականում գնում',
      parentsSubtitle: 'Ոչ թե պարզապես «Arduino դասեր», այլ դրանից շատ ավելի արժեքավոր բան։',
      parent1Title: 'Օգտակար էկրանային ժամանակ',
      parent1Desc: 'Պասիվ դիտելու փոխարեն՝ երեխան ստեղծում է իրական մի բան։',
      parent2Title: 'Ապագային պատրաստ հմտություններ',
      parent2Desc: 'Ռոբոտաշինություն, տրամաբանություն, ծրագրավորում և ինժեներական մտածողություն՝ հմտություններ, որոնք կարևոր են լինելու հաջորդ տասնամյակում։',
      parent3Title: 'Գործնական ստեղծագործականություն',
      parent3Desc: 'Ոչ թե պարզապես դիտել, այլ կառուցել։ Երեխան նախագծում է, փորձարկում, սխալվում, ուղղում և սովորում՝ իրական խնդիրներ լուծելով։',
      parent4Title: 'Վստահություն տեխնոլոգիայի հանդեպ',
      parent4Desc: 'Երեխան, ով կառուցում է սխեմաներ, այլևս չի վախենա որևէ տեխնոլոգիայից։',
      parent5Title: 'Ոչ թե խաղ, այլ ստեղծում',
      parent5Desc: 'Խաղերը պասիվ են։ Կառուցելը՝ ակտիվ։ Robotik-ը երեխաներին տալիս է նույն ոգևորությունը, բայց վերջում նրանք ունենում են իրական արդյունք։',
      parent6Title: 'Իրական STEM կրթություն',
      parent6Desc: 'Ոչ թե աշխատաթերթեր ու տեսություն, այլ գործնական, նախագծային ուսուցում, որը իսկապես հիշվում է։',
      ctaTitle: 'Պատրա՞ստ ես սկսել կառուցել',
      ctaSubtitle: 'Սկսիր անվճար դասերով այսօր։ Պատվիրիր հավաքածուն, երբ պատրաստ լինես գործնական աշխատանքին։',
      ctaExplore: 'Բոլոր հասկացությունները →',
      ctaLessons: 'Տեսնել դասերը',
    },
    conceptsPage: {
      back: '← Վերադառնալ գլխավոր էջ',
      label: 'Գիտելիքների բազա',
      title1: '22 հիմնական',
      title2: 'հասկացություն',
      subtitle: 'Կառուցելուց առաջ պետք է իմանաս, թե ինչ են բաղադրամասերը։ Յուրաքանչյուր հասկացություն 1–2 րոպեանոց տեսանյութ է՝ մեկ գաղափար, պարզ բացատրությամբ և կյանքի համեմատությամբ։',
      concept: 'Հասկացություն',
      watchVideo: 'Դիտել տեսանյութը',
      learnConcept: 'Ուսումնասիրել',
    },
    conceptDetail: {
      allConcepts: 'Բոլոր հասկացությունները',
      concept: 'Հասկացություն',
      videoAvailable: 'Տեսանյութը հասանելի է',
      videoComingSoon: 'Տեսանյութը շուտով կլինի',
      watchVideo: 'Դիտել տեսանյութը',
      whatIsIt: 'Ի՞նչ է սա',
      simpleAnalogy: 'Պարզ համեմատություն',
      allConceptsSidebar: 'Բոլոր հասկացությունները',
      readyToBuild: 'Պատրա՞ստ ես կառուցել',
      readyToBuildDesc: 'Կիրառիր այս հասկացությունը նախագծային դասում։',
      viewLessons: 'Տեսնել նախագծային դասերը →',
      previous: 'Նախորդ',
      next: 'Հաջորդ',
    },
    lessonsPage: {
      back: '← Վերադառնալ գլխավոր էջ',
      label: 'Նախագծային դասեր',
      title1: 'Կառուցիր մի',
      title2: 'իրական',
      title3: 'բան՝ այսօր',
      subtitle: 'Յուրաքանչյուր դաս ավարտվում է աշխատող արդյունքով։ Ոչ թե սիմուլյացիա, այլ իրական սխեմա, որը դու ինքդ ես կառուցել։',
      whatYouNeed: 'Ինչ է պետք',
      components: 'բաղադրիչ',
      watchLesson: 'Դիտել',
      openLesson: 'Բացել դասը',
      comingSoonLabel: 'Շուտով',
      comingSoonTitle: '3–10 դասերը մշակման փուլում են',
      comingSoonDesc: 'Բզզիչ, սենսորներ, լուսացույց, ջերմաչափ, սերվոշարժիչ, մինի ռոբոտ… Նոր դասերը պարբերաբար ավելացվում են։',
      getNotified: 'Ստանալ ծանուցում նոր դասերի մասին →',
    },
    lessonDetail: {
      allLessons: 'Բոլոր դասերը',
      lesson: 'ԴԱՍ',
      components: 'բաղադրիչ',
      videoAvailable: 'Տեսանյութը հասանելի է',
      videoComingSoon: 'Տեսանյութը շուտով կլինի',
      watchLesson: 'Դիտել դասը',
      aboutLesson: 'Դասի մասին',
      whatYoullDo: 'Ինչ կանես',
      componentsNeeded: 'Անհրաժեշտ բաղադրիչներ',
      dontHaveParts: 'Բաղադրիչները չունե՞ս',
      dontHavePartsDesc: 'Robotik հավաքածուն ներառում է այն ամենը, ինչ անհրաժեշտ է այս և բոլոր սկսնակ դասերի համար։',
      orderKit: 'Պատվիրել հավաքածուն →',
      conceptsUsed: 'Օգտագործվող հասկացություններ',
      tryCircuit: 'Փորձիր սխեման',
      tryCircuitDesc: 'Փորձարկիր սխեման հենց այստեղ — սեղմիր կոճակը, դիտիր LED-ը և փորձարկիր։',
      previousLesson: 'Նախորդ դաս',
      nextLesson: 'Հաջորդ դաս',
    },
    footer: {
      description: 'Մանկական ռոբոտաշինության և էլեկտրոնիկայի կրթություն։ Մաս է',
      family: 'ընտանիքի՝ Հայաստանի մանկական ընկերության։',
      ages: '7–15 տարեկան',
      freeToStart: 'Անվճար մեկնարկ',
      learnLabel: 'Սովորել',
      allConcepts: 'Բոլոր հասկացությունները',
      projectLessons: 'Նախագծային դասեր',
      howItWorks: 'Ինչպես է աշխատում',
      connectLabel: 'Կապ',
      copyright: '© 2025 Robotik · Մաս է',
      madeIn: '· Ստեղծված է Հայաստանում 🇦🇲',
      tagline: 'Երեխաներին սովորեցնում ենք ստեղծել, ոչ միայն օգտագործել։',
    },
    kitPage: {
      back: '← Վերադառնալ գլխավոր էջ',
      label: 'Սկսնակ հավաքածու',
      title1: 'Ընտրիր քո',
      title2: 'հավաքածուն',
      subtitle: 'Ամեն ինչ, ինչ անհրաժեշտ է մեր դասերին հետևելու համար։ Յուրաքանչյուր հավաքածու նախատեսված է կոնկրետ նախագծերի համար։',
      whatsIncluded: 'Ինչ է ներառված',
      perfectFor: 'Իդեալական է',
      orderNow: 'Պատվիրել →',
      comingSoon: 'Շուտով',
      questionsTitle: 'Հարցե՞ր ունես հավաքածուների մասին',
      questionsDesc: 'Գրիր մեզ, և մենք կօգնենք ընտրել ճիշտ հավաքածուն՝ ըստ քո երեխայի տարիքի և փորձի։',
      contactUs: 'Կապվել մեզ հետ →',
      shipsNote: 'Բոլոր հավաքածուների առաքումը Հայաստանի տարածքում է։',
      kit1Name: 'Blink սկսնակ հավաքածու',
      kit1Desc: 'Առաջին քայլը դեպի էլեկտրոնիկա։ Կառուցիր քո առաջին LED սխեման և թարթեցրու այն կոդով։',
      kit1For: 'Դաս 01 — Առաջին թարթում',
      kit1Price: '12,000 AMD',
      kit2Name: 'Կոճակի կառավարման հավաքածու',
      kit2Desc: 'Ավելացրու ինտերակտիվություն։ Սովորիր մուտքեր կոճակների միջոցով և կառավարիր LED-ը կոդով։ Դասեր 01–02։',
      kit2For: 'Դասեր 01–02',
      kit2Price: '18,000 AMD',
      kit3Name: 'Լիարժեք սկսնակ հավաքածու',
      kit3Desc: 'Լիարժեք սկսնակ փաթեթ։ Ներառում է բոլոր սկսնակ դասերի համար անհրաժեշտ նյութերը՝ բզզիչ, սենսորներ և ավելին։',
      kit3For: 'Բոլոր սկսնակ դասերը (01–05)',
      kit3Price: '35,000 AMD',
      kit3Badge: 'Լավագույն արժեք',
      kit4Name: 'Ընդլայնված հավաքածու',
      kit4Desc: 'Նրանց համար, ովքեր ուզում են ավելին։ Ներառում է սերվոշարժիչներ, LCD, հեռակառավարիչ և անլար մոդուլներ։',
      kit4For: 'Ընդլայնված դասեր (06–10)',
      kit4Price: '55,000 AMD',
      kit4Badge: 'Շուտով',
    },
chatPage: {
  label: 'AI օգնական',
  title1: 'Հարցրու',
  title2: 'Robotik AI-ին',
  subtitle: 'Խճճվե՞լ ես սխեմայում։ Չե՞ս հասկանում, թե որ լարը ուր միացնել։ Հարցրու մեր AI օգնականին՝ էլեկտրոնիկայի և ռոբոտաշինության մասին ցանկացած հարց։',

  placeholder: 'Գրիր քո հարցը՝ էլեկտրոնիկայի, Arduino-ի կամ սխեմաների մասին...',
  send: 'Ուղարկել',

  welcomeTitle: 'Բարև 👋 Ես Robotik AI օգնականն եմ',
  welcomeDesc: 'Ես կարող եմ օգնել քեզ հասկանալ էլեկտրոնիկան, կառուցել սխեմաներ, գրել Arduino կոդ և առաջ գնալ քո դասերում։ Ուղղակի հարցրու 😊',

  suggestion1: 'Ինչու իմ LED-ը չի վառվում՞',
  suggestion2: 'Ինչի՞ համար է ռեզիստորը',
  suggestion3: 'Ինչպե՞ս միացնել կոճակը Arduino-ին',
  suggestion4: 'Պարզ ձևով բացատրիր Օհմի օրենքը',

  thinking: 'Մտածում եմ...',

  comingSoonReply: 'Մեր AI օգնականը դեռ ուսուցման փուլում է։ Շուտով այն կկարողանա պատասխանել քո բոլոր հարցերին։ Մինչ այդ կարող ես դիտել «Հասկացություններ» և «Դասեր» բաժինները 😊',
},



concepts: {
  electron: {
  title: 'Ի՞նչ է էլեկտրոնը',
  description: 'Էլեկտրոնը շատ փոքր մասնիկ է, որը մենք չենք կարող տեսնել, բայց հենց դա է շարժվում լարերի մեջ և ստեղծում է էլեկտրականություն։',
  analogy: 'Պատկերացրու շատ փոքրիկ գնդակներ, որոնք անընդհատ վազում են լարի միջով։ Մենք նրանց չենք տեսնում, բայց նրանք անում են ամբողջ աշխատանքը։',
},

conductor: {
  title: 'Ի՞նչ է հաղորդիչը',
  description: 'Հաղորդիչը նյութ է, որի միջով էլեկտրոնները հեշտ են շարժվում։ Օրինակ՝ մետաղները շատ լավ հաղորդիչներ են։',
  analogy: 'Դա նման է լայն ու հարթ ճանապարհի, որտեղ երեխաները կարող են հեշտ ու արագ վազել առանց խանգարելու իրար։',
},

insulator: {
  title: 'Ի՞նչ է մեկուսիչը',
  description: 'Մեկուսիչը նյութ է, որի միջով էլեկտրոնները գրեթե չեն կարող անցնել։ Օրինակ՝ պլաստիկը կամ ռետինը։',
  analogy: 'Պատկերացրու փակ պատ, որի միջով ոչ ոք չի կարող անցնել։ Երեխաները կանգնում են ու չեն կարող շարժվել։',
},

isolation: {
  title: 'Ի՞նչ է մեկուսացումը (Isolation)',
  description: 'Մեկուսացումը նշանակում է տարբեր մասերը իրարից բաժանել, որպեսզի հոսանքը սխալ տեղ չանցնի և չվնասի համակարգը։',
  analogy: 'Դա նման է նրան, երբ խաղասենյակում երեխաներին բաժանում են խմբերի, որպեսզի իրար չխանգարեն և ամեն ինչ կարգով ընթանա։',
},


battery: {
  title: 'Ի՞նչ է մարտկոցը',
  description: 'Մարտկոցը սարք է, որը տալիս է լարում և պահում է էներգիա, որպեսզի սարքերը աշխատեն։',
  analogy: 'Դա նման է ջրի բաքին, որը պահում է ջուրը և տալիս է, երբ պետք է։ Այստեղ ջրի փոխարեն էներգիան է։',
},

switch: {
  title: 'Ի՞նչ է անջատիչը (Switch)',
  description: 'Անջատիչը բացում կամ փակում է էլեկտրական շղթան։ Եթե փակ է՝ հոսանքը անցնում է, եթե բաց է՝ ոչ։',
  analogy: 'Դա նման է դռան․ եթե դուռը բաց է՝ երեխաները անցնում են, եթե փակ է՝ կանգնում են։',
},

circuit: {
  title: 'Ի՞նչ է էլեկտրական շղթան',
  description: 'Էլեկտրական շղթան փակ ուղի է, որով էլեկտրոնները շարժվում են։ Եթե շղթան կտրված է՝ ոչինչ չի աշխատում։',
  analogy: 'Պատկերացրու շրջանաձև ճանապարհ․ եթե ճանապարհը ամբողջական է՝ երեխաները կարող են շարունակ վազել։ Եթե մի տեղ կոտրված է՝ խաղը կանգնում է։',
},

transconductance: {
  title: 'Ի՞նչ է տրանսկոնդուկտանսը',
  description: 'Տրանսկոնդուկտանսը ցույց է տալիս, թե ինչպես փոքր լարման փոփոխությունը կարող է փոխել հոսանքը։ Սա կարևոր է տրանզիստորների մեջ։',
  analogy: 'Փոքրիկ հրաման ես տալիս («քիչ արագ վազեք»), բայց ամբողջ խումբը փոխում է իր արագությունը։ Փոքր ազդանշան → մեծ փոփոխություն։',
},

frequency: {
  title: 'Ի՞նչ է հաճախանությունը',
  description: 'Քանի անգամ ազդանշանը կրկնվում է մեկ վայրկյանում։ Չափվում է Հերցով (Hz)։ Կարևոր է ազդանշանների, ժամացույցի և կապի համար։',
  analogy: 'Պատկերացրու, թե ինչպես արագ է կրկնվում թարթը — դանդաղ իմպուլսներ թե շատ արագներ։',
},

signal: {
  title: 'Ի՞նչ է ազդանշանը',
  description: 'Փոփոխվող էլեկտրական արժեք (լարում կամ հոսանք), որը կրում է տեղեկատվություն։ Կոճակներից մինչև Wi-Fi — ամեն ինչ հիմնված է ազդանշանների վրա։',
  analogy: 'Նամակ ուղարկվող հաղորդագրության — ազդանշանի ձևը հենց դա է իմաստը։',
},


ground: {
  title: 'Ինչ է Արդուինո բորդը',
  description: 'Արդուինոն սկսնակների համար նախատեսված միկրոկոնտրոլերի բորդ է՝ որը թույլ է տալիս իրական էլեկտրոնիկայի նախագծեր ստեղծել։',
  analogy: 'Փոքրիկ համակարգիչ՝ որին ասում ես թե ինչ անել՝ և նա կառավարում է LED-ներ՝ մոտորներ և սենսորներ։',
},
  electricity: {
    title: 'Ի՞նչ է էլեկտրականությունը',
    description: 'Էլեկտրականությունը էլեկտրոնների շարժումն է լարի միջով։ Այսինքն՝ շատ փոքր մասնիկներ «վազում են» լարի մեջ, և դրա արդյունքում սարքերը սկսում են աշխատել։',
    analogy: 'Պատկերացրու մանկապարտեզում 20 երեխա, որոնք միաժամանակ սկսում են վազել միջանցքով։ Երբ բոլորը շարժվում են միասին՝ առաջանում է շարժում։ Նույնն էլ լարի մեջ է․ էլեկտրոններն են «վազում» և դա էլեկտրականությունն է։',
  },

  voltage: {
    title: 'Ի՞նչ է լարումը',
    description: 'Լարումը այն ուժն է, որը «ստիպում է» էլեկտրոններին շարժվել։ Եթե լարում չկա՝ ոչ մի բան չի շարժվում։',
    analogy: 'Պատկերացրու, որ ուսուցիչը ասում է՝ «վազեք»։ Եթե ոչ ոք չի ասում՝ ոչ ոք չի վազում։ Լարումը հենց այդ «հրամանն» է, որը շարժման է բերում բոլորին։',
  },

  current: {
    title: 'Ի՞նչ է հոսանքը',
    description: 'Հոսանքը ցույց է տալիս, թե քանի էլեկտրոն է անցնում լարի միջով տվյալ պահին։ Այսինքն՝ որքան «շատ են վազողները»։',
    analogy: 'Եթե միջանցքով 5 երեխա է վազում՝ մի բան է, եթե 50՝ լրիվ ուրիշ։ Որքան շատ են անցնողները, այնքան մեծ է հոսանքը։',
  },

  resistance: {
    title: 'Ի՞նչ է դիմադրությունը',
    description: 'Դիմադրությունը այն է, ինչը խանգարում է էլեկտրոններին հեշտ անցնել։ Որքան մեծ է դիմադրությունը, այնքան դժվար է շարժվել։',
    analogy: 'Պատկերացրու, որ միջանցքը շատ նեղ է։ Երեխաները սկսում են խցանվել ու դանդաղ շարժվել։ Դա հենց դիմադրությունն է։',
  },

  resistor: {
    title: 'Ի՞նչ է ռեզիստորը',
    description: 'Ռեզիստորը հատուկ մաս է, որը մենք դնում ենք, որպեսզի հոսքը շատ արագ չլինի։ Այն պաշտպանում է մյուս մասերը, որ չվնասվեն։',
    analogy: 'Դա նման է դռան վրա դրված սահմանափակիչի, որ բոլոր երեխաները միանգամից չանցնեն ու իրար չհարվածեն։',
  },

  diode: {
    title: 'Ի՞նչ է դիոդը',
    description: 'Դիոդը թույլ է տալիս էլեկտրոններին անցնել միայն մեկ ուղղությամբ։ Եթե հակառակ միացնես՝ ոչինչ չի աշխատի։',
    analogy: 'Սա նման է միակողմանի դռան․ կարող ես ներս մտնել, բայց նույն ճանապարհով դուրս գալ չես կարող։',
  },

  led: {
    title: 'Ի՞նչ է LED-ը',
    description: 'LED-ը դիոդ է, որը լույս է տալիս, երբ նրա միջով էլեկտրականություն է անցնում։',
    analogy: 'Պատկերացրու, որ երբ երեխաները անցնում են դռնով, այն սկսում է լուսավորվել։ Այդ «լուսավորվող դուռը» հենց LED-ն է։',
  },

  capacitor: {
    title: 'Ի՞նչ է կոնդենսատորը',
    description: 'Կոնդենսատորը կարող է «հավաքել» էլեկտրականությունը և հետո միանգամից տալ այն։',
    analogy: 'Պատկերացրու, որ երեխաները հավաքվում են մի սենյակում, սպասում են, հետո բոլորը միասին դուրս են վազում։ Դա հենց կոնդենսատորի նման է։',
  },

  transistor: {
    title: 'Ի՞նչ է տրանզիստորը',
    description: 'Տրանզիստորը փոքր հոսքով կարող է կառավարել մեծ հոսք։ Այսինքն՝ փոքր ազդանշանը կառավարում է մեծը։',
    analogy: 'Փոքր կոճակ ես սեղմում, բայց մեծ դուռ է բացվում։ Փոքր գործողություն → մեծ արդյունք։',
  },

  microcontroller: {
    title: 'Ի՞նչ է միկրոպրոցեսսորը',
    description: 'Միկրոպրոցեսսորը փոքրիկ համակարգիչ է, որը մտածում է և որոշում է՝ ինչ անել։ Օրինակ՝ երբ կոճակը սեղմես՝ լույսը միանա։',
    analogy: 'Դա նման է ուսուցչի, ով ասում է՝ «հիմա բոլորը կանգնեք», «հիմա բոլորը վազեք»։ Նա կառավարում է ամեն ինչ։',
  },
},

    lessons: {
      blink: {
        title: 'Առաջին թարթում․ կենդանացրու LED-ը',
        badge: 'Բացարձակ սկսնակ',
        description: 'Սկսիր զրոյից։ Ծանոթացիր breadboard-ի հետ, կառուցիր առաջին սխեման, գրիր կոդի առաջին հինգ տողերը և տես, թե ինչպես է LED-ը թարթում քո ընտրած ռիթմով։',
        steps: [
          'Ծանոթացիր Arduino Uno-ի հիմնական մասերին',
          'Միացրու Arduino-ն համակարգչին USB-ով',
          'Տեղադրիր LED-ը և ռեզիստորը breadboard-ի վրա',
          'Միացրու jumper լարերով՝ pin 13-ին և GND-ին',
          'Բացիր Arduino IDE-ն և գրիր կոդի առաջին 5 տողը',
          'Վերբեռնիր կոդը և տես, թե ինչպես է LED-ը թարթում',
        ],
      },
      button: {
        title: 'Կոճակ․ դու ես կառավարում լույսը',
        badge: 'Սկսնակ',
        description: 'Ավելացրու առաջին INPUT-ը։ Կոճակը Arduino-ին ասում է, թե երբ գործել։ Սեղմիր՝ LED-ը միանա։ Բաց թող՝ LED-ը անջատվի։ Հետո փոխիր տրամաբանությունը և դարձրու ամեն ինչ հակառակ ձևով։',
        steps: [
          'Սկսիր Դաս 01-ից՝ LED-ի թարթման սխեմայից',
          'Ավելացրու կոճակ breadboard-ի վրա',
          'Կոճակին միացրու 10kΩ pull-down ռեզիստոր',
          'Միացրու կոճակը Arduino-ի թվային 2-րդ pin-ին',
          'Կոդում գրիր քո առաջին if/else պայմանը',
          'Սեղմիր կոճակը՝ LED-ը միանա։ Բաց թող՝ LED-ը անջատվի։',
        ],
      },
    },
  },




  // ── RUSSIAN ───────────────────────────────────────────────────────────────
  ru: {
    nav: {
      howItWorks: 'Как Это Работает',
      concepts: 'Концепции',
      lessons: 'Уроки',
      starterKit: 'Стартовый Набор',
      startBuilding: 'Начать Строить →',
    },
    home: {
      heroBadge: 'Детская Робототехника',
      heroTitle1: 'Преврати любопытство',
      heroTitle2: 'в',
      heroTitle3: 'схемы.',
      heroSubtitle: 'Онлайн-уроки по электронике и робототехнике для детей 7–15 лет. Смотри видео, строй реальные проекты и думай как инженер.',
      heroStartLearning: 'Начать Учиться',
      heroSeeLessons: 'Смотреть Уроки',
      statConcepts: 'Осн. Концепции',
      statLessons: 'Живые Уроки',
      statAges: 'Возраст',
      statFree: 'Бесплатно',
      statFreeLabel: 'Чтобы Начать',
      methodLabel: 'Метод',
      methodTitle: 'Три шага к мышлению строителя',
      methodSubtitle: 'Каждый урок следует одному ритму — дети всегда знают, чего ожидать.',
      step1Title: 'Смотри',
      step1Desc: 'Короткие, сфокусированные видео — от 1 до 5 минут. Одна концепция, одна аналогия, один вывод.',
      step2Title: 'Строй',
      step2Desc: 'Следуй вместе со стартовым набором. Реальные компоненты, реальная проводка, реальный код.',
      step3Title: 'Понимай',
      step3Desc: 'Когда светодиод мигает, кнопка работает, мотор крутится — что-то щёлкает. Этот момент остаётся навсегда.',
      conceptsLabel: 'База Знаний',
      conceptsTitle: 'Всё начинается с понимания',
      conceptsSubtitle: 'Каждая концепция — короткое видео 1–2 минуты: одна идея, объяснённая просто.',
      viewAll10: 'Смотреть Все 22',
      watchConcept: 'Смотреть концепцию →',
      lessonsLabel: 'Проектные Уроки',
      lessonsTitle: 'Построй что-то настоящее — сегодня',
      lessonsSubtitle: 'Каждый урок заканчивается рабочим результатом. Не симуляция — реальная схема, которую ты собрал.',
      viewAllLessons: 'Все Уроки',
      watchLesson: 'Смотреть урок →',
      whatYouNeed: 'Что нужно',
      comingSoonLabel: 'Скоро',
      comingSoonTitle: 'Уроки 3–10 в разработке',
      comingSoonDesc: 'Зуммер, сенсоры, светофор, термометр, сервомотор, мини-робот…',
      getNotified: 'Получить уведомление →',
      kitLabel: 'Стартовый Набор',
      kitTitle: 'Всё для начала строить сегодня',
      kitDesc1: 'Набор создан под уроки. Каждый компонент из видео есть в коробке. Никакого угадывания, всё на месте.',
      kitDesc2: 'Один набор охватывает все уроки для начинающих. Когда будешь готов к большему — промежуточный набор добавляет моторы, дисплеи и беспроводные модули.',
      orderKit: 'Заказать Стартовый Набор →',
      kitShips: 'Доставка по Армении · Для 8+ лет',
      missionLabel: 'Почему Robotik',
      missionQuote: '«Мы не учим детей использовать технологии. Мы учим их создавать их.»',
      missionQuote1: 'Мы не учим детей использовать технологии.',
      missionQuote2: 'Мы учим их',
      missionQuote3: 'создавать',
      missionQuote4: 'их.',
      missionDesc: 'Дети проводят часы, потребляя приложения, игры и видео — но почти никто из них не понимает, как это работает. Robotik меняет это.',
      point1Title: 'Инженерное мышление, не только код',
      point1Desc: 'Мы учим детей, как работают системы — входы, выходы, логика, причинно-следственные связи.',
      point2Title: 'Уверенность через реальные результаты',
      point2Desc: 'Каждый урок заканчивается чем-то работающим. Светодиод мигает, кнопка отвечает — это меняет самовосприятие ребёнка.',
      point3Title: 'Создано для будущего',
      point3Desc: 'Пока ИИ меняет многие профессии, дети, понимающие системы и технологии, всегда будут иметь преимущество.',
      parentsLabel: 'Для Родителей',
      parentsTitle: 'Что ты на самом деле покупаешь',
      parentsSubtitle: 'Не «уроки Arduino». Кое-что намного ценнее.',
      parent1Title: 'Полезное экранное время',
      parent1Desc: 'Вместо пассивного листания — ребёнок строит что-то настоящее.',
      parent2Title: 'Навыки для будущего',
      parent2Desc: 'Робототехника, логика, программирование, инженерное мышление — самые важные навыки следующего десятилетия.',
      parent3Title: 'Практическое творчество',
      parent3Desc: 'Не просто смотреть — строить. Ребёнок проектирует, экспериментирует, ошибается, исправляет.',
      parent4Title: 'Уверенность в технологиях',
      parent4Desc: 'Ребёнок, который строит схемы, никогда не будет бояться никакой технологии.',
      parent5Title: 'Не игра — создание',
      parent5Desc: 'Игры пассивны. Строительство активно. Robotik даёт детям тот же азарт, что и игра, но с реальным результатом.',
      parent6Title: 'Настоящее STEM-образование',
      parent6Desc: 'Не рабочие листы и теория. Практическое, проектное обучение, которое действительно запоминается.',
      ctaTitle: 'Готов начать строить?',
      ctaSubtitle: 'Начни с бесплатных уроков сегодня. Закажи стартовый набор, когда будешь готов к практике.',
      ctaExplore: 'Все Концепции →',
      ctaLessons: 'Смотреть Уроки',
    },
    conceptsPage: {
      back: '← На Главную',
      label: 'База Знаний',
      title1: '22 Основных',
      title2: 'Концепций',
      subtitle: 'Прежде чем строить, нужно знать, что такое компоненты. Каждая концепция — короткое видео 1–2 минуты: одна идея, объяснённая просто с аналогией из жизни.',
      concept: 'Конц.',
      watchVideo: 'Смотреть Видео',
      learnConcept: 'Изучить',
    },
    conceptDetail: {
      allConcepts: 'Все Конц.',
      concept: 'Конц.',
      videoAvailable: 'Видео Доступно',
      videoComingSoon: 'Видео — Скоро',
      watchVideo: 'Смотреть Видео',
      whatIsIt: 'Что это такое?',
      simpleAnalogy: 'Простая Аналогия',
      allConceptsSidebar: 'Все Конц.',
      readyToBuild: 'Готов Строить?',
      readyToBuildDesc: 'Применяй концепцию на практике в проектном уроке.',
      viewLessons: 'Проектные Уроки →',
      previous: 'Пред.',
      next: 'След.',
    },
    lessonsPage: {
      back: '← На Главную',
      label: 'Проектные Уроки',
      title1: 'Построй что-то',
      title2: 'настоящее',
      title3: 'сегодня',
      subtitle: 'Каждый урок заканчивается рабочим результатом. Не симуляция. Реальная схема, собранная своими руками.',
      whatYouNeed: 'Что нужно',
      components: 'компон.',
      watchLesson: 'Смотреть',
      openLesson: 'Открыть Урок',
      comingSoonLabel: 'Скоро',
      comingSoonTitle: 'Уроки 03–10 в разработке',
      comingSoonDesc: 'Зуммер, сенсоры, светофор, термометр, сервомотор, мини-робот… Новые уроки добавляются регулярно.',
      getNotified: 'Получить Уведомление о Новых Уроках →',
    },
    lessonDetail: {
      allLessons: 'Все Уроки',
      lesson: 'УРОК',
      components: 'компон.',
      videoAvailable: 'Видео Доступно',
      videoComingSoon: 'Видео — Скоро',
      watchLesson: 'Смотреть Урок',
      aboutLesson: 'Об Уроке',
      whatYoullDo: 'Что Ты Сделаешь',
      componentsNeeded: 'Нужные Компоненты',
      dontHaveParts: 'Нет компонентов?',
      dontHavePartsDesc: 'Стартовый набор Robotik включает всё необходимое для этого и всех начальных уроков.',
      orderKit: 'Заказать Набор →',
      conceptsUsed: 'Использ. Концепции',
      tryCircuit: 'Попробуй схему',
      tryCircuitDesc: 'Взаимодействуй со схемой прямо здесь — нажми кнопку, посмотри на светодиод и экспериментируй!',
      previousLesson: 'Пред. Урок',
      nextLesson: 'След. Урок',
    },
    footer: {
      description: 'Детское образование по робототехнике и электронике. Часть',
      family: 'семьи — детская компания в Армении.',
      ages: '7–15 лет',
      freeToStart: 'Бесплатный Старт',
      learnLabel: 'Учиться',
      allConcepts: 'Все Концепции',
      projectLessons: 'Проектные Уроки',
      howItWorks: 'Как Это Работает',
      connectLabel: 'Связь',
      copyright: '© 2025 Robotik · Часть',
      madeIn: '· Сделано в Армении 🇦🇲',
      tagline: 'Учим детей строить, а не только использовать.',
    },
    kitPage: {
      back: '← На Главную',
      label: 'Стартовый Набор',
      title1: 'Выбери Свой',
      title2: 'Набор',
      subtitle: 'Всё необходимое для наших уроков. Каждый набор создан под конкретные проекты — реальные компоненты, реальные схемы, реальные результаты.',
      whatsIncluded: 'Что включено',
      perfectFor: 'Подходит для',
      orderNow: 'Заказать →',
      comingSoon: 'Скоро',
      questionsTitle: 'Есть вопросы о наборах?',
      questionsDesc: 'Напишите нам, и мы поможем выбрать правильный набор для возраста и уровня вашего ребёнка.',
      contactUs: 'Связаться с Нами →',
      shipsNote: 'Все наборы доставляются по Армении. Международная доставка скоро.',
      kit1Name: 'Blink Стартовый Набор',
      kit1Desc: 'Первый шаг в электронику. Собери первую LED-схему и заставь её мигать кодом. Всё для Урока 01.',
      kit1For: 'Урок 01 — Первое Мигание',
      kit1Price: '12,000 AMD',
      kit2Name: 'Набор Управления Кнопкой',
      kit2Desc: 'Добавь интерактивность! Изучи входы с кнопками и управляй светодиодом через код. Уроки 01–02.',
      kit2For: 'Уроки 01–02',
      kit2Price: '18,000 AMD',
      kit3Name: 'Полный Начальный Набор',
      kit3Desc: 'Полный стартовый пакет. Охватывает все начальные уроки включая зуммер, сенсоры и многое другое. Лучшая цена для серьёзных учеников.',
      kit3For: 'Все Начальные Уроки (01–05)',
      kit3Price: '35,000 AMD',
      kit3Badge: 'Лучшая Цена',
      kit4Name: 'Продвинутый Набор',
      kit4Desc: 'Для детей, которые хотят большего. Включает сервомоторы, LCD, ИК-пульт, беспроводные модули для мини-робота.',
      kit4For: 'Продвинутые Уроки (06–10)',
      kit4Price: '55,000 AMD',
      kit4Badge: 'Скоро',
    },
    chatPage: {
      label: 'AI Помощник',
      title1: 'Спроси',
      title2: 'Robotik AI',
      subtitle: 'Застрял со схемой? Не знаешь, куда подключить провод? Спроси нашего AI-помощника всё об электронике и робототехнике.',
      placeholder: 'Спроси про электронику, схемы, Arduino...',
      send: 'Отправить',
      welcomeTitle: 'Привет! Я твой AI-помощник Robotik',
      welcomeDesc: 'Я могу помочь с электроникой, схемами, кодом Arduino и всем, что связано с нашими уроками. Попробуй спросить!',
      suggestion1: 'Почему мой светодиод не горит?',
      suggestion2: 'Что делает резистор?',
      suggestion3: 'Как подключить кнопку к Arduino?',
      suggestion4: 'Объясни закон Ома просто',
      thinking: 'Думаю...',
      comingSoonReply: 'Наш AI-помощник сейчас обучается! Скоро я смогу помогать со всеми вопросами. А пока посмотри наши Концепции и Уроки — там всё по шагам!',
    },


    concepts: {electron: {
  title: 'Что такое электрон?',
  description: 'Фундаментальная частица, которая переносит электрический заряд. Всё в электричестве сводится к движению электронов внутри материалов.',
  analogy: 'Как крошечные заряженные частицы, которые движутся по проводу — именно они и создают ток.',
},

conductor: {
  title: 'Что такое проводник?',
  description: 'Материал, который позволяет электронам свободно двигаться. Металлы, такие как медь, являются отличными проводниками, поэтому из них делают провода.',
  analogy: 'Как широкая и гладкая дорога, по которой машины могут двигаться без препятствий.',
},

insulator: {
  title: 'Что такое изолятор?',
  description: 'Материал, который препятствует движению электронов. Он не даёт электричеству проходить туда, куда не нужно.',
  analogy: 'Как стена, которая полностью перекрывает путь.',
},

isolation: {
  title: 'Что такое электрическая изоляция?',
  description: 'Разделение частей цепи так, чтобы электричество не могло проходить между ними случайно. Это важно для безопасности и стабильной работы.',
  analogy: 'Как разделение комнат, чтобы звук или движение не переходили между ними.',
},


ground: {
  title: 'Что такое земля (Ground)?',
  description: 'Точка отсчёта в цепи, где напряжение считается равным нулю. Она замыкает цепь и даёт току путь для возврата.',
  analogy: 'Как базовая точка или “дом”, куда всё возвращается.',
},

battery: {
  title: 'Что такое батарея?',
  description: 'Устройство, которое хранит химическую энергию и преобразует её в электрическую, обеспечивая напряжение для питания схем.',
  analogy: 'Как бак с водой — хранит воду и выпускает по необходимости. Здесь вместо воды — энергия.',
},


switch: {
  title: 'Что такое переключатель?',
  description: 'Устройство, которое замыкает или размыкает цепь. Когда замкнуто — ток течёт, когда разомкнуто — нет.',
  analogy: 'Как кран в трубе — открываешь, и поток идёт; закрываешь — поток останавливается.',
},

circuit: {
  title: 'Что такое электрическая цепь?',
  description: 'Замкнутый путь, по которому может течь электричество. Без замкнутой цепи ничего не работает.',
  analogy: 'Как кольцевая дорога — если где-то разрыв, движение останавливается.',
},

transconductance: {
  title: 'Что такое транскондуктивность?',
  description: 'Параметр, показывающий, насколько эффективно устройство (например, транзистор) преобразует изменение напряжения в изменение тока. Важен для усиления сигналов.',
  analogy: 'Небольшое изменение управления приводит к большому изменению результата.',
},

frequency: {
  title: 'Что такое частота?',
  description: 'Сколько раз сигнал повторяется за секунду. Измеряется в герцах (Гц). Важно для сигналов, тактов и связи.',
  analogy: 'Как скорость повторения — медленные импульсы или очень быстрые.',
},

signal: {
  title: 'Что такое сигнал?',
  description: 'Изменяющееся электрическое значение (напряжение или ток), которое несёт информацию. Кнопки, датчики и Wi-Fi — всё работает через сигналы.',
  analogy: 'Как сообщение — форма сигнала определяет его смысл.',
},
      electricity: {
        title: 'Что такое Электричество?',
        description: 'Невидимая сила, которая питает всё вокруг. Узнаем, что такое электроны, почему они движутся и что означает это движение.',
        analogy: 'Как вода в трубе — поток электронов через провод И ЕСТЬ электричество.',
      },
      voltage: {
        title: 'Что такое Напряжение?',
        description: 'Давление, которое толкает электричество через провод. Измеряется в Вольтах — от 1,5 В батарейки до 220 В розетки.',
        analogy: 'Давление воды в трубе — чем выше давление, тем сильнее напор.',
      },
      current: {
        title: 'Что такое Ток?',
        description: 'Сколько электричества протекает через провод каждую секунду. Измеряется в Амперах — это количество, а не сила.',
        analogy: 'Сколько воды течёт по трубе, а не давление.',
      },
      resistance: {
        title: 'Что такое Сопротивление?',
        description: "То, что замедляет электричество. Измеряется в Омах. V = I × R — закон Ома связывает все три величины.",
        analogy: 'Узкий участок трубы, который замедляет поток воды.',
      },
      resistor: {
        title: 'Что такое Резистор?',
        description: 'Компонент, чья единственная задача — добавить определённое сопротивление. Цветные полоски — это код, который точно показывает количество Ом.',
        analogy: 'Лежачий полицейский для электричества. Защищает светодиоды от перегорания.',
      },
      diode: {
        title: 'Что такое Диод?',
        description: 'Компонент, который позволяет электричеству течь только в одном направлении. Правильная сторона — ток течёт. Обратная — ничего не происходит.',
        analogy: 'Односторонняя дверь. Можно войти, но нельзя выйти обратно.',
      },
      led: {
        title: 'Что такое Светодиод?',
        description: 'Light Emitting Diode — особый диод, который светится, когда через него течёт ток. В наборе Robotik четыре цвета — они первые, которые ты оживишь.',
        analogy: 'Диод, который светится! Подключи правильно — загорится.',
      },
      capacitor: {
        title: 'Что такое Конденсатор?',
        description: 'Накапливает электрическую энергию и выдаёт её в виде импульса. В отличие от батарейки, заряжается и разряжается за миллисекунды.',
        analogy: 'Маленькое перезаряжаемое ведёрко — наполни, затем быстро опустоши.',
      },
      transistor: {
        title: 'Что такое Транзистор?',
        description: 'Важнейшее изобретение 20 века. Переключатель и усилитель в одном крошечном корпусе — в вашем телефоне их миллиарды. Малый сигнал управляет большим.',
        analogy: 'Кран, управляемый электричеством, а не рукой. Малый ток → управление большим током.',
      },
      microcontroller: {
        title: 'Что такое Микроконтроллер?',
        description: 'Маленький компьютер на чипе. Имеет процессор, память и — самое главное — выводы, соединяющие его с физическим миром. Читай входы, управляй выходами — вот инженерное мышление.',
        analogy: 'Маленький мозг, который чувствует мир и управляет им.',
      },
    },
    lessons: {
      blink: {
        title: 'Первое Мигание: Оживи Светодиод',
        badge: 'Для Начинающих',
        description: 'Начни с нуля. Изучи breadboard, собери первую схему, напиши первые пять строк кода и смотри, как светодиод мигает в твоём ритме.',
        steps: [
          'Изучи компоненты платы Arduino Uno',
          'Подключи Arduino к компьютеру через USB',
          'Поставь светодиод и резистор на breadboard',
          'Соедини джамперами с пинами 13 и GND',
          'Открой Arduino IDE и напиши первые 5 строк кода',
          'Загрузи и смотри, как светодиод мигает!',
        ],
      },
      button: {
        title: 'Кнопка: Ты Управляешь Светом',
        badge: 'Начинающий',
        description: 'Добавь первый INPUT. Кнопка говорит Arduino, когда действовать. Нажми — LED загорается. Отпусти — LED гаснет. Затем переверни логику.',
        steps: [
          'Начни с Урока 01 — схема мигания LED',
          'Добавь кнопку на breadboard',
          'Подключи 10kΩ подтягивающий резистор к кнопке',
          'Соедини кнопку с цифровым пином 2 Arduino',
          'Напиши первый if/else в коде',
          'Нажми кнопку — LED вкл. Отпусти — LED выкл.',
        ],
      },
    },
  },
} as const

// ─── CONTEXT ─────────────────────────────────────────────────────────────────

type TranslationsType = typeof translations.en
type DeepKeyOf<T, Prefix extends string = ''> = T extends object
  ? { [K in keyof T & string]: DeepKeyOf<T[K], `${Prefix}${Prefix extends '' ? '' : '.'}${K}`> }[keyof T & string]
  : Prefix

interface LanguageContextValue {
  locale: Locale
  t: (key: string) => string
  tConcept: (id: string) => { title: string; description: string; analogy: string }
  tLesson: (id: string) => { title: string; badge: string; description: string; steps: string[] }
}

const LanguageContext = createContext<LanguageContextValue>({
  locale: 'en',
  t: (k) => k,
  tConcept: (id) => translations.en.concepts[id as keyof typeof translations.en.concepts] ?? { title: id, description: '', analogy: '' },
  tLesson: (id) => {
    const l = translations.en.lessons[id as keyof typeof translations.en.lessons]
    return l ? { title: l.title, badge: l.badge, description: l.description, steps: [...l.steps] } : { title: id, badge: '', description: '', steps: [] }
  },
})

export function LanguageProvider({ locale, children }: { locale: Locale; children: ReactNode }) {
  useEffect(() => {
    document.documentElement.lang = locale
  }, [locale])

  const t = (key: string): string => {
    const keys = key.split('.')
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let val: any = translations[locale]
    for (const k of keys) val = val?.[k]
    if (typeof val === 'string') return val
    // fallback to en
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let fallback: any = translations.en
    for (const k of keys) fallback = fallback?.[k]
    return typeof fallback === 'string' ? fallback : key
  }

  const tConcept = (id: string) => {
    const loc = translations[locale].concepts as Record<string, { title: string; description: string; analogy: string }>
    return loc[id] ?? (translations.en.concepts as Record<string, { title: string; description: string; analogy: string }>)[id] ?? { title: id, description: '', analogy: '' }
  }

  const tLesson = (id: string): { title: string; badge: string; description: string; steps: string[] } => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const loc = (translations[locale] as any).lessons?.[id]
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const en = (translations.en as any).lessons?.[id]
    const src = loc ?? en
    if (!src) return { title: id, badge: '', description: '', steps: [] }
    return { title: src.title, badge: src.badge, description: src.description, steps: [...src.steps] }
  }

  return (
    <LanguageContext.Provider value={{ locale, t, tConcept, tLesson }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => useContext(LanguageContext)
