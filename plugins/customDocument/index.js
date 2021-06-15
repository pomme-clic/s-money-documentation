module.exports = function (context, options) {
    return {
        name: 'customDocument',
        injectHtmlTags() {
            return {
                headTags: [{
                    tagName: 'script',
                    attributes: {
                        src: 'https://identity.netlify.com/v1/netlify-identity-widget.js',
                    }
                }],
                postBodyTags: [`<script>if (window.netlifyIdentity) {
    window.netlifyIdentity.on("init", user => {
      if (!user) {
        window.netlifyIdentity.on("login", () => {
          document.location.href = "/admin/";
        });
      }
    });
  }</script>`],
            }
        }
    };
};