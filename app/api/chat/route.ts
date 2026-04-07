import { NextRequest, NextResponse } from 'next/server'
import OpenAI from 'openai'

/* ------------------------------------------------------------------ */
/*  Configuration                                                      */
/* ------------------------------------------------------------------ */

const MAX_HISTORY_MESSAGES = 20
const MAX_INPUT_LENGTH = 2000
const RATE_LIMIT_WINDOW = 60_000
const RATE_LIMIT_MAX = 20

/* ------------------------------------------------------------------ */
/*  OpenAI client                                                      */
/* ------------------------------------------------------------------ */

function getOpenAIClient() {
  const apiKey = process.env.OPENAI_API_KEY
  if (!apiKey) throw new Error('OPENAI_API_KEY is not configured')
  return new OpenAI({ apiKey })
}

/* ------------------------------------------------------------------ */
/*  System prompt                                                      */
/* ------------------------------------------------------------------ */

const SYSTEM_PROMPT = `You are Robotik's educational AI assistant \u2014 a warm, friendly, and focused teacher for children and beginners learning electronics, Arduino, and robotics.

STRICT RULES:
1. You ONLY answer questions related to: Arduino, electronics, electricity, circuits, sensors, motors, LEDs, resistors, capacitors, diodes, transistors, breadboards, wires, batteries, switches, buttons, buzzers, relays, microcontrollers, beginner robotics projects, simple STEM explanations, and beginner microcontroller programming (setup(), loop(), digitalRead, digitalWrite, analogRead, analogWrite, PWM, Serial Monitor, etc.).

2. If a user asks about ANYTHING outside these topics (politics, religion, medicine, finance, romance, hacking, violence, adult content, general gossip, or any non-electronics/robotics topic), do NOT answer that question. Instead, politely say that this chat is only for Robotik learning topics and invite them to ask an electronics/Arduino/robotics question. Keep the refusal short, friendly, and encouraging.

3. Keep answers simple, clear, safe, and suitable for children ages 6\u201316 and complete beginners.

4. Use friendly explanations, real-life analogies, step-by-step reasoning, and examples.

5. SAFETY: Never provide instructions involving mains/wall electricity, high voltage, unsafe wiring, fire risks, battery abuse, or dangerous experiments. If asked about dangerous topics, warn clearly, avoid step-by-step dangerous instructions, and redirect to safe low-voltage Arduino/battery alternatives.

6. Response style:
   - Be concise for simple questions, more detailed when explanation is needed
   - Use short paragraphs, bullet points when helpful
   - Avoid huge walls of text
   - End with an optional follow-up question like "Want me to show a simple example?" or "Should I explain this for a younger child?"

7. Language: Detect the language the user writes in and respond in that same language. If the user writes in Armenian, respond naturally in Armenian. If English, respond in English. If Russian, respond in Russian. Make Armenian responses sound natural and child-friendly, not machine-translated.

8. Brand voice: Make children feel that technology is not scary. Electronics and robotics are fun, creative, and empowering. You are their supportive learning companion.`

/* ------------------------------------------------------------------ */
/*  Topic filtering \u2014 Layer 1: keyword-based                          */
/* ------------------------------------------------------------------ */

