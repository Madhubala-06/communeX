import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-teal-800 text-white">
      <div className="container mx-auto px-6 pt-10 pb-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h2 className="text-2xl font-bold text-teal-400 mb-4">CommuneX</h2>
            <p className="text-teal-100 text-sm">
              Your comprehensive platform for campus life and connections.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <div className="flex flex-col space-y-2">
              {[
                ["About", "#"],
                ["Contact", "#"],
                ["Privacy Policy", "#"],
                ["Terms of Service", "#"]
              ].map(([label, href]) => (
                <Link
                  key={label}
                  href={href}
                  className="text-teal-100 hover:text-white text-sm transition-colors duration-200"
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              {[
                ["Facebook", "#"],
                ["Twitter", "#"],
                ["Instagram", "#"]
              ].map(([platform, href]) => (
                <Link
                  key={platform}
                  href={href}
                  className="text-teal-100 hover:text-white text-sm transition-colors duration-200"
                >
                  {platform}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-teal-700 mt-8 pt-6">
          <p className="text-center text-sm text-teal-100">
            © 2024 CommuneX. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;