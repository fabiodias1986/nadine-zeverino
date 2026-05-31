'use client'

import Script from 'next/script'

export default function GoogleTag() {
  const targetId = 'AW-18188234054';
  
  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${targetId}`}
      />
      <Script
        id="google-tag"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${targetId}');
          `,
        }}
      />
    </>
  )
}
