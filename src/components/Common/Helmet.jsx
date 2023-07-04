import React from 'react';
import { Helmet } from 'react-helmet';

const HeadComponent = ({ title, description, type }) => {
  console.log(title, description, type);
  return (
    <Helmet>
      {/* Standard metadata tags */}
      <title>{title}</title>
      <meta name='description' content={description} data-react-helmet='true' />
      <link rel='canonical' href='http://localhost:3000/' />
      {/* End standard metadata tags */}

      {/* Facebook tags */}
      <meta property='og:type' content={type} />
      <meta property='og:title' content={title} />
      <meta property='og:description' content={description} />
      <meta property='og:url' content='https://www.www.omiod.com' />
      <meta
        property='og:image'
        content='https://i.ibb.co/rtxqpHY/favicon-2.jpg'
      ></meta>
      {/* End Facebook tags */}

      {/* Twitter tags */}
      <meta name='twitter:card' content={type} />
      <meta name='twitter:title' content={title} />
      <meta name='twitter:description' content={description} />
      <meta
        property='twitter:image'
        content='https://i.ibb.co/rtxqpHY/favicon-2.jpg'
      ></meta>
      {/* End Twitter tags */}
    </Helmet>
  );
};

export default HeadComponent;
