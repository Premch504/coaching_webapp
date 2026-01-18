import { ArrowRight, BookOpen, Brain, Eye, Heart, Sparkles, Target, Users } from "lucide-react"
import Link from "next/link"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full border-b border-border bg-background/80 backdrop-blur-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Eye className="h-8 w-8 text-accent" />
              <span className="text-xl font-bold">Awaken Coaching</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="#about" className="text-foreground/80 hover:text-foreground transition-colors">About</Link>
              <Link href="#services" className="text-foreground/80 hover:text-foreground transition-colors">Services</Link>
              <Link href="#testimonials" className="text-foreground/80 hover:text-foreground transition-colors">Testimonials</Link>
              <Link href="#contact" className="bg-accent text-accent-foreground px-4 py-2 rounded-lg hover:opacity-90 transition-opacity">Get Started</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center space-x-2 bg-secondary px-4 py-2 rounded-full mb-6">
              <Sparkles className="h-4 w-4 text-accent" />
              <span className="text-sm font-medium">Break Free from the Matrix</span>
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
              Awaken Your True{" "}
              <span className="text-accent">Potential</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Escape the invisible conditioning that limits your life. Discover clarity, purpose, and authentic freedom through transformative coaching.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="#contact" className="inline-flex items-center justify-center bg-accent text-accent-foreground px-8 py-4 rounded-lg font-semibold hover:opacity-90 transition-opacity">
                Start Your Journey
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link href="#about" className="inline-flex items-center justify-center border border-border bg-card px-8 py-4 rounded-lg font-semibold hover:bg-secondary transition-colors">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">What is "The Matrix"?</h2>
              <p className="text-lg text-muted-foreground mb-4">
                The Matrix isn't just a movie metaphor. It's the web of societal conditioning, limiting beliefs, and unconscious patterns that keep you living someone else's life.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                Through coaching, we help you identify and dismantle these invisible barriers so you can live with authentic purpose and freedom.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Brain className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">Mental Clarity</h3>
                    <p className="text-muted-foreground">See through conditioning and think independently</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Heart className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">Emotional Freedom</h3>
                    <p className="text-muted-foreground">Release fear and anxiety that keep you small</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Target className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">Purposeful Action</h3>
                    <p className="text-muted-foreground">Align your life with your true values</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-card rounded-2xl p-8 border border-border">
              <h3 className="text-2xl font-bold mb-6">The Awakening Process</h3>
              <div className="space-y-6">
                <div className="border-l-4 border-accent pl-4">
                  <h4 className="font-semibold mb-1">1. Awareness</h4>
                  <p className="text-muted-foreground text-sm">Recognize the patterns and beliefs that limit you</p>
                </div>
                <div className="border-l-4 border-accent pl-4">
                  <h4 className="font-semibold mb-1">2. Deconditioning</h4>
                  <p className="text-muted-foreground text-sm">Release societal programming and inherited limitations</p>
                </div>
                <div className="border-l-4 border-accent pl-4">
                  <h4 className="font-semibold mb-1">3. Rediscovery</h4>
                  <p className="text-muted-foreground text-sm">Connect with your authentic self and true desires</p>
                </div>
                <div className="border-l-4 border-accent pl-4">
                  <h4 className="font-semibold mb-1">4. Transformation</h4>
                  <p className="text-muted-foreground text-sm">Build a life aligned with your deepest truths</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Transformative Services</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Choose your path to freedom and self-discovery
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card rounded-xl p-8 border border-border hover:border-accent/50 transition-colors">
              <div className="bg-secondary w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                <BookOpen className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-xl font-bold mb-3">1:1 Coaching</h3>
              <p className="text-muted-foreground mb-6">
                Personalized coaching sessions tailored to your unique journey and challenges.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center text-muted-foreground">
                  <span className="text-accent mr-2">✓</span> Weekly sessions
                </li>
                <li className="flex items-center text-muted-foreground">
                  <span className="text-accent mr-2">✓</span> Custom action plans
                </li>
                <li className="flex items-center text-muted-foreground">
                  <span className="text-accent mr-2">✓</span> Unlimited messaging support
                </li>
              </ul>
            </div>
            <div className="bg-card rounded-xl p-8 border border-border hover:border-accent/50 transition-colors">
              <div className="bg-secondary w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                <Users className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-xl font-bold mb-3">Group Programs</h3>
              <p className="text-muted-foreground mb-6">
                Transform alongside others on the same path. Learn, grow, and break free together.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center text-muted-foreground">
                  <span className="text-accent mr-2">✓</span> Small group cohorts
                </li>
                <li className="flex items-center text-muted-foreground">
                  <span className="text-accent mr-2">✓</span> Peer support network
                </li>
                <li className="flex items-center text-muted-foreground">
                  <span className="text-accent mr-2">✓</span> Structured curriculum
                </li>
              </ul>
            </div>
            <div className="bg-card rounded-xl p-8 border border-border hover:border-accent/50 transition-colors">
              <div className="bg-secondary w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                <Sparkles className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-xl font-bold mb-3">Intensive Retreats</h3>
              <p className="text-muted-foreground mb-6">
                Immersive experiences designed for rapid transformation and deep breakthrough.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center text-muted-foreground">
                  <span className="text-accent mr-2">✓</span> Multi-day immersive
                </li>
                <li className="flex items-center text-muted-foreground">
                  <span className="text-accent mr-2">✓</span> Nature-based settings
                </li>
                <li className="flex items-center text-muted-foreground">
                  <span className="text-accent mr-2">✓</span> Lifetime integration support
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Stories of Transformation</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Real people who broke free and found their authentic path
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card rounded-xl p-8 border border-border">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                  <span className="text-accent font-bold">SM</span>
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold">Sarah M.</h4>
                  <p className="text-sm text-muted-foreground">Entrepreneur</p>
                </div>
              </div>
              <p className="text-muted-foreground">
                "I spent years chasing success only to feel empty inside. This coaching helped me see the Matrix I was trapped in and build a life that actually fulfills me."
              </p>
            </div>
            <div className="bg-card rounded-xl p-8 border border-border">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                  <span className="text-accent font-bold">JD</span>
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold">James D.</h4>
                  <p className="text-sm text-muted-foreground">Software Engineer</p>
                </div>
              </div>
              <p className="text-muted-foreground">
                "The awareness work was life-changing. I finally understand why I made the choices I did, and now I have the tools to create my own path."
              </p>
            </div>
            <div className="bg-card rounded-xl p-8 border border-border">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                  <span className="text-accent font-bold">RL</span>
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold">Rachel L.</h4>
                  <p className="text-sm text-muted-foreground">Healthcare Professional</p>
                </div>
              </div>
              <p className="text-muted-foreground">
                "I was trapped by others' expectations of what I 'should' do. Now I wake up excited every day, living on my own terms. This work is transformative."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact/CTA Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-card rounded-2xl p-8 md:p-12 border border-border text-center">
            <h2 className="text-4xl font-bold mb-4">Ready to Break Free?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Take the first step towards awakening. Schedule a free discovery call to explore if this coaching is right for you.
            </p>
            <form className="max-w-md mx-auto space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 rounded-lg border border-border bg-secondary focus:outline-none focus:ring-2 focus:ring-accent"
                required
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 rounded-lg border border-border bg-secondary focus:outline-none focus:ring-2 focus:ring-accent"
                required
              />
              <textarea
                placeholder="What brings you to coaching?"
                rows={4}
                className="w-full px-4 py-3 rounded-lg border border-border bg-secondary focus:outline-none focus:ring-2 focus:ring-accent resize-none"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-accent text-accent-foreground px-8 py-4 rounded-lg font-semibold hover:opacity-90 transition-opacity"
              >
                Schedule Free Discovery Call
              </button>
            </form>
            <p className="text-sm text-muted-foreground mt-6">
              No commitment required. Let's explore if we're a good fit.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12 px-4 sm:px-6 lg:px-8 bg-secondary">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Eye className="h-6 w-6 text-accent" />
              <span className="text-lg font-bold">Awaken Coaching</span>
            </div>
            <div className="flex space-x-6 text-sm text-muted-foreground">
              <Link href="#about" className="hover:text-foreground transition-colors">About</Link>
              <Link href="#services" className="hover:text-foreground transition-colors">Services</Link>
              <Link href="#contact" className="hover:text-foreground transition-colors">Contact</Link>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
            <p>&copy; 2026 Awaken Coaching. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
