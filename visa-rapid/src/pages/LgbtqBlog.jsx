import React from 'react'
import { Link } from 'react-router-dom'

const LuxembourgBlog = () => {
  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Back to Blogs */}
        <div className="mb-8">
          <Link
            to="/blogs"
            className="inline-flex items-center hover:text-gray-900 transition-colors"
            style={{color: 'gray'}}
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
            </svg>
            Back to Articles
          </Link>
        </div>

        {/* Article Header */}
        <header className="mb-8">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-900 mb-6 leading-tight">
          LGBTQ+ Americans choose Portugal's Golden Visa.
          </h1>
          <div className="flex items-center text-gray-500 text-sm">
            <span>Published on September 12, 2025</span>
            <span className="mx-2">•</span>
            <span>6 min read</span>
          </div>
        </header>

        {/* Featured Image */}
        <div className="mb-8">
          <img
            src="/Blog3.webp"
            alt="Luxembourg Golden Visa termination"
            className="w-full h-64 sm:h-80 lg:h-96 object-cover rounded-2xl shadow-lg"
          />
        </div>

        {/* Article Content */}
        <article className="prose prose-lg max-w-none">
          <div className="text-gray-700 leading-relaxed space-y-6">
            <p className="text-xl text-gray-600 mb-8 font-medium">
            For a growing number of the LGBTQ+ community in the United States, Portugal’s progressive and welcoming social climate has proved a major draw amid political and social upheaval in their homeland.
            </p>

            <p className='mt-10'>
            Portugal is consistently ranked as one of the most LGBT+-friendly nations in the world. Its constitution explicitly bans discrimination based on sexual orientation, a legal protection that is foundational and comprehensive.
            <br />
            <br />

According to Rainbow Map, which ranks European countries on their safety and suitability for the LGBTQ+ community, Portugal is more welcoming than the likes of the UK, France, the Netherlands, and Italy.
            </p>

            <h2 className="text-4xl font-semibold text-gray-900 mt-10 mb-4">
            Portugal is ranked as one of the most LGBTQ+ friendly countries in the world
            </h2>

            <p>
            Portugal was also named the seventh safest country in the world in the 2025 Global Peace Index. <br />
            <br />
            Paul Stannard, Chairman and Founder of Portugal Pathways and the Portugal Investment Owners Club, said: “We’ve worked with countless LGBTQ+ clients from across the world, including the US, and what we hear time and time again is just how safe and assured they feel in Portugal.
            <br />
            <br />

            “The difference can be stark, especially for those coming from less progressive states or countries.
            <br />
            <br />
            “It’s no surprise, either, Portugal has a strong history of advancing LGBTQ+ rights, having legalised same-sex marriage in 2010 and granting adoption rights to same-sex couples in 2016.
            <br /><br />
            “In addition, robust anti-discrimination laws protect against prejudice in employment, housing, and public services.”
            <br /><br />
            </p>



            <h2 className="text-4xl font-semibold text-gray-900 mb-4">
            Portugal's Golden Visa has seen record levels of interest in 2025
            </h2>

            <p>
            Beyond social security, the Portugal Golden Visa offers a highly practical and strategic framework for those looking for a European foothold. It's a residency-by-investment programme that provides a route to residency and, after five years, citizenship.<br />
            <br />

            The key benefit is the minimal residency requirement: just an average of seven days per year must be spent in Portugal. This allows investors to maintain their primary home and business interests in the US while gaining a crucial European option.<br />
<br />


The investment options are varied, but the most common are investments in Golden Visa-eligible Portuguese alternative investment funds, which have a minimum investment of €500,000. This shift towards fund investment follows recent changes to the programme. It removed the real estate purchase option at the end of 2023.
</p>
          </div>
        </article>

        {/* Call to Action */}
        <div className="mt-12 bg-gray-50 rounded-2xl p-8">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">
            Interested in Portugal's Investment Visa Options?
          </h3>
          <p className="text-gray-600 mb-6">
            Our experts can help you navigate Portugal's investment visa programmes and find the right option for your needs.
          </p>
          <a
            href="https://calendly.com/nikita-visarapid/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 rounded-lg font-medium transition-colors"
            style={{ backgroundColor: '#ef4444', color: 'white', textDecoration: 'none' }}
          >
            Schedule a Consultation
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>

        {/* Related Articles */}
        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-gray-900 mb-8">Related Articles</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
              <img
                src="/Blog2.webp"
                alt="Portugal Passport Power"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <span className="inline-block px-3 py-1 bg-blue-100 text-gray-600 text-sm rounded-full mb-3">
                  Visa & Finance
                </span>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  Portugal now outranks UK and US in passport power
                </h4>
                <a
                href="/blogs/Portugal-passport-power"
                className="inline-flex items-center text-black font-medium hover:text-gray-700 transition-colors mt-4"
                style={{color: 'gray'}}
              >
                Read more
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
              <img
                src="/Blog.webp"
                alt="LGBTQ+ Golden Visa"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <span className="inline-block px-3 py-1 bg-blue-100 text-gray-600 text-sm rounded-full mb-3">
                  Visa & Finance
                </span>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                Luxembourg to scrap Golden Visa as Portugal stands strong
                </h4>
                <a
                href="/blogs/luxembourg-golden-visa"
                className="inline-flex items-center text-black font-medium hover:text-gray-700 transition-colors mt-4"
                style={{color: 'gray'}}
              >
                Read more
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LuxembourgBlog