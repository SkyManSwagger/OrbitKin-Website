"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Sparkles, Moon, Sun, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme } from "next-themes"

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { theme, setTheme } = useTheme()
  const pathname = usePathname()

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { href: "/#how-it-works", label: "How It Works" },
    { href: "/docs", label: "Documentation" },
    { href: "/changelog", label: "Changelog" },
  ]

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled 
        ? "bg-background/95 dark:bg-background/80 backdrop-blur-xl border-b border-white/10 shadow-lg" 
        : "bg-background/60 dark:bg-background/40 backdrop-blur-md"
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <motion.div
              initial={{ rotate: 0 }}
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="w-8 h-8 relative"
            >
              <span className="text-2xl group-hover:scale-110 transition-transform">🪐</span>
            </motion.div>
            <span className="font-bold text-xl bg-gradient-to-r from-orbitkin-purple to-orbitkin-gold bg-clip-text text-transparent">
              OrbitKin
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="relative group py-5"
              >
                <span className={`transition-colors duration-200 ${
                  pathname === item.href 
                    ? "text-foreground font-medium" 
                    : "text-muted-foreground hover:text-foreground"
                }`}>
                  {item.label}
                </span>
                {pathname === item.href && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-orbitkin-purple to-orbitkin-gold"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                {pathname !== item.href && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-orbitkin-purple to-orbitkin-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                )}
              </Link>
            ))}

            {/* Theme Toggle */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="relative group overflow-hidden"
              >
                <div className="absolute inset-0 rounded-md bg-gradient-to-r from-orbitkin-purple/20 to-orbitkin-gold/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                {mounted && (
                  <motion.div
                    initial={false}
                    animate={{ 
                      rotate: theme === "dark" ? 0 : 180,
                    }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="relative w-5 h-5"
                  >
                    <AnimatePresence mode="wait">
                      {theme === "dark" ? (
                        <motion.div
                          key="moon"
                          initial={{ scale: 0, rotate: -180 }}
                          animate={{ scale: 1, rotate: 0 }}
                          exit={{ scale: 0, rotate: 180 }}
                          transition={{ duration: 0.3 }}
                          className="absolute inset-0"
                        >
                          <Moon className="h-5 w-5" />
                        </motion.div>
                      ) : (
                        <motion.div
                          key="sun"
                          initial={{ scale: 0, rotate: 180 }}
                          animate={{ scale: 1, rotate: 0 }}
                          exit={{ scale: 0, rotate: -180 }}
                          transition={{ duration: 0.3 }}
                          className="absolute inset-0"
                        >
                          <Sun className="h-5 w-5" />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                )}
                <span className="sr-only">Toggle theme</span>
              </Button>
            </motion.div>
            
            {/* CTA Button */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button className="relative overflow-hidden group bg-gradient-to-r from-orbitkin-purple to-orbitkin-gold hover:from-orbitkin-purple/90 hover:to-orbitkin-gold/90 border-0 shadow-lg">
                <span className="relative z-10 flex items-center font-medium">
                  Join Beta
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
                <motion.span 
                  className="absolute inset-0 bg-white/20"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.5 }}
                />
              </Button>
            </motion.div>
          </div>

          {/* Mobile Menu Button and Theme Toggle */}
          <div className="flex items-center space-x-2 md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="relative group overflow-hidden"
            >
              <div className="absolute inset-0 rounded-md bg-gradient-to-r from-orbitkin-purple/20 to-orbitkin-gold/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              {mounted && (
                <motion.div
                  initial={false}
                  animate={{ 
                    rotate: theme === "dark" ? 0 : 180,
                  }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="relative w-5 h-5"
                >
                  <AnimatePresence mode="wait">
                    {theme === "dark" ? (
                      <motion.div
                        key="moon"
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        exit={{ scale: 0, rotate: 180 }}
                        transition={{ duration: 0.3 }}
                        className="absolute inset-0"
                      >
                        <Moon className="h-5 w-5" />
                      </motion.div>
                    ) : (
                      <motion.div
                        key="sun"
                        initial={{ scale: 0, rotate: 180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        exit={{ scale: 0, rotate: -180 }}
                        transition={{ duration: 0.3 }}
                        className="absolute inset-0"
                      >
                        <Sun className="h-5 w-5" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              )}
              <span className="sr-only">Toggle theme</span>
            </Button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2"
            >
              <motion.div
                animate={{ rotate: isOpen ? 90 : 0 }}
                transition={{ duration: 0.2 }}
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </motion.div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden"
            >
              <div className="py-4 border-t border-white/10">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={item.href}
                      className={`block py-3 px-4 rounded-lg transition-colors ${
                        pathname === item.href
                          ? "text-foreground font-medium bg-white/5"
                          : "text-muted-foreground hover:text-foreground hover:bg-white/5"
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navItems.length * 0.1 }}
                  className="mt-4"
                >
                  <Button className="w-full bg-gradient-to-r from-orbitkin-purple to-orbitkin-gold hover:from-orbitkin-purple/90 hover:to-orbitkin-gold/90 border-0">
                    <Sparkles className="w-4 h-4 mr-2" />
                    Join Beta
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  )
}

export default Navigation