const ALLOWED_TERMS: string[] = [
  'arduino', 'led', 'resistor', 'capacitor', 'diode', 'transistor',
  'breadboard', 'circuit', 'voltage', 'current', 'resistance', 'ohm',
  'wire', 'battery', 'switch', 'button', 'buzzer', 'relay', 'sensor',
  'motor', 'servo', 'stepper', 'microcontroller', 'pwm', 'serial',
  'analog', 'digital', 'electron', 'conductor', 'insulator',
  'electric', 'robot', 'electronics', 'component', 'code', 'program',
  'blink', 'connect', 'energy', 'charge', 'pin', 'ground', 'solder',
  'prototype', 'semiconductor', 'microchip', 'firmware', 'hardware',
  'upload', 'compile', 'sketch', 'ultrasonic', 'infrared',
  'potentiometer', 'lcd', 'rgb', 'piezo', 'polarity',
  'volt', 'watt', 'frequency', 'signal', 'light', 'power supply',
  'usb', 'chip', 'anode', 'cathode', 'transistor', 'amplifier',
  'oscillator', 'transformer', 'inductor', 'multimeter', 'oscilloscope',
  '\u044d\u043b\u0435\u043a\u0442\u0440', '\u043d\u0430\u043f\u0440\u044f\u0436', '\u0441\u043e\u043f\u0440\u043e\u0442\u0438\u0432\u043b', '\u0440\u0435\u0437\u0438\u0441\u0442', '\u043a\u043e\u043d\u0434\u0435\u043d\u0441\u0430\u0442', '\u0434\u0438\u043e\u0434',
  '\u0442\u0440\u0430\u043d\u0437\u0438\u0441\u0442', '\u0441\u0445\u0435\u043c', '\u0446\u0435\u043f', '\u043f\u0440\u043e\u0432\u043e\u0434', '\u0431\u0430\u0442\u0430\u0440\u0435', '\u043a\u043d\u043e\u043f\u043a', '\u0434\u0430\u0442\u0447\u0438\u043a',
  '\u043c\u043e\u0442\u043e\u0440', '\u0434\u0432\u0438\u0433\u0430\u0442', '\u0440\u043e\u0431\u043e\u0442', '\u043c\u0438\u043a\u0440\u043e\u043a\u043e\u043d\u0442\u0440\u043e\u043b\u043b\u0435\u0440', '\u0441\u0432\u0435\u0442\u043e\u0434\u0438\u043e\u0434', '\u0441\u0435\u043d\u0441\u043e\u0440',
  '\u0430\u0440\u0434\u0443\u0438\u043d\u043e', '\u044d\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u0438\u043a', '\u043f\u0440\u043e\u0433\u0440\u0430\u043c',
  '\u0567\u056c\u0565\u056f\u057f\u0580', '\u0570\u0578\u057d\u0561\u0576\u0584', '\u056c\u0561\u0580', '\u057d\u056d\u0565\u0574\u0561', '\u057c\u0578\u0562\u0578\u057f',
  '\u0574\u056b\u056f\u0580\u0578\u056f\u0578\u0576\u057f\u0580\u0578\u056c\u056c\u0565\u0580', '\u057d\u0565\u0576\u057d\u0578\u0580', '\u0577\u0561\u0580\u056a\u056b\u0579', '\u056f\u0578\u0573\u0561\u056f',
  '\u056c\u0578\u0582\u057d\u0561\u0564\u056b\u0578\u0564', '\u057c\u0565\u0566\u056b\u057d\u057f\u0578\u0580', '\u056f\u0578\u0576\u0564\u0565\u0576\u057d\u0561\u057f\u0578\u0580',
]

const DISALLOWED_TERMS: string[] = [
  'politic', 'election', 'president', 'democrat', 'republican',
  'religion', 'church', 'mosque', 'bible', 'quran', 'pray',
  'sex', 'porn', 'nude', 'dating', 'girlfriend', 'boyfriend',
  'hack', 'exploit', 'malware', 'virus', 'ddos', 'crack',
  'weapon', 'gun', 'bomb', 'knife', 'kill', 'murder',
  'drug', 'cocaine', 'heroin', 'marijuana', 'weed',
  'gambl', 'casino', 'betting',
  'suicide', 'self-harm', 'anorex',
  'gossip', 'celebrity', 'scandal',
  '\u043f\u043e\u043b\u0438\u0442\u0438\u043a', '\u0440\u0435\u043b\u0438\u0433\u0438', '\u0441\u0435\u043a\u0441', '\u043f\u043e\u0440\u043d\u043e',
  '\u0412\u0437\u043b\u043e\u043c', '\u043e\u0440\u0443\u0436\u0438', '\u043d\u0430\u0440\u043a\u043e\u0442\u0438\u043a', '\u0443\u0431\u0438\u0439\u0441\u0442\u0432',
]

function quickKeywordCheck(text: string): 'allowed' | 'disallowed' | 'uncertain' {
  const lower = text.toLowerCase()

  for (const term of DISALLOWED_TERMS) {
    if (lower.includes(term)) return 'disallowed'
  }

  for (const term of ALLOWED_TERMS) {
    if (lower.includes(term)) return 'allowed'
  }

  return 'uncertain'
}

/* ------------------------------------------------------------------ */
/*  Topic filtering \u2014 Layer 2: AI classification for uncertain msgs   */
/* ------------------------------------------------------------------ */

async function classifyWithAI(
  openai: OpenAI,
  message: string,
): Promise<'allowed' | 'disallowed'> {
  try {
    const response = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      temperature: 0,
      max_tokens: 10,
      messages: [
        {
          role: 'system',
          content: `You are a topic classifier. Determine if the user message is related to ANY of these topics: Arduino, electronics, electricity, circuits, sensors, motors, LEDs, resistors, breadboards, robotics, microcontrollers, beginner programming for hardware, STEM education for children, or safe beginner experiments.

Reply with exactly one word: "allowed" if the message is related, or "disallowed" if it is not.

Be generous \u2014 if there's a reasonable connection to electronics, robotics, or STEM learning, classify as "allowed". Simple greetings like "hello" or "hi" should be "allowed".`,
        },
        { role: 'user', content: message },
      ],
    })

    const result = response.choices[0]?.message?.content?.trim().toLowerCase()
    return result === 'allowed' ? 'allowed' : 'disallowed'
  } catch {
    // If classification fails, allow (system prompt is the safety net)
    return 'allowed'
  }
}

