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

const customSiteTitle = '{jc-develop Auth API-REST}';

const swaggerOptions = {
  customfavIcon,
  customCss,
  customSiteTitle,
  swaggerOptions: {
    persistAuthorization: true,
  },
};

const swaggerTitle =
  'Nest Postgres Authentication REST API Template Documentation';

const swaggerDescription = `
  <p>This Nest.js REST API template provides a robust foundation for building secure and scalable web applications. With built-in user registration, JWT authentication, and protected routes.</p>
  <p>The API follows RESTful principles, making it easy to integrate and interact with from various client applications.</p>
  <p>Key features of this API template include:</p>
  <ul>
    <li>User Registration and Management</li>
    <li>JWT Token-based Authentication</li>
    <li>Role-based Access Control for Protected Routes</li>
    <li>CRUD Operations for User Entities</li>
  </ul>
`;

export { swaggerOptions, swaggerTitle, swaggerDescription };
