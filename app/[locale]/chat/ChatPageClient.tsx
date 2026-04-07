'use client'

import { useState, useRef, useEffect, useCallback } from 'react'
import { FaPaperPlane, FaUser, FaLightbulb, FaMicrochip, FaExclamationTriangle } from 'react-icons/fa'
import { useLanguage } from '@/lib/i18n'

interface Message {
  id: number
  role: 'user' | 'assistant'
  text: string
}

export default function ChatPage() {
  const { t, locale } = useLanguage()
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    const el = scrollContainerRef.current
    if (el) {
      el.scrollTo({ top: el.scrollHeight, behavior: 'smooth' })
    }
  }, [messages, isTyping])

  // Build history for API from messages state
  const buildHistory = useCallback(
    (msgs: Message[]) =>
      msgs.map((m) => ({ role: m.role, content: m.text })),
    [],
  )

  const handleSend = async () => {
    const text = input.trim()
    if (!text || isTyping) return

    setError(null)
    const userMsg: Message = { id: Date.now(), role: 'user', text }
    const updatedMessages = [...messages, userMsg]
    setMessages(updatedMessages)
    setInput('')
    setIsTyping(true)

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: text,
          history: buildHistory(messages), // previous messages (not including current)
          locale,
        }),
      })

      const data = await res.json()

      if (!res.ok && !data.reply) {
        throw new Error(data.error || 'Something went wrong')
      }

      const botMsg: Message = {
        id: Date.now() + 1,
        role: 'assistant',
        text: data.reply,
      }
      setMessages((prev) => [...prev, botMsg])
    } catch (err: unknown) {
      const errMsg = err instanceof Error ? err.message : 'Something went wrong'
      setError(errMsg)
      // Add a fallback bot message so the user sees something
      const fallbackMsg: Message = {
        id: Date.now() + 1,
        role: 'assistant',
        text: t('chatPage.errorReply'),
      }
      setMessages((prev) => [...prev, fallbackMsg])
    } finally {
      setIsTyping(false)
    }
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

  // Simple markdown-like formatting for bot responses
  const formatMessage = (text: string) => {
    // Split by double newlines for paragraphs
    const parts = text.split(/\n\n+/)
    return parts.map((part, i) => {
      // Check if it's a bullet list
      const lines = part.split('\n')
      const isBulletList = lines.every(
        (l) => l.trim().startsWith('- ') || l.trim().startsWith('* ') || l.trim().startsWith('• ') || l.trim() === '',
      )
      const isNumberedList = lines.every(
        (l) => /^\d+[\.\)]\s/.test(l.trim()) || l.trim() === '',
      )

      if (isBulletList) {
        return (
          <ul key={i} className="list-disc list-inside space-y-1 my-1">
            {lines
              .filter((l) => l.trim())
              .map((l, j) => (
                <li key={j}>{l.replace(/^[\s]*[-*•]\s*/, '')}</li>
              ))}
          </ul>
        )
      }

      if (isNumberedList) {
        return (
          <ol key={i} className="list-decimal list-inside space-y-1 my-1">
            {lines
              .filter((l) => l.trim())
              .map((l, j) => (
                <li key={j}>{l.replace(/^\d+[\.\)]\s*/, '')}</li>
              ))}
          </ol>
        )
      }

      // Regular paragraph — handle inline code with backticks
      const formatted = part.split(/(`[^`]+`)/).map((segment, j) => {
        if (segment.startsWith('`') && segment.endsWith('`')) {
          return (
            <code key={j} className="bg-gray-200 text-brand-700 px-1.5 py-0.5 rounded text-xs font-mono">
              {segment.slice(1, -1)}
            </code>
          )
        }
        // Handle **bold**
        return segment.split(/(\*\*[^*]+\*\*)/).map((s, k) => {
          if (s.startsWith('**') && s.endsWith('**')) {
            return <strong key={k}>{s.slice(2, -2)}</strong>
          }
          return s
        })
      })

      return (
        <p key={i} className={i > 0 ? 'mt-2' : ''}>
          {formatted}
        </p>
      )
    })
  }

  return (
    <div className="h-[calc(100dvh-64px)] flex flex-col overflow-hidden bg-white">
      {/* Compact header */}
      <div className="shrink-0 bg-gradient-to-r from-accent-50 to-brand-50 border-b border-accent-100 px-4 py-3">
      <div className="max-w-3xl mx-auto flex items-center gap-3">
        <div className="relative shrink-0">
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-blue-100 to-blue-50 flex items-center justify-center border border-blue-200 shadow-sm">
            <FaMicrochip size={16} className="text-blue-500" />
          </div>
          <div className="absolute -bottom-0.5 -right-0.5 w-4 h-4 rounded-full bg-brand-400 flex items-center justify-center border-2 border-white">
            <FaLightbulb size={7} className="text-white" />
          </div>
        </div>
        <div className="min-w-0">
          <h1 className="font-black text-gray-900 text-base leading-tight truncate">
            {t('chatPage.title1')}{' '}
            <span className="bg-gradient-to-r from-accent-500 to-brand-500 bg-clip-text text-transparent">
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
              <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-blue-100 to-blue-50 flex items-center justify-center shadow-lg border-2 border-blue-200">
                <FaMicrochip size={32} className="text-blue-500" />
              </div>
              <div className="absolute -bottom-1 -right-1 w-7 h-7 rounded-full bg-gradient-to-br from-brand-400 to-brand-500 flex items-center justify-center border-2 border-white shadow-sm">
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
                  'border-brand-200 bg-brand-50 hover:border-brand-400 text-brand-700',
                  'border-accent-200 bg-accent-50 hover:border-accent-400 text-accent-700',
                  'border-blue-200 bg-blue-50 hover:border-blue-400 text-blue-700',
                  'border-brand-200 bg-brand-50 hover:border-brand-400 text-brand-700',
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
              <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-blue-100 to-blue-50 flex items-center justify-center shrink-0 shadow-sm border border-blue-200 mt-1">
                <FaMicrochip size={12} className="text-blue-500" />
              </div>
            )}
            <div
              className={`max-w-[78%] sm:max-w-[65%] px-4 py-3 rounded-2xl text-sm leading-relaxed font-body ${
                msg.role === 'user'
                  ? 'bg-gradient-to-r from-brand-500 to-brand-600 text-white rounded-br-md shadow-md'
                  : 'bg-gray-50 text-gray-700 border border-gray-200 rounded-bl-md shadow-sm'
              }`}
            >
              {msg.role === 'assistant' ? formatMessage(msg.text) : msg.text}
            </div>
            {msg.role === 'user' && (
              <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-brand-100 to-brand-50 flex items-center justify-center shrink-0 shadow-sm border border-brand-200 mt-1">
                <FaUser size={11} className="text-brand-500" />
              </div>
            )}
          </div>
        ))}

        {isTyping && (
          <div className="flex gap-2.5 justify-start">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-blue-100 to-blue-50 flex items-center justify-center shrink-0 shadow-sm border border-blue-200 mt-1">
              <FaMicrochip size={12} className="text-blue-500" />
            </div>
            <div className="bg-gray-50 border border-gray-200 rounded-2xl rounded-bl-md px-4 py-3 shadow-sm">
              <div className="flex items-center gap-2">
                <div className="flex gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-brand-400 animate-blink-1 inline-block" />
                  <span className="w-2 h-2 rounded-full bg-blue-400 animate-blink-2 inline-block" />
                  <span className="w-2 h-2 rounded-full bg-brand-400 animate-blink-3 inline-block" />
                </div>
                <span className="text-xs text-gray-400 font-semibold">{t('chatPage.thinking')}</span>
              </div>
            </div>
          </div>
        )}

        {error && (
          <div className="flex items-center gap-2 text-xs text-amber-600 bg-amber-50 border border-amber-200 rounded-xl px-3 py-2 mx-auto max-w-sm">
            <FaExclamationTriangle size={12} />
            <span className="font-body">{error}</span>
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
            disabled={isTyping}
            className="flex-1 min-w-0 px-4 py-3.5 rounded-2xl border-2 border-gray-200 bg-gray-50 text-gray-900 placeholder-gray-400 font-body text-sm focus:outline-none focus:border-blue-400 focus:bg-white focus:ring-4 focus:ring-blue-50 transition-all disabled:opacity-60"
          />
          <button
            onClick={handleSend}
            disabled={!input.trim() || isTyping}
            className="w-12 h-12 rounded-2xl bg-gradient-to-r from-blue-500 to-blue-600 text-white flex items-center justify-center shrink-0 shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all disabled:opacity-40 disabled:hover:translate-y-0 disabled:hover:shadow-lg"
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
