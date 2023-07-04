import React from 'react';
import { Helmet } from 'react-helmet';
import icon from 'assets/coffee_icon.png';

const HeadComponent = ({ title, description, type }) => {
  console.log(title, description, type);
  return (
    <Helmet>
      <title>Bean Scene</title>
      <meta name='title' content='Bean Scene' />
      <meta name='description' content='Lorem Ipsum dolor ...' />

      <meta property='og:type' content='website' />
      <meta property='og:url' content='https://coffee-shop-khaki.vercel.app/' />
      <meta property='og:title' content='Bean Scene' />
      <meta property='og:description' content='Lorem Ipsum dolor ...' />
      <meta
        property='og:image'
        content='https://metatags.io/images/meta-tags.png'
      />

      <meta property='twitter:card' content='summary_large_image' />
      <meta
        property='twitter:url'
        content='https://coffee-shop-khaki.vercel.app/'
      />
      <meta property='twitter:title' content='Bean Scene' />
      <meta property='twitter:description' content='Lorem Ipsum dolor ...' />
      <meta
        property='twitter:image'
        content='https://metatags.io/images/meta-tags.png'
      />
    </Helmet>
  );
};

export default HeadComponent;