/* ------------------------------------------------------------------ */
/*  Rate limiting (in-memory, per IP)                                  */
/* ------------------------------------------------------------------ */

const rateLimitMap = new Map<string, { count: number; resetAt: number }>()

function checkRateLimit(ip: string): boolean {
  const now = Date.now()
  const entry = rateLimitMap.get(ip)

  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW })
    return true
  }

  if (entry.count >= RATE_LIMIT_MAX) return false
  entry.count++
  return true
}

/* ------------------------------------------------------------------ */
/*  Refusal & fallback responses                                       */
/* ------------------------------------------------------------------ */

const REFUSAL_RESPONSES: Record<string, string> = {
  hy: '\u0531\u0575\u057d \u0579\u0561\u057f\u0568 \u0576\u0561\u056d\u0561\u057f\u0565\u057d\u057e\u0561\u056e \u0567 \u0574\u056b\u0561\u0575\u0576 Arduino-\u056b, \u0567\u056c\u0565\u056f\u057f\u0580\u0578\u0576\u056b\u056f\u0561\u0575\u056b \u0587 \u057c\u0578\u0562\u0578\u057f\u0561\u0577\u056b\u0576\u0578\u0582\u0569\u0575\u0561\u0576 \u0569\u0565\u0574\u0561\u0576\u0565\u0580\u0578\u057e \u057d\u0578\u057e\u0578\u0580\u0565\u056c\u0578\u0582 \u0570\u0561\u0574\u0561\u0580\u0589 \u054f\u0578\u0582\u0580 \u056b\u0576\u0571 \u0570\u0561\u0580\u0581 \u0561\u0575\u0564 \u0569\u0565\u0574\u0561\u0576\u0565\u0580\u056b\u0581, \u0587 \u0565\u057d \u057d\u056b\u0580\u0578\u057e \u056f\u0585\u0563\u0576\u0565\u0574\u0589',
  en: "This chat is designed only for learning about Arduino, electronics, and robotics. Ask me a question about these topics and I'll be happy to help!",
  ru: '\u042d\u0442\u043e\u0442 \u0447\u0430\u0442 \u043f\u0440\u0435\u0434\u043d\u0430\u0437\u043d\u0430\u0447\u0435\u043d \u0442\u043e\u043b\u044c\u043a\u043e \u0434\u043b\u044f \u043e\u0431\u0443\u0447\u0435\u043d\u0438\u044f Arduino, \u044d\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u0438\u043a\u0435 \u0438 \u0440\u043e\u0431\u043e\u0442\u043e\u0442\u0435\u0445\u043d\u0438\u043a\u0435. \u0417\u0430\u0434\u0430\u0439 \u043c\u043d\u0435 \u0432\u043e\u043f\u0440\u043e\u0441 \u043f\u043e \u044d\u0442\u0438\u043c \u0442\u0435\u043c\u0430\u043c, \u0438 \u044f \u0441 \u0440\u0430\u0434\u043e\u0441\u0442\u044c\u044e \u043f\u043e\u043c\u043e\u0433\u0443!',
}

