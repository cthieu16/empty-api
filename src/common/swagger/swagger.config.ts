const customfavIcon =
  'https://res.cloudinary.com/dphleqb5t/image/upload/v1713724442/jc-develop/favicon-c_qlvrpv.png';
const customCss = `
    .topbar{
        animation: navanimation linear both;
        animation-range: 0 300px;
        animation-timeline: scroll(root);
        position: sticky;
        top: 0px;
        z-index: 1
    }
    .topbar-wrapper {
        content: Prueba; color: white;
    }
    .topbar-wrapper a {
        content:url(https://res.cloudinary.com/dphleqb5t/image/upload/v1713730346/rest-api-template/Logo-Swagger_ukcytn.png); width:200px; height:auto;
    }
    .swagger-ui .opblock .opblock-summary-description {
        font-weight: 900
    }
    .description .renderedMarkdown p {
        font-size: 1rem;
    }
    @keyframes navanimation {
        to {
            opacity: 0.9;
            backdrop-filter: blur(10px);
        }
    }
`;

const customSiteTitle = 'API-Empty';

const swaggerOptions = {
  customfavIcon,
  customCss,
  customSiteTitle,
  swaggerOptions: {
    persistAuthorization: true,
  },
};

const swaggerTitle = 'API-EMPTY';

const swaggerDescription = `
  <p>No problem!</p>
`;

export { swaggerOptions, swaggerTitle, swaggerDescription };
