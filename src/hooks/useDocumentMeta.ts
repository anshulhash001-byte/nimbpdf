import { useEffect } from 'react';

interface MetaTags {
  title: string;
  description: string;
  keywords?: string;
  openGraph?: {
    title: string;
    description: string;
  };
}

export function useDocumentMeta({ title, description, keywords, openGraph }: MetaTags) {
  useEffect(() => {
    // Store original values
    const originalTitle = document.title;
    const originalDescription = document.querySelector('meta[name="description"]')?.getAttribute('content') || '';
    const originalKeywords = document.querySelector('meta[name="keywords"]')?.getAttribute('content') || '';
    const originalOgTitle = document.querySelector('meta[property="og:title"]')?.getAttribute('content') || '';
    const originalOgDescription = document.querySelector('meta[property="og:description"]')?.getAttribute('content') || '';

    // Update document title
    document.title = title;

    // Update or create meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', description);

    // Update or create meta keywords
    if (keywords) {
      let metaKeywords = document.querySelector('meta[name="keywords"]');
      if (!metaKeywords) {
        metaKeywords = document.createElement('meta');
        metaKeywords.setAttribute('name', 'keywords');
        document.head.appendChild(metaKeywords);
      }
      metaKeywords.setAttribute('content', keywords);
    }

    // Update or create OpenGraph tags
    if (openGraph) {
      let ogTitle = document.querySelector('meta[property="og:title"]');
      if (!ogTitle) {
        ogTitle = document.createElement('meta');
        ogTitle.setAttribute('property', 'og:title');
        document.head.appendChild(ogTitle);
      }
      ogTitle.setAttribute('content', openGraph.title);

      let ogDescription = document.querySelector('meta[property="og:description"]');
      if (!ogDescription) {
        ogDescription = document.createElement('meta');
        ogDescription.setAttribute('property', 'og:description');
        document.head.appendChild(ogDescription);
      }
      ogDescription.setAttribute('content', openGraph.description);
    }

    // Cleanup: restore original values on unmount
    return () => {
      document.title = originalTitle;
      
      const descMeta = document.querySelector('meta[name="description"]');
      if (descMeta) {
        descMeta.setAttribute('content', originalDescription);
      }

      if (keywords) {
        const keywordsMeta = document.querySelector('meta[name="keywords"]');
        if (keywordsMeta) {
          keywordsMeta.setAttribute('content', originalKeywords);
        }
      }

      if (openGraph) {
        const ogTitleMeta = document.querySelector('meta[property="og:title"]');
        if (ogTitleMeta) {
          ogTitleMeta.setAttribute('content', originalOgTitle);
        }

        const ogDescMeta = document.querySelector('meta[property="og:description"]');
        if (ogDescMeta) {
          ogDescMeta.setAttribute('content', originalOgDescription);
        }
      }
    };
  }, [title, description, keywords, openGraph]);
}
