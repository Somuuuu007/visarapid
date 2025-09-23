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
          Portugal now outranks UK and US in passport power and appeal.
          </h1>
          <div className="flex items-center text-gray-500 text-sm">
            <span>Published on September 19, 2025</span>
            <span className="mx-2">•</span>
            <span>4 min read</span>
          </div>
        </header>

        {/* Featured Image */}
        <div className="mb-8">
          <img
            src="/Blog2.webp"
            alt="Luxembourg Golden Visa termination"
            className="w-full h-64 sm:h-80 lg:h-96 object-cover rounded-2xl shadow-lg"
          />
        </div>

        {/* Article Content */}
        <article className="prose prose-lg max-w-none">
          <div className="text-gray-700 leading-relaxed space-y-6">
            <p className="text-xl text-gray-600 mb-8 font-medium">
            The Portuguese passport has surged in global demand, now ranked the fourth most powerful and appealing in the world, according to the newly released Global Passport Power and Appeal Index 2025.
            </p>

            <h2 className="text-4xl font-semibold text-gray-900 mt-10 mb-4">
            Global Passport Power and Appeal Index 2025
            </h2>

            <p>
            The index, compiled by the World Digital Foundation and published in September 2025, evaluates passports across a wide set of criteria designed for HNWIs, investors, and globally mobile professionals.
<br />
<br />
“Instead of only focusing on visa-free travel, this index was compiled and scored based on broader considerations that affect wealth strategy and lifestyle optimisation,” explains the World Digital Foundation’s Danielle Moxey.
<br />
<br />
“This included global mobility, international banking and investment ease, tax exposure, healthcare and political stability, lifestyle appeal, and HNWI investment opportunities.”
<br />
<br />
Portugal placed fourth overall, higher than any other EU nation.
 </p>



            <h2 className="text-4xl font-semibold text-gray-900 mt-8 mb-4">
            Why Portugal is climbing the ranks
            </h2>

            <p>
            Portugal is increasingly viewed as one of Europe’s most appealing destinations for investors, wealthy families, and professionals seeking mobility.<br />
            <br />

            Its passport offers visa-free travel to more than 190 countries and the right to live, work, and invest anywhere in the European Union.<br />
<br />


The country’s IFICI tax framework (known as NHR 2.0) further boosts its attraction, offering 0% tax on most foreign-sourced income (excluding pensions and income from blacklisted jurisdictions) and a flat 20% rate on Portuguese employment or self-employment income for ten years. Portugal also imposes no wealth or inheritance tax, providing additional scope for wealth planning.<br />
<br />
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
                src="/Blog.webp"
                alt="Portugal Passport Power"
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

            <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
              <img
                src="/Blog3.webp"
                alt="LGBTQ+ Golden Visa"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <span className="inline-block px-3 py-1 bg-blue-100 text-gray-600 text-sm rounded-full mb-3">
                  Culture & Heritage
                </span>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  LGBTQ+ Americans choose Portugal's Golden Visa
                </h4>
                <a
                href="/blogs/Lgbtq-golden-visa"
                className="inline-flex items-center text-black font-medium hover:text-gray-700 transition-colors mt-11"
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