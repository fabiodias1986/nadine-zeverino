'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import PageHeader from '@/components/layout/PageHeader';

export default function CookiesPage() {
  const t = useTranslations('Cookies');

  const cookieTypes = [
    {
      title: t('types.essential.title'),
      description: t('types.essential.description'),
      purpose: t('types.essential.purpose'),
      examples: [
        t('types.essential.examples.session'),
        t('types.essential.examples.security'),
        t('types.essential.examples.preferences')
      ]
    },
    {
      title: t('types.performance.title'),
      description: t('types.performance.description'),
      purpose: t('types.performance.purpose'),
      examples: [
        t('types.performance.examples.analytics'),
        t('types.performance.examples.load'),
        t('types.performance.examples.traffic')
      ]
    },
    {
      title: t('types.functionality.title'),
      description: t('types.functionality.description'),
      purpose: t('types.functionality.purpose'),
      examples: [
        t('types.functionality.examples.video'),
        t('types.functionality.examples.social'),
        t('types.functionality.examples.chat')
      ]
    },
    {
      title: t('types.advertising.title'),
      description: t('types.advertising.description'),
      purpose: t('types.advertising.purpose'),
      examples: [
        t('types.advertising.examples.personalized'),
        t('types.advertising.examples.interest'),
        t('types.advertising.examples.frequency')
      ]
    }
  ];

  const manageOptions = [
    {
      title: t('manage.browser.title'),
      description: t('manage.browser.description'),
      steps: [
        t('manage.browser.steps.settings'),
        t('manage.browser.steps.cookies'),
        t('manage.browser.steps.preferences'),
        t('manage.browser.steps.save')
      ]
    },
    {
      title: t('manage.consent.title'),
      description: t('manage.consent.description'),
      steps: [
        t('manage.consent.steps.banner'),
        t('manage.consent.steps.preferences'),
        t('manage.consent.steps.selection'),
        t('manage.consent.steps.confirm')
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Page Header */}
      <PageHeader 
        title={t('pageTitle')}
        subtitle={t('pageSubtitle')}
      />

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden"
        >
          {/* Header Section */}
          <div className="bg-gradient-to-r from-[#E83241] to-[#B83232] p-8 text-white">
            <div className="max-w-3xl mx-auto text-center">
              <motion.h1 
                className="text-3xl md:text-4xl font-black mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                {t('header.title')}
              </motion.h1>
              <motion.p 
                className="text-lg md:text-xl opacity-90"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                {t('header.lastUpdated')}
              </motion.p>
            </div>
          </div>

          {/* Content Sections */}
          <div className="p-6 md:p-8 space-y-12">
            {/* Introduction */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                {t('introduction.title')}
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                {t('introduction.content1')}
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                {t('introduction.content2')}
              </p>
            </motion.section>

            {/* What Are Cookies */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="border-l-4 border-[#E83241] pl-6"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                {t('whatAreCookies.title')}
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                {t('whatAreCookies.content')}
              </p>
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {t('whatAreCookies.howTheyWork.title')}
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#E83241] rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">{t('whatAreCookies.howTheyWork.storage')}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#E83241] rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">{t('whatAreCookies.howTheyWork.retrieval')}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#E83241] rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">{t('whatAreCookies.howTheyWork.session')}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#E83241] rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">{t('whatAreCookies.howTheyWork.persistence')}</span>
                  </li>
                </ul>
              </div>
            </motion.section>

            {/* Types of Cookies */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                {t('types.title')}
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {cookieTypes.map((type, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-[#E83241] hover:shadow-lg transition-all duration-300"
                  >
                    <h3 className="text-xl font-bold text-[#E83241] mb-3">
                      {type.title}
                    </h3>
                    <p className="text-gray-700 mb-4">
                      {type.description}
                    </p>
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 mb-2">
                        {type.purpose}
                      </h4>
                      <ul className="space-y-2">
                        {type.examples.map((example, exampleIndex) => (
                          <li key={exampleIndex} className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-gray-600 text-sm">{example}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            {/* How We Use Cookies */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-gradient-to-br from-[#E83241]/5 to-[#B83232]/5 rounded-xl p-6 border border-[#E83241]/20"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                {t('howWeUse.title')}
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                {t('howWeUse.content')}
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  t('howWeUse.purposes.functionality'),
                  t('howWeUse.purposes.performance'),
                  t('howWeUse.purposes.security'),
                  t('howWeUse.purposes.analytics'),
                  t('howWeUse.purposes.personalization'),
                  t('howWeUse.purposes.advertising')
                ].map((purpose, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                    className="bg-white rounded-lg p-4 text-center border border-gray-200"
                  >
                    <div className="w-3 h-3 bg-[#E83241] rounded-full mx-auto mb-2"></div>
                    <span className="text-sm text-gray-700">{purpose}</span>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            {/* Managing Cookies */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                {t('manage.title')}
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {manageOptions.map((option, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                    className="bg-gray-50 rounded-xl p-6 border border-gray-200"
                  >
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {option.title}
                    </h3>
                    <p className="text-gray-700 mb-4">
                      {option.description}
                    </p>
                    <ol className="space-y-3">
                      {option.steps.map((step, stepIndex) => (
                        <li key={stepIndex} className="flex items-start gap-3">
                          <div className="w-6 h-6 bg-[#E83241] text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">
                            {stepIndex + 1}
                          </div>
                          <span className="text-gray-700">{step}</span>
                        </li>
                      ))}
                    </ol>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            {/* Your Rights */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="text-center py-8"
            >
              <div className="bg-white rounded-xl p-8 border-2 border-dashed border-[#E83241]">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  {t('rights.title')}
                </h2>
                <p className="text-gray-700 text-lg mb-6 max-w-2xl mx-auto">
                  {t('rights.content')}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="mailto:niz@nadinezeverino.com"
                    className="px-6 py-3 bg-[#E83241] text-white font-semibold rounded-lg hover:bg-[#E83241]/90 transition-colors duration-300"
                  >
                    {t('rights.email')}
                  </a>
                  <a
                    href="/contact"
                    className="px-6 py-3 border-2 border-[#E83241] text-[#E83241] font-semibold rounded-lg hover:bg-[#E83241] hover:text-white transition-colors duration-300"
                  >
                    {t('rights.form')}
                  </a>
                </div>
              </div>
            </motion.section>
          </div>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-8 text-gray-500"
        >
          <p>{t('lastUpdated')}</p>
        </motion.div>
      </div>
    </div>
  );
}