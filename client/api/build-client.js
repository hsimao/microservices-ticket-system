import axios from 'axios';

export default ({ req }) => {
  if (typeof window === 'undefined') {
    /* NOTE: server side issues
      1.) next server side 打 api 無法正確指向對應的 server 位置, 需要重新指向 ingress-nginx server
        在 next pod dokcer 環境內, server side 打 api 訪問根目錄時無法指向到對應的 server,
        只會訪問到 next 自己本身的 127.0.0.1:80 端口, 因此需要重新向外指向到 ingress-nginx server
      2.) server side 訪問 ingress-nginx server, 需要自己處理 cookie
        server side 訪問 ingress-nginx server, 沒有透過瀏覽器, 所以不會自動傳遞 cookie 相關參數,
        因此這邊需要自行把 headers 相關 cookie 參數傳遞過去
    */
    return axios.create({
      baseURL:
        'http://ingress-nginx-controller.ingress-nginx.svc.cluster.local',
      headers: req.headers,
    });
  } else {
    return axios.create({
      baseURL: '/',
    });
  }
};
