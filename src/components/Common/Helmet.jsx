import React from 'react';
import { Helmet } from 'react-helmet';

const HeadComponent = ({ title, description, type }) => {
  console.log(title, description, type);
  return (
    <Helmet>
      {/* <!-- Primary Meta Tags --> */}
      <title>{title}</title>
      <meta name='title' content={title} />
      <meta name='description' content={description} />

      {/* <!-- Open Graph / Facebook --> */}
      <meta property='og:type' content='website' />
      <meta property='og:url' content='https://metatags.io' />
      <meta property='og:title' content={title} />
      <meta property='og:description' content={description} />
      <meta
        property='og:image'
        content='https://metatags.io/images/meta-tags.png'
      />

      {/* <!-- Twitter --> */}
      <meta property='twitter:card' content='summary_large_image' />
      <meta property='twitter:url' content='https://metatags.io' />
      <meta property='twitter:title' content={title} />
      <meta property='twitter:description' content={description} />
      <meta
        property='twitter:image'
        content='https://metatags.io/images/meta-tags.png'
      />
    </Helmet>
  );
};

export default HeadComponent;
