module.exports = function (context, options) {
  return {
    name: 'customDocument',
    injectHtmlTags() {
      return {
        headTags: [
          {
            tagName: 'script',
            attributes: {
              src: 'https://identity.netlify.com/v1/netlify-identity-widget.js',
            },
          },
        ],
        postBodyTags: [
          `<script>if (window.netlifyIdentity) {
    window.netlifyIdentity.on("init", user => {
      if (!user) {
        window.netlifyIdentity.on("login", () => {
          document.location.href = "/admin/";
        });
      }
    });
  }</script>
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-NJDBW94Y6D"></script>
  <script>
  window.axeptioSettings = {
clientId: "61b87582c302ec78dfea393b",
};

(function(d, s) {
var t = d.getElementsByTagName(s)[0], e = d.createElement(s);
e.async = true; e.src = "//static.axept.io/sdk.js";
t.parentNode.insertBefore(e, t);
})(document, "script");

function loadGoogleAnalyticsTag() {
   window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-NJDBW94Y6D');
  }

  void 0 === window._axcb && (window._axcb = []);
  window._axcb.push(function (axeptio) {
    axeptio.on("cookies:complete", function (choices) {
      if (choices.google_analytics) {
        loadGoogleAnalyticsTag();
      }
    });
  });
  </script>
  `,
        ],
      }
    },
  }
}
