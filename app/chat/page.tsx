'use client'

import { useState, useRef, useEffect } from 'react'
import { FaPaperPlane, FaUser, FaLightbulb, FaMicrochip } from 'react-icons/fa'
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
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    const el = scrollContainerRef.current
    if (el) {
      el.scrollTo({ top: el.scrollHeight, behavior: 'smooth' })
    }
  }, [messages, isTyping])

  const handleSend = () => {
    const text = input.trim()
    if (!text) return

    const userMsg: Message = { id: Date.now(), role: 'user', text }
    setMessages((prev) => [...prev, userMsg])
    setInput('')
    setIsTyping(true)

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
    <div className="h-[calc(100dvh-64px)] flex flex-col overflow-hidden bg-white">
      {/* Compact header */}
      <div className="shrink-0 bg-gradient-to-r from-purple-50 to-pink-50 border-b border-purple-100 px-4 py-3">
      <div className="max-w-3xl mx-auto flex items-center gap-3">
        <div className="relative shrink-0">
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center border border-purple-200 shadow-sm">
            <FaMicrochip size={16} className="text-purple-500" />
          </div>
          <div className="absolute -bottom-0.5 -right-0.5 w-4 h-4 rounded-full bg-emerald-400 flex items-center justify-center border-2 border-white">
            <FaLightbulb size={7} className="text-white" />
          </div>
        </div>
        <div className="min-w-0">
          <h1 className="font-black text-gray-900 text-base leading-tight truncate">
            {t('chatPage.title1')}{' '}
            <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              {t('chatPage.title2')}
            </span>
          </h1>
          <p className="text-xs text-gray-400 font-body truncate">{t('chatPage.subtitle')}</p>
        </div>
      </div>
      </div>

      {/* Messages — only this scrolls */}
      <div ref={scrollContainerRef} className="flex-1 overflow-y-auto">
      <div className="max-w-3xl mx-auto px-4 py-4 space-y-4">
        {messages.length === 0 && (
          <div className="flex flex-col items-center justify-center h-full py-6">
            <div className="relative mb-5">
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
            <p className="text-sm text-gray-500 text-center max-w-sm mb-6 font-body">
              {t('chatPage.welcomeDesc')}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 w-full max-w-sm">
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

        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex gap-2.5 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            {msg.role === 'assistant' && (
              <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center shrink-0 shadow-sm border border-purple-200 mt-1">
                <FaMicrochip size={12} className="text-purple-500" />
              </div>
            )}
            <div
              className={`max-w-[78%] sm:max-w-[65%] px-4 py-3 rounded-2xl text-sm leading-relaxed font-body ${
                msg.role === 'user'
                  ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-br-md shadow-md'
                  : 'bg-gray-50 text-gray-700 border border-gray-200 rounded-bl-md shadow-sm'
              }`}
            >
              {msg.text}
            </div>
            {msg.role === 'user' && (
              <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-orange-100 to-yellow-100 flex items-center justify-center shrink-0 shadow-sm border border-orange-200 mt-1">
                <FaUser size={11} className="text-orange-500" />
              </div>
            )}
          </div>
        ))}

        {isTyping && (
          <div className="flex gap-2.5 justify-start">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center shrink-0 shadow-sm border border-purple-200 mt-1">
              <FaMicrochip size={12} className="text-purple-500" />
            </div>
            <div className="bg-gray-50 border border-gray-200 rounded-2xl rounded-bl-md px-4 py-3 shadow-sm">
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

        <div />
      </div>
      </div>

      {/* Input — pinned to bottom, never moves */}
      <div className="shrink-0 border-t border-gray-100 bg-white px-4 py-3 safe-area-bottom">
        <div className="flex gap-2.5 items-center max-w-3xl mx-auto">
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault()
                handleSend()
              }
            }}
            placeholder={t('chatPage.placeholder')}
            className="flex-1 min-w-0 px-4 py-3.5 rounded-2xl border-2 border-gray-200 bg-gray-50 text-gray-900 placeholder-gray-400 font-body text-sm focus:outline-none focus:border-purple-400 focus:bg-white focus:ring-4 focus:ring-purple-50 transition-all"
          />
          <button
            onClick={handleSend}
            disabled={!input.trim()}
            className="w-12 h-12 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 text-white flex items-center justify-center shrink-0 shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all disabled:opacity-40 disabled:hover:translate-y-0 disabled:hover:shadow-lg"
          >
            <FaPaperPlane size={15} />
          </button>
        </div>
        <p className="text-center text-[10px] text-gray-300 mt-1.5 font-body">
          Robotik AI &middot; {t('chatPage.label')}
        </p>
      </div>
    </div>
  )
}
