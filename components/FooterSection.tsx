import "@/styles/footer.css";
import { PersonalInfo } from "@/types/portfolio";

export default function FooterSection({
  personalInfo,
  variant = "minimal",
}: {
  personalInfo: PersonalInfo;
  variant?: "full" | "minimal";
}) {
  const github = personalInfo.socials?.find(
    (social) => social.platform === "GitHub",
  );

  const twitter = personalInfo.socials?.find(
    (social) => social.platform === "X",
  );

  const email = personalInfo.email
    ? { url: `mailto:${personalInfo.email}`, label: "Email" }
    : null;

  return (
    <footer className="footer-wrapper">
      {variant === "full" && (
        <footer className="footer">
          <div className="footer-main">
            <h2 className="footer-headline">
              Keep those <em>damn hands</em> on your keyboard
            </h2>
          </div>

          <div className="footer-links">
            <div className="footer-links-title">Connect</div>
            <ul>
              {personalInfo.socials
                ?.filter((social) => social.platform !== "Email")
                .map((social, index) => (
                  <li key={index}>
                    <a
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {social.platform}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="10"
                        height="10"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <line x1="7" y1="17" x2="17" y2="7" />
                        <polyline points="7 7 17 7 17 17" />
                      </svg>
                    </a>
                  </li>
                ))}
            </ul>
          </div>

          {personalInfo.email && (
            <div className="footer-contact">
              <div className="footer-contact-title">Email</div>
              <a href={`mailto:${personalInfo.email}`} className="footer-email">
                {personalInfo.email}
              </a>
            </div>
          )}
        </footer>
      )}

      <div className="footer-bottom">
        <span className="footer-name">
          <svg
            className="footer-copyright"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
            focusable="false"
          >
            <rect x="3" y="3" width="18" height="18" />
            <path d="M15 9.5a3.5 3.5 0 1 0 0 5" />
          </svg>
          {new Date().getFullYear()} {personalInfo.name}
        </span>

        <div className="footer-center">
          {twitter?.url && (
            <a href={twitter.url} target="_blank" rel="noopener noreferrer">
              Twitter
            </a>
          )}

          {github?.url && (
            <a href={github.url} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          )}

          {email?.url && <a href={email.url}>Email</a>}
        </div>

        <span>Open for collaboration</span>
      </div>
    </footer>
  );
}
