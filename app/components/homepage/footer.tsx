import { Link } from "react-router";

export default function FooterSection() {
  return (
    <footer className="py-16">
      <div className="mx-auto max-w-5xl px-6">
        {/* X.com icon/button removed */}
        <span className="text-muted-foreground block text-center text-sm">
          {" "}
          © {new Date().getFullYear()} SocialSync, All rights reserved
        </span>
      </div>
    </footer>
  );
}
