const getData = require('../getData.js');
const addReview = require('../addReview.js');

module.exports = [{
  method: 'GET',
  path:'/account/',
  config: {
    auth: {
      strategy: 'base'
    },
      handler: (request,reply) => {
        let userPageData = {
          recentReviews: {},
          user: request.auth.credentials.user,
          resources: {},
          myReviews: {}
        }
        getData.recentReviews((error, data) => {
          if (error) throw error;
          userPageData.recentReviews = data;
        },request.auth.credentials.user);
        getData.resources((error, data) => {
          if (error) throw error;
          userPageData.resources = data;
        });
        getData.myReviews((error, data) => {
          if (error) throw error;
          userPageData.myReviews = data;
          reply.view('index', userPageData);
        }, request.auth.credentials.user);
      }
    }
},
{
  method: 'GET',
  path:'/account/reviewform/',
  config: {
    auth: {
      strategy: 'base'
    },
      handler: (request,reply) => {
        let userPageData = {
          user: request.auth.credentials.user),
          resource: request.query.resource
        }
        reply.view('add_review', userPageData);
      }
  }
},
{
  method: 'POST',
  path:'/account/addreview/',
  config: {
    auth: {
      strategy: 'base'
    },
      handler: (request,reply) => {
        let user = request.auth.credentials.user;
        addReview((error) => {
          if(error) throw error;
        },request.payload, user, request.payload.resource_title);
        reply().redirect('/account/');
      }
  }
}];
