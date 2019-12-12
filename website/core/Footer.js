const React = require("react");

class Footer extends React.Component {
  docUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    const docsUrl = this.props.config.docsUrl;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ""}`;
    const langPart = `${language ? `${language}/` : ""}`;
    return `${baseUrl}${docsPart}${langPart}${doc}`;
  }

  pageUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    return baseUrl + (language ? `${language}/` : "") + doc;
  }

  render() {
    return (
      <footer className="nav-footer" id="footer">
        <section className="sitemap">
          <a href={this.props.config.baseUrl} className="nav-home">
            {this.props.config.footerIcon && (
              <img
                src={this.props.config.baseUrl + this.props.config.footerIcon}
                alt={this.props.config.title}
              />
            )}
          </a>
          <div>
            <h5>Site</h5>
            <ul>
              <li>
                <a
                  href={this.pageUrl(
                    "download",
                    this.props.language == "en"
                      ? undefined
                      : this.props.language
                  )}
                >
                  Downloads
                </a>
              </li>
              <li>
                <a
                  href={this.pageUrl(
                    "showcase",
                    this.props.language == "en"
                      ? undefined
                      : this.props.language
                  )}
                >
                  Showcase
                </a>
              </li>
              <li>
                <a
                  href={this.pageUrl(
                    "testimonials",
                    this.props.language == "en"
                      ? undefined
                      : this.props.language
                  )}
                >
                  Testimonials
                </a>
              </li>
              <li>
                <a href={`${this.props.config.baseUrl}blog`}>Blog</a> (
                <a href={`${this.props.config.baseUrl}blog/feed.xml`}>RSS</a>,{" "}
                <a href={`${this.props.config.baseUrl}blog/atom.xml`}>Atom</a>)
              </li>
            </ul>
          </div>
          <div>
            <h5>ActionScript / Starling</h5>
            <ul>
              <li>
                <a
                  href={this.docUrl(
                    "as3-starling/getting-started",
                    this.props.language == "en"
                      ? undefined
                      : this.props.language
                  )}
                >
                  Documentation
                </a>
              </li>
              <li>
                <a href="/api-reference/">API Reference</a>
              </li>
              <li>
                <a href="/samples/as3-starling/">Samples</a>
              </li>
              <li>
                <a href="https://github.com/BowlerHatLLC/feathersui-starling">
                  GitHub
                </a>
              </li>
              <li>
                <a href="https://github.com/BowlerHatLLC/feathersui-starling/issues">
                  Issue Tracker
                </a>
              </li>
            </ul>
            <h5>Feathers SDK (Starling)</h5>
            <ul>
              <li>
                <a
                  href={this.docUrl(
                    "as3-starling/sdk/getting-started-mxml",
                    this.props.language == "en"
                      ? undefined
                      : this.props.language
                  )}
                >
                  Documentation
                </a>
              </li>
              <li>
                <a href="https://github.com/BowlerHatLLC/feathers-sdk">
                  GitHub
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h5>Haxe / OpenFL</h5>
            <ul>
              <li>
                <a
                  href={this.docUrl(
                    "haxe-openfl/installation",
                    this.props.language == "en"
                      ? undefined
                      : this.props.language
                  )}
                >
                  Documentation
                </a>
              </li>
              <li>
                <a href="https://api.feathersui.com/">API Reference</a>
              </li>
              <li>
                <a href="https://github.com/BowlerHatLLC/feathersui-openfl/tree/master/samples/">
                  Samples
                </a>
              </li>
              <li>
                <a href="https://github.com/BowlerHatLLC/feathersui-openfl">
                  GitHub
                </a>
              </li>
              <li>
                <a href="https://github.com/BowlerHatLLC/feathersui-openfl/issues">
                  Issue Tracker
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h5>Community</h5>
            <ul>
              <li>
                <a href="https://community.feathersui.com/">Forum</a>
              </li>
              <li>
                <a
                  href="https://discord.feathersui.com/"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  Discord
                </a>
              </li>
              <li>
                <a
                  href="https://stackoverflow.com/questions/tagged/feathersui"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  Stack Overflow
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h5>Social</h5>
            <ul>
              <li>
                <a
                  href="https://twitter.com/feathersui"
                  rel="noreferrer noopener"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href="https://facebook.com/feathersui"
                  rel="noreferrer noopener"
                >
                  Facebook
                </a>
              </li>
            </ul>
          </div>
        </section>

        <section className="copyright">
          Copyright © {new Date().getFullYear()}{" "}
          <a href="https://bowlerhat.dev/">Bowler Hat LLC</a> — Illustrations by{" "}
          <a href="https://undraw.co/">unDraw</a>.
        </section>

        <script type="text/javascript" src="//use.typekit.net/tsu5tna.js" />
        <script type="text/javascript">
          {"try{Typekit.load();}catch(e){}"}
        </script>
      </footer>
    );
  }
}

module.exports = Footer;
