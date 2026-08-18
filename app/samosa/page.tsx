'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Search,
  Bell,
  Plus,
  Trash2,
  ExternalLink,
  Mail,
  CheckCircle2,
  Clock,
  MessageSquare,
  AlertCircle,
  Database,
  RefreshCw,
  Eye,
  EyeOff,
  FolderGit2,
  Users,
  LayoutDashboard,
  Layers,
  X,
  Loader2,
  FileText,
  Lock,
  Shield,
  LogOut,
  KeyRound,
  User,
} from 'lucide-react'

interface Project {
  _id: string
  title: string
  image: string
  href?: string
  description?: string
  category?: string
  order: number
  active: boolean
  createdAt: string
}

interface Lead {
  _id: string
  name: string
  email: string
  service?: string
  budget?: string
  message: string
  status: 'new' | 'contacted' | 'in_progress' | 'closed'
  notes?: string
  ip?: string
  createdAt: string
}

export default function SamosaAdminDashboard() {
  // Auth state
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null)
  const [adminUser, setAdminUser] = useState('')
  const [loginForm, setLoginForm] = useState({ username: '', password: '' })
  const [showPassword, setShowPassword] = useState(false)
  const [isLoggingIn, setIsLoggingIn] = useState(false)
  const [loginError, setLoginError] = useState('')

  // Dashboard state
  const [activeNav, setActiveNav] = useState<'overview' | 'projects' | 'leads' | 'docs'>('overview')
  const [currentHost, setCurrentHost] = useState('')
  const [loading, setLoading] = useState(true)
  const [refreshing, setRefreshing] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')

  // Data states
  const [projects, setProjects] = useState<Project[]>([])
  const [leads, setLeads] = useState<Lead[]>([])
  const [dbStatus, setDbStatus] = useState<'connected' | 'checking' | 'error'>('checking')

  // Lead status filter
  const [leadStatusFilter, setLeadStatusFilter] = useState('all')

  // Project Modal state
  const [isProjectModalOpen, setIsProjectModalOpen] = useState(false)
  const [projectForm, setProjectForm] = useState({
    title: '',
    image: '',
    href: '',
    category: 'Web Application',
    description: '',
    order: 0,
    active: true,
  })
  const [isSubmittingProject, setIsSubmittingProject] = useState(false)
  const [notification, setNotification] = useState<{ message: string; type: 'success' | 'error' } | null>(null)

  const showNotification = (message: string, type: 'success' | 'error' = 'success') => {
    setNotification({ message, type })
    setTimeout(() => setNotification(null), 3000)
  }

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setCurrentHost(window.location.host)
    }
    checkAuth()
  }, [])

  const checkAuth = async () => {
    try {
      const res = await fetch('/api/samosa/auth')
      const data = await res.json()
      if (data.authenticated) {
        setIsAuthenticated(true)
        setAdminUser(data.user || 'admin')
        fetchData()
      } else {
        setIsAuthenticated(false)
        setLoading(false)
      }
    } catch {
      setIsAuthenticated(false)
      setLoading(false)
    }
  }

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!loginForm.username || !loginForm.password) {
      setLoginError('Please enter both username/email and password')
      return
    }

    setIsLoggingIn(true)
    setLoginError('')

    try {
      const res = await fetch('/api/samosa/auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(loginForm),
      })

      const data = await res.json()

      if (data.success) {
        setIsAuthenticated(true)
        setAdminUser(data.user || 'admin')
        showNotification('Welcome to Samosa Admin Portal!')
        fetchData()
      } else {
        setLoginError(data.message || 'Invalid admin credentials')
      }
    } catch {
      setLoginError('Unable to connect to server. Please try again.')
    } finally {
      setIsLoggingIn(false)
    }
  }

  const handleLogout = async () => {
    try {
      await fetch('/api/samosa/auth', { method: 'DELETE' })
    } catch {
      // Ignore
    }
    setIsAuthenticated(false)
    setProjects([])
    setLeads([])
    showNotification('Logged out successfully')
  }

  const fetchData = async () => {
    setRefreshing(true)
    try {
      const [projectsRes, leadsRes] = await Promise.all([
        fetch('/api/projects?all=true'),
        fetch('/api/leads'),
      ])

      const projectsData = await projectsRes.json()
      const leadsData = await leadsRes.json()

      if (projectsData.success) {
        setProjects(projectsData.data || [])
      }
      if (leadsData.success) {
        setLeads(leadsData.data || [])
      }

      setDbStatus('connected')
    } catch (err) {
      console.error('Error fetching admin data:', err)
      setDbStatus('error')
      showNotification('Failed to sync with database', 'error')
    } finally {
      setLoading(false)
      setRefreshing(false)
    }
  }

  // Project handlers
  const handleCreateProject = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!projectForm.title || !projectForm.image) {
      showNotification('Title and Image URL are required', 'error')
      return
    }

    setIsSubmittingProject(true)
    try {
      const res = await fetch('/api/projects', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(projectForm),
      })

      const data = await res.json()
      if (data.success) {
        setProjects([data.data, ...projects])
        setIsProjectModalOpen(false)
        setProjectForm({
          title: '',
          image: '',
          href: '',
          category: 'Web Application',
          description: '',
          order: 0,
          active: true,
        })
        showNotification('Project created successfully!')
      } else {
        showNotification(data.message || 'Failed to create project', 'error')
      }
    } catch {
      showNotification('Network error while saving project', 'error')
    } finally {
      setIsSubmittingProject(false)
    }
  }

  const handleToggleProjectStatus = async (id: string, currentStatus: boolean) => {
    try {
      const res = await fetch('/api/projects', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, active: !currentStatus }),
      })
      const data = await res.json()
      if (data.success) {
        setProjects(projects.map((p) => (p._id === id ? { ...p, active: !currentStatus } : p)))
        showNotification(`Project marked as ${!currentStatus ? 'Active' : 'Draft'}`)
      }
    } catch {
      showNotification('Failed to update project status', 'error')
    }
  }

  const handleDeleteProject = async (id: string) => {
    if (!confirm('Are you sure you want to delete this project?')) return
    try {
      const res = await fetch(`/api/projects?id=${id}`, { method: 'DELETE' })
      const data = await res.json()
      if (data.success) {
        setProjects(projects.filter((p) => p._id !== id))
        showNotification('Project deleted')
      }
    } catch {
      showNotification('Failed to delete project', 'error')
    }
  }

  // Lead handlers
  const handleUpdateLeadStatus = async (id: string, newStatus: string) => {
    try {
      const res = await fetch('/api/leads', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, status: newStatus }),
      })
      const data = await res.json()
      if (data.success) {
        setLeads(leads.map((l) => (l._id === id ? { ...l, status: newStatus as any } : l)))
        showNotification(`Lead status updated to ${newStatus}`)
      }
    } catch {
      showNotification('Failed to update lead status', 'error')
    }
  }

  const handleDeleteLead = async (id: string) => {
    if (!confirm('Are you sure you want to delete this lead inquiry?')) return
    try {
      const res = await fetch(`/api/leads?id=${id}`, { method: 'DELETE' })
      const data = await res.json()
      if (data.success) {
        setLeads(leads.filter((l) => l._id !== id))
        showNotification('Lead removed')
      }
    } catch {
      showNotification('Failed to delete lead', 'error')
    }
  }

  // Filtered queries
  const filteredProjects = projects.filter((p) =>
    p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    (p.category && p.category.toLowerCase().includes(searchQuery.toLowerCase()))
  )

  const filteredLeads = leads.filter((l) => {
    const matchesSearch =
      l.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      l.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      l.message.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesStatus = leadStatusFilter === 'all' || l.status === leadStatusFilter
    return matchesSearch && matchesStatus
  })

  // Loading state during initial authentication check
  if (isAuthenticated === null) {
    return (
      <div className="min-h-screen bg-[#0b0c10] flex flex-col items-center justify-center text-neutral-400">
        <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.02] p-6 backdrop-blur-md">
          <Loader2 className="size-5 animate-spin text-purple-400" />
          <span className="text-sm font-mono tracking-tight text-white">
            Verifying Samosa Admin credentials...
          </span>
        </div>
      </div>
    )
  }

  // LOGIN SCREEN — Shown when user is not authenticated
  if (isAuthenticated === false) {
    return (
      <div className="relative min-h-screen bg-[#090a0f] flex flex-col items-center justify-center px-4 overflow-hidden">
        {/* Subtle cyber grid backdrop */}
        <div
          className="pointer-events-none absolute inset-0 -z-10 opacity-[0.05]"
          style={{
            backgroundImage:
              'linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />

        {/* Ambient glow */}
        <div className="pointer-events-none absolute -top-40 -left-40 size-96 rounded-full bg-purple-600/15 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-40 -right-40 size-96 rounded-full bg-cyan-600/15 blur-3xl" />

        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="relative w-full max-w-md overflow-hidden rounded-3xl border border-white/15 bg-[#12131a]/90 p-8 shadow-2xl backdrop-blur-xl"
        >
          {/* Top Bar / Terminal Header */}
          <div className="flex items-center justify-between border-b border-white/10 pb-5">
            <div className="flex items-center gap-2.5">
              <div className="flex size-9 items-center justify-center rounded-xl bg-purple-500/10 border border-purple-500/30 text-purple-400">
                <Shield className="size-4" />
              </div>
              <div>
                <h1 className="font-display text-lg font-bold tracking-tight text-white">
                  Devtacet Samosa
                </h1>
                <p className="font-mono text-[11px] text-zinc-400">
                  Secure Admin Subdomain
                </p>
              </div>
            </div>
            <span className="flex items-center gap-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-0.5 font-mono text-[10px] font-semibold text-emerald-400">
              <span className="size-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Protected
            </span>
          </div>

          {/* Subtitle */}
          <div className="mt-6 mb-5">
            <p className="font-mono text-xs text-purple-400">
              $ sudo authenticate --admin
            </p>
            <p className="mt-1 text-xs text-zinc-400">
              Enter your authorized admin credentials to manage projects, leads CRM, and system metrics.
            </p>
          </div>

          {/* Error Alert */}
          {loginError && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-5 flex items-center gap-2 rounded-xl border border-rose-500/30 bg-rose-500/10 p-3 text-xs text-rose-300"
            >
              <AlertCircle className="size-4 shrink-0 text-rose-400" />
              <span>{loginError}</span>
            </motion.div>
          )}

          {/* Login Form */}
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="mb-1.5 block text-xs font-semibold text-zinc-300">
                Admin Username or Email
              </label>
              <div className="relative">
                <User className="pointer-events-none absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-zinc-500" />
                <input
                  type="text"
                  required
                  placeholder="admin"
                  value={loginForm.username}
                  onChange={(e) => setLoginForm({ ...loginForm, username: e.target.value })}
                  className="w-full rounded-xl border border-zinc-700/80 bg-[#171822] py-2.5 pl-10 pr-4 text-xs font-medium text-white placeholder:text-zinc-500 outline-none transition-all focus:border-purple-500 focus:ring-2 focus:ring-purple-500/30"
                />
              </div>
            </div>

            <div>
              <label className="mb-1.5 block text-xs font-semibold text-zinc-300">
                Admin Password
              </label>
              <div className="relative">
                <Lock className="pointer-events-none absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-zinc-500" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  required
                  placeholder="••••••••••••"
                  value={loginForm.password}
                  onChange={(e) => setLoginForm({ ...loginForm, password: e.target.value })}
                  className="w-full rounded-xl border border-zinc-700/80 bg-[#171822] py-2.5 pl-10 pr-10 text-xs font-medium text-white placeholder:text-zinc-500 outline-none transition-all focus:border-purple-500 focus:ring-2 focus:ring-purple-500/30"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-white"
                >
                  {showPassword ? <EyeOff className="size-4" /> : <Eye className="size-4" />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoggingIn}
              className="mt-2 flex w-full items-center justify-center gap-2 rounded-xl bg-purple-600 py-3 text-xs font-semibold text-white shadow-lg shadow-purple-600/25 transition-all hover:bg-purple-500 hover:shadow-purple-500/35 disabled:opacity-50"
            >
              {isLoggingIn ? (
                <>
                  <Loader2 className="size-4 animate-spin" />
                  <span>Authenticating...</span>
                </>
              ) : (
                <>
                  <KeyRound className="size-4" />
                  <span>Sign In to Samosa Portal</span>
                </>
              )}
            </button>
          </form>

          {/* Quick Info Box */}
          <div className="mt-6 rounded-xl border border-white/5 bg-white/[0.02] p-3 text-[11px] text-zinc-400">
            <span className="font-semibold text-zinc-300">Default Credentials:</span>
            <div className="mt-1 flex items-center justify-between font-mono text-[11px] text-zinc-400">
              <span>User: <strong className="text-zinc-200">admin</strong></span>
              <span>Pass: <strong className="text-zinc-200">samosa@devtacet2026</strong></span>
            </div>
          </div>
        </motion.div>
      </div>
    )
  }

  // AUTHENTICATED DASHBOARD VIEW
  return (
    <div className="min-h-screen bg-[#0c0d12] text-neutral-200 font-sans">
      {/* Toast Notification */}
      <AnimatePresence>
        {notification && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            className={`fixed top-4 right-4 z-50 flex items-center gap-2 px-4 py-2.5 rounded-xl border shadow-xl text-xs font-medium backdrop-blur-md ${
              notification.type === 'success'
                ? 'bg-[#12141c]/90 border-emerald-500/30 text-emerald-400'
                : 'bg-[#12141c]/90 border-rose-500/30 text-rose-400'
            }`}
          >
            {notification.type === 'success' ? (
              <CheckCircle2 className="size-4" />
            ) : (
              <AlertCircle className="size-4" />
            )}
            <span>{notification.message}</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Top Header */}
      <header className="sticky top-0 z-30 border-b border-[#1f212a] bg-[#0c0d12]/90 backdrop-blur-md px-4 sm:px-8 py-3.5">
        <div className="mx-auto max-w-7xl flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="flex size-9 items-center justify-center rounded-xl bg-purple-500/10 border border-purple-500/30 text-purple-400">
              <Layers className="size-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-display font-bold text-white text-base tracking-tight">
                  Devtacet Samosa
                </span>
                <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-400 font-semibold">
                  Admin Subdomain
                </span>
              </div>
              <p className="text-xs text-neutral-500 font-mono">
                Host: {currentHost || 'samosa.devtacet.com'}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {/* DB Status Badge */}
            <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-xl border border-[#1f212a] bg-[#12131a] text-xs font-mono">
              <Database className="size-3.5 text-neutral-400" />
              <span>MongoDB:</span>
              {dbStatus === 'connected' && (
                <span className="text-emerald-400 flex items-center gap-1 font-semibold">
                  <span className="size-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Live
                </span>
              )}
              {dbStatus === 'checking' && (
                <span className="text-amber-400">Syncing...</span>
              )}
              {dbStatus === 'error' && (
                <span className="text-rose-400">Disconnected</span>
              )}
            </div>

            {/* Refresh Button */}
            <button
              type="button"
              onClick={fetchData}
              disabled={refreshing}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-[#1f212a] bg-[#12131a] hover:bg-[#181a24] text-xs text-neutral-300 transition"
              title="Refresh Data"
            >
              <RefreshCw className={`size-3.5 ${refreshing ? 'animate-spin text-purple-400' : ''}`} />
              <span className="hidden sm:inline">Sync</span>
            </button>

            {/* Admin User Badge */}
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl border border-white/10 bg-white/[0.04] text-xs font-mono text-neutral-300">
              <User className="size-3.5 text-purple-400" />
              <span>{adminUser || 'Admin'}</span>
            </div>

            {/* Sign Out Button */}
            <button
              type="button"
              onClick={handleLogout}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-rose-500/30 bg-rose-500/10 hover:bg-rose-500/20 text-xs text-rose-300 font-semibold transition"
              title="Sign Out"
            >
              <LogOut className="size-3.5" />
              <span className="hidden sm:inline">Sign Out</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="mx-auto max-w-7xl px-4 sm:px-8 py-8">
        {/* Navigation Tabs & Search */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-[#1f212a] pb-4 mb-6">
          <div className="flex items-center gap-1.5 p-1 rounded-xl bg-[#12131a] border border-[#1f212a]">
            <button
              type="button"
              onClick={() => setActiveNav('overview')}
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-medium transition ${
                activeNav === 'overview'
                  ? 'bg-neutral-200 text-neutral-900 font-semibold'
                  : 'text-neutral-400 hover:text-neutral-200'
              }`}
            >
              <LayoutDashboard className="size-3.5" />
              Overview
            </button>
            <button
              type="button"
              onClick={() => setActiveNav('projects')}
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-medium transition ${
                activeNav === 'projects'
                  ? 'bg-neutral-200 text-neutral-900 font-semibold'
                  : 'text-neutral-400 hover:text-neutral-200'
              }`}
            >
              <FolderGit2 className="size-3.5" />
              Projects ({projects.length})
            </button>
            <button
              type="button"
              onClick={() => setActiveNav('leads')}
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-medium transition ${
                activeNav === 'leads'
                  ? 'bg-neutral-200 text-neutral-900 font-semibold'
                  : 'text-neutral-400 hover:text-neutral-200'
              }`}
            >
              <Users className="size-3.5" />
              Leads & Inquiries ({leads.length})
            </button>
            <button
              type="button"
              onClick={() => setActiveNav('docs')}
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-medium transition ${
                activeNav === 'docs'
                  ? 'bg-neutral-200 text-neutral-900 font-semibold'
                  : 'text-neutral-400 hover:text-neutral-200'
              }`}
            >
              <FileText className="size-3.5" />
              API Docs
            </button>
          </div>

          <div className="relative w-full sm:w-64">
            <Search className="size-3.5 text-neutral-500 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              placeholder="Search data..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-8 pr-3 py-1.5 text-xs rounded-xl bg-[#12131a] border border-[#1f212a] text-neutral-200 placeholder:text-neutral-500 focus:outline-none focus:border-neutral-400"
            />
          </div>
        </div>

        {/* OVERVIEW TAB */}
        {activeNav === 'overview' && (
          <div className="space-y-6">
            {/* Metric Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="rounded-2xl border border-[#1f212a] bg-[#12131a] p-5 shadow-lg">
                <div className="flex items-center justify-between text-neutral-400 text-xs font-mono">
                  <span>TOTAL PROJECTS</span>
                  <FolderGit2 className="size-4 text-purple-400" />
                </div>
                <div className="mt-3 text-3xl font-bold font-display text-white">
                  {projects.length}
                </div>
                <p className="mt-1 text-xs text-neutral-500">
                  {projects.filter((p) => p.active).length} active on live site
                </p>
              </div>

              <div className="rounded-2xl border border-[#1f212a] bg-[#12131a] p-5 shadow-lg">
                <div className="flex items-center justify-between text-neutral-400 text-xs font-mono">
                  <span>NEW LEADS</span>
                  <Bell className="size-4 text-emerald-400" />
                </div>
                <div className="mt-3 text-3xl font-bold font-display text-white">
                  {leads.filter((l) => l.status === 'new').length}
                </div>
                <p className="mt-1 text-xs text-neutral-500">
                  {leads.length} total contact submissions
                </p>
              </div>

              <div className="rounded-2xl border border-[#1f212a] bg-[#12131a] p-5 shadow-lg">
                <div className="flex items-center justify-between text-neutral-400 text-xs font-mono">
                  <span>DATABASE ENGINE</span>
                  <Database className="size-4 text-cyan-400" />
                </div>
                <div className="mt-3 text-3xl font-bold font-display text-white">
                  MongoDB
                </div>
                <p className="mt-1 text-xs text-neutral-500">Atlas Cluster0 · Production</p>
              </div>

              <div className="rounded-2xl border border-[#1f212a] bg-[#12131a] p-5 shadow-lg">
                <div className="flex items-center justify-between text-neutral-400 text-xs font-mono">
                  <span>SYSTEM LATENCY</span>
                  <Clock className="size-4 text-amber-400" />
                </div>
                <div className="mt-3 text-3xl font-bold font-display text-white">
                  128ms
                </div>
                <p className="mt-1 text-xs text-neutral-500">Edge SSR + API Routing</p>
              </div>
            </div>

            {/* Recent Activity Split View */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Recent Leads */}
              <div className="rounded-2xl border border-[#1f212a] bg-[#12131a] p-6 shadow-xl">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-display text-base font-bold text-white">
                    Recent Contact Inquiries
                  </h3>
                  <button
                    type="button"
                    onClick={() => setActiveNav('leads')}
                    className="text-xs text-purple-400 hover:text-purple-300 font-medium"
                  >
                    View all &rarr;
                  </button>
                </div>
                {leads.length === 0 ? (
                  <p className="text-xs text-neutral-500 py-6 text-center">
                    No lead inquiries received yet.
                  </p>
                ) : (
                  <div className="space-y-3">
                    {leads.slice(0, 4).map((lead) => (
                      <div
                        key={lead._id}
                        className="rounded-xl border border-[#1c1e28] bg-[#161722] p-3 flex items-start justify-between gap-3"
                      >
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="text-xs font-bold text-white">{lead.name}</span>
                            <span className="text-[10px] text-neutral-400 font-mono">
                              {lead.email}
                            </span>
                          </div>
                          <p className="text-xs text-neutral-300 mt-1 line-clamp-1">
                            {lead.message}
                          </p>
                        </div>
                        <span
                          className={`text-[10px] font-mono px-2 py-0.5 rounded-full capitalize font-semibold ${
                            lead.status === 'new'
                              ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30'
                              : 'bg-neutral-800 text-neutral-400'
                          }`}
                        >
                          {lead.status}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Live Portfolio Showcase */}
              <div className="rounded-2xl border border-[#1f212a] bg-[#12131a] p-6 shadow-xl">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-display text-base font-bold text-white">
                    Live Projects
                  </h3>
                  <button
                    type="button"
                    onClick={() => setActiveNav('projects')}
                    className="text-xs text-purple-400 hover:text-purple-300 font-medium"
                  >
                    Manage &rarr;
                  </button>
                </div>
                {projects.length === 0 ? (
                  <p className="text-xs text-neutral-500 py-6 text-center">
                    No projects found in database.
                  </p>
                ) : (
                  <div className="grid grid-cols-2 gap-3">
                    {projects.slice(0, 4).map((p) => (
                      <div
                        key={p._id}
                        className="relative rounded-xl overflow-hidden border border-[#1c1e28] bg-[#161722] group"
                      >
                        <img
                          src={p.image}
                          alt={p.title}
                          className="h-24 w-full object-cover group-hover:scale-105 transition duration-300"
                        />
                        <div className="p-2.5">
                          <h4 className="text-xs font-bold text-white line-clamp-1">{p.title}</h4>
                          <span className="text-[10px] text-neutral-400">{p.category}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* PROJECTS TAB */}
        {activeNav === 'projects' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-display text-lg font-bold text-white">
                  Portfolio Projects Management
                </h3>
                <p className="text-xs text-neutral-400">
                  Add, edit, toggle visibility, or delete projects shown on the main showcase.
                </p>
              </div>
              <button
                type="button"
                onClick={() => setIsProjectModalOpen(true)}
                className="inline-flex items-center gap-1.5 rounded-xl bg-purple-600 px-4 py-2 text-xs font-semibold text-white shadow-lg shadow-purple-600/20 hover:bg-purple-500 transition"
              >
                <Plus className="size-4" />
                Add New Project
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredProjects.map((p) => (
                <div
                  key={p._id}
                  className="rounded-2xl border border-[#1f212a] bg-[#12131a] overflow-hidden shadow-lg flex flex-col justify-between"
                >
                  <div>
                    <div className="relative h-40 w-full overflow-hidden bg-black/60">
                      <img
                        src={p.image}
                        alt={p.title}
                        className="size-full object-cover"
                      />
                      <span
                        className={`absolute top-2.5 left-2.5 text-[10px] font-mono px-2.5 py-0.5 rounded-full font-semibold border backdrop-blur-md ${
                          p.active
                            ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40'
                            : 'bg-neutral-900/80 text-neutral-400 border-neutral-700'
                        }`}
                      >
                        {p.active ? 'Active on Home' : 'Draft'}
                      </span>
                    </div>

                    <div className="p-4">
                      <span className="text-[10px] font-mono text-purple-400 uppercase">
                        {p.category}
                      </span>
                      <h4 className="text-base font-bold text-white mt-1">{p.title}</h4>
                      <p className="text-xs text-neutral-400 mt-1 line-clamp-2 leading-relaxed">
                        {p.description}
                      </p>
                    </div>
                  </div>

                  <div className="p-4 pt-0 border-t border-[#1c1e28] mt-3 flex items-center justify-between gap-2">
                    <button
                      type="button"
                      onClick={() => handleToggleProjectStatus(p._id, p.active)}
                      className="inline-flex items-center gap-1 text-xs text-neutral-300 hover:text-white px-2.5 py-1 rounded-lg border border-[#1f212a] bg-[#161722]"
                    >
                      {p.active ? <EyeOff className="size-3 text-neutral-400" /> : <Eye className="size-3 text-emerald-400" />}
                      <span>{p.active ? 'Hide' : 'Publish'}</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => handleDeleteProject(p._id)}
                      className="inline-flex items-center gap-1 text-xs text-rose-400 hover:text-rose-300 px-2.5 py-1 rounded-lg border border-rose-500/20 bg-rose-500/10"
                    >
                      <Trash2 className="size-3" />
                      <span>Delete</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* LEADS TAB */}
        {activeNav === 'leads' && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h3 className="font-display text-lg font-bold text-white">
                  Contact Inquiries & Leads CRM
                </h3>
                <p className="text-xs text-neutral-400">
                  Track client requests, update status, and respond to incoming project leads.
                </p>
              </div>

              {/* Status Filter */}
              <div className="flex items-center gap-1.5 p-1 rounded-xl bg-[#12131a] border border-[#1f212a]">
                {['all', 'new', 'contacted', 'in_progress', 'closed'].map((st) => (
                  <button
                    key={st}
                    type="button"
                    onClick={() => setLeadStatusFilter(st)}
                    className={`px-3 py-1 rounded-lg text-xs capitalize font-medium transition ${
                      leadStatusFilter === st
                        ? 'bg-neutral-200 text-neutral-900 font-semibold'
                        : 'text-neutral-400 hover:text-neutral-200'
                    }`}
                  >
                    {st.replace('_', ' ')}
                  </button>
                ))}
              </div>
            </div>

            {/* Leads Table */}
            <div className="rounded-2xl border border-[#1f212a] bg-[#12131a] overflow-hidden shadow-xl">
              {filteredLeads.length === 0 ? (
                <p className="p-8 text-center text-xs text-neutral-500">
                  No lead submissions match your filter.
                </p>
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs text-neutral-300">
                    <thead className="border-b border-[#1f212a] bg-[#161722] text-[11px] font-mono text-neutral-400 uppercase">
                      <tr>
                        <th className="px-5 py-3">Client Info</th>
                        <th className="px-5 py-3">Service & Budget</th>
                        <th className="px-5 py-3">Message</th>
                        <th className="px-5 py-3">Status</th>
                        <th className="px-5 py-3 text-right">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#1c1e28]">
                      {filteredLeads.map((lead) => (
                        <tr key={lead._id} className="hover:bg-[#161722]/50 transition">
                          <td className="px-5 py-4">
                            <div className="font-bold text-white">{lead.name}</div>
                            <div className="text-neutral-400 font-mono mt-0.5">{lead.email}</div>
                            <div className="text-[10px] text-neutral-500 font-mono mt-1">
                              {new Date(lead.createdAt).toLocaleDateString()}
                            </div>
                          </td>
                          <td className="px-5 py-4">
                            <span className="text-purple-400 font-medium">{lead.service || 'General'}</span>
                            <div className="text-neutral-400 mt-0.5">Budget: {lead.budget || 'N/A'}</div>
                          </td>
                          <td className="px-5 py-4 max-w-xs">
                            <p className="line-clamp-3 text-neutral-300 leading-relaxed">
                              {lead.message}
                            </p>
                          </td>
                          <td className="px-5 py-4">
                            <select
                              value={lead.status}
                              onChange={(e) => handleUpdateLeadStatus(lead._id, e.target.value)}
                              className="rounded-lg border border-[#2a2c38] bg-[#1a1b24] px-2.5 py-1 text-xs text-white font-medium outline-none focus:border-purple-500"
                            >
                              <option value="new">New</option>
                              <option value="contacted">Contacted</option>
                              <option value="in_progress">In Progress</option>
                              <option value="closed">Closed</option>
                            </select>
                          </td>
                          <td className="px-5 py-4 text-right">
                            <div className="flex items-center justify-end gap-2">
                              <a
                                href={`mailto:${lead.email}?subject=Regarding your project inquiry on Devtacet`}
                                className="inline-flex size-7 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] text-neutral-300 hover:text-white"
                                title="Reply via Email"
                              >
                                <Mail className="size-3.5" />
                              </a>
                              <button
                                type="button"
                                onClick={() => handleDeleteLead(lead._id)}
                                className="inline-flex size-7 items-center justify-center rounded-lg border border-rose-500/20 bg-rose-500/10 text-rose-400 hover:bg-rose-500/20"
                                title="Delete Inquiry"
                              >
                                <Trash2 className="size-3.5" />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </div>
        )}

        {/* API DOCS TAB */}
        {activeNav === 'docs' && (
          <div className="space-y-6">
            <div>
              <h3 className="font-display text-lg font-bold text-white">
                Devtacet Backend API Endpoints
              </h3>
              <p className="text-xs text-neutral-400">
                REST API references for Next.js endpoints, authenticated subdomain routes, and MongoDB operations.
              </p>
            </div>

            <div className="space-y-4">
              <div className="rounded-2xl border border-[#1f212a] bg-[#12131a] p-5">
                <div className="flex items-center gap-2 font-mono text-xs text-emerald-400 font-semibold">
                  <span className="px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/30">
                    POST
                  </span>
                  <span>/api/leads</span>
                </div>
                <p className="mt-2 text-xs text-neutral-300">
                  Public endpoint for website contact forms. Creates a new inquiry in MongoDB with client details, budget, and IP tracking.
                </p>
              </div>

              <div className="rounded-2xl border border-[#1f212a] bg-[#12131a] p-5">
                <div className="flex items-center gap-2 font-mono text-xs text-purple-400 font-semibold">
                  <span className="px-2 py-0.5 rounded bg-purple-500/10 border border-purple-500/30">
                    GET / POST / PATCH / DELETE
                  </span>
                  <span>/api/projects</span>
                </div>
                <p className="mt-2 text-xs text-neutral-300">
                  CRUD operations for portfolio projects. Modification and showAll queries are protected by admin session token.
                </p>
              </div>

              <div className="rounded-2xl border border-[#1f212a] bg-[#12131a] p-5">
                <div className="flex items-center gap-2 font-mono text-xs text-cyan-400 font-semibold">
                  <span className="px-2 py-0.5 rounded bg-cyan-500/10 border border-cyan-500/30">
                    POST / DELETE
                  </span>
                  <span>/api/samosa/auth</span>
                </div>
                <p className="mt-2 text-xs text-neutral-300">
                  Admin authentication endpoint. Issues signed HMAC-SHA256 session token stored in secure HTTP-only cookies.
                </p>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* NEW PROJECT MODAL */}
      <AnimatePresence>
        {isProjectModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 16 }}
              className="relative w-full max-w-lg rounded-2xl border border-[#2a2c38] bg-[#12131a] p-6 shadow-2xl"
            >
              <div className="flex items-center justify-between border-b border-[#1f212a] pb-4 mb-4">
                <h4 className="font-display font-bold text-white text-base">
                  Add New Portfolio Project
                </h4>
                <button
                  type="button"
                  onClick={() => setIsProjectModalOpen(false)}
                  className="text-neutral-400 hover:text-white"
                >
                  <X className="size-4" />
                </button>
              </div>

              <form onSubmit={handleCreateProject} className="space-y-3.5">
                <div>
                  <label className="block text-[11px] text-neutral-400 mb-1">
                    Project Title <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Atlas Cloud Engine"
                    value={projectForm.title}
                    onChange={(e) => setProjectForm({ ...projectForm, title: e.target.value })}
                    className="w-full rounded-xl bg-[#1c1d22] border border-[#2a2c35] px-3 py-2 text-xs text-neutral-200 placeholder:text-neutral-500 focus:outline-none focus:border-neutral-400"
                  />
                </div>

                <div>
                  <label className="block text-[11px] text-neutral-400 mb-1">
                    Image URL <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="https://images.unsplash.com/..."
                    value={projectForm.image}
                    onChange={(e) => setProjectForm({ ...projectForm, image: e.target.value })}
                    className="w-full rounded-xl bg-[#1c1d22] border border-[#2a2c35] px-3 py-2 text-xs text-neutral-200 placeholder:text-neutral-500 focus:outline-none focus:border-neutral-400"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] text-neutral-400 mb-1">Category</label>
                    <input
                      type="text"
                      placeholder="Enterprise SaaS"
                      value={projectForm.category}
                      onChange={(e) => setProjectForm({ ...projectForm, category: e.target.value })}
                      className="w-full rounded-xl bg-[#1c1d22] border border-[#2a2c35] px-3 py-2 text-xs text-neutral-200 placeholder:text-neutral-500 focus:outline-none focus:border-neutral-400"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] text-neutral-400 mb-1">Project Link</label>
                    <input
                      type="text"
                      placeholder="https://..."
                      value={projectForm.href}
                      onChange={(e) => setProjectForm({ ...projectForm, href: e.target.value })}
                      className="w-full rounded-xl bg-[#1c1d22] border border-[#2a2c35] px-3 py-2 text-xs text-neutral-200 placeholder:text-neutral-500 focus:outline-none focus:border-neutral-400"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] text-neutral-400 mb-1">Description</label>
                  <textarea
                    rows={2}
                    placeholder="Brief overview of the product engineering and metrics..."
                    value={projectForm.description}
                    onChange={(e) => setProjectForm({ ...projectForm, description: e.target.value })}
                    className="w-full rounded-xl bg-[#1c1d22] border border-[#2a2c35] px-3 py-2 text-xs text-neutral-200 placeholder:text-neutral-500 focus:outline-none focus:border-neutral-400"
                  />
                </div>

                <div className="mt-5 pt-3 border-t border-[#22242a] flex items-center justify-end gap-2">
                  <button
                    type="button"
                    onClick={() => setIsProjectModalOpen(false)}
                    className="px-3 py-1.5 text-xs text-neutral-400 hover:text-neutral-200"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmittingProject}
                    className="inline-flex items-center gap-1.5 rounded-lg bg-neutral-200 text-neutral-900 text-xs font-semibold px-4 py-1.5 hover:bg-white transition disabled:opacity-50"
                  >
                    {isSubmittingProject ? <Loader2 className="size-3 animate-spin" /> : 'Save Project'}
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  )
}
