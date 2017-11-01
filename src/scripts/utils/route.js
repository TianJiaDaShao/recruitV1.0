//首页
import jobList from "../components/jobList.vue";
import search from "../components/search.vue";
import publish from "../components/publish.vue";
import details from "../components/details.vue";
import wode from "../components/wode.vue";
import company from "../components/company.vue";

export default {
  '/': {
    name: '/',
    component: jobList,
    subRoutes: {
      '/': {
        component: jobList
      },
      '/jobList': {
        name: "jobList",
        component: jobList
      },
    }
  },
  '/search/:type': {
    name: "search",
    component: search
  },
  '/publish/:type/:id': {
    name: "publish",
    component: publish
  },
  '/details/:jobId/:type': {
    name: "details",
    component: details
  },
  '/wode': {
    name: "wode",
    component: wode
  },
  '/company': {
    name: 'company',
    component: company
  }
}
