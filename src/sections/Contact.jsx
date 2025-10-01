import { useGSAP } from "@gsap/react";
import AnimatedHeaderSection from "../components/AnimatedHeaderSection";
import Marquee from "../components/Marquee";
import { socials } from "../constants";
import gsap from "gsap";

const Contact = () => {
  const text = `Have a question or project idea?
    I’d love to discuss cloud security, IAM, or scalable systems.`;
  const items = ["SECURITY", "IAM", "DEVOPS", "AWS", "SCALABILITY"];
  useGSAP(() => {
    gsap.from(".social-link", {
      y: 100,
      opacity: 0,
      delay: 0.5,
      duration: 1,
      stagger: 0.3,
      ease: "back.out",
      scrollTrigger: {
        trigger: ".social-link",
      },
    });
  }, []);
  return (
    <section
      id="contact"
      className="flex flex-col justify-between min-h-screen bg-black"
    >
      <div>
        <AnimatedHeaderSection
          subTitle={"Collaborate • Cloud Security • IAM • AWS"}
          title={"Contact"}
          text={text}
          textColor={"text-white"}
          withScrollTrigger={true}
        />
        <div className="flex px-10 font-light text-white uppercase lg:text-[32px] text-[26px] leading-none mb-10">
          <div className="flex flex-col w-full gap-10">
            <div className="social-link">
              <h2>E-mail</h2>
              <div className="w-full h-px my-2 bg-white/30" />
              <a
                href="mailto:aishwarya.del.in@gmail.com"
                className="text-xl tracking-wider lowercase md:text-2xl lg:text-3xl hover:text-white transition-colors"
              >
                aishwarya.del.in@gmail.com
              </a>
            </div>
            <div className="social-link">
              <h2>Phone</h2>
              <div className="w-full h-px my-2 bg-white/30" />
              <a
                href="tel:+919990089990"
                className="text-xl lowercase md:text-2xl lg:text-3xl hover:text-white transition-colors"
              >
                +91-9990089990
              </a>
            </div>
            <div className="social-link">
              <h2>Social Media</h2>
              <div className="w-full h-px my-2 bg-white/30" />
              <div className="flex flex-wrap gap-2">
                {socials.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    onClick={(e) => handleSocialClick(e, social.href)}
                    className="text-xs leading-loose tracking-widest uppercase md:text-sm hover:text-white transition-colors duration-200"
                  >
                    {"{ "}
                    {social.name}
                    {" }"}
                  </a>
                ))}
                <span className="social-spotlight opacity-0 text-xs md:text-sm tracking-widest text-white/70 ml-2">
                  Opening LinkedIn…
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Marquee items={items} className="text-white bg-transparent" />
    </section>
  );
};

const handleSocialClick = (e, href) => {
  e.preventDefault();
  const el = e.currentTarget;
  const tl = gsap.timeline({
    onComplete: () => window.open(href, "_blank", "noopener,noreferrer"),
  });
  tl.to(el, {
    scale: 1.1,
    color: "#d4af37",
    duration: 0.2,
    ease: "power2.out",
  })
    .to(el, { scale: 1, duration: 0.3, ease: "back.out" })
    .fromTo(
      ".social-spotlight",
      { autoAlpha: 0, y: 10 },
      { autoAlpha: 1, y: 0, duration: 0.3, ease: "power2.out" },
      "<"
    )
    .to(".social-spotlight", {
      autoAlpha: 0,
      y: -10,
      duration: 0.3,
      ease: "power2.in",
      delay: 0.6,
    });
};

export default Contact;
