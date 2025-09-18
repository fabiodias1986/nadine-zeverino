'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import PageHeader from '@/components/layout/PageHeader';

export default function PrivacyPage() {
  const t = useTranslations('Privacy');

  const sections = [
    {
      title: t('sections.informationCollection.title'),
      content: t('sections.informationCollection.content'),
      subsections: [
        {
          subtitle: t('sections.informationCollection.subsections.personalData.title'),
          points: [
            t('sections.informationCollection.subsections.personalData.points.identification'),
            t('sections.informationCollection.subsections.personalData.points.contact'),
            t('sections.informationCollection.subsections.personalData.points.professional'),
            t('sections.informationCollection.subsections.personalData.points.communications')
          ]
        },
        {
          subtitle: t('sections.informationCollection.subsections.usageData.title'),
          points: [
            t('sections.informationCollection.subsections.usageData.points.device'),
            t('sections.informationCollection.subsections.usageData.points.browsing'),
            t('sections.informationCollection.subsections.usageData.points.interactions')
          ]
        }
      ]
    },
    {
      title: t('sections.howWeUse.title'),
      content: t('sections.howWeUse.content'),
      subsections: [
        {
          subtitle: t('sections.howWeUse.subsections.provision.title'),
          points: [
            t('sections.howWeUse.subsections.provision.points.services'),
            t('sections.howWeUse.subsections.provision.points.support'),
            t('sections.howWeUse.subsections.provision.points.communication')
          ]
        },
        {
          subtitle: t('sections.howWeUse.subsections.improvement.title'),
          points: [
            t('sections.howWeUse.subsections.improvement.points.analysis'),
            t('sections.howWeUse.subsections.improvement.points.personalization'),
            t('sections.howWeUse.subsections.improvement.points.optimization')
          ]
        }
      ]
    },
    {
      title: t('sections.dataProtection.title'),
      content: t('sections.dataProtection.content'),
      subsections: [
        {
          subtitle: t('sections.dataProtection.subsections.security.title'),
          points: [
            t('sections.dataProtection.subsections.security.points.encryption'),
            t('sections.dataProtection.subsections.security.points.accessControl'),
            t('sections.dataProtection.subsections.security.points.regularAudits')
          ]
        },
        {
          subtitle: t('sections.dataProtection.subsections.retention.title'),
          points: [
            t('sections.dataProtection.subsections.retention.points.duration'),
            t('sections.dataProtection.subsections.retention.points.deletion'),
            t('sections.dataProtection.subsections.retention.points.requirements')
          ]
        }
      ]
    },
    {
      title: t('sections.sharing.title'),
      content: t('sections.sharing.content'),
      subsections: [
        {
          subtitle: t('sections.sharing.subsections.thirdParties.title'),
          points: [
            t('sections.sharing.subsections.thirdParties.points.serviceProviders'),
            t('sections.sharing.subsections.thirdParties.points.legalRequirements'),
            t('sections.sharing.subsections.thirdParties.points.businessTransfers')
          ]
        },
        {
          subtitle: t('sections.sharing.subsections.prohibited.title'),
          points: [
            t('sections.sharing.subsections.prohibited.points.selling'),
            t('sections.sharing.subsections.prohibited.points.marketing'),
            t('sections.sharing.subsections.prohibited.points.unauthorized')
          ]
        }
      ]
    },
    {
      title: t('sections.yourRights.title'),
      content: t('sections.yourRights.content'),
      subsections: [
        {
          subtitle: t('sections.yourRights.subsections.access.title'),
          points: [
            t('sections.yourRights.subsections.access.points.information'),
            t('sections.yourRights.subsections.access.points.correction'),
            t('sections.yourRights.subsections.access.points.deletion')
          ]
        },
        {
          subtitle: t('sections.yourRights.subsections.contact.title'),
          points: [
            t('sections.yourRights.subsections.contact.points.email'),
            t('sections.yourRights.subsections.contact.points.responseTime'),
            t('sections.yourRights.subsections.contact.points.assistance')
          ]
        }
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
                {t('header.effectiveDate')}
              </motion.p>
            </div>
          </div>

          {/* Content Sections */}
          <div className="p-6 md:p-8 space-y-12">
            {sections.map((section, sectionIndex) => (
              <motion.section
                key={sectionIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * sectionIndex }}
                className="border-b border-gray-200 pb-10 last:border-b-0"
              >
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  {section.title}
                </h2>
                
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  {section.content}
                </p>

                <div className="space-y-8">
                  {section.subsections.map((subsection, subsectionIndex) => (
                    <div key={subsectionIndex} className="pl-4 border-l-2 border-[#E83241]/20">
                      <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">
                        {subsection.subtitle}
                      </h3>
                      
                      <ul className="space-y-3">
                        {subsection.points.map((point, pointIndex) => (
                          <motion.li
                            key={pointIndex}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.4, delay: 0.05 * pointIndex }}
                            className="flex items-start gap-3"
                          >
                            <div className="w-2 h-2 bg-[#E83241] rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-gray-700 leading-relaxed">{point}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </motion.section>
            ))}

            {/* Final Section */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-center py-8"
            >
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  {t('contact.title')}
                </h2>
                <p className="text-gray-700 mb-4">
                  {t('contact.content')}
                </p>
                <div className="inline-flex flex-col sm:flex-row gap-4">
                  <a
                    href="mailto:privacy@nadinezeverino.com"
                    className="px-6 py-3 bg-[#E83241] text-white font-semibold rounded-lg hover:bg-[#E83241]/90 transition-colors duration-300"
                  >
                    {t('contact.email')}
                  </a>
                  <a
                    href="/contact"
                    className="px-6 py-3 border-2 border-[#E83241] text-[#E83241] font-semibold rounded-lg hover:bg-[#E83241] hover:text-white transition-colors duration-300"
                  >
                    {t('contact.form')}
                  </a>
                </div>
              </div>
            </motion.section>
          </div>
        </motion.div>

        {/* Last Updated Footer */}
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