const FALLBACK_RESPONSES: Record<string, string> = {
  hy: '\u0546\u0565\u0580\u0578\u0572\u0578\u0582\u0569\u0575\u0578\u0582\u0576, \u056b\u0576\u0579-\u0578\u0580 \u057d\u056d\u0561\u056c \u057f\u0565\u0572\u056b \u0578\u0582\u0576\u0565\u0581\u0561\u057e\u0589 \u053d\u0576\u0564\u0580\u0578\u0582\u0574 \u0565\u0574 \u0583\u0578\u0580\u0571\u0565\u056c \u0574\u056b \u0584\u056b\u0579 \u0578\u0582\u0577 \u0570\u0565\u057f\u0578\u0589 \u0535\u0569\u0565 \u056d\u0576\u0564\u056b\u0580\u0568 \u0577\u0561\u0580\u0578\u0582\u0576\u0561\u056f\u057e\u056b, \u0576\u0561\u0575\u056b\u0580 \u0574\u0565\u0580 \u0540\u0561\u057d\u056f\u0561\u0581\u0578\u0582\u0569\u0575\u0578\u0582\u0576\u0576\u0565\u0580 \u0587 \u0534\u0561\u057d\u0565\u0580 \u0562\u0561\u056a\u056b\u0576\u0576\u0565\u0580\u0568\u0589',
  en: "Sorry, something went wrong. Please try again in a moment. If the problem continues, check out our Concepts and Lessons sections!",
  ru: '\u0418\u0437\u0432\u0438\u043d\u0438, \u0447\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a. \u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439 \u0435\u0449\u0451 \u0440\u0430\u0437 \u0447\u0435\u0440\u0435\u0437 \u043c\u0438\u043d\u0443\u0442\u0443. \u0415\u0441\u043b\u0438 \u043f\u0440\u043e\u0431\u043b\u0435\u043c\u0430 \u043f\u043e\u0432\u0442\u043e\u0440\u0438\u0442\u0441\u044f, \u0437\u0430\u0433\u043b\u044f\u043d\u0438 \u0432 \u043d\u0430\u0448\u0438 \u041a\u043e\u043d\u0446\u0435\u043f\u0446\u0438\u0438 \u0438 \u0423\u0440\u043e\u043a\u0438!',
}

/* ------------------------------------------------------------------ */
/*  Sanitize input                                                     */
/* ------------------------------------------------------------------ */

function sanitizeInput(text: string): string {
  return text
    .replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/g, '')
    .trim()
    .slice(0, MAX_INPUT_LENGTH)
}

/* ------------------------------------------------------------------ */
/*  POST handler                                                       */
/* ------------------------------------------------------------------ */

export async function POST(request: NextRequest) {
  try {
    const ip =
      request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
      request.headers.get('x-real-ip') ||
      'unknown'

    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { error: 'Too many requests. Please wait a moment.' },
        { status: 429 },
      )
    }

    const body = await request.json()
    const { message, history, locale } = body as {
      message?: string
      history?: { role: 'user' | 'assistant'; content: string }[]
      locale?: string
    }

    const lang = locale && ['en', 'hy', 'ru'].includes(locale) ? locale : 'en'

    if (!message || typeof message !== 'string' || !message.trim()) {
      return NextResponse.json({ error: 'Message is required' }, { status: 400 })
    }

    const cleanMessage = sanitizeInput(message)
    if (!cleanMessage) {
      return NextResponse.json({ error: 'Message is empty' }, { status: 400 })
    }

    // Layer 1: keyword check
    let classification = quickKeywordCheck(cleanMessage)

    // Layer 2: AI classification for uncertain messages
    if (classification === 'uncertain') {
      const openai = getOpenAIClient()
      classification = await classifyWithAI(openai, cleanMessage)
    }

    // Disallowed \u2014 return fixed refusal, no OpenAI main call
    if (classification === 'disallowed') {
      return NextResponse.json({
        reply: REFUSAL_RESPONSES[lang] || REFUSAL_RESPONSES.en,
        filtered: true,
      })
    }

    // Allowed \u2014 call OpenAI
    const openai = getOpenAIClient()

    const conversationMessages: OpenAI.Chat.Completions.ChatCompletionMessageParam[] = [
      { role: 'system', content: SYSTEM_PROMPT },
    ]

    if (Array.isArray(history)) {
      const trimmed = history.slice(-MAX_HISTORY_MESSAGES)
      for (const msg of trimmed) {
        if (msg.role === 'user' || msg.role === 'assistant') {
          conversationMessages.push({
            role: msg.role,
            content: typeof msg.content === 'string' ? msg.content.slice(0, MAX_INPUT_LENGTH) : '',
          })
        }
      }
    }

    conversationMessages.push({ role: 'user', content: cleanMessage })

    const completion = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      temperature: 0.7,
      max_tokens: 1000,
      messages: conversationMessages,
    })

    const reply = completion.choices[0]?.message?.content?.trim()

    if (!reply) {
      return NextResponse.json({
        reply: FALLBACK_RESPONSES[lang] || FALLBACK_RESPONSES.en,
      })
    }

    return NextResponse.json({ reply })
  } catch (error: unknown) {
    console.error('[Robotik Chat API Error]', error)

    const errorMessage = error instanceof Error ? error.message : 'Unknown error'

    if (errorMessage.includes('OPENAI_API_KEY')) {
      return NextResponse.json(
        { error: 'Chat service is not configured yet.', reply: FALLBACK_RESPONSES.en },
        { status: 503 },
      )
    }

    return NextResponse.json(
      { error: 'Internal server error', reply: FALLBACK_RESPONSES.en },
      { status: 500 },
    )
  }
}
