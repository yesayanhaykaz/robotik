'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { FaPaperPlane, FaRobot, FaUser, FaLightbulb, FaMicrochip } from 'react-icons/fa'
import { useLanguage } from '@/lib/i18n'

interface Message {
  id: number
  role: 'user' | 'assistant'
  text: string
}

export default function ChatPage() {
  const { t } = useLanguage()
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, isTyping])

  const handleSend = () => {
    const text = input.trim()
    if (!text) return

    const userMsg: Message = { id: Date.now(), role: 'user', text }
    setMessages((prev) => [...prev, userMsg])
    setInput('')
    setIsTyping(true)

    // Simulate AI response (placeholder — will be replaced with real API)
    setTimeout(() => {
      const botMsg: Message = {
        id: Date.now() + 1,
        role: 'assistant',
        text: t('chatPage.comingSoonReply'),
      }
      setMessages((prev) => [...prev, botMsg])
      setIsTyping(false)
    }, 1500)
  }

  const handleSuggestion = (suggestion: string) => {
    setInput(suggestion)
    inputRef.current?.focus()
  }

  const suggestions = [
    t('chatPage.suggestion1'),
    t('chatPage.suggestion2'),
    t('chatPage.suggestion3'),
    t('chatPage.suggestion4'),
  ]

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header */}
      <div className="bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 py-10 px-5 border-b border-purple-100">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-purple-500 uppercase tracking-widest mb-4">
            <span className="w-5 h-px bg-purple-400 inline-block" />
            {t('chatPage.label')}
            <span className="w-5 h-px bg-purple-400 inline-block" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-gray-900 mb-3">
            {t('chatPage.title1')}{' '}
            <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 bg-clip-text text-transparent">
              {t('chatPage.title2')}
            </span>
          </h1>
          <p className="text-gray-500 max-w-lg mx-auto font-body">
            {t('chatPage.subtitle')}
          </p>
        </div>
      </div>

      {/* Chat Area */}
      <div className="flex-1 flex flex-col max-w-3xl w-full mx-auto px-5 py-6">
        <div className="flex-1 overflow-y-auto space-y-4 min-h-[400px]">
          {/* Welcome state */}
          {messages.length === 0 && (
            <div className="flex flex-col items-center justify-center py-10">
              {/* Robot avatar */}
              <div className="relative mb-6">
                <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center shadow-lg border-2 border-purple-200">
                  <FaMicrochip size={32} className="text-purple-500" />
                </div>
                <div className="absolute -bottom-1 -right-1 w-7 h-7 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-500 flex items-center justify-center border-2 border-white shadow-sm">
                  <FaLightbulb size={12} className="text-white" />
                </div>
              </div>

              <h2 className="text-xl font-black text-gray-900 mb-2 text-center">
                {t('chatPage.welcomeTitle')}
              </h2>
              <p className="text-sm text-gray-500 text-center max-w-sm mb-8 font-body">
                {t('chatPage.welcomeDesc')}
              </p>

              {/* Suggestion chips */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full max-w-lg">
                {suggestions.map((suggestion, i) => {
                  const colors = [
                    'border-orange-200 bg-orange-50 hover:border-orange-400 text-orange-700',
                    'border-purple-200 bg-purple-50 hover:border-purple-400 text-purple-700',
                    'border-emerald-200 bg-emerald-50 hover:border-emerald-400 text-emerald-700',
                    'border-cyan-200 bg-cyan-50 hover:border-cyan-400 text-cyan-700',
                  ]
                  return (
                    <button
                      key={i}
                      onClick={() => handleSuggestion(suggestion)}
                      className={`text-left px-4 py-3 rounded-2xl border-2 text-sm font-semibold transition-all hover:-translate-y-0.5 hover:shadow-md cursor-pointer ${colors[i]}`}
                    >
                      {suggestion}
                    </button>
                  )
                })}
              </div>
            </div>
          )}

          {/* Messages */}
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex gap-3 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              {msg.role === 'assistant' && (
                <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center flex-shrink-0 shadow-sm border border-purple-200">
                  <FaMicrochip size={14} className="text-purple-500" />
                </div>
              )}
              <div
                className={`max-w-[75%] px-5 py-3.5 rounded-2xl text-sm leading-relaxed font-body ${
                  msg.role === 'user'
                    ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-br-md shadow-md'
                    : 'bg-gray-50 text-gray-700 border border-gray-200 rounded-bl-md shadow-sm'
                }`}
              >
                {msg.text}
              </div>
              {msg.role === 'user' && (
                <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-orange-100 to-yellow-100 flex items-center justify-center flex-shrink-0 shadow-sm border border-orange-200">
                  <FaUser size={13} className="text-orange-500" />
                </div>
              )}
            </div>
          ))}

          {/* Typing indicator */}
          {isTyping && (
            <div className="flex gap-3 justify-start">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center flex-shrink-0 shadow-sm border border-purple-200">
                <FaMicrochip size={14} className="text-purple-500" />
              </div>
              <div className="bg-gray-50 border border-gray-200 rounded-2xl rounded-bl-md px-5 py-4 shadow-sm">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-purple-400 animate-blink-1 inline-block" />
                    <span className="w-2 h-2 rounded-full bg-pink-400 animate-blink-2 inline-block" />
                    <span className="w-2 h-2 rounded-full bg-orange-400 animate-blink-3 inline-block" />
                  </div>
                  <span className="text-xs text-gray-400 font-semibold">{t('chatPage.thinking')}</span>
                </div>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="sticky bottom-0 pt-4 pb-2 bg-white">
          <div className="flex gap-3 items-center">
            <div className="flex-1 relative">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); handleSend() } }}
                placeholder={t('chatPage.placeholder')}
                className="w-full px-5 py-4 rounded-2xl border-2 border-gray-200 bg-gray-50 text-gray-900 placeholder-gray-400 font-body text-sm focus:outline-none focus:border-purple-400 focus:bg-white focus:ring-4 focus:ring-purple-50 transition-all"
              />
            </div>
            <button
              onClick={handleSend}
              disabled={!input.trim()}
              className="w-13 h-13 px-4 py-4 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 text-white flex items-center justify-center shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all disabled:opacity-40 disabled:hover:translate-y-0 disabled:hover:shadow-lg"
            >
              <FaPaperPlane size={16} />
            </button>
          </div>
          <p className="text-center text-[11px] text-gray-300 mt-2 font-body">
            Robotik AI &middot; {t('chatPage.label')}
          </p>
        </div>
      </div>
    </div>
  )
}
